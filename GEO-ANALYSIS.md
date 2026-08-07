# GEO / AI Search Analysis — IEB External Advisors

**Fecha:** 2026-08-07 · **Alcance:** index.html, faq.html, sobre-ieb.html, privacidad.html, robots.txt, llms.txt, sitemap.xml

## GEO Readiness Score: 74/100

| Criterio | Peso | Score | Nota |
|---|---|---|---|
| Citability (passages autocontenidos) | 25% | 20/25 | Buen formato Q&A, respuestas algo cortas vs. el óptimo de 134-167 palabras |
| Estructura / legibilidad | 20% | 17/20 | Jerarquía H1→H2→H3 correcta en el fallback `<noscript>`, listas y `<dl>` para FAQ |
| Contenido multi-modal | 15% | 6/15 | Sin imágenes/video visibles para crawlers sin JS (el fallback es solo texto) |
| Autoridad y marca | 20% | 13/20 | Fundador nombrado + schemas Organization/Person, pero sin presencia en Wikipedia/Reddit/YouTube (esperable para un programa nuevo) |
| Accesibilidad técnica | 20% | 18/20 | robots.txt permite explícitamente a los AI crawlers, `llms.txt` completo, `<noscript>` cubre el contenido de la SPA |

## Estado por plataforma

- **Google AI Overviews / Bing Copilot:** bien posicionado — SEO on-page tradicional completo (meta, canonical, 5+ JSON-LD, sitemap), que es la señal dominante para estas plataformas.
- **ChatGPT / Perplexity:** cobertura técnica correcta (`llms.txt`, robots.txt con GPTBot/OAI-SearchBot/PerplexityBot/ClaudeBot explícitos), pero sin señales de terceros (Wikipedia, Reddit, LinkedIn con actividad) — normal para una marca de programa B2B lanzada en 2026, no es un bug a corregir ahora.

## AI Crawler Access — OK

`robots.txt` permite explícitamente: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Bingbot, Googlebot, además de `User-agent: * / Allow: /`. Sin bloqueos.

## llms.txt — OK, sin cambios necesarios

Completo: define la entidad, audiencia, propuesta de valor, modelo de acceso, cifras clave y las 4 páginas del sitio. Consistente con el branding "IEB External Advisors" ya corregido en esta sesión.

## Hallazgos y acciones

### Corregido en esta sesión
1. **Branding inconsistente** en `faq.html`/`sobre-ieb.html` (title, og:title, meta description, JSON-LD) — decía "Espacio IEB" donde `index.html`/`privacidad.html` ya decían "IEB External Advisors". Corregido — ver commit de branding.
2. **`sitemap.xml` con `lastmod` desactualizado** (2026-05-05, previo al rebrand) — actualizado a la fecha de esta entrega.

### Recomendado, no bloqueante para la entrega
3. **Passages del `<noscript>` un poco cortos** (~60-90 palabras por respuesta) vs. el rango óptimo de citabilidad (134-167 palabras). No es un error — es una decisión de brevedad razonable — pero si se busca más presencia en AI Overviews, ampliar 2-3 de las respuestas más buscadas ("¿Qué es Espacio IEB?", "¿Tiene costo?") a un párrafo más completo ayudaría.
4. **Sin contenido multi-modal accesible a crawlers sin JS** — las fotos de la oficina y el simulador solo existen dentro del árbol de React. No se recomienda duplicar imágenes en el `<noscript>` (agregaría peso sin necesidad), pero si en el futuro se suma contenido editorial (blog, casos de asesores), ahí sí conviene que las imágenes tengan `alt` descriptivo y estén fuera del bloque JS-only.
5. **Sin presencia de marca en Wikipedia/Reddit/YouTube/LinkedIn con actividad regular** — señal de autoridad más fuerte para ChatGPT/Perplexity que backlinks. Fuera de alcance de este trabajo (es una acción de marketing/relaciones públicas, no de código), queda documentada como próximo paso en `DOCUMENTACION.md`.

## Top 5 cambios de mayor impacto (si se quiere seguir invirtiendo en GEO)

1. Publicar 2-3 notas de mercado o casos de asesores reales (contenido nuevo, URLs nuevas) — el mayor impacto posible, pero es esfuerzo de contenido, no de código.
2. Verificar y mantener actualizado `lastmod` en `sitemap.xml` cada vez que cambie contenido de una página (hecho ahora; documentar el hábito).
3. Ampliar 2-3 respuestas clave del `<noscript>`/FAQ a ~150 palabras para mejorar citabilidad directa.
4. Sumar testimonios con nombre y cargo real de asesores (señal de E-E-A-T adicional a la ya fuerte de Abuchdid).
5. Iniciar presencia activa en LinkedIn de la marca del programa (hoy solo se linkea el LinkedIn de Grupo IEB).
