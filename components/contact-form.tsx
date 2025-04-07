"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    switchType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, switchType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      switchType: "",
      message: "",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Mensagem enviada com sucesso!</h3>
          <p className="text-gray-600 mb-6">Entraremos em contato em breve.</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="hover:shadow-glow-purple">
            Enviar nova mensagem
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo*</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
                className="focus:border-purple-500 focus:ring-purple-500 transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                required
                className="focus:border-purple-500 focus:ring-purple-500 transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone*</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className="focus:border-purple-500 focus:ring-purple-500 transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Empresa*</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                required
                className="focus:border-purple-500 focus:ring-purple-500 transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="switchType">Tipo de Switch</Label>
            <Select value={formData.switchType} onValueChange={handleSelectChange}>
              <SelectTrigger className="focus:border-purple-500 focus:ring-purple-500 transition-shadow">
                <SelectValue placeholder="Selecione o tipo de switch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="datacenter">Switches para Data Center</SelectItem>
                <SelectItem value="enterprise">Switches Empresariais</SelectItem>
                <SelectItem value="poe">Switches PoE</SelectItem>
                <SelectItem value="industrial">Switches Industriais</SelectItem>
                <SelectItem value="other">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva suas necessidades ou dúvidas"
              rows={4}
              className="focus:border-purple-500 focus:ring-purple-500 transition-shadow"
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-full transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
}

