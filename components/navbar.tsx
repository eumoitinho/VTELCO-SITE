"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when changing routes
  useEffect(() => {
    setMenuOpen(false)
    setMobileSubmenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => pathname === path

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full ${
        scrolled ? "bg-[#1a0b2e] shadow-md" : "bg-[#1a0b2e]/90 backdrop-blur-sm"
      } text-white transition-all duration-300`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src="/logo.png" alt="VTelco" width={150} height={50} className="h-8 w-auto" />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <motion.div custom={1} variants={navItemVariants} initial="hidden" animate="visible">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive("/") ? "text-white" : "text-white/80 hover:text-white"
              } transition-colors relative group`}
            >
              Home
              {isActive("/") && (
                <motion.span layoutId="navIndicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white" />
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.div>

          <motion.div
            custom={2}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            className="relative group"
          >
            <div className="relative group">
              <div className="text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                Soluções
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </div>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top scale-95 group-hover:scale-100">
                <div className="py-1">
                  <Link
                    href="/switches"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/switches")
                        ? "bg-gray-100 text-purple-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Switches
                  </Link>
                  <Link
                    href="/virtualizacao"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/virtualizacao")
                        ? "bg-gray-100 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Virtualização de Redes
                  </Link>
                  <Link
                    href="/visibilidade-e-seguranca"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/visibilidade-e-seguranca")
                        ? "bg-gray-100 text-orange-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Visibilidade e Segurança
                  </Link>
                  <Link
                    href="/treinamentos"
                    className={`block px-4 py-2 text-sm ${
                      isActive("/treinamentos")
                        ? "bg-gray-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Treinamentos
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div custom={3} variants={navItemVariants} initial="hidden" animate="visible">
            <Link
              href="/#sobre"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.div>

          <motion.div custom={4} variants={navItemVariants} initial="hidden" animate="visible">
            <Link
              href="/#contato"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.div>
        </nav>

        {/* Contact Button (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:block"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-md"
            >
              <Link href="/#contato">Entre em contato</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#1a0b2e] absolute top-16 left-0 w-full py-4 border-t border-gray-800"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <motion.div variants={mobileItemVariants}>
                <Link href="/" className={`py-2 block ${isActive("/") ? "text-white font-medium" : "text-white/80"}`}>
                  Home
                </Link>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
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
                        <motion.div variants={mobileItemVariants}>
                          <Link
                            href="/switches"
                            className={`py-2 block ${isActive("/switches") ? "text-white font-medium" : "text-white/70"}`}
                          >
                            Switches
                          </Link>
                        </motion.div>
                        <motion.div variants={mobileItemVariants}>
                          <Link
                            href="/virtualizacao"
                            className={`py-2 block ${isActive("/virtualizacao") ? "text-white font-medium" : "text-white/70"}`}
                          >
                            Virtualização de Redes
                          </Link>
                        </motion.div>
                        <motion.div variants={mobileItemVariants}>
                          <Link
                            href="/visibilidade-e-seguranca"
                            className={`py-2 block ${isActive("/visibilidade-e-seguranca") ? "text-white font-medium" : "text-white/70"}`}
                          >
                            Visibilidade e Segurança
                          </Link>
                        </motion.div>
                        <motion.div variants={mobileItemVariants}>
                          <Link
                            href="/treinamentos"
                            className={`py-2 block ${isActive("/treinamentos") ? "text-white font-medium" : "text-white/70"}`}
                          >
                            Treinamentos
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <Link href="/#sobre" className="text-white/80 py-2 block">
                  Sobre Nós
                </Link>
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <Link href="/#contato" className="text-white/80 py-2 block">
                  Contato
                </Link>
              </motion.div>

              <motion.div variants={mobileItemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  className="mt-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white w-full"
                >
                  <Link href="/#contato">Entre em contato</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

