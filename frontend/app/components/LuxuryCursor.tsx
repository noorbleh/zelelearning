"use client"

import { useEffect, useState } from "react"

export default function LuxuryCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transform: `translate(${pos.x - 8}px, ${pos.y - 8}px)` }}
    >
      <div className="w-4 h-4 rounded-full bg-[#2f4f3f]/30 backdrop-blur-md border border-[#2f4f3f]/20" />
    </div>
  )
}