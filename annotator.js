/* =============================================================
   ANNOTATOR — IEB+ Advisors feedback tool
   Para quitar: borrar este archivo + la línea <script src="annotator.js"> en index.html
   ============================================================= */
(function () {
  let annotMode = false;
  let annotations = [];
  let hoveredEl = null;
  let activePopup = null;

  const SECTION_MAP = {
    'nav':        'Navegación',
    'hero':       'Hero',
    'ticker':     'Ticker',
    'tension':    'Por Qué',
    'que-es':     'Qué Es',
    'beneficios': 'Beneficios',
    'comunidad':  'Comunidad',
    'audience':   'Audiencia',
    'infra':      'Infraestructura',
    'respaldo':   'Respaldo',
    'modelo':     'Modelo',
    'faq':        'FAQ',
    'acceso':     'Acceso / Formulario',
    'footer':     'Footer',
  };

  function isAnnotUI(el) {
    let node = el;
    while (node) {
      if (node.id && node.id.startsWith('annot-')) return true;
      node = node.parentElement;
    }
    return false;
  }

  function getSection(el) {
    let node = el;
    while (node && node.tagName !== 'BODY') {
      const key = Object.keys(SECTION_MAP).find(k =>
        (node.className || '').includes(k) || (node.id || '').includes(k)
      );
      if (key) return SECTION_MAP[key];
      node = node.parentElement;
    }
    return 'Página';
  }

  function getLabel(el) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'img') {
      const alt = el.getAttribute('alt') || el.src.split('/').pop();
      return `img — "${alt}"`;
    }
    const text = (el.getAttribute('placeholder') || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50);
    return text ? `${tag} — "${text}${text.length >= 50 ? '…' : ''}"` : tag;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ── Toggle button ──────────────────────────────────────────
  const btn = document.createElement('button');
  btn.id = 'annot-toggle';
  btn.textContent = '✏ Anotar';
  btn.setAttribute('style', [
    'position:fixed;bottom:24px;right:24px;z-index:99999',
    'background:#FDE100;color:#1D1D1B;border:none;border-radius:3px',
    'padding:10px 18px;font-family:system-ui,sans-serif;font-size:13px',
    'font-weight:700;cursor:pointer;letter-spacing:.06em',
    'box-shadow:0 2px 12px rgba(0,0,0,.4)',
  ].join(';'));
  document.body.appendChild(btn);

  // ── Side panel ─────────────────────────────────────────────
  const panel = document.createElement('div');
  panel.id = 'annot-panel';
  panel.setAttribute('style', [
    'position:fixed;top:0;right:-380px;width:360px;height:100dvh',
    'background:#1D1D1B;color:#fff;z-index:99998',
    'display:flex;flex-direction:column',
    'font-family:system-ui,sans-serif;font-size:13px',
    'transition:right .2s ease;box-shadow:-4px 0 24px rgba(0,0,0,.55)',
  ].join(';'));
  panel.innerHTML = `
    <div style="padding:16px 20px;border-bottom:1px solid #2a2a2a;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
      <strong style="font-size:13px;letter-spacing:.1em;text-transform:uppercase;">Anotaciones</strong>
      <span id="annot-count" style="background:#333;color:#aaa;padding:2px 8px;border-radius:10px;font-size:11px;">0</span>
    </div>
    <p style="margin:0;padding:10px 20px 4px;color:#555;font-size:12px;line-height:1.4;flex-shrink:0;">
      Hacé clic en cualquier elemento para comentar. Enter guarda, Escape cancela.
    </p>
    <div id="annot-list" style="flex:1;overflow-y:auto;padding:12px 16px;"></div>
    <div style="padding:14px 16px;border-top:1px solid #2a2a2a;flex-shrink:0;">
      <button id="annot-export" style="
        width:100%;background:#FDE100;color:#1D1D1B;border:none;border-radius:2px;
        padding:11px;font-weight:700;font-size:12px;cursor:pointer;letter-spacing:.08em;text-transform:uppercase;
      ">Exportar .md</button>
    </div>
  `;
  document.body.appendChild(panel);

  // ── Shared styles ──────────────────────────────────────────
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .annot-hl { outline: 2px solid #FDE100 !important; outline-offset: 2px !important; }
    body.annot-active, body.annot-active * { cursor: crosshair !important; }
    #annot-list::-webkit-scrollbar { width: 4px; }
    #annot-list::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 2px; }
  `;
  document.head.appendChild(styleEl);

  // ── Render annotation list ─────────────────────────────────
  function renderList() {
    const list = document.getElementById('annot-list');
    const count = document.getElementById('annot-count');
    count.textContent = annotations.length;

    if (!annotations.length) {
      list.innerHTML = '<p style="color:#444;font-size:12px;padding:4px;">Sin anotaciones todavía.</p>';
      return;
    }

    list.innerHTML = annotations.map((a, i) => `
      <div style="margin-bottom:10px;background:#242424;border-radius:3px;padding:10px 12px;border-left:3px solid #FDE100;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <span style="color:#FDE100;font-size:10px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;">${a.section}</span>
          <button onclick="window.__annotDel(${i})" style="background:none;border:none;color:#555;cursor:pointer;font-size:16px;line-height:1;padding:0 0 0 8px;margin-top:-2px;">×</button>
        </div>
        <div style="color:#666;font-size:11px;margin-bottom:5px;">${escHtml(a.label)}</div>
        <div style="color:#e8e8e8;font-size:13px;line-height:1.45;">${escHtml(a.text)}</div>
      </div>
    `).join('');
  }

  window.__annotDel = function (i) {
    annotations.splice(i, 1);
    renderList();
  };

  // ── Comment popup ──────────────────────────────────────────
  function showPopup(el, cx, cy) {
    if (activePopup) { activePopup.remove(); activePopup = null; }

    const pw = 280;
    const left = Math.min(cx + 14, window.innerWidth - pw - 16);
    const top  = Math.min(cy + 14, window.innerHeight - 200);

    const pop = document.createElement('div');
    pop.id = 'annot-popup';
    pop.setAttribute('style', [
      `position:fixed;left:${left}px;top:${top}px;width:${pw}px`,
      'background:#1D1D1B;border:1.5px solid #FDE100;border-radius:4px',
      'padding:12px;z-index:100000;box-shadow:0 6px 24px rgba(0,0,0,.6)',
      'font-family:system-ui,sans-serif',
    ].join(';'));
    pop.innerHTML = `
      <div style="color:#FDE100;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;">
        ${getSection(el)} — ${escHtml(getLabel(el))}
      </div>
      <textarea id="annot-input" placeholder="¿Qué querés cambiar?" style="
        width:100%;box-sizing:border-box;background:#111;border:1px solid #2e2e2e;
        color:#fff;padding:8px;font-size:13px;font-family:system-ui,sans-serif;
        border-radius:3px;resize:none;height:80px;outline:none;line-height:1.4;
      "></textarea>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <button id="annot-save" style="
          flex:1;background:#FDE100;color:#1D1D1B;border:none;border-radius:2px;
          padding:8px;font-weight:700;font-size:12px;cursor:pointer;letter-spacing:.04em;
        ">Guardar</button>
        <button id="annot-cancel" style="
          background:#2a2a2a;color:#aaa;border:none;border-radius:2px;
          padding:8px 14px;font-size:13px;cursor:pointer;
        ">×</button>
      </div>
    `;
    document.body.appendChild(pop);
    activePopup = pop;

    const input = document.getElementById('annot-input');
    setTimeout(() => input && input.focus(), 30);

    function save() {
      const text = (document.getElementById('annot-input')?.value || '').trim();
      if (!text) return;
      annotations.push({ section: getSection(el), label: getLabel(el), text });
      renderList();
      pop.remove();
      activePopup = null;
      el.classList.remove('annot-hl');
    }

    document.getElementById('annot-save').addEventListener('click', save);
    document.getElementById('annot-cancel').addEventListener('click', () => {
      pop.remove();
      activePopup = null;
      el.classList.remove('annot-hl');
    });
    document.getElementById('annot-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); save(); }
    });
  }

  // ── DOM event handlers (capture phase) ────────────────────
  document.addEventListener('mouseover', (e) => {
    if (!annotMode || isAnnotUI(e.target)) return;
    if (hoveredEl && hoveredEl !== e.target) hoveredEl.classList.remove('annot-hl');
    hoveredEl = e.target;
    hoveredEl.classList.add('annot-hl');
  }, true);

  document.addEventListener('mouseout', (e) => {
    if (!annotMode || isAnnotUI(e.target)) return;
    e.target.classList.remove('annot-hl');
  }, true);

  document.addEventListener('click', (e) => {
    if (!annotMode || isAnnotUI(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    showPopup(e.target, e.clientX, e.clientY);
  }, true);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activePopup) { activePopup.remove(); activePopup = null; }
      else if (annotMode) btn.click();
    }
  });

  // ── Toggle ─────────────────────────────────────────────────
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    annotMode = !annotMode;
    panel.style.right = annotMode ? '0' : '-380px';
    btn.textContent = annotMode ? '✕ Salir' : '✏ Anotar';
    btn.style.background = annotMode ? '#e53535' : '#FDE100';
    btn.style.color = annotMode ? '#fff' : '#1D1D1B';
    document.body.classList.toggle('annot-active', annotMode);
    if (!annotMode) {
      if (hoveredEl) { hoveredEl.classList.remove('annot-hl'); hoveredEl = null; }
      if (activePopup) { activePopup.remove(); activePopup = null; }
    }
  });

  // ── Export .md ─────────────────────────────────────────────
  document.getElementById('annot-export').addEventListener('click', () => {
    if (!annotations.length) { alert('No hay anotaciones todavía.'); return; }

    const date = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' });
    const grouped = {};
    annotations.forEach(a => {
      if (!grouped[a.section]) grouped[a.section] = [];
      grouped[a.section].push(a);
    });

    let md = `# Feedback — IEB+ Advisors\n*${date}*\n\n---\n\n`;
    for (const [section, items] of Object.entries(grouped)) {
      md += `## ${section}\n\n`;
      items.forEach(item => {
        md += `**${item.label}**\n> ${item.text}\n\n`;
      });
    }

    const blob = new Blob([md], { type: 'text/markdown' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `feedback-ieb-${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  });

  renderList();
})();
