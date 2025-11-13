# 📝 EJEMPLOS DE CÓMO LLENAR portfolioData.js

## Ubicación del archivo
```
src/data/portfolioData.js
```

---

## 📋 EJEMPLO COMPLETO

### 1. INFORMACIÓN BÁSICA

```javascript
export const portfolioData = {
  name: "Hugo Cabero Creus",
  title: "Ingeniero de la Empresa",
  email: "hugo.cabero@empresa.com",        // ← Tu email
  phone: "+34 634 56 78 90",               // ← Tu teléfono
  location: "Barcelona, España",
  github: "https://github.com/hugocabero",  // ← Tu GitHub
  linkedin: "https://linkedin.com/in/hugo-cabero-creus/", // ← Tu LinkedIn
```

---

## 🎯 2. PROYECTOS - EJEMPLOS REALES

### Ejemplo 1: Proyecto de Automatización
```javascript
{
  id: 1,
  title: "Sistema de Automatización n8n para ERP",
  description: "Desarrollé flujos de trabajo automatizados que integran varios sistemas empresariales, reduciendo tiempo manual en un 60%",
  image: "/projects/n8n-automation.png",
  technologies: ["n8n", "Integración APIs", "IA", "JavaScript"],
  link: "https://github.com/hugocabero/n8n-automation",
  details: "Sistema modular que automatiza procesos de facturación, gestión de inventario e informes empresariales con inteligencia artificial"
}
```

### Ejemplo 2: Análisis de Datos
```javascript
{
  id: 2,
  title: "Dashboard de KPIs Empresariales",
  description: "Dashboard interactivo que visualiza métricas clave de negocio en tiempo real usando R y RStudio",
  image: "/projects/dashboard-kpis.png",
  technologies: ["RStudio", "ggplot2", "Shiny", "SQL"],
  link: "https://github.com/hugocabero/kpi-dashboard",
  details: "Análisis de 50K+ registros de ventas con visualizaciones automáticas actualizadas diariamente"
}
```

### Ejemplo 3: Proyecto Web
```javascript
{
  id: 3,
  title: "Plataforma de Gestión de Proyectos Ágil",
  description: "Aplicación web colaborativa para equipos usando metodología Scrum/Kanban",
  image: "/projects/agile-platform.png",
  technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  link: "https://github.com/hugocabero/agile-platform",
  details: "Plataforma SaaS con 50+ usuarios activos, integraciones GitHub y notificaciones en tiempo real"
}
```

### Ejemplo 4: Tu Primer Proyecto
```javascript
{
  id: 4,
  title: "Aplicación de Control de Presupuesto",
  description: "Herramienta para gestionar y controlar presupuestos de proyectos",
  image: "/projects/budget-control.png",
  technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
  link: "https://github.com/hugocabero/budget-control",
  details: "Aplicación que permite crear presupuestos, rastrear gastos y generar reportes mensuales"
}
```

---

## 📚 3. BLOG - EJEMPLOS DE ARTÍCULOS

### Ejemplo 1: Técnico
```javascript
{
  id: 1,
  title: "Guía Completa: Automatización con n8n y IA",
  excerpt: "Aprende paso a paso cómo crear flujos de trabajo automatizados que integran inteligencia artificial para optimizar procesos empresariales",
  date: "15 Nov 2024",
  category: "Automatización",
  readTime: "12 min",
  link: "https://tusitio.com/blog/n8n-ia-guia"  // O un link interno
}
```

### Ejemplo 2: Gestión
```javascript
{
  id: 2,
  title: "Metodologías Ágiles en Ingeniería de la Empresa",
  excerpt: "Cómo implementar Scrum y Kanban para mejorar la eficiencia en la gestión de proyectos empresariales",
  date: "10 Nov 2024",
  category: "Gestión",
  readTime: "8 min",
  link: "https://tusitio.com/blog/metodologias-agiles"
}
```

### Ejemplo 3: Análisis
```javascript
{
  id: 3,
  title: "Análisis de Datos con RStudio: Casos Prácticos",
  excerpt: "Casos reales de análisis de datos empresariales: visualizaciones impactantes, estadística descriptiva y predicciones",
  date: "05 Nov 2024",
  category: "Análisis de Datos",
  readTime: "15 min",
  link: "https://tusitio.com/blog/rstudio-casos"
}
```

### Ejemplo 4: Transformación Digital
```javascript
{
  id: 4,
  title: "La Transformación Digital en Pequeñas Empresas",
  excerpt: "Estrategias prácticas para digitalizar procesos en pequeñas y medianas empresas sin invertir grandes presupuestos",
  date: "01 Nov 2024",
  category: "Transformación Digital",
  readTime: "10 min",
  link: "https://tusitio.com/blog/transformacion-digital"
}
```

---

