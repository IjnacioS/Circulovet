import { useState } from "react"
import { Award, GraduationCap, Stethoscope, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"

type Member = {
  name: string
  role: string
  credential?: string
}

type TeamGroup = {
  title: string
  description: string
  icon: LucideIcon
  members: Member[]
}

const TEAM: TeamGroup[] = [
  {
    title: "Médicos Veterinarios",
    description: "Profesionales con formación de posgrado y experiencia clínica en medicina de pequeños animales.",
    icon: Stethoscope,
    members: [
      { name: "Dr. Cristian Roman Marchant", role: "Médico Veterinario", credential: "Magíster, UST" },
      { name: "Dra. Natalia Cid Jara", role: "Médica Veterinaria", credential: "Universidad de Concepción" },
      { name: "Dra. Aline Campos Grimberg", role: "Médica Veterinaria", credential: "Universidad Santo Tomás" },
      { name: "Dr. Johan Flández Olabé", role: "Médico Veterinario" },
      { name: "Dra. Lilia Lorca Pérez", role: "Médica Veterinaria", credential: "Universidad de Chile, Diplomada" },
    ],
  },
  {
    title: "Equipo Técnico",
    description: "Técnicos especializados en hospitalización, apoyo quirúrgico y cuidado diario de cada paciente.",
    icon: GraduationCap,
    members: [
      { name: "Fabiola Navarro", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
      { name: "Paulina Campos", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
      { name: "Tamara Becerra", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
      { name: "Margarita Salvo", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
      { name: "Alinne Quintana", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
      { name: "Anyel Castillo", role: "Técnico Veterinario", credential: "DUOC UC y otros" },
    ],
  },
  {
    title: "Recepción",
    description: "Las primeras personas que verás al llegar, siempre dispuestas a orientarte y a acompañarte.",
    icon: Users,
    members: [
      { name: "Lorena Cornejo", role: "Recepcionista" },
      { name: "Angelina Morales", role: "Recepcionista" },
      { name: "Miyossy Hernandez", role: "Recepcionista" },
    ],
  },
]

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
        className="flex size-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-700 to-teal-900 font-heading text-xl font-bold text-cyan-200"
      >
        {initialsOf(name)}
      </span>
    )
  }

  return (
    <img
      src={photoPathOf(name)}
      alt={`Foto de ${name}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-20 shrink-0 rounded-full object-cover ring-2 ring-cyan-200"
    />
  )
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

export function Team() {
  return (
    <section
      id="equipo"
      aria-labelledby="equipo-titulo"
      className="bg-teal-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Nuestro equipo</p>
          <h2 id="equipo-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Profesionales que aman a los animales
          </h2>
          <p className="mt-4 inline-flex items-center gap-2 text-base text-slate-700">
            <Award className="size-5 text-cyan-600" aria-hidden="true" />
            Formación universitaria, experiencia clínica y vocación de servicio
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {TEAM.map((group) => (
            <Reveal key={group.title}>
              <div>
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal-900 text-cyan-300">
                      <group.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-2xl font-bold text-teal-950">{group.title}</h3>
                  </div>
                  <p className="max-w-md text-sm text-slate-600">{group.description}</p>
                </div>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.members.map((member) => (
                    <li key={member.name}>
                      <article className="flex h-full items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                        <TeamAvatar name={member.name} />
                        <div className="min-w-0">
                          <h4 className="truncate text-base font-bold text-teal-950">{member.name}</h4>
                          <p className="text-sm text-slate-700">{member.role}</p>
                          {member.credential && (
                            <p className="mt-1 text-xs font-medium text-teal-700">{member.credential}</p>
                          )}
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
