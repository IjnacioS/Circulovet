import { Quote, Star } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"

const TESTIMONIALS = [
  {
    name: "Camila R.",
    pet: "Dueña de Luna, golden retriever",
    quote:
      "Una madrugada Luna tuvo una emergencia y en la clínica nos recibieron de inmediato. El equipo fue muy cálido y nos explicó cada paso con calma.",
  },
  {
    name: "Rodrigo M.",
    pet: "Dueño de Milo, gato",
    quote:
      "Milo estuvo hospitalizado varios días y el cariño que le entregaron fue impresionante. Siempre nos mantuvieron informados y se notaba que lo querían.",
  },
  {
    name: "Patricia L.",
    pet: "Dueña de Coco, pinscher",
    quote:
      "Llevo a mis mascotas desde hace años. La atención es rápida, cercana y profesional, y siempre encuentro a alguien que me ayude sin apuro.",
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-titulo"
      className="bg-teal-950 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Prueba social</p>
          <h2 id="testimonios-titulo" className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Lo que dicen nuestras familias
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/10">
                <div className="flex gap-1" role="img" aria-label="Calificación de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="size-5 fill-cyan-300 text-cyan-300" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="mt-6 size-8 text-cyan-300/70" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-teal-50">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-teal-200">{item.pet}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
