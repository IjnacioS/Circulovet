import "@/components/landing/site-header.css"
import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { History } from "@/components/landing/history"
import { Services } from "@/components/landing/services"
import { PreventivePlan } from "@/components/landing/preventive-plan"
import { Team } from "@/components/landing/team"
import { Advice } from "@/components/landing/advice"
import { Testimonials } from "@/components/landing/testimonials"
import { Contact } from "@/components/landing/contact"
import { SiteFooter } from "@/components/landing/site-footer"
import { WhatsAppFloat } from "@/components/landing/whatsapp-float"

export function App() {
  return (
    <div className="min-h-svh bg-white font-sans text-slate-800">
      <a
        href="#servicios"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-teal-950"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <History />
        <Services />
        <PreventivePlan />
        <Team />
        <Advice />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}

export default App
