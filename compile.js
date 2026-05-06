// Build script: compile app.jsx → app.js (run before deploy)
const fs = require('fs');
const babel = require('@babel/core');

const jsx = fs.readFileSync('app.jsx', 'utf8');
const result = babel.transformSync(jsx, {
  presets: [['@babel/preset-react', { runtime: 'classic' }]],
  filename: 'app.jsx',
});
fs.writeFileSync('app.js', '"use strict";\n' + result.code + '\n');
console.log('app.js compiled —', result.code.length, 'bytes');
