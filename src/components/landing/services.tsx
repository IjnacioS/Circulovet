import { FlaskConical, Pill, ScanLine, Scissors, ShoppingBag, Stethoscope, Syringe, BedDouble, type LucideIcon } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"

const img = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`

type Service = {
  title: string
  description: string
  icon: LucideIcon
  image: string
  imageAlt: string
}

const SERVICES: Service[] = [
  {
    title: "Medicina general",
    description: "Controles de salud, diagnóstico y tratamiento de las enfermedades más comunes en perros y gatos.",
    icon: Stethoscope,
    image: img("7468978"),
    imageAlt: "Veterinario revisando a un perro en consulta",
  },
  {
    title: "Cirugía",
    description: "Intervenciones programadas y de urgencia con protocolos de anestesia y monitoreo durante todo el procedimiento.",
    icon: Scissors,
    image: img("3924779"),
    imageAlt: "Veterinaria realizando un procedimiento con equipo de monitoreo",
  },
  {
    title: "Tratamientos ambulatorios",
    description: "Curaciones, inyecciones, control de heridas y terapias que no requieren hospitalización.",
    icon: Syringe,
    image: img("6816869"),
    imageAlt: "Veterinario aplicando una vacuna a un gato",
  },
  {
    title: "Exámenes de laboratorio",
    description: "Hemogramas, perfiles bioquímicos y análisis de orina para detectar problemas a tiempo.",
    icon: FlaskConical,
    image: img("6627687"),
    imageAlt: "Muestras de sangre en un laboratorio veterinario",
  },
  {
    title: "Ecografías",
    description: "Imágenes ecográficas para evaluar órganos internos, embarazos y diagnósticos complementarios.",
    icon: ScanLine,
    image: img("6234610"),
    imageAlt: "Veterinario realizando una ecografía a un perro",
  },
  {
    title: "Hospitalización y UCI",
    description:
      "Instalaciones climatizadas de primer nivel. Monitoreo continuo 24/7, unidades de cuidados intensivos, oxigenoterapia y pabellón quirúrgico equipado. Sectores estrictamente separados para pacientes infecciosos, no infecciosos y un área exclusiva y tranquila para gatos (Cat Friendly).",
    icon: BedDouble,
    image: img("33982522"),
    imageAlt: "Perro descansando tranquilo en el área de hospitalización",
  },
]

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="bg-teal-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Nuestros servicios</p>
          <h2 id="servicios-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Servicios Veterinarios Integrales
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Todo lo que tu mascota necesita en un mismo lugar, con profesionales que la conocen y la acompañan.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title} className="group flex h-full list-none flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-400 text-teal-950 shadow-lg">
                      <service.icon className="size-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-teal-950">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
                  </div>
                </article>
            </li>
          ))}
        </ul>

        <Reveal delay={120} className="mt-6">
          <article className="group grid overflow-hidden rounded-2xl border border-cyan-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
              <img
                src={img("39611722")}
                alt="Gato en una tienda de productos para mascotas"
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-400 text-teal-950">
                <ShoppingBag className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-teal-950">Pet Shop y Farmacia</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                Alimentos de prescripción, medicamentos y accesorios para tu mascota, con el consejo de nuestro equipo.
              </p>
              <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-800">
                <Pill className="size-4" aria-hidden="true" /> Farmacia veterinaria
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
