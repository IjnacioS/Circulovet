import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Clock, Menu, MessageCircle, Phone, X } from "lucide-react"

import { CLINIC, NAV_ITEMS } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (href: string) => {
    closeMenu()
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "")
      if (location.pathname === "/") {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/" && !location.hash) return true
    if (href === "/equipo" && location.pathname === "/equipo") return true
    if (href === "/consejos" && location.pathname === "/consejos") return true
    return false
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="urgent">
        <div className="urgent-wrap">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-3 py-0.5 font-semibold text-[#0B2F57] animate-pulse">
            <Clock className="size-3.5" aria-hidden="true" />
            Urgencias 24 hrs
          </span>
          <div className="urgent-phones flex items-center gap-4">
            {CLINIC.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                aria-label={`Llamar al teléfono ${phone.display}`}
                className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">{phone.display}</span>
                <span className="sm:hidden">{phone.display.split(" ").slice(-2).join(" ")}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Navegación principal" className="site-nav shadow-md">
        <div className="nav-inner">
          <Link
            to="/"
            aria-label="Círculo Vet, ir al inicio"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <img
              src="/logo.svg"
              alt="Logo Círculo Vet"
              width={48}
              height={48}
              decoding="async"
              className="h-12 w-auto object-contain rounded-full bg-white p-0.5"
            />
            <span className="brand-name hidden leading-tight sm:block">
              Veterinaria
              <span className="block text-xs font-semibold opacity-80">Santa Raquel</span>
            </span>
          </Link>

          <ul className="nav-links hidden items-center min-[701px]:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-label={`Ir a ${item.label}`}
                  className={cn(
                    "rounded-md px-3 py-2 transition-colors hover:text-[#0284C7]",
                    isActive(item.href) && "font-bold text-[#0284C7] underline underline-offset-4"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp para agendar una hora"
              className="btn-primary items-center gap-2 transition-all hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/60"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Agendar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-md text-[#0B2F57] transition-colors hover:bg-sky-300/30 min-[701px]:hidden"
            >
              {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="menu-movil"
          className={cn(
            "overflow-hidden bg-white text-[#0B2F57] shadow-lg transition-all duration-300 min-[701px]:hidden",
            menuOpen ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-label={`Ir a ${item.label}`}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-semibold hover:bg-sky-100 hover:text-[#0284C7]",
                    isActive(item.href) && "bg-sky-50 font-bold text-[#0284C7]"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
