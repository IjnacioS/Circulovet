import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import {
  Award,
  ChevronLeft,
  GraduationCap,
  Heart,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react"

import { TEAM_GROUPS, type TeamMember } from "@/data/team-data"
import { CLINIC } from "@/lib/site"
import { Reveal } from "@/components/landing/reveal"
import { cn } from "@/lib/utils"

function initialsOf(name: string) {
  return name
    .replace(/^(Dr\.|Dra\.)\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

function photoPathOf(name: string) {
  const slug = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^(dr|dra)\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  return `/images/team/${slug}.jpg`
}

function TeamAvatar({ name }: { name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-800 to-cyan-900 font-heading text-xl font-bold text-cyan-200 shadow-md ring-2 ring-cyan-300/40"
      >
        {initialsOf(name)}
      </span>
    )
  }

  return (
    <img
      src={photoPathOf(name)}
      alt={`Fotografía de ${name}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="size-20 shrink-0 rounded-2xl object-cover ring-2 ring-cyan-200 shadow-md"
    />
  )
}

function MemberCard({ member, groupTitle }: { member: TeamMember; groupTitle: string }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
      <div>
        <div className="flex items-start gap-4">
          <TeamAvatar name={member.name} />
          <div className="min-w-0 flex-1">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-teal-700">
              {groupTitle}
            </span>
            <h3 className="text-lg font-bold text-teal-950 sm:text-xl leading-snug">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-cyan-800">{member.role}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
          {member.credential && (
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <GraduationCap className="size-4 shrink-0 text-teal-600 mt-0.5" />
              <span className="font-medium">{member.credential}</span>
            </div>
          )}

          {member.specialty && (
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <Stethoscope className="size-4 shrink-0 text-cyan-600 mt-0.5" />
              <span>{member.specialty}</span>
            </div>
          )}

          {member.experience && (
            <div className="flex items-start gap-2 text-xs text-teal-800">
              <Award className="size-4 shrink-0 text-amber-500 mt-0.5" />
              <span className="font-semibold">{member.experience}</span>
            </div>
          )}

          {member.bio && (
            <p className="mt-3 text-xs leading-relaxed text-slate-600 italic bg-teal-50/50 rounded-xl p-3">
              "{member.bio}"
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5 text-teal-900 font-semibold">
          <ShieldCheck className="size-3.5 text-cyan-600" /> Círculo Vet
        </span>
        <span className="text-[11px]">Santa Raquel 10343</span>
      </div>
    </article>
  )
}

export function TeamPage() {
  const [selectedGroup, setSelectedGroup] = useState<string>("todos")

  const categories = useMemo(() => {
    return [
      { id: "todos", label: "Todo el equipo", count: 14 },
      ...TEAM_GROUPS.map((g) => ({
        id: g.id,
        label: g.title,
        count: g.members.length,
      })),
    ]
  }, [])

  const filteredGroups = useMemo(() => {
    if (selectedGroup === "todos") return TEAM_GROUPS
    return TEAM_GROUPS.filter((g) => g.id === selectedGroup)
  }, [selectedGroup])

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
              Círculo Vet / Equipo Profesional
            </span>
            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Profesionales que aman a los animales
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-cyan-100">
              Conoce a los médicos veterinarios, técnicos y equipo de atención que cuidan día y noche de tu mascota con rigor científico, calidez humana y más de 37 años de tradición clínica.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
              <Stethoscope className="size-6 text-cyan-300 mb-2" />
              <div className="text-2xl font-black text-white">5</div>
              <div className="text-xs text-cyan-100">Médicos Veterinarios</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
              <GraduationCap className="size-6 text-cyan-300 mb-2" />
              <div className="text-2xl font-black text-white">6</div>
              <div className="text-xs text-cyan-100">Técnicos Veterinarios</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
              <Users className="size-6 text-cyan-300 mb-2" />
              <div className="text-2xl font-black text-white">3</div>
              <div className="text-xs text-cyan-100">Equipo de Recepción</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
              <Award className="size-6 text-cyan-300 mb-2" />
              <div className="text-2xl font-black text-white">+37</div>
              <div className="text-xs text-cyan-100">Años de trayectoria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Filter */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedGroup(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-xs",
                  selectedGroup === cat.id
                    ? "bg-[#0B2F57] text-white shadow-md ring-2 ring-[#0B2F57]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] font-extrabold",
                    selectedGroup === cat.id
                      ? "bg-cyan-400 text-[#0B2F57]"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Groups and Members */}
          <div className="space-y-16">
            {filteredGroups.map((group) => (
              <div key={group.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-teal-200/60 pb-4 gap-2">
                  <div>
                    <h2 className="text-2xl font-extrabold text-teal-950 sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    {group.members.length} {group.members.length === 1 ? "integrante" : "integrantes"}
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member) => (
                    <MemberCard
                      key={member.name}
                      member={member}
                      groupTitle={group.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Section */}
          <div className="mt-20 rounded-3xl bg-teal-900 text-white p-8 sm:p-12 shadow-xl">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                <Heart className="size-4" /> Nuestra Promesa Clínica
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-white">
                Cuidado médico compasivo, con respaldo y seguridad
              </h2>
              <p className="mt-4 text-base leading-relaxed text-teal-100">
                En Círculo Vet no trabajamos con fotografías de stock ni improvisación. Cada profesional que ves aquí forma parte de nuestro equipo diario, capacitado para responder ante emergencias, cirugías complejas y controles preventivos.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-bold text-cyan-300">Área Cat Friendly</h3>
                  <p className="mt-1 text-xs text-teal-100 leading-relaxed">
                    Sectores aislados y libres de estrés canino especialmente diseñados para felinos.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-bold text-cyan-300">UCI y Pabellón</h3>
                  <p className="mt-1 text-xs text-teal-100 leading-relaxed">
                    Equipamiento de anestesia inhalatoria, oxigenoterapia y monitoreo multiparámetro.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="font-bold text-cyan-300">Urgencias 24/7</h3>
                  <p className="mt-1 text-xs text-teal-100 leading-relaxed">
                    Personal médico y técnico siempre activo para atender emergencias inmediatas.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={CLINIC.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#0B2F57] transition-all hover:bg-cyan-300 hover:shadow-lg"
                >
                  <MessageCircle className="size-4" /> Agendar con un especialista
                </a>
                <a
                  href={CLINIC.phones[0].href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <Phone className="size-4" /> Urgencias: {CLINIC.phones[0].display}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
