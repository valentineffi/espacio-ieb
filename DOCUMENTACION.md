# Documentación técnica y estratégica — Espacio IEB

**Última actualización:** mayo 2026  
**Repositorio:** https://github.com/valentineffi/espacio-ieb  
**URL de preview:** https://valentineffi.github.io/espacio-ieb/

---

## 1. Qué es este proyecto

Espacio IEB es un sitio web estático para el programa de asesores financieros externos de Grupo IEB. La web tiene dos objetivos simultáneos:

1. **Conversión**: que asesores financieros independientes completen el formulario de solicitud de acceso.
2. **Visibilidad orgánica**: que el sitio aparezca cuando alguien busca términos como "espacio para asesores financieros", "base operativa para asesores externos", o "Espacio IEB" — tanto en Google como en respuestas de AI (ChatGPT, Perplexity, Claude, Gemini).

---

## 2. Arquitectura técnica

### Por qué es un sitio estático

El sitio no tiene backend, base de datos, ni sistema de build. Es HTML + CSS + JavaScript puro, servido desde archivos planos. Esto es intencional:

- **Velocidad de carga** máxima — no hay servidor que procese nada, el archivo se entrega directamente.
- **Costo cero de hosting** — puede vivir en GitHub Pages, Vercel, Netlify o cualquier CDN sin ninguna configuración.
- **Sin dependencias operativas** — no hay base de datos que caerse, no hay build que romper.

### Por qué React via CDN (sin bundler)

La interfaz usa React 18 + Babel, cargados desde unpkg.com. El JSX se transpila en el navegador en tiempo de ejecución. Esto implica:

**Ventaja**: no requiere Node.js, npm, ni ningún proceso de build. Cualquier editor de texto alcanza para modificar el sitio.

**Desventaja crítica**: el contenido existe **solo en JavaScript**. Los crawlers que no ejecutan JS — incluyendo la mayoría de los AI crawlers — ven una página en blanco. Este es el mayor problema técnico de la arquitectura actual y está parcialmente mitigado (ver sección 5).

### Estructura de archivos

```
/
├── index.html          # SPA principal — toda la lógica React vive acá
├── faq.html            # Página de FAQ independiente — HTML estático
├── sobre-ieb.html      # Sobre Espacio IEB + Grupo IEB — HTML estático
├── privacidad.html     # Política de privacidad — HTML estático
├── styles.css          # Todos los estilos de layout y componentes
├── app.jsx             # Copia de referencia del JSX (no se ejecuta)
├── annotator.js        # Herramienta de anotación (solo localhost)
├── llms.txt            # Brief para AI crawlers
├── robots.txt          # Directivas para crawlers
├── sitemap.xml         # Mapa del sitio
└── assets/
    ├── colors_and_type.css   # Design system: tokens de color y tipografía
    ├── fonts/                # Poly Sans (trial) — 6 pesos tipográficos
    ├── logos/                # Logo Espacio IEB en variantes
    └── tramas/               # SVGs de fondo para secciones
```

### Por qué dos archivos CSS

`assets/colors_and_type.css` contiene exclusivamente las variables CSS del design system (colores, escala tipográfica, espaciado, radios). `styles.css` contiene los estilos de componentes y layout que consumen esas variables.

Esta separación permite que el design system sea la fuente de verdad. Si mañana cambia el amarillo de marca, se toca una sola línea en `colors_and_type.css` y se propaga a todo el sitio. Ambos archivos se cargan con `<link>` en paralelo — **no** con `@import`, que cargaría en serie y añadiría latencia.

### index.html vs páginas estáticas

`index.html` es la SPA principal con React. Las demás páginas (`faq.html`, `sobre-ieb.html`, `privacidad.html`) son HTML estático sin React. Esto es deliberado:

- La landing page necesita la interactividad de React (menú de navegación con scroll tracking, acordeón de FAQ, formulario con validación, ticker animado).
- Las páginas secundarias no necesitan nada de eso. HTML estático es más rápido, más simple, y — crucialmente — completamente visible para crawlers de AI sin JS.

---

## 3. Design system

### Paleta 60/30/10

El brandbook de Espacio IEB establece una paleta de exactamente tres colores con proporciones definidas:

