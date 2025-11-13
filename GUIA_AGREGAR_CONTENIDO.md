# 📖 Guía: Cómo Agregar Proyectos y Blogs

## 🎯 Ubicación del archivo de datos

Todos tus datos están centralizados en un solo archivo:
```
src/data/portfolioData.js
```

Este archivo contiene toda la información de tu portfolio. ¡Solo necesitas editar este archivo!

---

## 📌 1. AGREGAR UN NUEVO PROYECTO

### Paso 1: Abre el archivo `portfolioData.js`

Busca la sección `projects`:

```javascript
projects: [
    {
      id: 1,
      title: "Sistema de Automatización n8n",
      description: "...",
      // ...
    },
    {
      id: 2,
      // ...
    }
]
```

### Paso 2: Copia este template y agrégalo al final del array `projects`:

```javascript
{
  id: 4,                                    // ← Incrementa el número del último proyecto
  title: "Tu Título del Proyecto",
  description: "Descripción breve del proyecto",
  image: "/projects/placeholder-4.png",     // ← Ruta a tu imagen (opcional)
  technologies: ["Tecnología1", "Tecnología2", "Tecnología3"],
  link: "https://github.com/hugocabero/tu-proyecto",
  details: "Descripción más detallada que aparece al hover"
}
```

### Ejemplo Real:

```javascript
{
  id: 4,
  title: "App de Gestión de Tareas",
  description: "Aplicación web para gestionar tareas colaborativas en tiempo real",
  image: "/projects/task-app.png",
  technologies: ["React", "Firebase", "Tailwind CSS"],
  link: "https://github.com/hugocabero/task-app",
  details: "Permite crear, editar, compartir tareas con notificaciones en tiempo real"
}
```

### Paso 3: Agregar imagen del proyecto (OPCIONAL)

1. Coloca tu imagen en: `public/projects/` con nombre `task-app.png`
2. Actualiza la ruta en `image: "/projects/task-app.png"`

Si NO tienes imagen, deja el valor por defecto y se mostrará un placeholder.

---

## 📝 2. AGREGAR UN NUEVO ARTÍCULO DE BLOG

### Paso 1: Abre `portfolioData.js`

Busca la sección `blog`:

```javascript
blog: [
    {
      id: 1,
      title: "Guía Completa: Automatización con n8n y IA",
      // ...
    }
]
```

### Paso 2: Copia este template al final:

```javascript
{
  id: 4,                                           // ← Nuevo ID
  title: "Tu Título del Artículo",
  excerpt: "Resumen breve del artículo (max 150 caracteres)",
  date: "20 Nov 2024",                            // ← Fecha de publicación
  category: "Tu Categoría",                       // ← Ej: "Automatización", "Gestión", "Datos"
  readTime: "5 min",                              // ← Tiempo de lectura estimado
  link: "#blog/articulo-4"                        // ← Enlace al artículo
}
```

### Ejemplo Real:

```javascript
{
  id: 4,
  title: "El Futuro de la IA en la Gestión Empresarial",
  excerpt: "Cómo la inteligencia artificial está transformando la manera en que gestionamos empresas",
  date: "18 Nov 2024",
  category: "Inteligencia Artificial",
  readTime: "12 min",
  link: "#blog/articulo-4"
}
```

---

## 🔧 3. CAMPOS EXPLICADOS

### Proyectos:
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | número | ID único (1, 2, 3, 4...) |
| `title` | texto | Título del proyecto |
| `description` | texto | Descripción corta (1-2 líneas) |
| `image` | URL | Ruta de la imagen |
| `technologies` | array | Lista de tecnologías usadas |
| `link` | URL | Enlace a GitHub o al proyecto |
| `details` | texto | Descripción larga (aparece al hover) |

### Blog:
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | número | ID único |
| `title` | texto | Título del artículo |
| `excerpt` | texto | Resumen breve (máx. 150 caracteres) |
| `date` | texto | Fecha (formato: "DD Mon YYYY") |
| `category` | texto | Categoría: "Automatización", "Gestión", "IA", "Datos" |
| `readTime` | texto | Tiempo estimado (ej: "5 min", "8 min") |
| `link` | URL | Enlace al artículo completo |

