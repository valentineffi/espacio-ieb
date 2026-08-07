// Regenerate the inline <style> block in index.html from the two source CSS
// files, so the homepage's inlined CSS (a PageSpeed optimization) stays in sync
// with styles.css + assets/colors_and_type.css. Idempotent — run after any CSS
// edit. (Secondary pages <link> the two files directly and need no sync.)
const fs = require('fs');

const css1 = fs.readFileSync('assets/colors_and_type.css', 'utf8')
  .replace(/url\('fonts\//g, "url('assets/fonts/");   // font paths are root-relative once inlined
const css2 = fs.readFileSync('styles.css', 'utf8');

let html = fs.readFileSync('index.html', 'utf8');
const open = html.indexOf('<style>');
const close = html.indexOf('</style>', open);
if (open === -1 || close === -1) { console.error('ERROR: <style> block not found in index.html'); process.exit(1); }

html = html.slice(0, open + '<style>'.length) + '\n' + css1 + '\n' + css2 + '\n' + html.slice(close);
fs.writeFileSync('index.html', html);
console.log('index.html inline <style> synced —', (css1.length + css2.length), 'bytes of CSS');
