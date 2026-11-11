import { Hero } from "@/components/landing/hero"
import { History } from "@/components/landing/history"
import { Services } from "@/components/landing/services"
import { PreventivePlan } from "@/components/landing/preventive-plan"
import { TeamPreview } from "@/components/landing/team-preview"
import { AdvicePreview } from "@/components/landing/advice-preview"
import { Testimonials } from "@/components/landing/testimonials"
import { Contact } from "@/components/landing/contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <History />
      <Services />
      <PreventivePlan />
      <TeamPreview />
      <AdvicePreview />
      <Testimonials />
      <Contact />
    </>
  )
}
