"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface Solution {
  title: string
  description: string
  features: string[]
  logo: string
  image: string
}

export default function SolutionsCarousel() {
  const solutions: Solution[] = [
    {
      title: "SONiC",
      description:
        "O SONiC (Software for Open Networking in the Cloud) é um sistema operacional de rede de código aberto desenvolvido inicialmente pela Microsoft e agora mantido pela comunidade Open Compute Project (OCP).",
      features: [
        "Arquitetura baseada em Micro Serviços",
        "Suporte L2/L3 e MPLS",
        "Suporte EVPN e VxLAN",
        "Suporte a interfaces em 400Gbps ZR/ZR+",
        "Suporte a interfaces em 800Gbps",
        "Suporte SRv6",
        "Suporte em processadores x86",
        "Suporte em processadores ARM",
        "Suporte em cloud pública",
        "Suporte em equipamentos white-box",
        "Suporte em DPU",
        "Amplamente utilizado no cenário de DC",
      ],
      logo: "/images/sonic-logo.webp",
      image: "/images/sonic-logo.webp",
    },
    {
      title: "Exaware",
      description:
        "Exaware é uma empresa que desenvolve soluções de software de roteamento para operadoras de telecomunicações e provedores de serviços de internet.",
      features: [
        "Arquitetura baseada em Micro Serviços",
        "Suporte L2/L3 e MPLS",
        "Suporte EVPN e VxLAN",
        "Suporte a interfaces em 400Gbps ZR/ZR+",
        "Suporte a interfaces em 800Gbps",
        "Amplamente utilizado no cenário de operadoras",
      ],
      logo: "/images/exaware-logo.webp",
      image: "/images/exaware-logo.webp",
    },
    {
      title: "Arrcus",
      description:
        "A Arrcus é uma empresa de tecnologia focada em redes definidas por software (SDN) e redes desagregadas, que fornece soluções de rede de alta performance para data centers, provedores de serviços de telecomunicações, empresas de tecnologia em nuvem e outros grandes ambientes de rede.",
      features: [
        "Arquitetura baseada em Micro Serviços",
        "ArcRR Route Reflector",
        "Suporte L2/L3 e MPLS",
        "Suporte EVPN e VxLAN",
        "Suporte a interfaces em 400Gbps ZR/ZR+",
        "Suporte a interfaces em 800Gbps",
        "Suporte SRv6",
        "Suporte em processadores x86",
        "Suporte em processadores ARM",
        "Suporte em cloud pública",
        "Suporte em equipamentos white-box",
        "Suporte em DPU",
        "Amplamente utilizado no cenário de DC",
      ],
      logo: "/images/arrcus-logo.webp",
      image: "/images/arrcus-logo.webp",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.opacity = "0"
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.opacity = "1"
        }
      }, 200)
    }
  }, [currentSlide])

  return (
    <section className="py-20 bg-white" id="solucoes">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <Button variant="outline" size="sm" className="mb-4">
              Soluções
            </Button>
            <h2 className="text-3xl font-bold">Soluções baseadas em software</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={slideRef}
          className="solutions-card bg-white transition-opacity duration-200"
          style={{
            backgroundImage: `url(/images/vtelco1-3.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "78% auto",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="slide-in-right">
              <Button variant="outline" size="sm" className="mb-4 bg-black text-white hover:bg-black/80">
                Soluções
              </Button>
              <h3 className="text-2xl font-bold mb-4">{solutions[currentSlide].title}</h3>
              <p className="text-gray-700 mb-6">{solutions[currentSlide].description}</p>
              <ul className="space-y-2 mb-8">
                {solutions[currentSlide].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-[#9333ea]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="gradient-bg text-white hover:opacity-90 group">
                Descubra nossas soluções
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="slide-in-left bg-[url('/images/Abstract-Background-13-2.png')] bg-cover bg-center rounded-3xl p-8 flex items-center justify-center">
              <Image
                src={solutions[currentSlide].logo || "/placeholder.svg"}
                alt={solutions[currentSlide].title}
                width={300}
                height={300}
                className="object-contain animate-pulse"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {solutions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === currentSlide ? "bg-[#9333ea] scale-125" : "bg-gray-300"}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

