import { CLINIC } from "@/lib/site"

export function Hero() {
  const primaryPhone = CLINIC.phones[0]

  return (
    <>
      <section className="relative overflow-hidden bg-[#2683BA] text-white font-[Nunito,sans-serif]">
        {/* Imagen de fondo del perro */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Perro en portada"
            className="w-full h-full object-cover object-[80%_center] md:object-[right_center]"
          />
        </div>
        <div className="relative z-10 min-h-[650px] md:min-h-[640px] px-[22px] pt-[45px] pb-[350px] md:py-[100px] md:px-[max(5.2%,calc((100%_-_1080px)/2))]">
          <div className="w-full md:w-[47%] max-w-none md:max-w-[520px]">
            <div className="mb-4 md:mb-[26px] text-[9px] md:text-[10px] font-black uppercase tracking-[2px]">
              Amor, salud y confianza
            </div>
            <h1 className="mb-4 md:mb-[26px] text-[30px] leading-[1.12] md:text-[38px] lg:text-[46px] md:leading-[1.15] font-extrabold tracking-[-1px]">
              Clínica Veterinaria Santa Raquel en la Región Metropolitana
            </h1>
            <p className="max-w-[310px] md:max-w-[370px] text-[13px] md:text-[15px] leading-[1.7]">
              Porque tu mascota merece más de ti.
            </p>
            <div className="mt-5 md:mt-[30px] flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white text-[#222] px-[30px] py-[15px] text-[13px] font-extrabold rounded-[28px_28px_4px_28px]"
              >
                Agenda tu cita
              </a>
              <a
                href={primaryPhone.href}
                className="border-b border-white pb-1 text-[13px] font-extrabold"
              >
                Emergencias 24/7
              </a>
            </div>
            <div className="mt-5 md:mt-7 flex items-center gap-[14px]">
              <strong className="text-[27px] font-extrabold">12.000+</strong>
              <span className="text-xs">pacientes felices</span>
            </div>
          </div>
        </div>
      </section>
      {/* barra de urgencias */}
      <aside className="bg-[#124D91] text-white">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-2 px-[22px] py-5 text-[13px] md:flex-row md:items-center md:gap-5 md:px-10">
          <strong>Urgencias 24 horas</strong>
          <span>Contamos con atención inmediata para tu mascota</span>
          <a href={primaryPhone.href} className="font-extrabold md:ml-auto">
            {primaryPhone.display}
          </a>
        </div>
      </aside>
    </>
  )
}