- **60% — negro** (`#1D1D1B`): superficies dominantes, fondos de secciones.
- **30% — blanco** (`#FFFFFF`): tipografía principal sobre fondo oscuro.
- **10% — amarillo** (`#FDE100`): CTAs, highlights, datos numéricos clave. Nunca como superficie de 60%.

El negro y el blanco pueden intercambiar roles (secciones claras y oscuras alternan), pero el amarillo siempre es el 10% de acento.

### Tipografía

Poly Sans de Pangram Pangram, con seis pesos disponibles: Slim (300), Neutral (400), Median (500), Bulky (700), SlimMono y MedianMono. La jerarquía se construye por tamaño, no por cambio de familia. Los archivos actuales son versiones **trial** — para producción bajo dominio real se necesita licencia comercial.

### Variables CSS como API

Todo el design system está expuesto como custom properties en `:root`. Los componentes no tienen colores hardcodeados: usan `var(--fg-on-dark-1)`, `var(--accent)`, `var(--surface-card-dark)`, etc. Esto garantiza consistencia y hace que cualquier cambio de marca sea un cambio de una sola variable, no una búsqueda global.

---

## 4. SEO clásico (on-page y técnico)

### Meta tags

Cada página tiene:
- `<title>` único y descriptivo (bajo 60 caracteres)
- `<meta name="description">` bajo 160 caracteres con la propuesta de valor principal
- `<link rel="canonical">` para evitar contenido duplicado
- Open Graph completo (`og:title`, `og:description`, `og:image` con dimensiones, `og:url`, `og:locale`)
- Twitter Card (`summary_large_image`)

### Geo tags

`index.html` incluye meta tags de geolocalización que le dicen a los crawlers dónde está el negocio:

```html
<meta name="geo.region" content="AR-C"/>
<meta name="geo.placename" content="Núñez, Buenos Aires, Argentina"/>
<meta name="geo.position" content="-34.545;-58.459"/>
<meta name="ICBM" content="-34.545, -58.459"/>
```

Estos tags ayudan con búsquedas locales ("espacio para asesores financieros en Buenos Aires") y alimentan el entendimiento geográfico de la entidad.

### Rendimiento

Tres optimizaciones críticas implementadas:

1. **React en modo producción**: se cambió de `react.development.js` (~1.97MB) a `react.production.min.js` (~170KB). El payload del sitio se redujo ~90% solo con este cambio.
2. **Scripts con `defer`**: React, ReactDOM y Babel se cargan con `defer`, lo que permite que el HTML se parsee sin bloquearse.
3. **CSS paralelo**: `colors_and_type.css` y `styles.css` se cargan con `<link>` en paralelo. El `@import` original los cargaba en serie (primero styles.css, después — esperando — colors_and_type.css).

### scroll-margin-top

Todas las secciones con `id` tienen `scroll-margin-top: 80px` (la altura del nav fijo). Sin esto, al hacer click en un link de ancla (`#beneficios`) el título de la sección quedaba tapado por el nav.

### Fuentes sin errores 404

El `@font-face` original declaraba 18 variantes de Poly Sans. Solo 6 archivos existen en disco. Se eliminaron los 12 `@font-face` huérfanos que generaban 404s silenciosos y retrasaban el render de fuentes.

---

## 5. GEO — Generative Engine Optimization

GEO es la práctica de optimizar para que AI (ChatGPT, Perplexity, Claude, Gemini, Copilot) citen o mencionen el sitio cuando alguien hace una pregunta relevante. El problema base es que estas herramientas dependen de:

a) Que el contenido haya sido indexado y los AI crawlers puedan leerlo  
b) Que el contenido sea citable: responda preguntas directamente, con entidades nombradas y datos concretos  
c) Que la entidad tenga señales de autoridad (E-E-A-T)

### El problema de la SPA

El contenido de `index.html` existe dentro de `<script type="text/babel">`. Cuando un AI crawler llega a la URL, ve esto:

```html
<div id="root"></div>
<script>/* todo el contenido */</script>
```

La mayoría de los AI crawlers no ejecutan JavaScript. Ven una página vacía.

### La solución: `<noscript>` como fallback de crawlers

