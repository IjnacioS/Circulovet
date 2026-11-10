export const CLINIC = {
  name: "Círculo Vet",
  fullName: "Círculo Vet / Veterinaria Santa Raquel",
  street: "Sta Raquel 10343",
  postalCode: "8251229",
  district: "La Florida",
  region: "Región Metropolitana",
  phones: [
    { display: "2 2282 1481", href: "tel:+56222821481" },
    { display: "2 2311 3911", href: "tel:+56223113911" },
  ],
  whatsappDisplay: "+569 3875 0455",
  whatsappHref:
    "https://wa.me/56938750455?text=Hola%2C%20quisiera%20agendar%20una%20hora%20para%20mi%20mascota",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Sta%20Raquel%2010343%2C%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile&output=embed",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sta%20Raquel%2010343%2C%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile",
  hours: "Lunes a Domingo, 09:00 a 18:00 hrs",
  emergencyHours: "Urgencias 24 horas, los 7 días de la semana",
} as const

export const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Prevención", href: "#prevencion" },
  { label: "Equipo", href: "#equipo" },
  { label: "Consejos", href: "#consejos" },
  { label: "Contacto", href: "#contacto" },
] as const
