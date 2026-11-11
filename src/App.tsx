import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "@/components/landing/site-header.css"
import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { WhatsAppFloat } from "@/components/landing/whatsapp-float"
import { ScrollToTop } from "@/components/common/scroll-to-top"

const HomePage = lazy(() => import("@/pages/home-page").then((m) => ({ default: m.HomePage })))
const TeamPage = lazy(() => import("@/pages/team-page").then((m) => ({ default: m.TeamPage })))
const AdvicePage = lazy(() => import("@/pages/advice-page").then((m) => ({ default: m.AdvicePage })))

function PageLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" aria-live="polite" aria-busy="true">
      <div className="size-8 animate-spin rounded-full border-4 border-teal-200 border-t-cyan-500" />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-svh bg-white font-sans text-slate-800 flex flex-col justify-between">
        <a
          href="#servicios"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-teal-950"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main className="flex-1">
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/equipo" element={<TeamPage />} />
              <Route path="/consejos" element={<AdvicePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}

export default App
