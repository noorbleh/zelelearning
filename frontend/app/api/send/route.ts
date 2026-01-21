import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { 
      name, 
      email, 
      organisation, 
      message, 
      trainingMode 
    } = body

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_RECEIVER) {
      return Response.json(
        { error: "Missing CONTACT_RECEIVER email" },
        { status: 500 }
      )
    }

    // 1) Send email to Admin
    await resend.emails.send({
      from: "Zèle Learning <noreply@zelelearning.com>",
      to: [process.env.CONTACT_RECEIVER],
      subject: "New Training Enquiry — Zèle Learning",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organisation:</strong> ${organisation || "-"}</p>
        <p><strong>Training Mode:</strong> ${trainingMode}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    // 2) Confirmation email to user
    await resend.emails.send({
      from: "Zèle Learning <noreply@zelelearning.com>",
      to: [email],
      subject: "We received your message — Zèle Learning",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting Zèle Learning.</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <p>— Team Zèle Learning</p>
      `,
    })

    return Response.json({ success: true })

  } catch (err: any) {
    console.error("CONTACT FORM ERROR:", err)

    return Response.json(
      { error: err.message || "Server Error" },
      { status: 500 }
    )
  }
}
