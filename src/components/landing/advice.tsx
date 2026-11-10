import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"

type Article = {
  id: string
  title: string
  image: string
  imageAlt: string
  excerpt: string
  points: string[]
  closing: string
}

const ARTICLES: Article[] = [
  {
    id: "banar-gatos",
    title: "¿Se bañan los gatos?",
    image:
      "https://images.pexels.com/photos/7516099/pexels-photo-7516099.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Persona peinando con cuidado a un gato en casa",
    excerpt:
      "Los gatos son expertos en su propia higiene, pero eso no significa que nunca necesiten ayuda. Te contamos cuándo y cómo intervenir.",
    points: [
      "Higiene y acicalamiento: un gato sano se asea solo, pero el pelo largo o las zonas que no alcanza necesitan ayuda humana.",
      "Cepillado frecuente: ayuda a reducir el pelo que traga y las bolas de pelo.",
      "Costumbre temprana: acostumbrar al gato al agua y al secado desde cachorro hace todo mucho más fácil.",
      "Baños ocasionales: solo cuando sea necesario, usando productos específicos para gatos.",
      "Pulguicidas: la higiene no reemplaza la protección contra pulgas; consulta a tu veterinario por el producto adecuado.",
    ],
    closing:
      "Si notas mucho pelo en la piel, mal olor o un gato que deja de asearse, agenda una consulta: puede ser una señal de dolor o de una enfermedad.",
  },
  {
    id: "pasear-perro",
    title: "¿Cómo pasear a tu perro?",
    image:
      "https://images.pexels.com/photos/38936736/pexels-photo-38936736.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Hombre paseando a su perro por un parque con árboles",
    excerpt:
      "Un buen paseo es una actividad de confianza entre tú y tu perro. Estos consejos te ayudarán a caminar con seguridad y tranquilidad.",
    points: [
      "Collar y correa: usa un collar o arnés ajustado y una correa firme, de largo adecuado y sin tirones bruscos.",
      "Educación canina: enseña órdenes básicas como 'quieto' y 'ven' en casa antes de salir a la calle.",
      "Posición a la izquierda: camina con tu perro a tu lado izquierdo, a un ritmo tranquilo y con la correa floja.",
      "Si se escapa: llámalo con un tono alegre, corre en dirección contraria y ofrécele un premio al volver. Nunca lo castigues, porque aprenderá a huir de ti.",
    ],
    closing:
      "Recuerda que cada paseo es una oportunidad para fortalecer el vínculo con tu mascota. Si tiene miedo o reacciona de forma agresiva, consulta con nuestro equipo.",
  },
]

function ArticleCard({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = `${article.id}-panel`

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <img
        src={article.image}
        alt={article.imageAlt}
        loading="lazy"
        className="aspect-[16/9] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-teal-950">{article.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-700">{article.excerpt}</p>

        <div
          id={panelId}
          className={cn(
            "grid transition-all duration-500 ease-out",
            expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-3 text-sm leading-relaxed text-slate-700">
              {article.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-teal-50 p-4 text-sm font-medium text-teal-900">{article.closing}</p>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((value) => !value)}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-bold text-teal-800 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        >
          {expanded ? "Leer menos" : "Leer artículo completo"}
          <ChevronDown
            className={cn("size-4 transition-transform duration-300", expanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  )
}

export function Advice() {
  return (
    <section
      id="consejos"
      aria-labelledby="consejos-titulo"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Consejos de cuidado</p>
          <h2 id="consejos-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Lo que debes saber para un cuidado óptimo
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {ARTICLES.map((article, index) => (
            <Reveal key={article.id} delay={index * 120}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
