import { Reveal } from "@/components/landing/reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type PlanRow = {
  period: string
  control: string
  detail: string
}

const DOG_PLAN: PlanRow[] = [
  {
    period: "6 a 8 semanas",
    control: "Primera vacuna y desparasitación",
    detail: "Inicio del esquema de vacunas polivalentes y primer tratamiento contra parásitos internos.",
  },
  {
    period: "3 meses",
    control: "Refuerzo y vacuna antirrábica",
    detail: "Refuerzo de la polivalente y primera dosis contra la rabia, obligatoria en Chile.",
  },
  {
    period: "Cada 3 meses",
    control: "Antiparasitarios",
    detail: "Control de parásitos internos y externos como pulgas y garrapatas durante todo el año.",
  },
  {
    period: "Cada año",
    control: "Control general y refuerzos",
    detail: "Examen físico completo, revisión dental y refuerzo anual de vacunas.",
  },
  {
    period: "Desde los 7 años",
    control: "Control senior semestral",
    detail: "Exámenes de sangre y orina, control de peso y evaluación temprana de enfermedades crónicas.",
  },
]

const CAT_PLAN: PlanRow[] = [
  {
    period: "Cada año",
    control: "Vacuna triple felina y antirrábica",
    detail: "Protección anual contra las enfermedades virales más frecuentes y contra la rabia.",
  },
  {
    period: "Cada 3 meses",
    control: "Desparasitación",
    detail: "Control de parásitos internos y pulguicida, incluso en gatos que viven dentro de casa.",
  },
  {
    period: "Cada año",
    control: "Control general y dental",
    detail: "Revisión completa de peso, corazón, pelaje y dentadura para prevenir problemas a tiempo.",
  },
  {
    period: "Desde los 8 años",
    control: "Control senior semestral",
    detail: "Análisis de sangre, presión arterial y función renal y tiroidea cada seis meses.",
  },
]

function PlanTable({ rows, caption }: { rows: PlanRow[]; caption: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
      <Table>
        <caption className="sr-only">{caption}</caption>
        <TableHeader className="bg-teal-900 hover:bg-teal-900">
          <TableRow className="border-0 hover:bg-teal-900">
            <TableHead scope="col" className="h-12 px-6 text-sm font-semibold text-cyan-200">
              Frecuencia
            </TableHead>
            <TableHead scope="col" className="h-12 px-6 text-sm font-semibold text-cyan-200">
              Control
            </TableHead>
            <TableHead scope="col" className="hidden h-12 px-6 text-sm font-semibold text-cyan-200 md:table-cell">
              Qué incluye
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.control} className="border-teal-100 transition-colors hover:bg-cyan-50/60">
              <TableCell className="whitespace-normal px-6 py-4 align-top">
                <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-900">
                  {row.period}
                </span>
              </TableCell>
              <TableCell className="whitespace-normal px-6 py-4 align-top font-bold text-teal-950">
                {row.control}
                <p className="mt-1 text-sm font-normal text-slate-700 md:hidden">{row.detail}</p>
              </TableCell>
              <TableCell className="hidden whitespace-normal px-6 py-4 align-top text-sm leading-relaxed text-slate-700 md:table-cell">
                {row.detail}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function PreventivePlan() {
  return (
    <section id="prevencion" aria-labelledby="prevencion-titulo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Plan preventivo</p>
          <h2 id="prevencion-titulo" className="mt-3 text-4xl font-bold text-teal-950 sm:text-5xl">
            Prevenir es mejor que lamentar: Tu Mascota Sana
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Un plan de salud preventivo permite detectar a tiempo problemas que, si se descubren tarde, son más
            difíciles y costosos de tratar. Vacunas, desparasitación y controles periódicos son la base de una vida
            larga y feliz.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <Tabs defaultValue="perro" className="mt-12">
            <TabsList className="mx-auto flex h-auto w-full max-w-md gap-2 rounded-full bg-teal-50 p-1.5">
              <TabsTrigger
                value="perro"
                className="flex-1 rounded-full py-2.5 text-sm font-semibold text-teal-900 data-[state=active]:bg-teal-900 data-[state=active]:text-white sm:text-base"
              >
                Cuidados Perro
              </TabsTrigger>
              <TabsTrigger
                value="gato"
                className="flex-1 rounded-full py-2.5 text-sm font-semibold text-teal-900 data-[state=active]:bg-teal-900 data-[state=active]:text-white sm:text-base"
              >
                Gato Adulto/Senior
              </TabsTrigger>
            </TabsList>

            <TabsContent value="perro" className="mt-8 outline-none">
              <PlanTable rows={DOG_PLAN} caption="Calendario de vacunas y controles para perros" />
            </TabsContent>
            <TabsContent value="gato" className="mt-8 outline-none">
              <PlanTable rows={CAT_PLAN} caption="Calendario de vacunas y controles para gatos adultos y senior" />
            </TabsContent>
          </Tabs>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
            Este calendario es referencial. Tu veterinario define el plan exacto según la edad, el estado de salud y el
            estilo de vida de tu mascota.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
