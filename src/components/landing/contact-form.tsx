import { useState } from "react"
import type { FormEvent } from "react"
import { CircleCheck, CircleAlert, Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { insertRow } from "@/lib/supabase"

const SUBJECTS = ["Duda", "Sugerencia", "Reclamo"] as const

type FormValues = {
  name: string
  email: string
  phone: string
  subject: (typeof SUBJECTS)[number]
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMPTY_FORM: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "Duda",
  message: "",
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = "Ingresa tu nombre."
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Ingresa un correo válido."
  if (values.phone.trim() && values.phone.trim().length < 8) errors.phone = "Revisa el número de teléfono."
  if (!values.message.trim()) errors.message = "Escribe tu mensaje."
  return errors
}

const FIELD_CLASS =
  "h-11 border-teal-200 bg-white text-teal-950 placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-cyan-400/40"

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const updateField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("sending")
    try {
      await insertRow("contact_messages", {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || null,
        subject: values.subject,
        message: values.message.trim(),
      })
    } catch {
      setStatus("error")
      return
    }
    setValues(EMPTY_FORM)
    setStatus("success")
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5" aria-label="Formulario de contacto">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contacto-nombre" className="text-teal-950">
            Nombre
          </Label>
          <Input
            id="contacto-nombre"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "error-nombre" : undefined}
            className={FIELD_CLASS}
          />
          {errors.name && (
            <p id="error-nombre" className="text-sm font-medium text-rose-700">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contacto-email" className="text-teal-950">
            Email
          </Label>
          <Input
            id="contacto-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={FIELD_CLASS}
          />
          {errors.email && (
            <p id="error-email" className="text-sm font-medium text-rose-700">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contacto-telefono" className="text-teal-950">
            Teléfono <span className="font-normal text-slate-500">(opcional)</span>
          </Label>
          <Input
            id="contacto-telefono"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-telefono" : undefined}
            className={FIELD_CLASS}
          />
          {errors.phone && (
            <p id="error-telefono" className="text-sm font-medium text-rose-700">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contacto-asunto" className="text-teal-950">
            Asunto
          </Label>
          <select
            id="contacto-asunto"
            name="subject"
            value={values.subject}
            onChange={(e) => updateField("subject", e.target.value as FormValues["subject"])}
            className="flex h-11 w-full rounded-md border border-teal-200 bg-white px-3 text-sm text-teal-950 outline-none transition-colors focus-visible:border-cyan-500 focus-visible:ring-[3px] focus-visible:ring-cyan-400/40"
          >
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contacto-mensaje" className="text-teal-950">
          Mensaje
        </Label>
        <Textarea
          id="contacto-mensaje"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "error-mensaje" : undefined}
          className="border-teal-200 bg-white text-teal-950 placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-cyan-400/40"
        />
        {errors.message && (
          <p id="error-mensaje" className="text-sm font-medium text-rose-700">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-full bg-cyan-400 text-base font-bold text-teal-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto sm:px-10"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="size-5" aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            <CircleCheck className="size-5" aria-hidden="true" />
            ¡Gracias! Recibimos tu mensaje y te responderemos a la brevedad.
          </p>
        )}
        {status === "error" && (
          <p className="inline-flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800">
            <CircleAlert className="size-5" aria-hidden="true" />
            No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  )
}
