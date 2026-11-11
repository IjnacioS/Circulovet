import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

import { ADVICE_ARTICLES } from "@/data/advice-data"
import { Reveal } from "@/components/landing/reveal"

export function AdvicePreview() {
  // Highlight 3 varied and vital articles on home
  const featuredArticles = [
    ADVICE_ARTICLES[2], // Golpe de calor (Urgencias)
    ADVICE_ARTICLES[0], // Baño de gatos (Gatos)
    ADVICE_ARTICLES[4], // Calendario de vacunas (Prevención)
  ]

  return (
    <section id="consejos" aria-labelledby="consejos-preview-titulo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Educación y Salud Animal
          </p>
          <h2 id="consejos-preview-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl font-heading">
            Lo que debes saber para un cuidado óptimo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Aprende a prevenir enfermedades, reconocer emergencias a tiempo y brindar la mejor calidad de vida a tu mascota con nuestras guías clínicas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-teal-900 shadow-xs backdrop-blur">
                    {article.category}
                  </span>
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur">
                    <Clock className="size-3" /> {article.readTime}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-teal-950 group-hover:text-cyan-800 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to="/consejos"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-cyan-700 transition-colors"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <span className="text-[11px] text-slate-400">Guía veterinaria</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA to Dedicated Advice Library Page */}
        <Reveal delay={200} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-3xl bg-teal-50 border border-teal-200/80 p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-950 px-2">
              <BookOpen className="size-4 text-cyan-700" />
              <span>Contamos con 8 guías completas sobre vacunas, sarro, nutrición, urgencias y cuidados senior</span>
            </div>
            <Link
              to="/consejos"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2F57] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-cyan-600 hover:shadow-lg"
            >
              <span>Ver todas las guías y consejos</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
