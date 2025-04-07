"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

