import { Clock, Mail, MapPin, MessageCircle, Phone, Siren } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"
import { ContactForm } from "@/components/landing/contact-form"
import { CLINIC } from "@/lib/site"

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-teal-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Contacto</p>
          <h2 id="contacto-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Visítanos o comunícate hoy
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-2">
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-cyan-300">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-teal-950">Dirección</p>
                    <p className="text-slate-700">
                      {CLINIC.street}
                      <br />
                      {CLINIC.district}, {CLINIC.region}
                      <br />
                      Código postal {CLINIC.postalCode}
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-cyan-300">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-teal-950">Teléfonos</p>
                    <ul className="mt-1 space-y-1">
                      {CLINIC.phones.map((phone) => (
                        <li key={phone.href}>
                          <a
                            href={phone.href}
                            aria-label={`Llamar al teléfono ${phone.display}`}
                            className="font-semibold text-teal-800 underline-offset-4 hover:text-cyan-700 hover:underline"
                          >
                            {phone.display}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={CLINIC.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Escribir por WhatsApp al número +56 9 3875 0455"
                          className="inline-flex items-center gap-1.5 font-semibold text-teal-800 underline-offset-4 hover:text-cyan-700 hover:underline"
                        >
                          <MessageCircle className="size-4" aria-hidden="true" />
                          WhatsApp {CLINIC.whatsappDisplay}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-cyan-300">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-teal-950">Horario de atención</p>
                    <p className="text-slate-700">{CLINIC.hours}</p>
                  </div>
                </li>

                <li className="flex gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-white">
                    <Siren className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-rose-900">Urgencias</p>
                    <p className="text-rose-900">{CLINIC.emergencyHours}</p>
                  </div>
                </li>
              </ul>
            </address>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white p-3 shadow-sm">
              <iframe
                title="Mapa de ubicación de Círculo Vet en La Florida"
                src={CLINIC.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full rounded-2xl border-0 grayscale-[20%] sm:h-72"
                allowFullScreen
              />
              <a
                href={CLINIC.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/60"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Cómo llegar con Google Maps
              </a>
            </div>
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-cyan-400 text-teal-950">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-teal-950">Escríbenos</h3>
                  <p className="text-sm text-slate-600">Respondemos tus dudas, sugerencias y reclamos.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