## 👔 4. EXPERIENCIA - EJEMPLOS

### Durante Carrera
```javascript
{
  id: 1,
  company: "Empresa XYZ (Prácticas)",
  position: "Analista de Procesos Junior",
  duration: "Septiembre 2024 - Presente",
  description: "Análisis y optimización de procesos empresariales con automatización",
  achievements: [
    "Implementé 3 procesos automatizados con n8n",
    "Reducí tiempos de procesamiento un 45%",
    "Creé dashboard de KPIs para gestión"
  ]
}
```

### Proyecto Académico
```javascript
{
  id: 2,
  company: "Universidad XYZ",
  position: "Desarrollador - Proyecto de Innovación",
  duration: "Enero 2024 - Junio 2024",
  description: "Proyecto de fin de semestre: plataforma de gestión empresarial",
  achievements: [
    "Lideré equipo de 4 personas",
    "Obtuvimos calificación 9.5/10",
    "Presentamos en feria de innovación universitaria"
  ]
}
```

---

## 🎓 5. EDUCACIÓN - EJEMPLOS

```javascript
{
  id: 1,
  school: "Universidad XYZ",
  degree: "Grado en Ingeniería de la Empresa",
  field: "Especialización: Transformación Digital y Sistemas de Información",
  year: "2021 - 2025",
  description: "Cuarto curso. Enfocado en ERP, automatización y análisis de datos empresarial. GPA: 8.5/10"
}
```

---

## 🏆 6. CERTIFICACIONES - EJEMPLOS

```javascript
certifications: [
  { 
    name: "Certificación Profesional n8n", 
    issuer: "n8n Academy", 
    date: "Octubre 2024", 
    link: "https://certificado.n8n.com/..." 
  },
  { 
    name: "Scrum Master Certified", 
    issuer: "Scrum.org", 
    date: "Agosto 2024", 
    link: "https://certificado.scrum.org/..." 
  },
  { 
    name: "Curso: Análisis de Datos con R", 
    issuer: "DataCamp", 
    date: "Junio 2024", 
    link: "https://datacamp.com/..." 
  }
]
```

---

## 🎨 7. HABILIDADES - YA ESTÁN INCLUIDAS

Las habilidades que incluiste están perfectamente organizadas:

### Hard Skills (Ya configurado)
```javascript
hardSkills: [
  { category: "Ofimática", skills: ["Word", "Excel", "PowerPoint", "Google Workspace"] },
  { category: "Datos y Análisis", skills: ["Análisis de datos", "RStudio", "Power BI"] },
  { category: "Automatización", skills: ["n8n", "Flujos de trabajo", "IA"] },
  { category: "Sistemas Empresariales", skills: ["ERP", "Sistemas de información"] },
  { category: "Gestión", skills: ["Agile", "Scrum", "Kanban"] },
  { category: "Herramientas", skills: ["GitHub Copilot", "LaTeX", "IA"] }
]
```

### Soft Skills (Ya configurado)
```javascript
softSkills: [
  "Trabajo en equipo",
  "Resolución de problemas",
  "Pensamiento crítico",
  "Creatividad",
  "Comunicación efectiva",
  "Liderazgo"
]
```

---

## 📋 PLANTILLA LISTA PARA COPIAR

```javascript
// NUEVO PROYECTO
{
  id: X,                          // Incrementa el número
  title: "Tu Título",
  description: "Descripción corta 1-2 líneas",
  image: "/projects/proyecto-X.png",
  technologies: ["Tech1", "Tech2", "Tech3"],
  link: "https://github.com/usuario/repo",
  details: "Descripción más larga (aparece al hover)"
}

// NUEVO ARTÍCULO BLOG
{
  id: X,
  title: "Tu Título del Artículo",
  excerpt: "Resumen breve (máximo 150 caracteres)",
  date: "DD Mon 2024",
  category: "Categoría",
  readTime: "X min",
  link: "#blog/articulo-X"
}
```

---

## ✅ VERIFICACIÓN ANTES DE GUARDAR

- [ ] IDs únicos (no repetidos)
- [ ] URLs válidas en links
- [ ] Sin caracteres especiales problemáticos
- [ ] Fechas en formato correcto
- [ ] Descripciones sin erratas
- [ ] Tecnologías actualizadas

---

## 💾 GUARDAR Y VER CAMBIOS

1. Guarda el archivo (Ctrl+S)
2. El navegador se actualiza automáticamente
3. ¡Listo!

---

## 🎯 ORDEN RECOMENDADO

1. Primero: Llena tu información básica
2. Segundo: Agrega 3-5 proyectos (lo más importante)
3. Tercero: Escribe 2-3 blogs (demuestra expertise)
4. Cuarto: Añade experiencia y educación
5. Quinto: Deploy y comparte

¡Suerte! 🚀
