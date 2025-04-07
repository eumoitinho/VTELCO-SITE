"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="block mb-4">
              <Image src="/logo.png" alt="VTelco" width={150} height={50} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm">Simplificando sua rede</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm uppercase tracking-wider">Links rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Home
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/#solucoes" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Soluções
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Sobre Nós
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Contato
                  </motion.span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm uppercase tracking-wider">Soluções</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/switches" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Switches
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/virtualizacao" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Virtualização
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/visibilidade-e-seguranca" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Visibilidade e Segurança
                  </motion.span>
                </Link>
              </li>
              <li>
                <Link href="/treinamentos" className="hover:text-white transition-colors inline-block">
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    Treinamentos
                  </motion.span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-medium mb-4 text-white text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <motion.li
                className="flex items-center gap-2"
                whileHover={{ x: 3, color: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-4 w-4 text-gray-500" />
                <span>+55 (41) 99988-9681</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-2"
                whileHover={{ x: 3, color: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-4 w-4 text-gray-500" />
                <span>contato@vtelco.com.br</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                whileHover={{ x: 3, color: "rgba(255, 255, 255, 0.9)" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                <span>Rua Imaculada Conceição, 1430 – Prado Velho, Curitiba – PR</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} VTelco. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

