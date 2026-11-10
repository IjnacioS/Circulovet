import { CLINIC, NAV_ITEMS } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-teal-950 text-teal-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-bold text-white">{CLINIC.name}</p>
          <p className="mt-1 text-sm text-cyan-300">Veterinaria Santa Raquel</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-teal-200">
            Clínica veterinaria en La Florida con más de 37 años cuidando a las mascotas de nuestra comunidad.
          </p>
        </div>

        <nav aria-label="Enlaces rápidos del pie de página">
          <p className="font-heading text-lg font-bold text-white">Navegación</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={`Ir a la sección ${item.label}`}
                  className="transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading text-lg font-bold text-white">Datos de contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{CLINIC.street}, {CLINIC.district}, {CLINIC.region}</li>
            <li>CP {CLINIC.postalCode}</li>
            <li>
              {CLINIC.phones.map((phone, index) => (
                <span key={phone.href}>
                  {index > 0 && " | "}
                  <a
                    href={phone.href}
                    aria-label={`Llamar al teléfono ${phone.display}`}
                    className="transition-colors hover:text-cyan-300"
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </li>
            <li>WhatsApp {CLINIC.whatsappDisplay}</li>
            <li className="text-cyan-200">Urgencias 24 horas</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-teal-300 sm:px-6">
          © {new Date().getFullYear()} {CLINIC.fullName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
