const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const css1 = fs.readFileSync('assets/colors_and_type.css', 'utf8')
  .replace(/url\('fonts\//g, "url('assets/fonts/");
const css2 = fs.readFileSync('styles.css', 'utf8');

// 1. Remove preconnect/dns-prefetch for unpkg (no longer needed)
html = html.replace('<link rel="preconnect" href="https://unpkg.com" crossorigin/>\n', '');
html = html.replace('<link rel="dns-prefetch" href="https://unpkg.com"/>\n', '');

// 2. Add preload hints right after <meta viewport> line
html = html.replace(
  '<meta name="viewport" content="width=device-width,initial-scale=1"/>',
  `<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link rel="preload" href="assets/react.production.min.js" as="script"/>
<link rel="preload" href="assets/react-dom.production.min.js" as="script"/>
<link rel="preload" href="app.js" as="script"/>
<link rel="preload" href="assets/fonts/polysanstrial-slim.woff2" as="font" type="font/woff2" crossorigin/>`
);

// 3. Replace the two <link rel="stylesheet"> tags with inlined <style>
html = html.replace(
  '<link rel="stylesheet" href="assets/colors_and_type.css"/>\n<link rel="stylesheet" href="styles.css"/>',
  `<style>\n${css1}\n${css2}\n</style>`
);

// 4. Replace CDN script tags with local self-hosted + compiled app.js
html = html.replace(
  `<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous" defer></script>\n<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous" defer></script>\n<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous" defer></script>`,
  `<script src="assets/react.production.min.js" defer></script>\n<script src="assets/react-dom.production.min.js" defer></script>\n<script src="app.js" defer></script>`
);

// 5. Remove the large <script type="text/babel">...</script> block
const babelStart = html.indexOf('<script type="text/babel">');
if (babelStart === -1) { console.error('ERROR: babel script not found'); process.exit(1); }
const babelEnd = html.indexOf('</script>', babelStart) + '</script>'.length;
html = html.slice(0, babelStart) + html.slice(babelEnd);

fs.writeFileSync('index.html', html);
console.log('index.html patched. Total size:', html.length, 'bytes');
