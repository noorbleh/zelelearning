"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#304635] text-white py-12">

      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold">Zele Learning</h3>
          <p className="mt-2 text-sm text-emerald-200">
            Corporate training & consulting.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm">
          {["Home","Courses","About","Contact"].map((item,i)=>(
            <motion.div whileHover={{ y:-3 }} key={i}>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social Links Placeholder */}
        <div className="flex gap-6 text-sm">
          <motion.a 
            whileHover={{ y:-3 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-200 hover:text-white transition"
          >
            LinkedIn
          </motion.a>

          <motion.a 
            whileHover={{ y:-3 }}
            href="https://www.instagram.com/zelelearning"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-200 hover:text-white transition"
          >
            Instagram
          </motion.a>
        </div>

      </div>

      <p className="mt-10 text-center text-xs text-emerald-200">
        © {new Date().getFullYear()} Zele Learning. All rights reserved.
      </p>
    </footer>
  )
}
