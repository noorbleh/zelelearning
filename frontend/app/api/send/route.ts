
import { Resend } from "resend"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { ipAddress } from "@vercel/functions"
import { createHash } from "node:crypto"

export const runtime = "nodejs"

// --------------------------------------------------
// 1. UPSTASH REDIS RATE LIMITER
// Maximum 5 requests per IP per rolling 10 minutes.
// --------------------------------------------------

const redisUrl = process.env.UPSTASH_REDIS_REST_URL
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "zele-contact-form",
      analytics: false,
      timeout: 3000,
    })
  : null

// --------------------------------------------------
// 2. HTML ESCAPING
// Prevents submitted content being interpreted as HTML.
// --------------------------------------------------

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }

    return entities[char]
  })
}

// --------------------------------------------------
// 3. EMAIL VALIDATION
// --------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// --------------------------------------------------
// 4. POST HANDLER
// --------------------------------------------------

export async function POST(req: Request) {
  try {
    // Check required environment variables.

    const apiKey = process.env.RESEND_API_KEY
    const receiver = process.env.CONTACT_RECEIVER

    if (!apiKey || !receiver) {
      console.error("Resend environment variables are missing.")

      return Response.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 503 }
      )
    }

    if (!ratelimit) {
      console.error("Upstash environment variables are missing.")

      return Response.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 503 }
      )
    }

    // --------------------------------------------------
    // 5. IDENTIFY VISITOR IP
    // --------------------------------------------------

    const ip = ipAddress(req)

    if (!ip) {
      console.error("Unable to identify visitor IP.")

      return Response.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 503 }
      )
    }

    // Hash the IP before using it as a Redis identifier.

    const identifier = createHash("sha256")
      .update(ip)
      .digest("hex")

    // --------------------------------------------------
    // 6. RATE LIMITING
    // --------------------------------------------------

    const limit = await ratelimit.limit(identifier)

    // Do not allow a request through if Upstash timed out.
    if (limit.reason === "timeout") {
      console.error("Upstash rate limiter timed out.")

      return Response.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 503 }
      )
    }

    if (!limit.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((limit.reset - Date.now()) / 1000)
      )

      return Response.json(
        {
          error: "Too many submissions. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(limit.limit),
            "X-RateLimit-Remaining": String(limit.remaining),
          },
        }
      )
    }

    // --------------------------------------------------
    // 7. REQUEST SIZE PROTECTION
    // --------------------------------------------------

    const contentLength = Number(
      req.headers.get("content-length") || 0
    )

    if (contentLength > 10_000) {
      return Response.json(
        { error: "Request too large." },
        { status: 413 }
      )
    }

    const rawBody = await req.text()

    const actualSize = new TextEncoder().encode(rawBody).length

    if (actualSize > 10_000) {
      return Response.json(
        { error: "Request too large." },
        { status: 413 }
      )
    }

    // --------------------------------------------------
    // 8. PARSE REQUEST
    // --------------------------------------------------

    let body: unknown

    try {
      body = JSON.parse(rawBody)
    } catch {
      return Response.json(
        { error: "Invalid request format." },
        { status: 400 }
      )
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return Response.json(
        { error: "Invalid request." },
        { status: 400 }
      )
    }

    const data = body as Record<string, unknown>

    // --------------------------------------------------
    // 9. HONEYPOT PROTECTION
    // --------------------------------------------------

    // Genuine visitors should leave "website" empty.
    // Basic bots often fill every available field.

    if (
      typeof data.website === "string" &&
      data.website.trim() !== ""
    ) {
      return Response.json({ success: true })
    }

    // --------------------------------------------------
    // 10. INPUT VALIDATION
    // --------------------------------------------------

    const name =
      typeof data.name === "string"
        ? data.name.trim()
        : ""

    const email =
      typeof data.email === "string"
        ? data.email.trim()
        : ""

    const organisation =
      typeof data.organisation === "string"
        ? data.organisation.trim()
        : ""

    const message =
      typeof data.message === "string"
        ? data.message.trim()
        : ""

    const trainingMode =
      typeof data.trainingMode === "string"
        ? data.trainingMode.trim()
        : ""

    // Required fields.

    if (!name || !email || !message || !trainingMode) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      )
    }

    // Maximum allowed lengths.

    if (
      name.length > 100 ||
      email.length > 254 ||
      organisation.length > 150 ||
      message.length > 5000 ||
      trainingMode.length > 50
    ) {
      return Response.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      )
    }

    // Email format validation.

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // --------------------------------------------------
    // 11. ESCAPE USER INPUT
    // --------------------------------------------------

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeOrganisation = escapeHtml(organisation || "-")
    const safeTrainingMode = escapeHtml(trainingMode)

    const safeMessage = escapeHtml(message)
      .replace(/\r\n/g, "\n")
      .replace(/\n/g, "<br/>")

    // --------------------------------------------------
    // 12. SEND ADMIN EMAIL
    // --------------------------------------------------

    const resend = new Resend(apiKey)

    const adminResult = await resend.emails.send({
      from: "Zèle Learning <noreply@zelelearning.com>",
      to: [receiver],
      subject: "New Training Enquiry — Zèle Learning",
      html: `
        <h2>New Contact Submission</h2>

        <p><strong>Name:</strong> ${safeName}</p>

        <p><strong>Email:</strong> ${safeEmail}</p>

        <p><strong>Organisation:</strong> ${safeOrganisation}</p>

        <p><strong>Training Mode:</strong> ${safeTrainingMode}</p>

        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    })

    if (adminResult.error) {
      console.error(
        "Admin email delivery failed:",
        adminResult.error
      )

      return Response.json(
        { error: "Unable to send your enquiry. Please try again later." },
        { status: 502 }
      )
    }

    // --------------------------------------------------
    // 13. SEND VISITOR CONFIRMATION
    // --------------------------------------------------

    const confirmationResult = await resend.emails.send({
      from: "Zèle Learning <noreply@zelelearning.com>",
      to: [email],
      subject: "We received your message — Zèle Learning",
      html: `
        <p>Hi ${safeName},</p>

        <p>Thanks for contacting Zèle Learning.</p>

        <p>Our team will get back to you shortly.</p>

        <br/>

        <p>— Team Zèle Learning</p>
      `,
    })

    if (confirmationResult.error) {
      console.error(
        "Confirmation email delivery failed:",
        confirmationResult.error
      )
    }

    // --------------------------------------------------
    // 14. SUCCESS RESPONSE
    // --------------------------------------------------

    return Response.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error("CONTACT FORM ERROR:", error)

    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
