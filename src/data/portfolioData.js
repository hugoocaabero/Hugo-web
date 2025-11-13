export const portfolioData = {
  name: "Hugo Cabero Creus",
  title: "Estudiante de Ingeniería de la Empresa",
  email: "hugo.cabero.01@uie.edu",
  phone: "+34 684 205 214",
  location: "La Coruña, España",
  nationality: "Española",
  github: "https://github.com/hugoocaabero",
  linkedin: "",
  profileImage: "/images/profile.png",

  about: {
    title: "Perfil Profesional",
    description:
      "Estudiante de cuartor año de Ingeniería de la Empresa en la Universidad Intercontinental de la Empresa (UIE). Busca una primera oportunidad profesional para aplicar conocimientos, ganar experiencia y aportar desde el primer día. Formación previa en el Liceo La Paz y curso de inglés en Irlanda.",
    highlights: []
  },

  education: [
    {
      id: 1,
      school: "Universidad Intercontinental de la Empresa (UIE)",
      degree: "Grado en Ingeniería de la Empresa",
      year: "2022 - Presente",
      description: "Actualmente curso el cuarto año de Ingeniería de la Empresa en la Universidad Intercontinental de la Empresa (UIE)."
    },
    {
      id: 2,
      school: "Liceo La Paz",
      degree: "Bachillerato Científico",
      year: "2020 - 2022",
      description: "Finalicé mi formación escolar en el Liceo La Paz y realicé un curso de inglés en Irlanda."
    }
  ],

  skills: {
    hardSkills: [
      "RStudio",
      "ERP",
      "Hojas de Cálculo",
      "LaTeX",
      "Github Copilot",
      "ChatGPT",
      "Automatización de procesos con IA",
      "n8n",
      "Manejo básico de herramientas de IA",
      "Informática básica",
      "Manejo de redes sociales"
    ],
    knowledgeAreas: [
      "Análisis de datos",
      "Gestión de proyectos",
      "Análisis Estratégico y Económico",
      "Metodologías Ágiles",
      "Gestión Logística",
      "Desarrollo Sostenible"
    ],
    softSkills: [
      "Trabajo en equipo",
      "Habilidades interpersonales",
      "Pensamiento crítico",
      "Resolución de problemas",
      "Creatividad"
    ]
  },

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Gallego", level: "Nativo" },
    { name: "Inglés", level: "B2 IELTS - 5,5" }
  ],

  hobbies: ["Fútbol", "Finanzas", "Inversiones"],

  projects: [
    {
      id: 1,
      title: "Control de Subway Surfers con la Cabeza",
      description: "Controla Subway Surfers moviendo la cabeza usando MediaPipe Pose y OpenCV.",
      details: "Detecta la posición de la nariz para mapear movimientos (saltar, deslizar, cambiar de carril) a teclas del emulador mediante PyAutoGUI. Incluye calibración, ajuste de sensibilidad y consejos para una detección estable.",
      technologies: ["Python", "MediaPipe Pose", "OpenCV", "PyAutoGUI"],
      link: "https://github.com/hugoocaabero/subway_surfers"
    },
    {
      id: 2,
      title: "Piedra, Papel o Tijeras por Visión",
      description: "Juega RPS con tu mano: detección con MediaPipe Hands y OpenCV.",
      details: "Clasifica gestos de mano (puño, mano abierta, tijeras) desde la webcam. Incluye un oponente con IA sencilla que aprende de tus jugadas y genera un registro CSV de partidas.",
      technologies: ["Python", "MediaPipe Hands", "OpenCV"],
      link: "https://github.com/hugoocaabero/rps"
    }
  ],
  blog: [],
  experience: [],
  certifications: []
};