Se reemplazó el div oculto original (que usaba `clip:rect` — una técnica que Google puede penalizar como cloaking) por un bloque `<noscript>` con contenido semántico completo:

```html
<noscript>
  <article>
    <h1>Espacio IEB — Comunidad e infraestructura...</h1>
    <p>Espacio IEB es una iniciativa de Grupo IEB — fundada por Juan Ignacio Abuchdid en 2011...</p>
    <!-- infraestructura, respaldo stats, FAQ, modelo de acceso -->
  </article>
</noscript>
```

`<noscript>` es invisible cuando JS corre (el usuario nunca lo ve), pero los crawlers sin JS lo leen como contenido legítimo. No es cloaking porque es el mismo contenido que ve el usuario, solo en formato diferente.

El bloque incluye intencionalmente:
- El nombre **Juan Ignacio Abuchdid** — señal de E-E-A-T (persona real, identificable)
- Cifras de respaldo (+USD 2.000M, +200 personas, +150 productores)
- Las 5 preguntas frecuentes más comunes en formato pregunta/respuesta
- Links a `/faq.html` y `/sobre-ieb.html`

### llms.txt

El archivo `/llms.txt` en la raíz del sitio es un estándar emergente para sitios que quieren ser citados por AI. Es un resumen plano, estructurado con Markdown, que un LLM puede leer sin ambigüedad:

```
# Espacio IEB
> Definición en una oración
## Entidad (nombre, org madre, fundador, teléfono, ubicación, coordenadas)
## Audiencia
## Propuesta de valor
## Modelo de acceso
## Cifras clave de Grupo IEB
## Páginas del sitio
```

La lógica es simple: si un AI crawler indexa tu sitio pero no está seguro de qué hace, `llms.txt` responde esa pregunta en segundos de lectura.

### robots.txt con AI crawlers explícitos

El `robots.txt` tiene directivas explícitas de `Allow: /` para cada AI crawler conocido:

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

La razón de ser explícito en lugar de confiar en el `User-agent: *` es que algunos crawlers de AI tienen comportamientos de opt-out por defecto o respetan solo directivas explícitas. La intención es inequívoca.

---

## 6. AEO — Answer Engine Optimization

AEO es un subconjunto de GEO enfocado en que el contenido sea la respuesta directa a una pregunta, no solo un resultado que hay que abrir. Los principales canales son: Google AI Overviews, Perplexity, Copilot en Bing.

### JSON-LD como lenguaje de datos estructurados

`index.html` tiene 5 bloques de JSON-LD en el `<head>`:

| Schema | Propósito |
|--------|-----------|
| `Organization` | Define a Grupo IEB como entidad: fundador (Abuchdid), año (2011), dirección, teléfono, redes sociales. Alimenta el Knowledge Panel. |
| `LocalBusiness` + `FinancialService` | Define Espacio IEB como negocio local con coordenadas GPS, horarios, precio ("Gratuito") y catálogo de servicios con precio 0. Activa rich snippets de negocio local. |
| `WebPage` + `WebSite` | Conecta la página al sitio, declara fechas de publicación y modificación. |
| `BreadcrumbList` | Define la jerarquía Grupo IEB → Espacio IEB. Aparece en los resultados de búsqueda bajo el título. |
| `FAQPage` | Las 9 preguntas frecuentes en formato schema. Las AI los leen como pares pregunta/respuesta estructurados. Nótese: Google dejó de mostrar rich snippets de FAQ para sitios comerciales en agosto 2023, pero los LLMs sí los usan para extraer Q&A. |

`faq.html` y `sobre-ieb.html` tienen sus propios schemas (`FAQPage` con BreadcrumbList, y `Person` + `Organization` respectivamente).

### Estrategia multipage

Una SPA de una sola página no puede posicionarse para múltiples intenciones de búsqueda distintas. Si todo el contenido vive en `index.html`, hay un solo título, una sola descripción, una sola URL que Google puede indexar.

Las páginas secundarias resuelven esto:

| Página | Intención de búsqueda target |
|--------|------------------------------|
| `/faq.html` | "Espacio IEB qué es", "Espacio IEB costo", "Espacio IEB exclusividad" |
| `/sobre-ieb.html` | "Grupo IEB Espacio IEB", "Juan Ignacio Abuchdid IEB", "quién fundó Grupo IEB" |
| `/privacidad.html` | Cumplimiento Ley 25.326, requerido para el consentimiento del formulario |

