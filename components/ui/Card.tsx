"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`
        bg-slate-800 
        p-6 
        rounded-xl 
        shadow-md 
        transition
        ${className || ""}
      `}
    >
      {children}
    </motion.div>
  )
}
