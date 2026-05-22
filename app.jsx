/* global React, ReactDOM */
const { useState, useEffect } = React;

/* ============================================================
   ICONS — inline SVG set
   ============================================================ */
const Icon = ({ name, size = 20 }) => {
  const icons = {
    briefcase: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    'trending-up': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    zap: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    'bar-chart': <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
    mic: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    layers: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    activity: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    slash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
    minus: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    check: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    smartphone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
  };
  return icons[name] || null;
};

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [active, setActive] = useState('');
  const links = [
    { id: 'simulador', label: 'Simulador' },
    { id: 'partners', label: 'Partners' },
    { id: 'espacio', label: 'Espacio' },
    { id: 'hospitalities', label: 'Beneficios' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'faq', label: 'FAQ' },
  ];
  useEffect(() => {
    const onScroll = () => {
      let cur = '';
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 120) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Espacio IEB — inicio">
          <img className="nav__logo-mark" src="assets/logos/espacio-ieb-nav.png" alt="Espacio IEB" width="558" height="98"/>
          <span className="nav__divider"></span>
          <span className="nav__logo-sub">Una iniciativa de Grupo IEB</span>
        </a>
        <div className="nav__links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
               className={`nav__link ${active === l.id ? 'is-active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
        <a href="#acceso" className="nav__cta">
          Solicitar acceso <span>→</span>
        </a>
        <button className="nav__menu-btn" aria-label="Menú">MENÚ</button>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const pills = [
    { label: 'Núñez, Buenos Aires', accent: false },
    { label: 'Payout más alto del mercado', accent: true },
    { label: 'Sin exclusividad', accent: false },
    { label: 'Acceso 100% gratuito', accent: false },
    { label: 'Grupo IEB', accent: false },
  ];
  return (
    <section className="hero" id="top">
      <div className="hero__trama"></div>
      <div className="hero__overlay"></div>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <div className="hero__meta">
              <span className="hero__meta-tick"></span>
              <span>Espacio IEB · Partners para asesores financieros externos</span>
            </div>
            <h1 className="hero__title">
              La propuesta más completa del mercado para <em>asesores financieros</em> externos.
            </h1>
            <p className="hero__sub">
              Escalá tu cartera y la de tu equipo con el respaldo de Grupo IEB.
              Sin exclusividad, sin costos fijos y con el payout más alto del mercado.
            </p>
            <div className="hero__pills" role="list">
              {pills.map((p, i) => (
                <span key={i} role="listitem"
                      className={`hero__pill ${p.accent ? 'hero__pill--accent' : ''}`}>
                  <span className="hero__pill-dot"></span>{p.label}
                </span>
              ))}
            </div>
            <div className="hero__cta-row">
              <a href="#simulador" className="btn btn--primary">
                Simular mi upside <span>→</span>
              </a>
              <a href="#partners" className="btn btn--outline">
                Ver cómo funciona
              </a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Resumen rápido">
            <div className="hero__aside-label">
              <span>Resumen</span>
              <span>Partners · 2026</span>
            </div>
            <div className="hero__aside-stack">
              {[
                ['01', 'Payout del 60% — el más alto del mercado.', 'Comisiones'],
                ['02', 'Oficinas en Núñez con Middle Office en el edificio.', 'Espacio'],
                ['03', 'App propia para Team Leaders con Grow Finance.', 'Tecnología'],
                ['04', 'Hospitalities: tennis, fútbol, shows y más.', 'Beneficios'],
              ].map(([num, text, tag]) => (
                <div className="hero__aside-row" key={num}>
                  <span className="hero__aside-num">{num}</span>
                  <span className="hero__aside-text">{text}</span>
                  <span className="hero__aside-tag">{tag}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <div className="hero__floor">
          <div className="hero__floor-item">
            <span>Coord.</span><strong>34°32'42"S 58°27'34"O</strong>
          </div>
          <div className="hero__floor-item">
            <span>Modalidad</span><strong>Acceso libre · sin exclusividad</strong>
          </div>
          <div className="hero__floor-item">
            <span>Operador</span><strong>Grupo IEB</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TICKER
   ============================================================ */
function Ticker() {
  const items = [
    'Broker #1 en servicio a Agentes Productores',
    'Acceso 100% gratuito',
    'Sin exclusividad con IEB',
    'Espacio IEB · Núñez, CABA',
    'Payout más alto del mercado',
    '+15 años de trayectoria en mercado de capitales',
    'Middle Office en el mismo edificio',
    'Hospitalities exclusivas para asesores',
  ];
  const stream = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__inner">
        {stream.map((t, i) => (
          <span key={i} className="ticker__item">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   SIMULADOR
   ============================================================ */
function Simulador() {
  const [comision, setComision] = useState(2000000);
  const [payout, setPayout] = useState(30);

  const PARTNERS_PAYOUT = 0.60;
  const netoHoy = comision * (payout / 100);
  const netoPartners = comision * PARTNERS_PAYOUT;
  const incrementoPct = payout < 60
    ? Math.round(((PARTNERS_PAYOUT - payout / 100) / (payout / 100)) * 100)
    : 0;
  const difAnual = (netoPartners - netoHoy) * 12;
  const sliderPct = ((payout - 10) / (55 - 10)) * 100;

  const fmt = (n) => 'US$ ' + Math.round(Math.abs(n)).toLocaleString('es-AR');

  return (
    <section className="sim-section section" id="simulador" aria-labelledby="sim-title">
      <div className="container">
        <div className="sim-head">
          <div>
            <span className="eyebrow-line">Simulador de upside</span>
            <h2 className="sim-title" id="sim-title">
              ¿Cuánto más ganarías operando <em>con Partners</em>?
            </h2>
            <p className="sim-lead">
              Ingresá tu comisión mensual bruta y el payout que te paga tu AlyC actual.
              Calculamos cuánto más podrías ganar con el 60% que paga Partners.
            </p>
          </div>
        </div>
        <div className="sim-card">
          <div className="sim-inputs">
            <div className="sim-field">
              <label className="sim-label" htmlFor="sim-comision">
                Comisión mensual bruta (US$)
              </label>
              <input
                id="sim-comision"
                className="sim-input-number"
                type="number"
                value={comision}
                min="0"
                step="100000"
                onChange={e => setComision(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="sim-field">
              <label className="sim-label" htmlFor="sim-payout">
                Payout actual en tu AlyC: <strong style={{color:'var(--ieb-yellow)'}}>{payout}%</strong>
              </label>
              <input
                id="sim-payout"
                type="range"
                min="10"
                max="55"
                value={payout}
                step="1"
                className="sim-range"
                onChange={e => setPayout(parseInt(e.target.value))}
                style={{ background: `linear-gradient(to right, var(--ieb-yellow) ${sliderPct}%, #333 ${sliderPct}%)` }}
              />
              <div className="sim-range-labels">
                <span>10%</span>
                <span>55%</span>
              </div>
            </div>
          </div>

          <div className="sim-result">
            <div className="sim-badge">
              {incrementoPct > 0 ? `+${incrementoPct}%` : payout >= 60 ? 'Ya tenés 60%' : '='}
            </div>
            <div className="sim-cards-row">
              <div className="sim-card-today">
                <div className="sim-card-label">Hoy en tu AlyC ({payout}%)</div>
                <div className="sim-card-value">{fmt(netoHoy)}</div>
                <div className="sim-card-annual">≈ {fmt(netoHoy * 12)} / año</div>
              </div>
              <div className="sim-arrow">→</div>
              <div className="sim-card-partners">
                <div className="sim-card-label">Con Partners (60%)</div>
                <div className="sim-card-value">{fmt(netoPartners)}</div>
                <div className="sim-card-annual">≈ {fmt(netoPartners * 12)} / año</div>
              </div>
            </div>
            {difAnual > 0 && (
              <div className="sim-diff">
                <span className="sim-diff-label">Diferencia anual</span>
                <span className="sim-diff-value">+ {fmt(difAnual)}</span>
              </div>
            )}
            <p className="sim-disclaimer">
              Partners paga el payout más alto del mercado · Sin exclusividad · Sin costos fijos · Estructura 100% gratuita.
            </p>
          </div>
        </div>
        <div className="sim-cta-row">
          <a href="#acceso" className="btn btn--primary">Quiero conocer más <span>→</span></a>
          <a href="#partners" className="btn btn--outline">Ver perfiles de acceso</a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNERS (comparison table)
   ============================================================ */
function Partners() {
  const features = [
    { label: 'Oficinas privadas',                  agente: true,  asesor: true,  tl: true  },
    { label: 'Salas de reuniones',                 agente: true,  asesor: true,  tl: true  },
    { label: 'Soporte operativo',                  agente: true,  asesor: true,  tl: true  },
    { label: 'Soporte comercial',                  agente: true,  asesor: true,  tl: true  },
    { label: 'Charlas con referentes',             agente: true,  asesor: true,  tl: true  },
    { label: 'Hospitalities',                      agente: true,  asesor: true,  tl: true  },
    { label: 'Trabajás con AlyCs que quieras',     agente: true,  asesor: true,  tl: true  },
    { label: '100% gratuito',                      agente: true,  asesor: true,  tl: true  },
    { label: 'Sala exclusiva para desayunos',      agente: true,  asesor: false, tl: true  },
    { label: 'Acceso directo a mesa de operaciones', agente: true, asesor: false, tl: true },
    { label: 'Coordinador / tutor',                agente: false, asesor: true,  tl: false },
    { label: 'Soporte para reuniones con clientes',agente: false, asesor: true,  tl: false },
    { label: 'Seguimiento y armado de carteras',   agente: false, asesor: true,  tl: false },
    { label: 'Atención de clientes nuevos',        agente: false, asesor: true,  tl: false },
    { label: 'App propia (Grow Finance)',           agente: false, asesor: false, tl: true  },
    { label: 'Atención de clientes propios',       agente: false, asesor: false, tl: true  },
    { label: 'APIs para informes propios',         agente: false, asesor: false, tl: true  },
    { label: 'Reclutamiento y selección',          agente: false, asesor: false, tl: true  },
  ];

  const Cell = ({ val }) => (
    <span className={`partners-cell ${val ? 'partners-cell--yes' : 'partners-cell--no'}`}>
      <Icon name={val ? 'check' : 'minus'} size={16}/>
    </span>
  );

  return (
    <section className="partners-section section section--light" id="partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head__meta">
            <span className="eyebrow-line is-gray">Partners · Perfiles de acceso</span>
          </div>
          <h2 id="partners-title">
            Elegí el perfil que <em>mejor se adapta</em> a tu forma de trabajar.
          </h2>
        </div>
        <div className="partners-table-wrap">
          <table className="partners-table">
            <thead>
              <tr>
                <th className="partners-th-feature"></th>
                <th className="partners-th-col">Agente<br/>Productor</th>
                <th className="partners-th-col">Asesor<br/>Financiero</th>
                <th className="partners-th-col partners-th-col--highlight">
                  Team Leader
                  <span className="partners-badge">★ Completo</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="partners-row">
                  <td className="partners-td-feature">{f.label}</td>
                  <td className="partners-td-cell"><Cell val={f.agente}/></td>
                  <td className="partners-td-cell"><Cell val={f.asesor}/></td>
                  <td className="partners-td-cell partners-td-cell--highlight"><Cell val={f.tl}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="partners-note">
          Sin exclusividad · Sin costos fijos · Acceso 100% gratuito para asesores validados por Grupo IEB.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   GRUPO IEB (6 pillars)
   ============================================================ */
function GrupoIEB() {
  const pillars = [
    {
      icon: 'shield',
      title: 'Respaldo',
      body: 'La solidez institucional de Grupo IEB, con más de 15 años de trayectoria en el mercado de capitales argentino.',
    },
    {
      icon: 'layers',
      title: 'Todo en un lugar',
      body: 'Todos los productos e instrumentos del mercado desde una sola operatoria integrada.',
    },
    {
      icon: 'bar-chart',
      title: 'Información actualizada',
      body: 'Especialistas en cada área que te mantienen al tanto de la macro, los mercados y las oportunidades.',
    },
    {
      icon: 'users',
      title: 'Soporte comercial',
      body: 'Equipo de Asesores Idóneos a tu disposición para acompañarte en el desarrollo de tu negocio.',
    },
    {
      icon: 'activity',
      title: 'Las mejores plataformas',
      body: 'Una plataforma para que tus clientes inviertan y otra exclusiva para que vos gestiones tu cartera.',
    },
    {
      icon: 'trending-up',
      title: 'Condiciones competitivas',
      body: 'Acuerdos y beneficios exclusivos diseñados para el crecimiento de asesores y team leaders.',
    },
  ];
  return (
    <section className="grupo-ieb section" id="grupo" aria-labelledby="grupo-title">
      <div className="container">
        <div className="sec-head grupo-ieb-head">
          <div className="sec-head__meta sec-head__meta--dark">
            <span className="eyebrow-line">Por qué Grupo IEB</span>
          </div>
          <h2 id="grupo-title">
            El respaldo de una institución con <em>trayectoria comprobada</em>.
          </h2>
        </div>
        <div className="grupo-ieb-grid">
          {pillars.map((p, i) => (
            <div className="grupo-ieb-card" key={i}>
              <div className="grupo-ieb-icon"><Icon name={p.icon} size={22}/></div>
              <h3 className="grupo-ieb-title">{p.title}</h3>
              <p className="grupo-ieb-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ESPACIO IEB (6 numbered features)
   ============================================================ */
function EspacioIEB() {
  const features = [
    { n: '01', keyword: 'productividad',      desc: 'Trabajá rodeado de colegas en un espacio profesional. Puestos modernos, espacios comunes y ambiente de foco.' },
    { n: '02', keyword: 'dinámica comercial', desc: 'Codo a codo con traders y el equipo comercial de IEB. Acceso cotidiano a información y pulso de mercado.' },
    { n: '03', keyword: 'agilidad',            desc: 'Middle Office en el mismo edificio para resolver cuestiones operativas sin demoras ni fricción.' },
    { n: '04', keyword: 'información',         desc: 'Charlas de expertos y research de IEB para tomar mejores decisiones de asesoramiento todos los días.' },
    { n: '05', keyword: 'sin exclusividad',   desc: 'Seguís operando con las ALyCs con las que ya tenés contrato. No hay restricciones operativas.' },
    { n: '06', keyword: 'disponibilidad libre', desc: 'Venís cuando lo necesitás. Traés clientes, hacés reuniones, usás las salas y los boxes privados.' },
  ];
  return (
    <section className="espacio-ieb section section--light" id="espacio" aria-labelledby="espacio-title">
      <div className="container">
        <div className="espacio-ieb-top">
          <div>
            <span className="eyebrow-line is-gray">El espacio</span>
          </div>
          <h2 id="espacio-title">
            Una base diseñada para que <em>trabajes mejor</em>.
          </h2>
        </div>
        <div className="espacio-ieb-inner">
          <div className="espacio-ieb-list">
            {features.map(f => (
              <div className="espacio-ieb-item" key={f.n}>
                <span className="espacio-ieb-num">{f.n}</span>
                <div className="espacio-ieb-content">
                  <div className="espacio-ieb-keyword">
                    Más <strong>{f.keyword}</strong>
                  </div>
                  <p className="espacio-ieb-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="espacio-ieb-img" aria-label="Espacio IEB — Núñez, Buenos Aires">
            <div className="espacio-ieb-placeholder">
              <svg viewBox="0 0 500 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <pattern id="grid-esp" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2a28" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="500" height="360" fill="#141414"/>
                <rect width="500" height="360" fill="url(#grid-esp)"/>
                <text x="50%" y="45%" textAnchor="middle" fill="#333" fontSize="13" fontFamily="monospace" letterSpacing="3">NÚÑEZ · BUENOS AIRES</text>
                <text x="50%" y="55%" textAnchor="middle" fill="#222" fontSize="11" fontFamily="monospace" letterSpacing="2">Espacio IEB · Fotos próximamente</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOSPITALITIES (4 benefit cards)
   ============================================================ */
function Hospitalities() {
  const cards = [
    {
      emoji: '🎾',
      title: 'Argentina Open',
      desc: 'IEB+ es naming sponsor del torneo. Palcos preferenciales y acceso exclusivo al evento más importante del tenis argentino.',
    },
    {
      emoji: '⚽',
      title: 'River Plate · Monumental',
      desc: 'Acceso VIP a partidos en el estadio más grande de Argentina. Una experiencia única para vos y tus mejores clientes.',
    },
    {
      emoji: '🏟️',
      title: 'Atlético Talleres · Kempes',
      desc: 'Experiencias premium en uno de los estadios más modernos del país, con atención y espacios de primer nivel.',
    },
    {
      emoji: '🎵',
      title: 'Movistar Arena',
      desc: 'Espacios preferenciales en los principales shows y eventos del año. El entretenimiento como herramienta comercial.',
    },
  ];
  return (
    <section className="hospitalities section" id="hospitalities" aria-labelledby="hosp-title">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head__meta sec-head__meta--dark">
            <span className="eyebrow-line">Hospitalities</span>
          </div>
          <h2 id="hosp-title">
            Experiencias exclusivas para vos <em>y tus clientes</em>.
          </h2>
        </div>
        <div className="hosp-grid">
          {cards.map((c, i) => (
            <div className="hosp-card" key={i}>
              <div className="hosp-emoji" aria-hidden="true">{c.emoji}</div>
              <h3 className="hosp-title">{c.title}</h3>
              <p className="hosp-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GROW FINANCE (custom app for Team Leaders)
   ============================================================ */
function GrowFinance() {
  const features = [
    'App propia en App Store y Google Play',
    'Web 100% personalizada con tu logo y colores',
    'Alta automática de cuentas bajo tu manager',
    'Fondo común propio (o fondo dedicado)',
    'Sin costos de desarrollo ni estructura adicional',
    'Respaldada por la trayectoria de Grupo IEB',
  ];
  return (
    <section className="grow-finance section" id="grow-finance" aria-labelledby="gf-title">
      <div className="container">
        <div className="gf-inner">
          <div className="gf-copy">
            <span className="eyebrow">Para Team Leaders</span>
            <h2 className="gf-title" id="gf-title">
              Tu propia plataforma <em>de inversiones</em>.
            </h2>
            <p className="gf-lead">
              Los team leaders que se suman a Partners pueden acceder a Grow Finance:
              una plataforma con marca blanca propia, app en las tiendas y gestión
              integrada de cartera de clientes. Sin costos de desarrollo.
            </p>
            <div className="gf-features">
              {features.map((f, i) => (
                <div className="gf-feature" key={i}>
                  <span className="gf-num">0{i + 1}</span>
                  <span className="gf-feature-text">{f}</span>
                </div>
              ))}
            </div>
            <a href="#acceso" className="btn btn--dark" style={{marginTop:'32px'}}>Quiero saber más →</a>
          </div>
          <div className="gf-visual">
            <div className="gf-phone-frame">
              <div className="gf-phone-screen">
                <div className="gf-phone-header">
                  <span className="gf-phone-brand">Tu marca</span>
                </div>
                <div className="gf-phone-content">
                  <div className="gf-phone-line"></div>
                  <div className="gf-phone-line gf-phone-line--short"></div>
                  <div className="gf-phone-chart"></div>
                  <div className="gf-phone-line gf-phone-line--short"></div>
                  <div className="gf-phone-line"></div>
                </div>
              </div>
              <div className="gf-phone-label">
                <Icon name="smartphone" size={14}/>
                <span>Grow Finance · Powered by IEB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECNOLOGIA (2-card tech grid)
   ============================================================ */
function Tecnologia() {
  return (
    <section className="tecnologia section section--light" id="tecnologia" aria-labelledby="tec-title">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head__meta">
            <span className="eyebrow-line is-gray">Tecnología</span>
          </div>
          <h2 id="tec-title">
            Dos plataformas. <em>Un ecosistema</em>.
          </h2>
        </div>
        <div className="tec-grid">
          <div className="tec-card tec-card--investor">
            <div className="tec-card-eyebrow">Para tus clientes</div>
            <h3 className="tec-card-title">App para inversores</h3>
            <p className="tec-card-body">
              La experiencia digital que tus clientes necesitan para invertir y
              hacer seguimiento de su cartera con facilidad.
            </p>
            <ul className="tec-card-list">
              <li>Seguimiento de cartera en tiempo real</li>
              <li>Operatoria simple e intuitiva</li>
              <li>Acceso a todos los instrumentos del mercado local</li>
            </ul>
          </div>
          <div className="tec-card tec-card--advisor">
            <div className="tec-card-eyebrow">Para vos</div>
            <h3 className="tec-card-title">Plataforma para asesores</h3>
            <p className="tec-card-body">
              La herramienta exclusiva para gestionar tu cartera de clientes,
              operar y armar informes con datos en tiempo real.
            </p>
            <ul className="tec-card-list">
              <li>Gestión integral de cartera de clientes</li>
              <li>APIs para armado de informes propios</li>
              <li>Herramientas de análisis y seguimiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
const FAQ_ITEMS = [
  { q: '¿Qué es Espacio IEB?', a: 'Espacio IEB es una iniciativa de Grupo IEB para fortalecer la comunidad de asesores financieros externos en Argentina. Combina puestos de trabajo, salas de reunión, boxes privados, soporte de Middle Office, charlas de mercado y comunidad profesional, en una base ubicada en Núñez, Buenos Aires.' },
  { q: '¿Por qué Grupo IEB creó Espacio IEB?', a: 'Porque el asesor financiero cumple un rol clave en el desarrollo del mercado de capitales argentino, pero muchas veces trabaja de forma aislada. Espacio IEB nace para crear un entorno profesional donde los asesores externos puedan trabajar, recibir clientes, estar cerca de especialistas y fortalecer la comunidad.' },
  { q: '¿Espacio IEB es un coworking?', a: 'No. Espacio IEB no es un coworking. Es una base operativa, comercial y profesional pensada exclusivamente para asesores financieros externos, con infraestructura de oficinas, salas de reunión, soporte operativo, cercanía con equipos de Grupo IEB y una comunidad de pares del mercado de capitales.' },
  { q: '¿Quiénes pueden usar Espacio IEB?', a: 'Está pensado para Agentes Productores Independientes, asesores financieros que trabajan en ALyCs, asesores senior, team leaders que quieren desarrollar equipo propio y profesionales del mercado de capitales que buscan más independencia sin perder estructura.' },
  { q: '¿Dónde queda Espacio IEB?', a: 'Espacio IEB está ubicado en el barrio de Núñez, en la Ciudad Autónoma de Buenos Aires (CABA), Argentina. Es una zona estratégica con buena conectividad y cocheras disponibles.' },
  { q: '¿Tiene costo?', a: 'No. El acceso a Espacio IEB es 100% gratuito para los asesores financieros externos validados por Grupo IEB. No hay membresía ni pagos asociados al uso del espacio.' },
  { q: '¿Exige exclusividad con IEB?', a: 'No. Espacio IEB no exige exclusividad. El asesor puede seguir operando con las ALyCs con las que ya trabaja. La propuesta es sumar estructura, comunidad y respaldo, sin condicionar la libertad operativa del asesor.' },
  { q: '¿Cómo funciona el simulador de comisiones?', a: 'El simulador te muestra cuánto más ganarías si el payout que recibís fuera del 60% que ofrece Partners, comparado con el porcentaje actual de tu AlyC. Es una estimación basada en tu comisión mensual bruta. Los números exactos se coordinan en la etapa de onboarding.' },
  { q: '¿Cómo puedo solicitar acceso?', a: 'Podés solicitar acceso completando el formulario al final de esta página. El equipo de Espacio IEB se va a contactar para validar el perfil, coordinar una visita y explicarte cómo funciona el espacio en detalle.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__head">
          <div>
            <span className="eyebrow-line">FAQ</span>
            <h2 className="faq__title" id="faq-title">
              Lo que asesores como vos <em>nos preguntan</em>.
            </h2>
          </div>
          <p className="faq__lead">
            Si tu pregunta no está acá, escribinos en el formulario de abajo.
            El equipo de Espacio IEB responde personalmente cada solicitud.
          </p>
        </div>
        <div className="faq__list" itemScope itemType="https://schema.org/FAQPage">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${open === i ? 'is-open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(open === i ? -1 : i); } }}>
              <span className="faq__item-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="faq__item-q" itemProp="name">{item.q}</h3>
              <span className="faq__item-toggle" aria-hidden="true">{open === i ? '−' : '+'}</span>
              <div className="faq__item-a" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <span itemProp="text">{item.a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ACCESO (form)
   ============================================================ */
function Acceso() {
  const [data, setData] = useState({
    nombre: '', email: '', telefono: '',
    perfil: '', alyc: '', clientes: '', mensaje: '',
    consent: false,
  });
  const [sent, setSent] = useState(false);

  const valid = data.nombre.length > 1 && /\S+@\S+\.\S+/.test(data.email) && data.perfil && data.consent;

  const onChange = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({ ...data, [k]: val });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
  };

  return (
    <section className="acceso section" id="acceso" aria-labelledby="acceso-title">
      <div className="acceso__trama"></div>
      <div className="container">
        <div className="acceso__inner">
          <div>
            <span className="eyebrow-line">Solicitar acceso</span>
            <h2 className="acceso__title" id="acceso-title">
              Sumate a la comunidad de <em>asesores externos</em> de Espacio IEB.
            </h2>
            <p className="acceso__lead">
              Completá el formulario y el equipo de Espacio IEB se va a contactar para
              validar tu perfil, coordinar una visita y explicarte cómo funciona el
              espacio en detalle.
            </p>
            <div className="acceso__points">
              <div className="acceso__point"><span className="acceso__point-tick"></span><span><strong style={{color:'#fff'}}>Acceso 100% gratuito</strong> · sin membresía ni pagos asociados.</span></div>
              <div className="acceso__point"><span className="acceso__point-tick"></span><span><strong style={{color:'#fff'}}>Sin exclusividad</strong> · seguí operando con las ALyCs con las que ya trabajás.</span></div>
              <div className="acceso__point"><span className="acceso__point-tick"></span><span><strong style={{color:'#fff'}}>Visita coordinada</strong> · conocé el espacio antes de definir nada.</span></div>
              <div className="acceso__point"><span className="acceso__point-tick"></span><span><strong style={{color:'#fff'}}>Atención personalizada</strong> · respuesta del equipo en menos de 48hs hábiles.</span></div>
            </div>
          </div>
          <form className="form" onSubmit={submit} noValidate>
            <div className="form__label-row">
              <span>Formulario · Acceso</span>
              <span>{sent ? 'Enviado' : (valid ? 'Listo' : 'Completar')}</span>
            </div>
            {sent ? (
              <div className="form__success">
                <div className="form__success-tick">Solicitud recibida</div>
                <h4>Gracias, {data.nombre.split(' ')[0]}.</h4>
                <p>El equipo de Espacio IEB va a contactarte a <strong style={{color:'#fff'}}>{data.email}</strong> en menos de 48 horas hábiles para coordinar tu visita.</p>
              </div>
            ) : (
              <>
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="nombre">Nombre y apellido<sup>*</sup></label>
                    <input id="nombre" type="text" placeholder="Ej. Lucía Fernández"
                           value={data.nombre} onChange={onChange('nombre')} required/>
                  </div>
                  <div className="form__field">
                    <label htmlFor="email">Email<sup>*</sup></label>
                    <input id="email" type="email" placeholder="lucia@dominio.com"
                           value={data.email} onChange={onChange('email')} required/>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="telefono">Teléfono</label>
                    <input id="telefono" type="tel" placeholder="+54 11 ..."
                           value={data.telefono} onChange={onChange('telefono')}/>
                  </div>
                  <div className="form__field">
                    <label htmlFor="perfil">Perfil profesional<sup>*</sup></label>
                    <select id="perfil" value={data.perfil} onChange={onChange('perfil')} required>
                      <option value="">Seleccionar...</option>
                      <option value="API">Agente Productor Independiente</option>
                      <option value="ALyC">Asesor financiero en ALyC</option>
                      <option value="TL">Asesor senior / Team leader</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="alyc">ALyC con la que operás</label>
                    <input id="alyc" type="text" placeholder="Opcional"
                           value={data.alyc} onChange={onChange('alyc')}/>
                  </div>
                  <div className="form__field">
                    <label htmlFor="clientes">Cartera aproximada</label>
                    <select id="clientes" value={data.clientes} onChange={onChange('clientes')}>
                      <option value="">Seleccionar...</option>
                      <option>1 – 25 clientes</option>
                      <option>26 – 100 clientes</option>
                      <option>101 – 300 clientes</option>
                      <option>+300 clientes</option>
                      <option>Prefiero no responder</option>
                    </select>
                  </div>
                </div>
                <div className="form__field form__field--full">
                  <label htmlFor="mensaje">Comentario (opcional)</label>
                  <textarea id="mensaje" placeholder="Contanos brevemente qué te interesa de Espacio IEB"
                            value={data.mensaje} onChange={onChange('mensaje')}/>
                </div>
                <label className="form__check">
                  <input type="checkbox" checked={data.consent} onChange={onChange('consent')}/>
                  <span>Acepto que Grupo IEB use mis datos para contactarme y validar mi perfil. Consultar la <a href="privacidad.html">política de privacidad</a>.</span>
                </label>
                <button type="submit" className="form__submit" disabled={!valid}>
                  <span>Enviar solicitud</span>
                  <span>→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="assets/logos/espacio-ieb-nav.png" alt="Espacio IEB" width="558" height="98" style={{height:'28px',width:'auto'}}/>
            <p>Una iniciativa de Grupo IEB para asesores financieros externos en Argentina. Infraestructura, comunidad y el payout más alto del mercado. Núñez, Buenos Aires.</p>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Navegar</p>
            <ul>
              <li><a href="#simulador">Simulador</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#espacio">Espacio IEB</a></li>
              <li><a href="#hospitalities">Beneficios</a></li>
              <li><a href="#tecnologia">Tecnología</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Sumate</p>
            <ul>
              <li><a href="#grow-finance">Grow Finance</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#acceso">Solicitar acceso</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Grupo IEB</p>
            <ul>
              <li><a href="https://grupoieb.com.ar" target="_blank" rel="noopener noreferrer">grupoieb.com.ar</a></li>
              <li><a href="https://ar.linkedin.com/company/grupoieb" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#acceso">Contacto</a></li>
              <li><a href="privacidad.html">Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Grupo IEB · Espacio IEB · Núñez, CABA</span>
          <div className="footer__legal">
            <a href="#">Términos</a>
            <a href="privacidad.html">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Ticker/>
        <Simulador/>
        <Partners/>
        <GrupoIEB/>
        <EspacioIEB/>
        <Hospitalities/>
        <GrowFinance/>
        <Tecnologia/>
        <FAQ/>
        <Acceso/>
      </main>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
