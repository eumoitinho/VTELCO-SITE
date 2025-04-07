"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Settings,
  Network,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Zap,
  Lock,
  LayoutGrid,
  LineChart,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export default function SwitchesPage() {
  // UI state
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

  // Products data
  const products = [
    {
      name: "UFI Space",
      tagline: "Especialista em switches de alta performance",
      description: [
        "A UfiSpace, fundada em 2015 e com sede em Taiwan, é especializada em switches de alta performance para provedores de serviços e data centers. Para provedores de serviços, a empresa oferece equipamentos que variam de 4 portas de 1 Gbps a 36 portas de 400 Gbps, ideais para roteadores de Ponto de Entrada (PE) e Borda.",
        "Já para data centers, a UfiSpace disponibiliza switches de alta capacidade, com opções que variam de 24 portas de 10 Gbps a 64 portas de 800 Gbps, garantindo a transferência eficiente de grandes volumes de dados.",
      ],
      features: [
        "Suporte a BGP e MPLS",
        "Serviços L2VPN e L3VPN",
        "Alta capacidade de tráfego",
        "Flexibilidade de configuração",
      ],
      image: "/ufispace.png",
      icon: <Network className="h-6 w-6" />,
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Edgecore Networks",
      tagline: "Líder em soluções de rede desagregadas",
      description: [
        "A Edgecore Networks, fundada em 2004, é líder no fornecimento de soluções de rede desagregadas e de código aberto. A Edgecore se destaca por permitir que operadoras de telecomunicações, provedores de serviços e data centers construam redes personalizadas, escaláveis e eficientes.",
        "Para data centers, a Edgecore oferece switches de alta capacidade com portas de 1 Gbps até 400 Gbps, enquanto para empresas, disponibiliza uma linha completa de switches L2 e L3 e Wi-Fi.",
      ],
      features: [
        "Arquitetura modular e redundante",
        "Switches PoE de 8 a 48 portas",
        "Alta performance",
        "Código aberto",
      ],
      image: "/edcore.png",
      icon: <Settings className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Asterfusion",
      tagline: "Soluções de rede desagregada para alta performance",
      description: [
        "A Asterfusion é uma empresa especializada em soluções de rede desagregada e de código aberto, projetadas para atender às necessidades de data centers, provedores de nuvem e redes de telecomunicações.",
        "Para data centers, a empresa disponibiliza switches com ultra baixa latência (400 ns) e capacidades de até 36 portas de 400 Gbps, ideais para ambientes que exigem altíssima performance e transferência rápida de dados.",
      ],
      features: [
        "Ultra baixa latência (400 ns)",
        "Suporte a SDN e NFV",
        "Até 36 portas de 400 Gbps",
        "Infraestrutura escalável",
      ],
      image: "/asterfusion.webp",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "ACORID",
      tagline: "Soluções de rede para todos os ambientes",
      description: [
        "A ACORID é uma empresa chinesa especializada em soluções de rede para ambientes empresariais, industriais e residenciais. Seu portfólio inclui switches PoE, Ethernet e industriais, oferecendo um equilíbrio entre custo-benefício, eficiência e confiabilidade.",
        "Os switches PoE permitem a transmissão simultânea de dados e energia por meio de cabos Ethernet, sendo ideais para alimentar dispositivos como câmeras IP, pontos de acesso Wi-Fi e telefones VoIP, sem necessidade de fontes de energia externas.",
      ],
      features: [
        "Switches PoE e Ethernet",
        "Proteção contra sobrecarga",
        "Excelente custo-benefício",
        "Alta durabilidade",
      ],
      image: "/placeholder.svg?height=400&width=400",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Smooth scroll for navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          })
        }
      }
    }

    // Auto-rotate products
    const productInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length)
    }, 8000)

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleLinkClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleLinkClick)
      clearInterval(productInterval)
    }
  }, [products.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full ${
          scrolled ? "bg-[#1a0b2e] shadow-md" : "bg-[#1a0b2e]"
        } text-white transition-all duration-300`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="VTelco" width={150} height={50} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Home
            </Link>

            <div className="relative group">
              <div className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                Soluções
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/switches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Switches
                  </Link>
                  <Link href="/virtualizacao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Virtualização de Redes
                  </Link>
                  <Link
                    href="/visibilidade-e-seguranca"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Visibilidade e Segurança
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#sobre" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Sobre Nós
            </Link>

            <Link href="#formulario" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-[#1a0b2e] absolute top-16 left-0 w-full py-4 border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container mx-auto px-4 flex flex-col space-y-3">
                <Link href="/" className="text-white py-2 block" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>

                <div>
                  <div
                    className="text-white py-2 w-full text-left flex items-center justify-between cursor-pointer"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  >
                    <span>Soluções</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
                  </div>

                  <AnimatePresence>
                    {mobileSubmenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 mt-1 space-y-2 border-l border-gray-700"
                      >
                        <Link href="/switches" className="text-white/80 py-2 block" onClick={() => setMenuOpen(false)}>
                          Switches
                        </Link>
                        <Link
                          href="/virtualizacao"
                          className="text-white/80 py-2 block"
                          onClick={() => setMenuOpen(false)}
                        >
                          Virtualização de Redes
                        </Link>
                        <Link
                          href="/visibilidade-e-seguranca"
                          className="text-white/80 py-2 block"
                          onClick={() => setMenuOpen(false)}
                        >
                          Visibilidade e Segurança
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="#sobre" className="text-white py-2 block" onClick={() => setMenuOpen(false)}>
                  Sobre Nós
                </Link>

                <Link href="#formulario" className="text-white py-2 block" onClick={() => setMenuOpen(false)}>
                  Contato
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-[#1a0b2e] text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.3)_0%,rgba(0,0,0,0)_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block mb-4 px-3 py-1 bg-purple-800 rounded-sm text-sm font-medium"
                >
                  Soluções de Conectividade
                </motion.div>
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Switches de alto desempenho para sua infraestrutura
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl mb-6 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Soluções escaláveis e confiáveis para redes corporativas e data centers
                </motion.p>
                <motion.p
                  className="text-white/80 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  A VTelco dispõe de uma ampla variedade de switches de alta performance, garantindo escalabilidade,
                  segurança, gerenciamento simplificado e baixa latência para um fluxo de dados ágil e confiável.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5">
                    Solicitar informações
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="relative rounded-md overflow-hidden"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src="/hero.webp"
                    alt="Switches de alto desempenho"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1)_0%,rgba(0,0,0,0)_70%)]"
            style={{ opacity }}
          />

          <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Principais benefícios dos nossos switches
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Nossas soluções oferecem vantagens competitivas para sua infraestrutura de rede
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  title: "Desempenho",
                  description:
                    "Garantimos uma comunicação rápida e eficiente entre dispositivos, reduzindo congestionamentos e otimizando a transmissão de dados.",
                  icon: <Zap className="h-6 w-6" />,
                },
                {
                  title: "Segurança",
                  description:
                    "Oferecemos recursos como segmentação de tráfego, VLANs e controle de acesso, protegendo informações sensíveis contra acessos não autorizados.",
                  icon: <Lock className="h-6 w-6" />,
                },
                {
                  title: "Escalabilidade",
                  description:
                    "Facilitamos a expansão da rede com switches que permitem a adição de novos dispositivos sem comprometer a performance e estabilidade.",
                  icon: <LayoutGrid className="h-6 w-6" />,
                },
                {
                  title: "Gerenciamento",
                  description:
                    "Disponibilizamos recursos de monitoramento e diagnóstico que permitem identificar e solucionar problemas na rede de forma rápida e eficiente.",
                  icon: <LineChart className="h-6 w-6" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-md shadow-sm border border-gray-200"
                  variants={itemVariants}
                  whileHover="hover"
                  variants={cardHoverVariants}
                >
                  <motion.div
                    className="text-purple-700 mb-4"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300, damping: 10 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.05)_0%,rgba(0,0,0,0)_70%)]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Conheça nossos produtos</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Oferecemos uma ampla gama de switches de alta performance para atender às necessidades específicas da
                sua infraestrutura de rede
              </p>
            </motion.div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Marcas Parceiras</h3>
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-sm"
                      onClick={() => setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1))}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-sm"
                      onClick={() => setActiveProduct((prev) => (prev + 1) % products.length)}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              <div className="relative">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    className={`${activeProduct === index ? "block" : "hidden"} bg-white rounded-md shadow-md border border-gray-200 overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: activeProduct === index ? 1 : 0, scale: activeProduct === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-gray-800 p-4 text-white"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                          <p className="text-white/80 text-sm">{product.tagline}</p>
                        </div>
                        <motion.div
                          className="bg-gray-700 p-2 rounded-md"
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300, damping: 10 },
                          }}
                        >
                          {product.icon}
                        </motion.div>
                      </div>
                    </motion.div>

                    <div className="p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <motion.div
                          className="space-y-4 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          {product.description.map((paragraph, i) => (
                            <p key={i} className="text-gray-700 text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </motion.div>

                        <motion.h4
                          className="font-semibold text-base mb-3 text-gray-900"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          Principais características:
                        </motion.h4>
                        <ul className="grid gap-2 mb-6">
                          {product.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-gray-700 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                        >
                          <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-sm">
                            Solicitar orçamento
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex items-center justify-center bg-gray-50 rounded-md p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                          transition: { type: "spring", stiffness: 300, damping: 10 },
                        }}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-contain max-h-64"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Product navigation dots */}
              <div className="flex justify-center mt-6 gap-2">
                {products.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeProduct ? "bg-purple-700" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setActiveProduct(index)}
                    aria-label={`View product ${index + 1}`}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    animate={
                      index === activeProduct
                        ? {
                            scale: [1, 1.2, 1],
                            transition: {
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            },
                          }
                        : {}
                    }
                  />
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 bg-gray-900 rounded-md p-8 text-white overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.3)_0%,rgba(0,0,0,0)_70%)]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <motion.h3
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Não encontrou o que procura?
                  </motion.h3>
                  <motion.p
                    className="text-white/80 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução ideal para sua
                    infraestrutura de rede. Entre em contato conosco para uma consultoria personalizada.
                  </motion.p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">Fale com um especialista</Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Ver todos os produtos
                      </Button>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  className="hidden md:flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src="/ufispace.png"
                    alt="Suporte técnico"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-gray-50">
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">Saiba mais sobre a VTelco</Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="bg-white p-8 rounded-md shadow-md"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    rotate: 2,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                >
                  <Image src="/logo-footer.png" alt="VTelco" width={300} height={100} className="w-full h-auto" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="formulario" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Entre em contato</h2>
                <p className="text-gray-600">
                  Preencha seus dados e encontre o switch ideal para sua infraestrutura de rede
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-md shadow-md border border-gray-200 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome completo" className="w-full rounded-sm" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="w-full rounded-sm" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(00) 00000-0000" className="w-full rounded-sm" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <Input id="company" placeholder="Nome da sua empresa" className="w-full rounded-sm" />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua necessidade..."
                      rows={4}
                      className="w-full rounded-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white rounded-sm">
                      Enviar mensagem
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Contato</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Entre em contato com nossos escritórios para mais informações
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-md shadow-sm border border-gray-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-700" />
                  Matriz Brasil
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <Phone className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>+55 (41) 99988-9681</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <Mail className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>contato@vtelco.com.br</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <MapPin className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                    <span>Rua Imaculada Conceição, 1430 – Prado Velho, Curitiba – PR, 80215-182</span>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-md shadow-sm border border-gray-200"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-700" />
                  Filial EUA
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <Phone className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>+55 (41) 99988-9681</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <Mail className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>contato@vtelco.com.br</span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                    <MapPin className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>1191 E Newport Center Dr STE 103 - Deerfield Beach, FL 33442</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

