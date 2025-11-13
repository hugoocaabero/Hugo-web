# 🚀 GUÍA DE DESPLIEGUE - PONER TU PORTFOLIO ONLINE

Tu portfolio está listo. Ahora aprende cómo ponerlo online en 5 minutos.

---

## 🎯 OPCIÓN RECOMENDADA: VERCEL

**Ventajas:**
- ✅ Gratis
- ✅ Muy rápido
- ✅ Certificado HTTPS automático
- ✅ Deploy automático desde GitHub

### Pasos:

1. **Sube a GitHub** (si no lo has hecho)
   ```bash
   cd Hugo-web
   git init
   git add .
   git commit -m "Initial commit: Portfolio"
   git remote add origin https://github.com/tuusuario/hugo-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Ve a Vercel.com**
   - Click en "New Project"
   - Conecta tu GitHub
   - Selecciona el repositorio `hugo-portfolio`
   - Click "Import"
   - ✅ ¡Listo! Vercel detecta Vite automáticamente

3. **Tu URL será:**
   ```
   https://hugo-portfolio-XXX.vercel.app
   ```

4. **Dominio personalizado (opcional)**
   - En settings de Vercel → Domains
   - Agrega tu dominio (hugo.dev, hugocabero.com, etc)

---

## 🌐 OPCIÓN 2: NETLIFY

**Ventajas:**
- Gratis
- Interfaz intuitiva
- Actualizaciones automáticas

### Pasos:

1. Sube a GitHub (igual que Vercel)

2. Ve a **Netlify.com**
   - Click "New site from Git"
   - Selecciona GitHub
   - Elige el repositorio

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. Click Deploy
   - Tu URL: `https://tuportfolio-random.netlify.app`

---

## 📦 OPCIÓN 3: GITHUB PAGES

**Ventajas:**
- Todo en un solo lugar
- URL: `https://tuusuario.github.io`

### Pasos:

1. En tu `package.json`, añade:
   ```json
   "homepage": "https://tuusuario.github.io/hugo-portfolio"
   ```

2. Instala gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Agrega scripts en `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Tu URL: `https://tuusuario.github.io/hugo-portfolio`

---

## 🔄 FLUJO DE ACTUALIZACIÓN

Después de deployar, si haces cambios:

### Con Vercel/Netlify:
```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
# ¡Automáticamente se deploya!
```

### Con GitHub Pages:
```bash
git push origin main
npm run deploy
```

---

## ✅ CHECKLIST PRE-DEPLOYMENT

- [ ] Edita `portfolioData.js` con tu info
- [ ] Agrega 3-5 proyectos
- [ ] Escribe 2-3 artículos
- [ ] Verifica todos los links funcionan
- [ ] Prueba en móvil (npm run dev)
- [ ] Sin errores en consola
- [ ] Imagen de perfil actualizada

---

## 🎨 DOMINIO PERSONALIZADO

Una vez online, puedes agregar dominio propio:

### Opciones:
1. **Gratis**: `.tk`, `.ml` (Freenom)
2. **Barato**: `.dev` ($12/año), `.com` ($10/año) - Namecheap, GoDaddy

### Configuración:
1. Compra dominio
2. En tu host (Vercel/Netlify) → Domains
3. Añade nameservers del registrador
4. Espera 24-48 horas para propagación

**Resultado:**
```
https://hugocabero.dev
https://hugo-cabero-creus.com
```

---

## 📊 ESTADÍSTICAS DESPUÉS DE DEPLOY

Con Vercel Analytics puedes ver:
- Visitantes
- Tiempo de carga
- Países
- Dispositivos

---

## 🔒 DOMINIO + EMAIL

**Profesional:**
```
Tu Portfolio: https://hugocabero.dev
Tu Email: hugo@hugocabero.dev  (más impactante que Gmail)
```

Algunos registradores ofrecen email gratis.

---

## 🚨 TROUBLESHOOTING DEPLOY

### Build falla
```bash
npm run lint      # Revisa errores
npm run build     # Construye localmente
```

### Página blanca
- Limpia caché del navegador
- Verifica console (F12)
- Reconstruye en Vercel/Netlify

### Cambios no aparecen
- Limpia caché (Ctrl+Shift+R)
- Espera a que termine el build
- Verifica en settings

---

## 📈 DESPUÉS DE DESPLEGAR

1. **Comparte URL**
   - LinkedIn
   - GitHub
   - Email a empresas
   - Redes sociales

2. **Actualiza CV**
   - Portfolio link prominente
   - Tu URL en contacto

3. **Monitorea**
   - Cómo llegan visitantes
   - Qué secciones ven
   - Optimiza según datos

---

## 💡 TIPS FINALES

- **Mantén actualizado**: Blog posts nuevos cada mes
- **Proyectos**: Añade nuevos conforme hagas
- **Performance**: Vercel es MUY rápido
- **SEO**: Optimiza meta tags si quieres ranking
- **Analytics**: Instala Google Analytics si quieres

---

## 🎯 META FINAL

**Tu portfolio online + profesional ahora mismo = mucho más probable conseguir prácticas** 

Empresas buscan candidatos proactivos. Un portfolio demuestra:
✅ Iniciativa
✅ Habilidades técnicas
✅ Comunicación
✅ Dedicación

---

## 📞 RESUMEN RÁPIDO

| Paso | Acción | Tiempo |
|------|--------|--------|
| 1 | Configura GitHub | 5 min |
| 2 | Elige Vercel/Netlify | 2 min |
| 3 | Conecta repositorio | 2 min |
| 4 | Espera deploy | 2-3 min |
| 5 | ¡Listo! | Total: ~15 min |

¡Vamos, puedes hacerlo! 🚀
