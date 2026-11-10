import { MessageCircle } from "lucide-react"

import { CLINIC } from "@/lib/site"

export function WhatsAppFloat() {
  return (
    <a
      href={CLINIC.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Círculo Vet"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-4 text-sm font-bold text-teal-950 shadow-2xl shadow-cyan-900/40 transition-all hover:-translate-y-1 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden sm:inline">Escríbenos</span>
    </a>
  )
}