---

## 📊 4. ACTUALIZAR OTRAS SECCIONES

### Cambiar tu nombre, email o enlaces:
Edita estos campos en la raíz del archivo:
```javascript
export const portfolioData = {
  name: "Hugo Cabero Creus",
  title: "Ingeniero de la Empresa",
  email: "hugo.cabero@example.com",      // ← Cambia aquí
  phone: "+34 XXX XX XX XX",             // ← Tu teléfono
  github: "https://github.com/hugocabero",  // ← Tu GitHub
  linkedin: "https://linkedin.com/in/...", // ← Tu LinkedIn
  // ...
}
```

### Cambiar descripción "Sobre Mí":
```javascript
about: {
  description: "Tu nueva descripción aquí...",
  highlights: [
    "Logro 1",
    "Logro 2",
    "Logro 3",
    "Logro 4"
  ]
}
```

### Agregar una certificación:
```javascript
certifications: [
  { name: "Tu Certificación", issuer: "Plataforma", date: "2024", link: "#" },
  // Añade más...
]
```

---

## 💾 5. GUARDAR CAMBIOS

Una vez que edites `portfolioData.js`:

1. **Guarda el archivo** (Ctrl+S o Cmd+S)
2. **El navegador se actualizará automáticamente** (Hot Reload)
3. ¡Listo! Tus cambios aparecerán en vivo en http://localhost:5174

---

## ✨ 6. ESTRUCTURA RECOMENDADA

### Para Proyectos:
- Mantén un máximo de **6-8 proyectos destacados**
- Agrupa por áreas: "Automatización", "Análisis de Datos", "Gestión"

### Para Blog:
- Escribe sobre temas relevantes a tu carrera
- Categorías recomendadas:
  - 🤖 Inteligencia Artificial
  - ⚙️ Automatización
  - 📊 Análisis de Datos
  - 📈 Gestión Empresarial
  - 🔧 Herramientas

### Ejemplos de categorías de proyectos:
```javascript
technologies: [
  "n8n",           // Si es de automatización
  "RStudio",       // Si es de análisis
  "React",         // Si es web
  "ERP",           // Si es empresarial
  "Python",        // Si es de scripting
  "SQL",           // Si usa bases de datos
]
```

---

## 🎨 7. PERSONALIZACIÓN AVANZADA

Si quieres cambiar **colores**, edita `src/index.css`:

```css
:root {
  --primary-dark: #001a4d;      /* Azul oscuro */
  --primary-medium: #003d99;    /* Azul medio */
  --accent-blue: #0052cc;       /* Azul acento */
  --white: #ffffff;
  /* ... */
}
```

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Cómo agrego una imagen a mis proyectos?**
R: Coloca la imagen en `public/projects/` y actualiza el campo `image` en el proyecto.

**P: ¿Qué ocurre si no agrego una imagen?**
R: Se mostrará un placeholder con el nombre del proyecto.

**P: ¿Puedo cambiar el orden de los proyectos?**
R: Sí, solo reordena el array `projects`. El primero aparecerá primero.

**P: ¿Cómo vinculo mi artículo de blog real?**
R: Cambia `link: "#blog/articulo-4"` por la URL real del artículo.

**P: ¿Debo hacer build para ver los cambios?**
R: No, Vite actualiza automáticamente. Solo guarda y recarga la página.

---

## 🚀 PRÓXIMOS PASOS

1. Agrega tus 3-5 proyectos destacados
2. Escribe 2-3 artículos de blog
3. Actualiza tus enlaces de GitHub y LinkedIn
4. Agrega una foto de perfil (cambia el placeholder "HC")
5. ¡Comparte tu portfolio con empresas! 💼

---

## 📞 CONTACTO EN PORTFOLIO

Los campos de contacto ya están configurados. Solo actualiza:
- **Email**: Tu email
- **Teléfono**: Tu número
- **GitHub**: Tu perfil GitHub
- **LinkedIn**: Tu perfil LinkedIn

¡Tu portfolio está listo para impresionar a las empresas! 🎯