Cada página puede ranquear independientemente, tiene su propio schema JSON-LD, y alimenta la profundidad temática del dominio.

### E-E-A-T: Experiencia, Expertise, Autoridad, Confianza

Google (y los LLMs) evalúan si quien publica una web sobre un tema tiene credenciales reales para hacerlo. Para Espacio IEB, la señal más importante era un **nombre real de una persona real**.

Se añadió a Juan Ignacio Abuchdid en:
- JSON-LD `Organization.founder` en `index.html`
- JSON-LD `Person` en `sobre-ieb.html` con `worksFor`, `jobTitle`, `knowsAbout`
- El bloque `<noscript>` (visible para crawlers sin JS)
- El texto de la sección "Juan Ignacio Abuchdid" en `sobre-ieb.html`
- `sameAs` enlazado a LinkedIn de Grupo IEB

Sin un nombre real, los sistemas de AI tienen dificultades para confirmar que la entidad existe fuera de su propia web.

---

## 7. Decisiones que parecen extrañas pero tienen sentido

### ¿Por qué el Ticker solo tiene texto de marca y no precios de mercado?

La versión original interpolaba precios de acciones en tiempo real en el ticker. Los precios hardcodeados se desactualizan instantáneamente — cualquier crawler que indexe esos precios va a extraer información incorrecta. Peor: si un AI lo cita, va a decir que el precio de un activo es el que estaba hardcodeado hace seis meses. Se reemplazó por mensajes de marca permanentemente actuales.

### ¿Por qué annotator.js solo corre en localhost?

`annotator.js` es una herramienta interna de feedback que inyecta una UI de anotación sobre el sitio. En producción no tiene uso y añade peso. El guard con `location.hostname`:

```javascript
if(location.hostname==='localhost'||location.hostname==='127.0.0.1'){
  var s=document.createElement('script');
  s.src='annotator.js';
  document.body.appendChild(s);
}
```

Lo activa solo en desarrollo local, sin necesidad de tener dos versiones del HTML.

### ¿Por qué el footer de index.html tiene más columnas que el de las páginas secundarias?

El footer de `index.html` está construido en React y tiene la estructura completa (marca + tres columnas de links). Los footers de las páginas estáticas son HTML plano y solo tienen la barra inferior con links esenciales. Esto es una simplificación deliberada — las páginas secundarias no justifican duplicar el footer completo en HTML estático sin React.

### ¿Por qué hay una `app.jsx` además de index.html?

`app.jsx` es una copia de referencia del JSX que vive dentro del `<script type="text/babel">` de `index.html`. No se ejecuta directamente. Existe para que los editores de código puedan abrir el JSX con syntax highlighting correcto. La fuente de verdad es siempre `index.html`.

---

## 8. Next steps — mejoras pendientes con mayor impacto

### Prioridad 1 — Crítico para producción

**A. Favicon faltante**  
`index.html` referencia `assets/logos/ieb-monogram-on-dark.svg` como favicon e icono de Apple Touch, pero ese archivo no existe en el repositorio. El navegador hace una petición 404 en cada carga. Se necesita agregar el SVG del monograma IEB al repositorio.

**B. Licencia de Poly Sans**  
Las fuentes en `assets/fonts/` son versiones trial de Pangram Pangram. Funcionan en preview y desarrollo, pero el uso en un sitio público bajo el dominio real `espacioieb.com.ar` requiere una licencia comercial. Alternativa sin costo: migrar a una fuente similar disponible en Google Fonts (ej. DM Sans).

**C. Dominio propio**  
El sitio está en `valentineffi.github.io/espacio-ieb/`. Todos los canonicals, schemas JSON-LD y llms.txt apuntan a `espacioieb.com.ar`. Hasta que el dominio esté conectado, hay una discrepancia entre la URL real y la URL declarada — Google puede penalizar esto. Conectar el dominio real en GitHub Pages (Settings → Pages → Custom domain) resuelve el problema en minutos.

