export type AdviceArticle = {
  id: string
  title: string
  category: "Gatos" | "Perros" | "Urgencias" | "Prevención" | "Nutrición" | "Salud Integral"
  readTime: string
  image: string
  imageAlt: string
  excerpt: string
  points: string[]
  closing: string
  importantAlert?: string
}

export const ADVICE_ARTICLES: AdviceArticle[] = [
  {
    id: "banar-gatos",
    title: "¿Se bañan los gatos? Cuándo intervenir y cómo hacerlo sin estrés",
    category: "Gatos",
    readTime: "4 min de lectura",
    image: "https://images.pexels.com/photos/7516099/pexels-photo-7516099.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Persona peinando y acicalando con cuidado a un gato doméstico",
    excerpt: "Los gatos dedican entre el 30% y 50% de sus horas despiertos a acicalarse. Sin embargo, hay situaciones médicas o de suciedad extrema donde el baño es indispensable.",
    points: [
      "Higiene natural y acicalamiento: Su lengua cuenta con papilas cónicas que actúan como cepillo natural. Un gato sano raramente requiere baños frecuentes.",
      "Cuándo sí es necesario: Si entra en contacto con sustancias tóxicas o aceitosas, si tiene problemas de movilidad (obesidad, artrosis) o por prescripción médica (baños medicados con shampoo dermatológico).",
      "Temperatura y ambiente: El agua debe estar tibia (alrededor de 37°C) y el ambiente cerrado y temperado para evitar corrientes de aire.",
      "Productos adecuados: NUNCA utilices jabón o shampoo de humanos; el pH de la piel felina es distinto y los reseca severamente.",
      "Cepillado regular: El mejor sustituto del baño es un cepillado diario o semanal. Previene nudos y disminuye las bolas de pelo (tricobezoares).",
    ],
    closing: "Si tu gato deja de acicalarse o notas su pelaje opaco y pegajoso, agenda un control: suele ser uno de los primeros síntomas de dolor o enfermedad renal.",
    importantAlert: "Nunca apliques pulguicidas de perros a un gato: la permetrina presente en muchos antiparasitarios caninos es mortal para los felinos.",
  },
  {
    id: "pasear-perro",
    title: "¿Cómo pasear a tu perro? Guía para paseos seguros y enriquecedores",
    category: "Perros",
    readTime: "5 min de lectura",
    image: "https://images.pexels.com/photos/38936736/pexels-photo-38936736.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Hombre paseando a su perro con correa y arnés en un parque",
    excerpt: "El paseo diario no es solo para que haga sus necesidades; es su principal momento de estimulación olfativa, socialización y equilibrio emocional.",
    points: [
      "Arnés ergonómico en 'Y': Recomendamos arneses de pecho frente a collares tradicionales de cuello para evitar lesiones traqueales o cervicales ante tirones.",
      "Permite que olfatee: El olfato es el sentido primordial del perro. Permitirle olfatear reduce el cortisol (estrés) y equivale a un gran ejercicio mental.",
      "Largo de correa ideal: Una correa fija de 1.5 a 2 metros entrega libertad y seguridad. Evita correas retráctiles en zonas urbanas por riesgo de cortes o escapes.",
      "Control de temperatura del asfalto: Aplica la 'regla de los 5 segundos': coloca el dorso de tu mano en el pavimento; si quema tu mano, quemará los cojinetes de sus patitas.",
      "Manejo ante imprevistos: Si tu perro se asusta, mantén la calma y háblale con tono seguro. Si se suelta, llámalo con entusiasmo en reversa o agáchate; perseguirlo suele hacer que huya más rápido.",
    ],
    closing: "El paseo fortalece el vínculo afectivo tutor-mascota. Si tu mascota reacciona con miedo o agresividad hacia otros perros, consúltanos sobre manejo conductual y chequeo clínico.",
  },
  {
    id: "golpe-de-calor",
    title: "Golpe de calor en perros y gatos: Detección temprana y qué hacer de urgencia",
    category: "Urgencias",
    readTime: "4 min de lectura",
    image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Perro bebiendo agua fresca en día soleado",
    excerpt: "Los perros y gatos no transpiran como los humanos; regulan su calor mediante el jadeo y almohadillas. Un golpe de calor puede ser mortal en menos de 20 minutos.",
    points: [
      "Razas de alto riesgo (Braquicefálicas): Perros pug, bulldog francés, bulldog inglés y gatos persas tienen vías aéreas estrechas y son sumamente vulnerables.",
      "Signos de alarma inmediata: Jadeo desesperado y ruidoso, encías de color rojo intenso o azuladas, salivación espesa, debilidad en las patas traseras y desorientación.",
      "Primeros auxilios vitales: Traslada de inmediato a la mascota a la sombra o lugar fresco con ventilación. Humedece su cuello, axilas e ingles con agua a temperatura ambiente (NUNCA agua con hielo).",
      "Qué NUNCA hacer: No uses hielo directo ni sumerjas al animal en agua helada; esto produce vasoconstricción que retiene el calor interno en los órganos vitales.",
      "Llévalo a urgencias de inmediato: Aunque parezca recuperarse, el golpe de calor produce daño multiorgánico interno que requiere estabilización médica con fluidoterapia.",
    ],
    closing: "En Círculo Vet contamos con urgencias 24/7 y unidad de cuidados intensivos para asistir inmediatamente cuadros de shock térmico.",
    importantAlert: "NUNCA dejes a una mascota dentro de un automóvil cerrado, ni siquiera por 5 minutos y con la ventana entreabierta.",
  },
  {
    id: "salud-dental",
    title: "Salud dental en mascotas: Por qué el sarro es un riesgo para todo el organismo",
    category: "Prevención",
    readTime: "4 min de lectura",
    image: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Revisión dental y veterinaria de los dientes de un perro",
    excerpt: "Más del 80% de los perros y gatos mayores de 3 años presentan algún grado de enfermedad periodontal. El mal aliento es un signo de infección que no debe normalizarse.",
    points: [
      "Bacterias que viajan por la sangre: La infección bacteriana en las encías puede filtrarse al torrente sanguíneo y causar insuficiencia renal crónica, problemas hepáticos y endocarditis (daño cardíaco).",
      "Síntomas visibles: Encías inflamadas o sangrantes (gingivitis), placa bacteriana marrón/amarillenta sobre los dientes, babeo excesivo o masticar por un solo lado.",
      "Cepillado preventivo: Utiliza cepillos suaves o dedales de silicona con pasta formulada exclusivamente para mascotas (con sabor agradable y apta para ser ingerida).",
      "Juguetes y snacks odontológicos: Masticables de textura específica ayudan mecánicamente a remover residuos y masajear las encías.",
      "Profilaxis dental profesional: Si el sarro ya está consolidado bajo la línea gingival, se requiere un destartraje ultrasónico bajo anestesia monitoreada.",
    ],
    closing: "Una revisión dental durante el chequeo anual te permitirá evitar pérdidas de piezas dentales y proteger la salud de sus órganos vitales.",
  },
  {
    id: "calendario-vacunas",
    title: "Calendario de vacunas y desparasitación: La barrera contra virus mortales",
    category: "Prevención",
    readTime: "5 min de lectura",
    image: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Veterinario aplicando vacuna preventiva a un cachorro",
    excerpt: "La vacunación oportuna es la inversión de salud más efectiva en la vida de tu compañero. Conoce los esquemas clave en Chile para perros y gatos.",
    points: [
      "Esquema inicial en cachorros: Inicia entre las 6 y 8 semanas de vida con vacunas polivalentes (Parvovirus, Distemper, Hepatitis, Parainfluenza) y sus respectivos refuerzos cada 21 a 30 días.",
      "Vacuna antirrábica obligatoria: En Chile, por ley, todo perro y gato debe recibir su vacuna antirrábica a partir de los 2 o 3 meses de edad y reforzarse anualmente.",
      "Gatos de interior también necesitan vacunas: La Triple Felina (Rinotraqueítis, Calicivirus, Panleucopenia) y Leucemia Felina protegen contra virus que los humanos podemos transportar en zapatos o ropa.",
      "Desparasitación interna trimestral: Los parásitos intestinales se transmiten al suelo y pueden transmitirse a niños y adultos (zoonosis). Desparasita cada 3 meses todo el año.",
      "Antiparasitarios externos contra pulgas y garrapatas: Las garrapatas transmiten enfermedades graves como Ehrlichiosis o Anaplasmosis; mantén pipetas o comprimidos vigentes.",
    ],
    closing: "Si tienes dudas sobre qué vacuna le corresponde a tu mascota según su edad, acércate a nuestra clínica con su carnet sanitario para armar su plan al día.",
  },
  {
    id: "cuidados-senior",
    title: "Cuidado de mascotas Senior: Cómo brindar una vejez digna, activa y sin dolor",
    category: "Prevención",
    readTime: "5 min de lectura",
    image: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Perro anciano descansando plácidamente en una alfombra cómoda",
    excerpt: "Un perro entra a su etapa senior alrededor de los 7-8 años (antes en razas gigantes) y un gato a partir de los 8 años. Con cuidados específicos, pueden vivir muchos años plenos.",
    points: [
      "Perfil geriátrico semestral: Exámenes de sangre, perfil bioquímico, ecografía abdominal y urianálisis cada 6 meses permiten diagnosticar a tiempo enfermedad renal y hepática antes de que haya síntomas externos.",
      "Manejo de la osteoartritis y movilidad: Si le cuesta levantarse, evita subir al auto o ya no salta al sillón, no es 'solo vejez'; suele ser dolor articular tratable con condroprotectores, terapia médica o acupuntura.",
      "Monitoreo del consumo de agua: Si tu perro o gato empieza a tomar mucha más agua y a orinar con mayor frecuencia, puede indicar diabetes, enfermedad renal o síndrome de Cushing.",
      "Adaptación del hogar: Coloca alfombras antideslizantes sobre pisos resbalosos, camas ortopédicas mullidas y platos de comida a una altura ergonómica.",
      "Estimulación cognitiva y afecto: Mantener rutinas, paseos suaves adaptados y juegos de olfato previene el síndrome de disfunción cognitiva ('alzheimer canino/felino').",
    ],
    closing: "La vejez no es una enfermedad: es una etapa hermosa que merece comprensión, confort y controles médicos periódicos.",
  },
  {
    id: "alimentos-prohibidos",
    title: "Alimentos humanos prohibidos y tóxicos para perros y gatos",
    category: "Nutrición",
    readTime: "4 min de lectura",
    image: "https://images.pexels.com/photos/5745233/pexels-photo-5745233.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Alimentos e ingredientes frescos en cocina que pueden ser peligrosos para mascotas",
    excerpt: "Compartir un trozo de comida de nuestra mesa puede parecer un acto de cariño, pero muchos alimentos inofensivos para nosotros provocan intoxicaciones severas en mascotas.",
    points: [
      "Chocolate y café (Teobromina y cafeína): Estimulantes que el hígado de perros y gatos no puede metabolizar. Provoca arritmias cardíacas, temblores musculares, convulsiones y la muerte.",
      "Cebolla, ajo y ciboulette: Contienen compuestos sulfóxidos que destruyen los glóbulos rojos, provocando una anemia hemolítica muy grave, incluso en pequeñas cantidades cocinadas.",
      "Uvas y pasas: Altamente nefrotóxicas en perros; una cantidad minúscula puede desencadenar una insuficiencia renal aguda fulminante.",
      "Xilitol (Endulzante artificial): Presente en chicles sin azúcar, pastas dentales humanas y pasteles. Causa una liberación masiva de insulina, hipoglucemia letal y necrosis hepática.",
      "Huesos cocidos: Nunca des huesos de pollo o carne cocinados; se astillan fácilmente perforando el esófago, estómago o intestinos, requiriendo cirugías de emergencia.",
    ],
    closing: "Si sospechas que tu mascota ingirió alguno de estos alimentos, comunícate de inmediato con nuestra urgencia 24/7 sin inducir el vómito por tu cuenta.",
    importantAlert: "Guarda siempre chocolates, frutos secos, medicamentos y endulzantes en muebles altos y bien cerrados fuera de su alcance.",
  },
  {
    id: "senales-dolor-gatos-perros",
    title: "Señales sutiles de dolor: Cómo saber si tu mascota está sufriendo en silencio",
    category: "Salud Integral",
    readTime: "4 min de lectura",
    image: "https://images.pexels.com/photos/7474474/pexels-photo-7474474.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&fit=crop",
    imageAlt: "Gatito mirando con expresión atenta y calmada",
    excerpt: "Por instinto de supervivencia en la naturaleza, los animales ocultan su dolor para no mostrar vulnerabilidad. Aprender a leer su lenguaje corporal es fundamental.",
    points: [
      "Cambios en la postura corporal: Postura encorvada (cifosis), cabeza gacha o mantener la cola entre las patas de forma continua.",
      "Aislamiento y cambio de temperamento: Un gato o perro cariñoso que de pronto se esconde en el clóset, debajo de la cama o gruñe cuando intentas acariciar cierta zona.",
      "Alteración del sueño y descanso: Inquietud al acostarse, dar muchas vueltas sin encontrar posición cómoda o dormir en exceso.",
      "Falta de apetito o rechazo al alimento seco: Frecuente en dolor dental, inflamación de encías, gastritis o dolor abdominal agudo.",
      "Expresión facial (Escala Grimace): Ojos entrecerrados, bigotes caídos hacia adelante o tensión notable en la zona del hocico.",
    ],
    closing: "Nunca automediques a tu mascota con paracetamol, ibuprofeno o aspirina: son tóxicos mortales para perros y gatos. El dolor debe ser diagnosticado y aliviado bajo prescripción veterinaria.",
    importantAlert: "El paracetamol en gatos es letal en dosis mínimas debido a que carecen de la enzima hepática para metabolizarlo.",
  },
]
