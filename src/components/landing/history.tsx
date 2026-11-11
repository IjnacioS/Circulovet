import { useEffect, useState } from "react"
import { Clock, Dog, HeartHandshake, Landmark, type LucideIcon } from "lucide-react"

import { useInView } from "@/hooks/use-in-view"
import { Reveal } from "@/components/landing/reveal"

const HISTORY_IMAGE =
  "https://images.pexels.com/photos/7108324/pexels-photo-7108324.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"

type Metric = {
  icon: LucideIcon
  label: string
  target?: number
  prefix?: string
  suffix?: string
  text?: string
}

const METRICS: Metric[] = [
  { target: 37, prefix: "+", suffix: " Años", label: "de dedicación", icon: Landmark },
  { target: 69000, prefix: "+", label: "Mascotas atendidas", icon: Dog },
  { text: "24/7", label: "Atención de urgencias", icon: Clock },
]

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return <>{current.toLocaleString("es-CL")}</>
}

export function History() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="nosotros" aria-labelledby="historia-titulo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={HISTORY_IMAGE}
              alt="Instalaciones de la clínica Círculo Vet con equipo veterinario"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-teal-900 px-6 py-4 text-white shadow-xl sm:right-8">
              <p className="font-heading text-3xl font-bold text-cyan-300">Desde 1987</p>
              <p className="text-sm text-teal-100">Abrimos nuestras puertas el 5 de julio</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Nuestra historia</p>
          <h2 id="historia-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Más de 37 años de dedicación y cariño
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
            <p>
              Abrimos nuestras puertas el 5 de julio de 1987 con una convicción simple: cada mascota merece el mismo
              cuidado que daríamos a alguien de nuestra propia familia. Lo que comenzó como una pequeña clínica de barrio
              se ha convertido en un legado de confianza.
            </p>
            <p>
              Hoy hemos atendido a más de 69.000 mascotas y acompañado a generaciones de familias de La Florida y de toda
              la Región Metropolitana. No somos solo una clínica: somos parte de una red prestigiosa que nos entrega
              respaldo, experiencia y la seguridad de estar siempre en buenas manos.
            </p>
          </div>

          <div ref={ref} className="mt-10 grid grid-cols-3 gap-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-5"
              >
                <metric.icon className="mx-auto size-6 text-teal-700" aria-hidden="true" />
                <p className="mt-2 font-heading text-2xl font-bold text-teal-950 sm:text-3xl">
                  {metric.target !== undefined ? (
                    <>
                      {metric.prefix}
                      <CountUp target={metric.target} active={inView} />
                      {metric.suffix}
                    </>
                  ) : (
                    metric.text
                  )}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-800">
            <HeartHandshake className="size-5 text-cyan-600" aria-hidden="true" />
            Respaldo, seguridad y cariño en cada consulta
          </p>
        </Reveal>
      </div>
    </section>
  )
}