**D. og-image.jpg**  
El Open Graph image referenciado (`/og-image.jpg`) no existe. Cuando alguien comparte el link en WhatsApp, LinkedIn o Twitter, no aparece ninguna imagen. Se necesita una imagen de 1200×630px con la identidad de Espacio IEB.

### Prioridad 2 — SEO y GEO

**E. Dirección exacta de Espacio IEB**  
El JSON-LD de `LocalBusiness` tiene `"streetAddress": "Núñez"` porque no se conoce la dirección exacta del edificio. Una dirección completa (calle, número, piso) mejora significativamente el posicionamiento local y la elegibilidad para el Knowledge Panel de Google.

**F. SSR o SSG (cambio arquitectónico)**  
La limitación fundamental de esta arquitectura es que React corre en el cliente. La solución definitiva es mover la landing page a un generador de sitios estáticos como Astro o Next.js con Static Site Generation (SSG). Esto genera HTML completo en build time — crawlers ven el contenido completo sin depender del `<noscript>` workaround. Impacto: muy alto en GEO/AEO. Esfuerzo: alto (requiere refactorizar los componentes).

**G. Testimonios de asesores**  
El sitio no tiene ninguna voz de asesor real. Los LLMs evalúan credibilidad basándose en si hay experiencias verificables de terceros. Agregar 2-3 testimonios con nombre, cargo y foto (con permiso) mejoraría materialmente las señales de E-E-A-T.

**H. Blog o notas de mercado**  
Cada artículo nuevo es una URL nueva que puede posicionarse para términos long-tail ("cómo ser agente productor independiente en Argentina", "diferencia entre API y asesor en una ALyC"). Incluso 4-6 artículos bien escritos por año generan tráfico orgánico acumulativo.

**I. Schema `Event` para las charlas de mercado**  
Espacio IEB menciona "charlas y encuentros de mercado" como parte de su propuesta. Si estos eventos son regulares, agregar schema `Event` con fecha, lugar y descripción los haría elegibles para aparecer en el carrusel de eventos de Google.

### Prioridad 3 — Técnico

**J. Formulario real**  
El formulario actual tiene `onSubmit` que simplemente setea `setSent(true)`. No envía los datos a ningún lado. Para producción se necesita un endpoint: Formspree, EmailJS, o un webhook a un CRM/HubSpot. Costo: bajo. Impacto: crítico para la funcionalidad core del sitio.

**K. Analytics**  
No hay ningún sistema de tracking. Sin Plausible, Google Analytics o similar, es imposible saber cuántas personas llegan, desde dónde, y si completan el formulario. Google Tag Manager + GA4 es el camino estándar; Plausible es más simple y sin cookies.

**L. Core Web Vitals**  
La carga de React + Babel desde CDN introduce latencia variable según la disponibilidad de unpkg.com. Con SSR/SSG esto desaparece. Mientras tanto, se puede considerar self-hosting de los archivos JS de React para eliminar la dependencia externa.

---

## 9. Resumen del estado actual

| Área | Estado | Nota |
|------|--------|------|
| SEO técnico (meta, canonical, OG) | ✅ Implementado | Falta og-image.jpg y favicon |
| Rendimiento (React prod, defer, CSS paralelo) | ✅ Implementado | |
| Schema JSON-LD (5 schemas en index, schemas en páginas secundarias) | ✅ Implementado | Dirección de Espacio IEB incompleta |
| GEO — noscript fallback con contenido rico | ✅ Implementado | Workaround — no reemplaza SSR |
| GEO — llms.txt | ✅ Implementado | |
| GEO — robots.txt con AI crawlers | ✅ Implementado | |
| E-E-A-T — persona nombrada (Abuchdid) | ✅ Implementado | Falta testimonios y about más rico |
| Estrategia multipage | ✅ Implementado | FAQ, Sobre IEB, Privacidad |
| Dominio real conectado | ❌ Pendiente | espacioieb.com.ar |
| Formulario funcional | ❌ Pendiente | No envía datos |
| Analytics | ❌ Pendiente | |
| Favicon / og-image | ❌ Pendiente | Archivos faltantes |
| Licencia de fuentes Poly Sans | ⚠️ Trial | Solo para preview/desarrollo |
