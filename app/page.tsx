"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle, Network, Eye, Lightbulb, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import AnimatedCard from "@/components/animated-card"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Hero slides data
  const slides = [
    {
      title: "Nova era para as redes ópticas",
      description:
        "Com a implementação do 400G Open ZR+ (MSA), sua rede ganhará escalabilidade suportando até 400Gbps de throughput sem a necessidade de equipamentos DWDM.",
      image: "/images/hero-bg-1.webp",
      link: "/switches",
    },
    {
      title: "Proteja sua rede contra ameaças digitais",
      description:
        "As soluções de segurança da Netscout protegem sua rede contra ataques DDOS e garantem a integridade, confiabilidade e autenticidade dos seus dados.",
      image: "/images/hero-bg-2.webp",
      link: "/visibilidade-e-seguranca",
    },
    {
      title: "Solução de roteamento virtual de alto desempenho",
      description:
        "Com as soluções virtualizadas de BNG e CGNAT da netElastic, seu provedor ganhará escalabilidade, agilidade e elasticidade.",
      image: "/images/hero-bg-3.webp",
      link: "/virtualizacao",
    },
  ]

  // Solutions data
  const solutions = [
    {
      title: "Switches",
      description: "Soluções de conectividade de alta performance para sua rede",
      icon: <Network className="h-6 w-6" />,
      color: "purple",
      link: "/switches",
      glow: "shadow-glow-purple",
      hoverGlow: "hover:shadow-glow-purple",
    },
    {
      title: "Virtualização de Redes",
      description: "Transforme sua infraestrutura com redes virtualizadas",
      icon: <Server className="h-6 w-6" />,
      color: "blue",
      link: "/virtualizacao",
      glow: "shadow-glow-blue",
      hoverGlow: "hover:shadow-glow-blue",
    },
    {
      title: "Visibilidade e Segurança",
      description: "Monitore e proteja sua rede com ferramentas avançadas",
      icon: <Eye className="h-6 w-6" />,
      color: "orange",
      link: "/visibilidade-e-seguranca",
      glow: "shadow-glow-orange",
      hoverGlow: "hover:shadow-glow-orange",
    },
    {
      title: "Treinamentos",
      description: "Capacite sua equipe com conhecimentos especializados",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "green",
      link: "/treinamentos",
      glow: "shadow-glow-green",
      hoverGlow: "hover:shadow-glow-green",
    },
  ]

  // Partners data
  const partners = [
    { name: "UFI Space", logo: "/ufispace.png" },
    { name: "Edgecore Networks", logo: "/edcore.png" },
    { name: "Netscout", logo: "/netscout.png" },
    { name: "netElastic", logo: "/netelastic.png" },
    { name: "Arrcus", logo: "/arrcus-logo.webp" },
    { name: "IP Infusion", logo: "/ip-infusion.png" },
  ]

  useEffect(() => {
    // Auto-rotate slides
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      clearInterval(slideInterval)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [slides.length])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative dark-purple-bg text-white overflow-hidden min-h-[600px] md:min-h-[700px]"
        >
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#2a0e46] to-[#3a1e56]"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
            </div>
          </motion.div>

          <div className="relative min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
            {slides.map((slide, index) => (
              <div key={index} className={`hero-slide ${index === activeSlide ? "active" : ""}`}>
                <div className="container min-h-[600px] md:min-h-[700px] flex flex-col justify-center px-4 md:px-6 py-20 md:py-32">
                  <div className={`max-w-3xl ${index === activeSlide ? "slide-in-right" : ""}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm mb-4"
                    >
                      <span className="font-medium">VTelco Networks</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight glow-text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">{slide.description}</p>
                    <Button
                      asChild
                      className="bg-[#9333ea] hover:bg-[#7e22ce] text-white text-lg px-8 py-6 h-auto rounded-md group"
                    >
                      <Link href={slide.link}>
                        QUERO SABER MAIS!
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white section-illumination illuminated-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <SectionHeading
                title="Conectividade, escalabilidade e segurança para sua empresa"
                center={true}
                className="mb-8"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-700 mb-6"
              >
                Switches são dispositivos de rede que atuam como pontos de conexão entre vários dispositivos em uma rede
                local. Eles são responsáveis por encaminhar o tráfego de dados entre os dispositivos conectados,
                garantindo que as informações cheguem ao seu destino de forma rápida e eficiente.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 mb-8"
              >
                Investir em switches de qualidade significa reduzir falhas na comunicação, aumentar a produtividade e
                fortalecer infraestruturas de TI, tornando sua empresa mais preparada para crescer e se adaptar às
                demandas do mercado digital.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-md"
                >
                  <Link href="#contato">QUERO SABER MAIS!</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solucoes" className="py-16 bg-gray-50 section-illumination">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Nossas Soluções"
              subtitle="Oferecemos um portfólio completo de soluções para atender às necessidades específicas da sua infraestrutura de rede"
              center={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <AnimatedCard
                  key={index}
                  delay={0.1 * index}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${solution.hoverGlow} transition-all duration-300`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-${solution.color}-100 flex items-center justify-center mb-4`}
                  >
                    <div className={`text-${solution.color}-600`}>{solution.icon}</div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 text-gray-900 gradient-text gradient-${solution.color}`}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className={`w-full border-${solution.color}-200 text-${solution.color}-700 hover:bg-${solution.color}-50`}
                  >
                    <Link href={solution.link} className="group">
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white illuminated-section">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Por que escolher a VTelco?"
              subtitle="Conheça os diferenciais que fazem da VTelco a escolha ideal para sua infraestrutura de rede"
              center={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard
                delay={0.1}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-purple-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">Conhecimento técnico avançado</h3>
                </div>
                <p className="text-gray-700">
                  Contamos com uma equipe altamente qualificada e com vasta experiência em redes de telecomunicações
                  para garantir a implementação e o suporte técnico de soluções complexas.
                </p>
              </AnimatedCard>

              <AnimatedCard
                delay={0.2}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Facilidade de pagamento</h3>
                </div>
                <p className="text-gray-700">
                  Oferecemos opções de pagamento facilitadas e licenças mensais, que se adaptam ao seu orçamento e fluxo
                  de caixa.
                </p>
              </AnimatedCard>

              <AnimatedCard
                delay={0.3}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-sm border border-orange-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-900">Rede ampla de fornecedores</h3>
                </div>
                <p className="text-gray-700">
                  Temos um portfólio completo de produtos e soluções para que você personalize sua infraestrutura, de
                  acordo com suas necessidades específicas.
                </p>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50 illuminated-section">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Nossos Parceiros"
              subtitle="Trabalhamos com os melhores fabricantes do mercado para oferecer soluções de alta qualidade"
              center={true}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <AnimatedCard
                  key={index}
                  delay={0.05 * index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex items-center justify-center h-32"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-20"
                  />
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-white illuminated-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-sm text-sm font-medium">
                  Sobre Nós
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Quem somos?</h2>
                <p className="text-gray-700 mb-6">
                  Formada por profissionais com mais de duas décadas de experiência no setor, a VTelco trouxe uma nova
                  abordagem para o mercado, ao adotar os conceitos de redes abertas e desagregadas, rompendo com as
                  barreiras tradicionais e oferecendo aos clientes maior flexibilidade e controle sobre suas
                  infraestruturas de rede.
                </p>
                <p className="text-gray-700 mb-8">
                  Nossa missão é ser reconhecida como líder nacional na criação de soluções inovadoras, impulsionando o
                  progresso da sociedade e o sucesso de nossos clientes.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                >
                  <Link href="/sobre-nos">QUERO SABER MAIS!</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transform rotate-3"></div>
                  <div className="relative z-10 rounded-2xl shadow-xl bg-white p-8 flex items-center justify-center">
                    <Image
                      src="/vtelco-team.png"
                      alt="VTelco Team"
                      width={300}
                      height={200}
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white bg-gradient-animate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,40,200,0.3)_0%,transparent_60%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-6 glow-text-white"
              >
                Pronto para transformar sua infraestrutura de rede?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/80 mb-8"
              >
                Entre em contato conosco para uma consultoria personalizada e descubra como nossas soluções podem ajudar
                sua empresa.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button asChild className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 text-lg shadow-glow">
                  <Link href="#contato">
                    Fale com um especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="py-16 bg-white illuminated-section">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="VTelco: Simplificando sua rede"
                subtitle="Preencha seus dados e encontre a solução ideal para sua infraestrutura de rede."
                center={true}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href="https://wa.me/5541999889681"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:shadow-glow-green"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

