"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <div
          className="
            flex items-center justify-between 
            px-6 py-3 rounded-2xl
            bg-[#f4efe9]/20
            backdrop-blur-2xl
            border border-black/5
            shadow-sm
          "
        >
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-[#304635]">
            Zèle Learning
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm text-gray-700">
            <Link href="/" className="hover:text-[#304635] transition">Home</Link>
            <Link href="/courses" className="hover:text-[#304635] transition">Courses</Link>
            <Link href="/about" className="hover:text-[#304635] transition">About</Link>
            <Link href="/contact" className="hover:text-[#304635] transition">Contact</Link>
            <Link href="/vacation-learning" className="hover:text-[#304635] transition">Vacation Learning</Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="
              hidden md:block
              px-5 py-2 rounded-full 
              bg-[#304635] 
              text-white text-sm font-medium 
              transition-transform duration-200
              hover:scale-105
            "
          >
            Enquire
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px]"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-[2px] bg-[#304635] transition ${open && "rotate-45 translate-y-[6px]"}`} />
            <span className={`w-6 h-[2px] bg-[#304635] transition ${open && "opacity-0"}`} />
            <span className={`w-6 h-[2px] bg-[#304635] transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                mt-3 rounded-2xl
                bg-[#f4efe9]/95
                backdrop-blur-xl
                border border-black/5
                shadow-sm
                px-6 py-5
                md:hidden
              "
            >
              <div className="flex flex-col gap-4 text-sm text-gray-700">
                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
                <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-2 px-4 py-2 rounded-full
                    bg-[#304635]
                    text-white text-sm font-medium
                    text-center
                  "
                >
                  Enquire
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  )
}
