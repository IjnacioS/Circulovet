export type TeamMember = {
  name: string
  role: string
  credential?: string
  specialty?: string
  experience?: string
  bio?: string
}

export type TeamGroup = {
  id: string
  title: string
  description: string
  members: TeamMember[]
}

export const TEAM_GROUPS: TeamGroup[] = [
  {
    id: "veterinarios",
    title: "Médicos Veterinarios",
    description: "Profesionales con formación universitaria de excelencia, posgrados y amplia experiencia en medicina interna, cirugía y urgencias de pequeños animales.",
    members: [
      {
        name: "Dr. Cristian Roman Marchant",
        role: "Médico Veterinario",
        credential: "Magíster en Ciencias Veterinarias, UST",
        specialty: "Medicina Interna y Diagnóstico Clínico",
        experience: "Más de 15 años de trayectoria",
        bio: "Lidera el equipo médico con dedicación al diagnóstico complejo y manejo de pacientes críticos en hospitalización.",
      },
      {
        name: "Dra. Natalia Cid Jara",
        role: "Médica Veterinaria",
        credential: "Universidad de Concepción",
        specialty: "Cirugía General y Tejidos Blandos",
        experience: "Especialista en procedimientos quirúrgicos",
        bio: "Comprometida con los más altos estándares de anestesia y recuperación postoperatoria para cada paciente.",
      },
      {
        name: "Dra. Aline Campos Grimberg",
        role: "Médica Veterinaria",
        credential: "Universidad Santo Tomás",
        specialty: "Medicina Felina y Prevención",
        experience: "Certificada en manejo Cat Friendly",
        bio: "Enfocada en el bienestar de felinos y caninos, con énfasis en consultas sin estrés y medicina preventiva.",
      },
      {
        name: "Dr. Johan Flández Olabé",
        role: "Médico Veterinario",
        credential: "Médico Veterinario Colegiado",
        specialty: "Urgencias 24/7 y Pacientes Críticos",
        experience: "Atención intensiva y emergencias",
        bio: "Especializado en estabilización rápida, terapia de oxígeno y manejo clínico de emergencias las 24 horas.",
      },
      {
        name: "Dra. Lilia Lorca Pérez",
        role: "Médica Veterinaria",
        credential: "Universidad de Chile, Diplomada",
        specialty: "Dermatología y Medicina Preventiva",
        experience: "Diplomada en medicina de pequeños animales",
        bio: "Experta en el diagnóstico de alergias, problemas de piel y planes geriátricos para mascotas senior.",
      },
    ],
  },
  {
    id: "tecnicos",
    title: "Equipo Técnico Veterinario",
    description: "Técnicos dedicados 24/7 a la monitorización, administración de tratamientos, apoyo en pabellón quirúrgico y cuidado compasivo durante la hospitalización.",
    members: [
      {
        name: "Fabiola Navarro",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Hospitalización y Cuidados Intensivos",
      },
      {
        name: "Paulina Campos",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Asistencia Quirúrgica y Pabellón",
      },
      {
        name: "Tamara Becerra",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Procedimientos Ambulatorios y Toma de Muestras",
      },
      {
        name: "Margarita Salvo",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Monitoreo y Terapia de Pacientes Críticos",
      },
      {
        name: "Alinne Quintana",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Cuidados Postoperatorios y Medicación",
      },
      {
        name: "Anyel Castillo",
        role: "Técnico Veterinario",
        credential: "DUOC UC",
        specialty: "Atención y Hospitalización de Urgencias",
      },
    ],
  },
  {
    id: "recepcion",
    title: "Recepción y Atención al Cliente",
    description: "El primer rostro y voz que te acompaña al llegar a Círculo Vet. Guiamos tu visita con calidez, agilidad y empatía.",
    members: [
      {
        name: "Lorena Cornejo",
        role: "Recepcionista y Coordinación Clínica",
        specialty: "Gestión de citas y atención al tutor",
      },
      {
        name: "Angelina Morales",
        role: "Recepcionista y Farmacia",
        specialty: "Atención presencial y entrega de fármacos",
      },
      {
        name: "Miyossy Hernandez",
        role: "Recepcionista y Triaje Inicial",
        specialty: "Orientación en recepción y urgencias",
      },
    ],
  },
]
