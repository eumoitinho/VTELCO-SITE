"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`text-2xl md:text-3xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${light ? "text-white/80" : "text-gray-600"} max-w-3xl ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

