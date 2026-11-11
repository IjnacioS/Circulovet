import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import {
  AlertTriangle,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  Clock,
  Heart,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react"

import { ADVICE_ARTICLES, type AdviceArticle } from "@/data/advice-data"
import { CLINIC } from "@/lib/site"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"

function ArticleCard({ article }: { article: AdviceArticle }) {
  const [expanded, setExpanded] = useState(false)
  const panelId = `article-${article.id}-content`

  const categoryColor: Record<string, string> = {
    Gatos: "bg-purple-100 text-purple-800 border-purple-200",
    Perros: "bg-amber-100 text-amber-800 border-amber-200",
    Urgencias: "bg-rose-100 text-rose-800 border-rose-200",
    Prevención: "bg-emerald-100 text-emerald-800 border-emerald-200",
    Nutrición: "bg-orange-100 text-orange-800 border-orange-200",
    "Salud Integral": "bg-cyan-100 text-cyan-800 border-cyan-200",
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold shadow-xs backdrop-blur",
              categoryColor[article.category] || "bg-teal-100 text-teal-800"
            )}
          >
            {article.category}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <Clock className="size-3" />
          {article.readTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-heading text-xl font-bold text-teal-950 sm:text-2xl leading-snug">
          {article.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {article.excerpt}
        </p>

        {article.importantAlert && (
          <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-amber-50 p-3.5 text-xs font-medium text-amber-900 border border-amber-200/80">
            <AlertTriangle className="size-4 shrink-0 text-amber-600 mt-0.5" />
            <span>{article.importantAlert}</span>
          </div>
        )}

        <div
          id={panelId}
          className={cn(
            "grid transition-all duration-500 ease-out",
            expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 border-b border-teal-100 pb-2">
              Puntos clave y recomendaciones:
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-700">
              {article.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-cyan-500" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-teal-50/80 p-4 border border-teal-100 text-xs sm:text-sm font-medium text-teal-950">
              💡 <strong>Consejo Círculo Vet:</strong> {article.closing}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md py-1"
          >
            <span>{expanded ? "Leer menos" : "Leer guía completa"}</span>
            <ChevronDown
              className={cn("size-4 transition-transform duration-300", expanded && "rotate-180")}
              aria-hidden="true"
            />
          </button>

          <a
            href={CLINIC.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por WhatsApp sobre ${article.title}`}
            className="text-xs font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            Consultar al vet
          </a>
        </div>
      </div>
    </article>
  )
}

export function AdvicePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const categories = [
    "todos",
    "Perros",
    "Gatos",
    "Urgencias",
    "Prevención",
    "Nutrición",
    "Salud Integral",
  ]

  const filteredArticles = useMemo(() => {
    return ADVICE_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "todos" || article.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      if (!query) return matchesCategory

      const matchesSearch =
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.points.some((p) => p.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="bg-slate-50">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2F57] to-[#124D91] text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7DD3FC_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur transition-colors hover:bg-white/20 mb-6"
          >
            <ChevronLeft className="size-4" /> Volver a Inicio
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-cyan-400/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              Guías y Consejos Veterinarios
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lo que debes saber para un cuidado óptimo
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-cyan-100">
              Artículos educativos redactados por nuestro equipo médico para ayudarte a prevenir enfermedades, reconocer urgencias a tiempo y garantizar el bienestar diario de tus perros y gatos.
            </p>
          </div>

          {/* Search bar inside hero */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar consejos por síntoma o tema (ej. vacunas, sarro, calor, vómitos)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white pl-12 pr-6 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-300"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold capitalize transition-all shadow-xs",
                  selectedCategory === cat
                    ? "bg-[#0B2F57] text-white shadow-md ring-2 ring-[#0B2F57]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {cat === "todos" ? "Todos los artículos" : cat}
              </button>
            ))}
          </div>

          {/* Results count & status */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8 text-sm text-slate-600">
            <span>
              Mostrando <strong>{filteredArticles.length}</strong> de{" "}
              {ADVICE_ARTICLES.length} guías clínicas
            </span>
            {searchQuery && (
              <span className="text-xs text-teal-800 font-medium">
                Filtro de búsqueda: "{searchQuery}"
              </span>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 rounded-3xl bg-white border border-slate-200 p-8 max-w-md mx-auto">
              <BookOpen className="size-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-lg">No encontramos resultados</h3>
              <p className="text-sm text-slate-500 mt-1">
                Prueba con otros términos como "vacunas", "baño", "calor" o limpia el buscador.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("todos")
                  setSearchQuery("")
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-2 text-xs font-bold text-white hover:bg-teal-700"
              >
                Ver todos los consejos
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Education Banner */}
          <div className="mt-20 rounded-3xl bg-gradient-to-br from-teal-900 to-cyan-950 text-white p-8 sm:p-12 shadow-xl">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="size-4" /> Compromiso con la Tenencia Responsable
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-white">
                ¿Tu mascota presenta cambios de apetito, letargo o dolor?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-teal-100">
                Internet es una excelente herramienta para aprender y prevenir, pero ante cualquier síntoma clínico, nunca reemplaces la evaluación médica profesional. En Círculo Vet contamos con laboratorio propio, ecografía y atención continua.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={CLINIC.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#0B2F57] transition-all hover:bg-cyan-300 hover:shadow-lg"
                >
                  <MessageCircle className="size-4" /> Hablar con un veterinario por WhatsApp
                </a>
                <Link
                  to="/#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <Heart className="size-4" /> Ver ubicación y teléfonos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
