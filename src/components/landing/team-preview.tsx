import { Link } from "react-router-dom"
import { ArrowRight, GraduationCap, Stethoscope, Users } from "lucide-react"

import { TEAM_GROUPS } from "@/data/team-data"
import { Reveal } from "@/components/landing/reveal"

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

export function TeamPreview() {
  // We showcase lead veterinarians as highlights on homepage
  const featuredVets = TEAM_GROUPS[0].members.slice(0, 3)

  return (
    <section id="equipo" aria-labelledby="equipo-preview-titulo" className="bg-teal-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Cuerpo Médico y Asistencial
          </p>
          <h2 id="equipo-preview-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl font-heading">
            Profesionales que aman a los animales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Un equipo multidisciplinario de 14 profesionales compuesto por Médicos Veterinarios con posgrados, Técnicos Veterinarios y personal de atención dedicado a tu familia.
          </p>
        </Reveal>

        {/* 3 Highlights Preview */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVets.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
                <div>
                  <div className="flex items-center gap-4">
                    <img
                      src={photoPathOf(member.name)}
                      alt={`Foto de ${member.name}`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                        e.currentTarget.nextElementSibling?.classList.remove("hidden")
                      }}
                      className="size-16 shrink-0 rounded-2xl object-cover ring-2 ring-cyan-200 shadow-sm"
                    />
                    <span
                      aria-hidden="true"
                      className="hidden size-16 shrink-0 items-center justify-center rounded-2xl bg-teal-800 font-heading text-lg font-bold text-cyan-200 ring-2 ring-cyan-200"
                    >
                      {initialsOf(member.name)}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-teal-950">{member.name}</h3>
                      <p className="text-xs font-semibold text-cyan-800">{member.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {member.credential && (
                      <p className="flex items-center gap-2 text-xs text-slate-600">
                        <GraduationCap className="size-3.5 text-teal-600 shrink-0" />
                        <span>{member.credential}</span>
                      </p>
                    )}
                    {member.specialty && (
                      <p className="flex items-center gap-2 text-xs text-slate-600">
                        <Stethoscope className="size-3.5 text-cyan-600 shrink-0" />
                        <span>{member.specialty}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-900 font-semibold">
                  <span>Círculo Vet</span>
                  <span className="text-cyan-700">Ver perfil →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA to Dedicated Team Page */}
        <Reveal delay={200} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-3xl bg-white border border-teal-200/80 p-4 sm:p-5 shadow-md">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 px-2">
              <Users className="size-4 text-teal-700" />
              <span>Conoce a los 14 profesionales de nuestro equipo (Médicos, Técnicos y Recepción)</span>
            </div>
            <Link
              to="/equipo"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2F57] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-cyan-600 hover:shadow-lg"
            >
              <span>Ver todo el equipo profesional</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
