"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeroSlide {
  title: string
  description: string
  image: string
}

export default function HeroCarousel() {
  const slides: HeroSlide[] = [
    {
      title: "Nova era para as redes ópticas",
      description:
        "Com a implementação do 400G Open ZR+ (MSA), sua rede ganhará escalabilidade suportando até 400Gbps de throughput sem a necessidade de equipamentos DWDM, interligado através de transceivers QSFP-DD conectados diretamente ao seu roteador.",
      image: "/images/hero-bg-1.webp",
    },
    {
      title: "Proteja sua rede contra ameaças digitais",
      description:
        "As soluções de segurança da Netscout protegem sua rede contra ataques DDOS (Distributed Denial Of Service) e garantem a integridade, confiabilidade e autenticidade dos seus dados, com visibilidade única.",
      image: "/images/hero-bg-2.webp",
    },
    {
      title: "Solução de roteamento virtual de alto desempenho",
      description:
        "Com as soluções virtualizadas de BNG e CGNAT da netElastic, seu provedor ganhará escalabilidade, agilidade e elasticidade, desenvolvendo sua rede de forma simples e trazendo a visibilidade em tela única para administrar todos os seus POPs.",
      image: "/images/hero-bg-3.webp",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative dark-purple-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#2a0e46] to-[#3a1e56]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
        </div>
      </div>

      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10" onClick={prevSlide}>
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10" onClick={nextSlide}>
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </motion.div>

      <div className="relative min-h-[600px] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <div className="container min-h-[600px] flex flex-col justify-center px-4 md:px-6 py-20 md:py-32">
              <div className="max-w-3xl">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white text-lg px-8 py-6 h-auto rounded-md group">
                    QUERO SABER MAIS!
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentSlide ? 1.2 : 1,
              backgroundColor: index === currentSlide ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8f9fa] to-transparent"></div>
    </section>
  )
}

