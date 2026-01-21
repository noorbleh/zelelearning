"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Footer from "@/app/components/Footer"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.target)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organisation: formData.get("organisation"),
      trainingMode: formData.get("trainingMode"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)

    } catch (err: any) {
      setError(err.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-[#f4efe9] min-h-screen text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-[#304635]"
        >
          Contact Us
        </motion.h1>

        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Let’s design a training program tailored for your organisation.
        </p>
      </section>

      {/* FORM / SUCCESS */}
      <section className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">

          {!submitted ? (

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                bg-white/80 backdrop-blur
                border border-black/5
                rounded-2xl p-8 shadow-sm
                space-y-6
              "
            >
              {/* Name */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#304635]/40 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#304635]/40 outline-none"
                />
              </div>

              {/* Organisation */}
              <div>
                <label className="text-sm text-gray-600">Organisation</label>
                <input
                  name="organisation"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#304635]/40 outline-none"
                />
              </div>

              {/* Training Mode */}
              <div>
                <label className="text-sm text-gray-600">
                  Preferred Training Mode
                </label>
                <select
                  name="trainingMode"
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#304635]/40 outline-none"
                >
                  <option value="">Select an option</option>
                  <option>Online Training</option>
                  <option>On-site Training</option>
                  <option>Hybrid Training</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#304635]/40 outline-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-600 text-center">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3 rounded-full bg-[#304635]
                  text-white font-medium
                  hover:scale-105 transition
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </motion.form>

          ) : (

            // SUCCESS STATE
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="
                text-center bg-white/80 backdrop-blur
                border border-black/5 rounded-2xl p-10 shadow-sm
              "
            >
              {/* Floating Orb */}
              <motion.div
                className="mx-auto w-20 h-20 rounded-full bg-[#304635]/30 blur-sm"
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <h2 className="mt-6 text-2xl font-semibold text-[#304635]">
                Message Sent Successfully
              </h2>

              <p className="mt-3 text-gray-700">
                We’ve received your message.  
                Our team will get back to you shortly.
              </p>
            </motion.div>

          )}

        </div>
      </section>

      <Footer />
    </main>
  )
}
