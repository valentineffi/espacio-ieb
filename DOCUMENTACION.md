# Documentación técnica — IEB External Advisors

**Última actualización:** 2026-08-07
**Repositorio:** https://github.com/valentineffi/espacio-ieb

---

## 1. Qué es este proyecto

Sitio web del programa **IEB External Advisors** — la propuesta de Grupo IEB para asesores financieros y agentes productores independientes en Argentina. Cubre el modelo de payout/Partners, el espacio físico de trabajo (Espacio IEB, en Núñez, CABA), beneficios (hospitalities) y la tecnología ofrecida (Grow Finance white-label + plataforma de gestión).

Objetivo del sitio: que un asesor financiero independiente entienda la propuesta y complete el formulario de solicitud de acceso.

---

## 2. Arquitectura técnica

**Sitio estático, sin backend propio** más allá de una única función serverless para el formulario de contacto. No hay base de datos, no hay CMS.

- **React 18, self-hosted:** `assets/react.production.min.js` y `assets/react-dom.production.min.js` se sirven desde el propio dominio (no CDN externo), cargados con `defer`.
- **JSX precompilado, no en el navegador:** [app.jsx](app.jsx) es la fuente de verdad de todos los componentes. Se compila a `app.js` con Babel en build time (`node compile.js`) — `index.html` carga `app.js`, nunca `app.jsx` directamente. **No hay Babel en el navegador.**
- **CSS inline en la homepage:** `index.html` no linkea `styles.css` — su CSS está inlineado en un `<style>` en el `<head>` (optimización de PageSpeed, evita un round-trip extra). Los archivos fuente son `styles.css` (componentes/layout) y `assets/colors_and_type.css` (tokens de color y tipografía); tras editarlos hay que correr `node sync-css.js` para regenerar el bloque inline. Las páginas secundarias (`faq.html`, `sobre-ieb.html`, `privacidad.html`) sí linkean ambos archivos CSS directamente — no necesitan el paso de inlineado.
- **Formulario de contacto — Vercel Serverless Function:** [api/contact.js](api/contact.js), recibe el POST del formulario y envía el mail vía [Resend](https://resend.com). Antes vivía como Cloudflare Pages Function; se migró a Vercel en esta entrega porque es el hosting que va a usar el equipo de IEB.
- **Páginas secundarias sin React:** `faq.html`, `sobre-ieb.html`, `privacidad.html` son HTML estático (sin JS de React) — más rápidas y 100% visibles para crawlers que no ejecutan JavaScript, con su propio `<title>`/meta/JSON-LD para poder posicionar independientemente de la home.
- **Fallback `<noscript>` en la home:** como la landing depende de React para renderizar, `index.html` incluye un bloque `<noscript>` con el contenido completo en HTML semántico plano, para que crawlers sin JS (incluida la mayoría de los AI crawlers) vean el contenido real, no una página vacía.

### Estructura de archivos

```
/
├── index.html              # SPA principal — carga app.js, CSS inline, noscript fallback
├── faq.html                # FAQ — HTML estático
├── sobre-ieb.html          # Sobre Grupo IEB / Espacio IEB — HTML estático
├── privacidad.html         # Política de privacidad — HTML estático
├── app.jsx                 # Fuente de verdad de los componentes React
├── app.js                  # Compilado de app.jsx (node compile.js) — no editar a mano
├── compile.js               # Script de build: app.jsx → app.js
├── sync-css.js               # Script de build: inlinea el CSS en index.html
├── styles.css               # Estilos de componentes/layout
├── annotator.js             # Herramienta de anotación, solo se inyecta en localhost
├── llms.txt, robots.txt, sitemap.xml
├── api/
│   └── contact.js           # Vercel Function del formulario de contacto (Resend)
└── assets/
    ├── colors_and_type.css  # Design tokens (color + tipografía)
    ├── fonts/                # Poly Sans (trial) — 6 pesos
    ├── logos/
    └── fotos/                # Fotos optimizadas de la oficina
```

---

## 3. Cómo correr el proyecto

```bash
python3 -m http.server 8080
# o
npx serve .
```

Abrir `http://localhost:8080`.

### Después de editar `app.jsx`

```bash
npm install        # una sola vez, instala Babel (devDependency)
node compile.js     # app.jsx → app.js
```

### Después de editar `styles.css` o `assets/colors_and_type.css`

```bash
node sync-css.js    # re-inlinea el CSS en index.html
```

Si se olvida alguno de estos dos pasos, el sitio queda desincronizado: index.html sigue mostrando la versión vieja del componente o del CSS aunque el archivo fuente ya esté actualizado. **Siempre correr ambos antes de dar por terminado un cambio visual.**

### Formulario de contacto en local

```bash
npm install -g vercel   # si no está instalado
vercel link              # una vez, para conectar la carpeta a un proyecto de Vercel
vercel dev                # levanta el sitio + la función /api/contact localmente
```

Sin `RESEND_API_KEY` configurada, `/api/contact` responde `500 { error: "Servicio de email no configurado" }` — es el comportamiento esperado en local, no un bug.

---

## 4. Deploy en Vercel

1. Importar el repo de GitHub en Vercel (New Project → seleccionar `espacio-ieb`).
2. Framework preset: **Other** (sitio estático, sin build command necesario). Output directory: raíz del repo.
3. Variables de entorno (Project Settings → Environment Variables):
   - `RESEND_API_KEY` — **requerida**, se obtiene en el dashboard de Resend.
   - `CONTACT_TO` — opcional, default `iebexternaladvisors@grupoieb.com.ar`.
   - `CONTACT_FROM` — opcional, default el sandbox de Resend (`onboarding@resend.dev`). **Para producción real, configurar un remitente de un dominio verificado en Resend** (ej. `IEB External Advisors <no-reply@iebexternaladvisors.com.ar>`) — el sandbox de Resend tiene límites y no es apto para producción.
4. Conectar el dominio real (`www.iebexternaladvisors.com.ar`) en Project Settings → Domains. Todos los canonicals, JSON-LD y `llms.txt` del sitio ya apuntan a ese dominio — hasta que esté conectado va a haber una discrepancia entre la URL real (`*.vercel.app`) y la URL declarada, lo cual puede afectar el SEO.

No hace falta `vercel.json` — Vercel detecta automáticamente el HTML estático en la raíz y la función en `api/`.

---

## 5. Design system

Design tokens en [assets/colors_and_type.css](assets/colors_and_type.css) — paleta 60/30/10 (Negro + Blanco dominante/secundario, acento en **Celeste `#00A6FB`** para énfasis editorial y **Azul IEB `#404EFF`** para CTAs/interactividad). Sin amarillo — reemplazado en el rebrand 2026. Tipografía Poly Sans (Slim/Neutral/Median/Bulky + Mono), servida localmente desde `assets/fonts/`.

> ⚠️ **Las fuentes Poly Sans (PolySans, de la fundición Gradient — [wearegradient.net](https://www.wearegradient.net)) son versiones trial.** No es una fuente de Google Fonts. Antes de ir a producción bajo el dominio real hace falta comprar la licencia comercial completa (~€50-55 por peso/estilo en el sitio de Gradient) o migrar a un sustituto gratuito de Google Fonts — los más parecidos son **Space Grotesk** o **DM Sans**.

---

## 6. SEO y GEO

Estado técnico completo: meta tags (title/description/canonical/OG/Twitter), 5+ bloques JSON-LD (Organization, LocalBusiness+FinancialService, WebPage/WebSite, BreadcrumbList, FAQPage), `sitemap.xml`, `robots.txt` con AI crawlers explícitamente permitidos (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, etc.), `llms.txt`, y fallback `<noscript>` para la home.

Auditoría GEO detallada (score, hallazgos, próximos pasos) en **[GEO-ANALYSIS.md](GEO-ANALYSIS.md)** — generada el 2026-08-07 junto con esta entrega. Resumen: score 74/100, técnicamente sólido; lo que más impacto tendría a futuro es contenido editorial nuevo (notas de mercado, casos de asesores reales) y presencia de marca en LinkedIn/Wikipedia, no cambios de código.

---

## 7. Pendientes conocidos

| Pendiente | Detalle |
|---|---|
| Licencia de Poly Sans | Versión trial — necesaria licencia comercial o sustituto de Google Fonts antes del go-live público |
| Dominio real conectado | Canonicals/schemas apuntan a `www.iebexternaladvisors.com.ar` — conectar en el hosting elegido |
| `CONTACT_FROM` de producción | Hoy usa el sandbox de Resend (`onboarding@resend.dev`) — configurar un remitente verificado del dominio propio |
| Analytics | No hay ningún sistema de tracking instalado (GA4, Plausible, etc.) — no hay forma de medir tráfico ni conversión del formulario hasta que se agregue |
| Contenido GEO de mayor impacto | Ver "Top 5" en [GEO-ANALYSIS.md](GEO-ANALYSIS.md) — principalmente contenido editorial, no código |

---

## 8. Decisiones que pueden parecer raras pero tienen sentido

**¿Por qué `app.jsx` no se ejecuta directamente?** Es la fuente de verdad para tener syntax highlighting correcto al editar, pero el navegador solo carga el `app.js` ya compilado — no hay Babel en producción para no pagar el costo de transpilar en cada carga de página.

**¿Por qué las páginas secundarias no usan React?** No necesitan la interactividad de la landing (simulador, acordeón, form con validación en vivo) y, al ser HTML estático plano, son 100% legibles por crawlers sin JavaScript sin depender de ningún fallback.

**¿Por qué `annotator.js` solo corre en localhost?** Es una herramienta interna de feedback visual; el guard por `location.hostname` evita que se cargue en producción sin necesidad de mantener dos builds distintos.
