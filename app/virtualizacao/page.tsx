"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  BarChart3,
  Server,
  Network,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Zap,
  Cloud,
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"

export default function VirtualizacaoPage() {
  // UI state
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)

  // Solutions data
  const solutions = [
    {
      name: "netElastic",
      tagline: "Virtualização de funções de rede para provedores",
      description: [
        "A netElastic oferece soluções de virtualização de funções de rede (NFV) para provedores de serviços de internet, incluindo BNG (Broadband Network Gateway) e CGNAT (Carrier Grade NAT) virtualizados.",
        "Com a netElastic, provedores podem escalar suas redes de forma flexível, reduzir custos operacionais e implementar novos serviços rapidamente, sem depender de hardware proprietário.",
      ],
      features: [
        "BNG virtualizado de alta performance",
        "CGNAT escalável e flexível",
        "Gerenciamento centralizado",
        "Redução de CAPEX e OPEX",
      ],
      image: "/netelastic.png",
      icon: <Server className="h-6 w-6" />,
    },
    {
      name: "DriveNets",
      tagline: "Transformação de redes para operadoras",
      description: [
        "A DriveNets oferece uma solução de rede baseada em nuvem que permite às operadoras de telecomunicações transformar suas redes tradicionais em infraestruturas ágeis e escaláveis.",
        "Com a arquitetura Network Cloud da DriveNets, operadoras podem simplificar suas operações, reduzir custos e escalar rapidamente para atender à crescente demanda por largura de banda.",
      ],
      features: [
        "Arquitetura Network Cloud",
        "Desagregação de hardware e software",
        "Escalabilidade massiva",
        "Economia de custos significativa",
      ],
      image: "/drivenets.png",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      name: "IP Infusion",
      tagline: "Software de rede aberto e flexível",
      description: [
        "A IP Infusion fornece soluções de software de rede aberto que permitem às empresas e provedores de serviços implementar redes desagregadas e flexíveis.",
        "Com o OcNOS (Open Compute Network Operating System) da IP Infusion, clientes podem escolher livremente o hardware e o software que melhor atendem às suas necessidades, eliminando a dependência de fornecedores específicos.",
      ],
      features: [
        "Sistema operacional de rede aberto",
        "Suporte a múltiplas plataformas de hardware",
        "Ampla gama de protocolos e recursos",
        "Flexibilidade e liberdade de escolha",
      ],
      image: "/ip-infusion.png",
      icon: <Globe className="h-6 w-6" />,
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

    // Auto-rotate solutions
    const solutionInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % solutions.length)
    }, 8000)

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleLinkClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleLinkClick)
      clearInterval(solutionInterval)
    }
  }, [solutions.length])

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
              <button className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1">
                Soluções
                <ChevronDown className="h-4 w-4" />
              </button>
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
                  <Link href="/treinamentos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Treinamentos
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
                  <button
                    className="text-white py-2 w-full text-left flex items-center justify-between"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  >
                    <span>Soluções</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
                  </button>

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
                        <Link
                          href="/treinamentos"
                          className="text-white/80 py-2 block"
                          onClick={() => setMenuOpen(false)}
                        >
                          Treinamentos
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
        <section className="bg-[#1a0b2e] text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4 px-3 py-1 bg-blue-700 rounded-sm text-sm font-medium">
                  Virtualização de Redes
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Transforme sua infraestrutura com redes virtualizadas
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white/90">
                  Soluções flexíveis e escaláveis para modernizar sua rede
                </p>
                <p className="text-white/80 mb-8">
                  A VTelco oferece tecnologias de virtualização de redes que permitem às empresas e provedores de
                  serviços reduzir custos, aumentar a agilidade e simplificar operações, sem depender de hardware
                  proprietário.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5">
                    Conhecer soluções
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
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src="/virtualizacao-hero.jpg"
                    alt="Virtualização de redes"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-sm text-sm font-medium">
                  Tecnologia de Ponta
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Por que virtualizar sua rede?</h2>
                <p className="text-gray-700 mb-6">
                  A virtualização de redes separa as funções de rede do hardware proprietário, permitindo que elas sejam
                  executadas como software em servidores padrão. Isso traz flexibilidade, escalabilidade e economia
                  significativa.
                </p>
                <p className="text-gray-700 mb-8">
                  Com nossas soluções de virtualização, você pode implementar e escalar rapidamente funções como BNG,
                  CGNAT, roteadores e firewalls, reduzindo custos operacionais e de capital, além de simplificar a
                  gestão da sua infraestrutura.
                </p>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <div className="bg-gray-100 p-6 rounded-md">
                  <Image
                    src="/virtualizacao-diagram.jpg"
                    alt="Diagrama de virtualização"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Benefícios da Virtualização de Redes
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Descubra como a virtualização pode transformar sua infraestrutura de rede
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Redução de Custos",
                  description: "Diminua significativamente seus gastos com hardware e manutenção.",
                  icon: <BarChart3 className="h-6 w-6" />,
                },
                {
                  title: "Escalabilidade",
                  description: "Expanda sua capacidade rapidamente conforme a demanda aumenta.",
                  icon: <Zap className="h-6 w-6" />,
                },
                {
                  title: "Flexibilidade",
                  description: "Implemente novas funções e serviços sem mudanças de hardware.",
                  icon: <Cloud className="h-6 w-6" />,
                },
                {
                  title: "Simplificação",
                  description: "Gerencie toda sua rede de forma centralizada e automatizada.",
                  icon: <Network className="h-6 w-6" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-md shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-blue-700 mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Nossas Soluções de Virtualização</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Conheça as tecnologias que estão transformando o mercado de telecomunicações
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Parceiros Tecnológicos</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm"
                    onClick={() => setActiveProduct((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm"
                    onClick={() => setActiveProduct((prev) => (prev + 1) % solutions.length)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className={`${activeProduct === index ? "block" : "hidden"} bg-white rounded-md shadow-md border border-gray-200 overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: activeProduct === index ? 1 : 0, scale: activeProduct === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gray-800 p-4 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{solution.name}</h3>
                          <p className="text-white/80 text-sm">{solution.tagline}</p>
                        </div>
                        <div className="bg-gray-700 p-2 rounded-md">{solution.icon}</div>
                      </div>
                    </div>

                    <div className="p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="space-y-4 mb-6">
                          {solution.description.map((paragraph, i) => (
                            <p key={i} className="text-gray-700 text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        <h4 className="font-semibold text-base mb-3 text-gray-900">Principais características:</h4>
                        <ul className="grid gap-2 mb-6">
                          {solution.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2 text-gray-700 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-sm">
                            Solicitar demonstração
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>

                      <motion.div
                        className="flex items-center justify-center bg-gray-50 rounded-md p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.name}
                          width={400}
                          height={400}
                          className="object-contain max-h-64"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Solution navigation dots */}
              <div className="flex justify-center mt-6 gap-2">
                {solutions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeProduct ? "bg-blue-700" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setActiveProduct(index)}
                    aria-label={`View solution ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gray-900 rounded-md p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pronto para modernizar sua rede?</h3>
                  <p className="text-white/80 mb-6">
                    Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução ideal para sua
                    infraestrutura. Entre em contato para uma consultoria personalizada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">Fale com um especialista</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Ver todas as soluções
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <Image
                    src="/virtualizacao-cta.jpg"
                    alt="Virtualização de redes"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-sm text-sm font-medium">
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
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">Saiba mais sobre a VTelco</Button>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-8 rounded-md shadow-md">
                  <Image src="/logo-footer.png" alt="VTelco" width={300} height={100} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="formulario" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Entre em contato</h2>
                <p className="text-gray-600">
                  Preencha o formulário abaixo para saber mais sobre nossas soluções de virtualização
                </p>
              </div>

              <div className="bg-white rounded-md shadow-md border border-gray-200 p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome completo" className="w-full rounded-sm" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="w-full rounded-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <Input id="phone" placeholder="(00) 00000-0000" className="w-full rounded-sm" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa
                      </label>
                      <Input id="company" placeholder="Nome da sua empresa" className="w-full rounded-sm" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua necessidade..."
                      rows={4}
                      className="w-full rounded-sm"
                    />
                  </div>

                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-sm">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Contato</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Entre em contato com nossos escritórios para mais informações
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-700" />
                  Matriz Brasil
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>+55 (41) 99988-9681</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>contato@vtelco.com.br</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>Rua Imaculada Conceição, 1430 – Prado Velho, Curitiba – PR, 80215-182</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-700" />
                  Filial EUA
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>+55 (41) 99988-9681</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>contato@vtelco.com.br</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span>1191 E Newport Center Dr STE 103 - Deerfield Beach, FL 33442</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

