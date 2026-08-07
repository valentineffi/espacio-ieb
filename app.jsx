/* global React, ReactDOM */
const { useState, useEffect } = React;

/* ============================================================
   ICONS — minimal inline set
   ============================================================ */
const Icon = ({ name, size = 18 }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    check:  <svg {...p}><polyline points="20 6 9 17 4 12"/></svg>,
    minus:  <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    arrow:  <svg {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    phone:  <svg {...p}><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12" y2="18"/></svg>,
    pin:    <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  };
  return icons[name] || null;
};

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: 'grupo', label: 'Grupo IEB' },
    { id: 'espacio', label: 'Espacio' },
    { id: 'partners', label: 'Partners' },
    { id: 'simulador', label: 'Simulador' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'faq', label: 'FAQ' },
  ];
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let cur = '';
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 140) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Navegación principal">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="IEB External Advisors — inicio">
          <img className="nav__logo-img" src="assets/logos/ieb-logotype-black.png" alt="IEB External Advisors" width="383" height="148"/>
        </a>
        <div className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}
               className={`nav__link ${active === l.id ? 'is-active' : ''}`}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="nav__cta nav__cta--mobile" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
        <a href="#contacto" className="nav__cta">Contacto</a>
        <button className="nav__menu-btn" aria-label="Menú" aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}>
          <span/><span/>
        </button>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO — office footage (subtle motion) + thesis headline
   ============================================================ */
function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__media-img"></div>
        <div className="hero__pattern"></div>
        <div className="hero__scrim"></div>
      </div>
      <div className="container hero__container">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow">Grupo IEB · External Advisors</span>
          <h1 className="display-lg hero__title">
            Asesoramiento externo como <span className="em-cyan">ventaja estructural</span>.
          </h1>
          <p className="body-lg hero__sub">
            El payout más alto del mercado y el respaldo de Grupo IEB, sin resignar tu
            independencia. Infraestructura, tecnología y espacio de trabajo para asesores
            y agentes productores en Argentina.
          </p>
          <div className="hero__cta-row">
            <a href="#simulador" className="btn btn--accent">Simular mi payout <Icon name="arrow" size={16}/></a>
            <a href="#espacio" className="btn btn--ghost-dark">Conocer Espacio IEB</a>
          </div>
          <div className="hero__proof">
            <span><Icon name="pin" size={15}/> Núñez, Buenos Aires</span>
            <span className="hero__proof-sep"/>
            <span>Sin exclusividad</span>
            <span className="hero__proof-sep"/>
            <span>Acceso sin costo</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   GRUPO IEB — why (6 pillars, light)
   ============================================================ */
function GrupoIEB() {
  const pillars = [
    { title: 'Respaldo',                 body: 'La sólida trayectoria de Grupo IEB en el mercado de capitales argentino detrás de cada operación.' },
    { title: 'Todo en un mismo lugar',   body: 'Todos los productos e instrumentos del mercado desde una sola operatoria integrada.' },
    { title: 'Información actualizada',   body: 'Especialistas que te mantienen al tanto de la macro, los mercados y las oportunidades.' },
    { title: 'Soporte comercial',        body: 'Un equipo de Asesores Idóneos para el seguimiento diario de tus operaciones.' },
    { title: 'Las mejores plataformas',  body: 'Una para que tus clientes inviertan y otra exclusiva para eficientizar tu trabajo.' },
    { title: 'Condiciones competitivas', body: 'Acuerdos comerciales y beneficios diferenciales para que crezca tu negocio.' },
  ];
  return (
    <section className="section grupo" id="grupo" aria-labelledby="grupo-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Por qué Grupo IEB</span>
          <h2 className="display-md" id="grupo-title">
            Somos el <span className="em-cyan">broker #1</span> en servicio a agentes productores.
          </h2>
        </div>
        <div className="grupo__grid">
          {pillars.map((p, i) => (
            <div className="grupo__card" key={i}>
              <h3 className="grupo__card-title">{p.title}</h3>
              <p className="grupo__card-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ESPACIO IEB — photos + 6 "Más…" features
   ============================================================ */
function EspacioIEB() {
  const features = [
    { k: 'Más productividad',      d: 'Interactuá con colegas en un espacio profesional pensado para asesores externos.' },
    { k: 'Más dinámica comercial', d: 'Trabajá junto a comerciales de IEB y traders, mejorando tu view de mercado.' },
    { k: 'Más agilidad',           d: 'Middle Office en el mismo edificio para resolver operativa, aperturas y temas diarios.' },
    { k: 'Más información',         d: 'Charlas con especialistas de Grupo IEB para tomar mejores decisiones de mercado.' },
    { k: 'Sin exclusividad',       d: 'Seguís operando las cuentas de tus clientes con los AlyC con los que ya tenés contrato.' },
    { k: 'Libre disponibilidad',   d: 'Vas las veces que quieras, recibís clientes y armás reuniones cuando te haga falta.' },
  ];
  return (
    <section className="section surface-muted espacio" id="espacio" aria-labelledby="espacio-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow eyebrow--gray">El espacio</span>
          <h2 className="display-md" id="espacio-title">
            Un espacio <span className="em-cyan">exclusivo</span> para asesores externos.
          </h2>
          <p className="sec-lead">
            Sin costo. Oficinas, salas privadas, Middle Office y todo el equipo de IEB
            acompañándote, en Núñez.
          </p>
        </div>
        <div className="espacio__gallery" aria-label="Espacio IEB — oficinas en Núñez, Buenos Aires">
          <img className="espacio__photo espacio__photo--main" src="assets/fotos/oficina-1.jpg"
               alt="Oficinas de Espacio IEB en Núñez, Buenos Aires" width="1600" height="900" loading="lazy"/>
          <img className="espacio__photo" src="assets/fotos/oficina-2.jpg" alt="Puestos de trabajo en Espacio IEB" width="1600" height="1200" loading="lazy"/>
          <img className="espacio__photo" src="assets/fotos/oficina-3.jpg" alt="Salas de reunión en Espacio IEB" width="1600" height="1200" loading="lazy"/>
        </div>
        <div className="espacio__features">
          {features.map((f, i) => (
            <div className="espacio__item" key={i}>
              <span className="espacio__tick"><Icon name="check" size={14}/></span>
              <div>
                <strong>{f.k}</strong>
                <p>{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNERS — comparison table (condensed)
   ============================================================ */
function Partners() {
  const features = [
    { label: 'Oficinas y salas de reunión',            agente: true,  asesor: true,  tl: true  },
    { label: 'Soporte operativo y comercial',          agente: true,  asesor: true,  tl: true  },
    { label: 'Hospitalities y charlas con referentes', agente: true,  asesor: true,  tl: true  },
    { label: 'Trabajás con las AlyCs que quieras',     agente: true,  asesor: true,  tl: true  },
    { label: 'Acceso directo a mesa de operaciones',   agente: true,  asesor: false, tl: true  },
    { label: 'Coordinador y armado de carteras',       agente: false, asesor: true,  tl: false },
    { label: 'Atención de clientes nuevos',            agente: false, asesor: true,  tl: false },
    { label: 'App propia (Grow Finance)',              agente: false, asesor: false, tl: true  },
    { label: 'APIs para informes propios',             agente: false, asesor: false, tl: true  },
    { label: 'Reclutamiento y selección de equipo',    agente: false, asesor: false, tl: true  },
  ];
  const Cell = ({ val }) => (
    <span className={`partners__cell ${val ? 'is-yes' : 'is-no'}`}>
      <Icon name={val ? 'check' : 'minus'} size={15}/>
    </span>
  );
  return (
    <section className="section partners" id="partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow eyebrow--gray">Partners · Perfiles de acceso</span>
          <h2 className="display-md" id="partners-title">
            Desarrollá tu propio equipo, con estructura y <span className="em-cyan">sin resignar independencia</span>.
          </h2>
        </div>
        <div className="partners__wrap">
          <table className="partners__table">
            <thead>
              <tr>
                <th></th>
                <th>Agente<br/>Productor</th>
                <th>Asesor<br/>Financiero</th>
                <th className="is-highlight">Team Leader</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i}>
                  <td className="partners__feature">{f.label}</td>
                  <td><Cell val={f.agente}/></td>
                  <td><Cell val={f.asesor}/></td>
                  <td className="is-highlight"><Cell val={f.tl}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="partners__note">Sin exclusividad · Sin costos fijos · Acceso sin costo para asesores validados por Grupo IEB.</p>
      </div>
    </section>
  );
}

/* ============================================================
   SIMULADOR — signature interactive moment
   ============================================================ */
function Simulador() {
  const [comision, setComision] = useState(2000000);
  const [payout, setPayout] = useState(30);

  const PARTNERS_PAYOUT = 0.60;
  const netoHoy = comision * (payout / 100);
  const netoPartners = comision * PARTNERS_PAYOUT;
  const incrementoPct = Math.round(((PARTNERS_PAYOUT - payout / 100) / (payout / 100)) * 100);
  const difAnual = (netoPartners - netoHoy) * 12;
  const sliderPct = ((payout - 10) / (55 - 10)) * 100;

  const fmt = (n) => 'US$ ' + Math.round(Math.abs(n)).toLocaleString('es-AR');

  return (
    <section className="section surface-muted sim" id="simulador" aria-labelledby="sim-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Simulador de ingresos</span>
          <h2 className="display-md" id="sim-title">
            ¿Cuánto más podés ganar como <span className="em-cyan">asesor independiente</span>?
          </h2>
          <p className="sec-lead">
            Ingresá tu comisión mensual bruta y el payout que te paga tu AlyC hoy.
            Calculamos la diferencia contra el 60% que paga IEB External Advisors.
          </p>
        </div>

        <div className="sim__grid">
          <div className="sim__controls">
            <div className="sim__field">
              <label className="sim__label" htmlFor="sim-comision">Comisión bruta promedio mensual</label>
              <div className="sim__input-wrap">
                <span className="sim__input-prefix">US$</span>
                <input id="sim-comision" className="sim__input" type="number" inputMode="numeric"
                       value={comision} min="0" max="5000000" step="100000"
                       onChange={e => setComision(Math.min(Math.max(parseFloat(e.target.value) || 0, 0), 5000000))}/>
              </div>
            </div>
            <div className="sim__field">
              <label className="sim__label" htmlFor="sim-payout">
                Payout actual en tu AlyC <span className="sim__label-val">{payout}%</span>
              </label>
              <input id="sim-payout" type="range" min="10" max="55" value={payout} step="1"
                     className="sim__range" onChange={e => setPayout(parseInt(e.target.value))}
                     style={{ background: `linear-gradient(to right, var(--ieb-cyan) ${sliderPct}%, var(--gray-100) ${sliderPct}%)` }}/>
              <div className="sim__range-labels"><span>10%</span><span>55%</span></div>
            </div>
          </div>

          <div className="sim__result">
            {incrementoPct > 0 && <div className="sim__badge">+{incrementoPct}% de ingreso</div>}
            <div className="sim__compare">
              <div className="sim__col">
                <span className="sim__col-label">Hoy en tu AlyC · {payout}%</span>
                <span className="sim__col-value">{fmt(netoHoy)}</span>
                <span className="sim__col-annual">{fmt(netoHoy * 12)} / año</span>
              </div>
              <div className="sim__col sim__col--accent">
                <span className="sim__col-label">Como independiente · 60%</span>
                <span className="sim__col-value">{fmt(netoPartners)}</span>
                <span className="sim__col-annual">{fmt(netoPartners * 12)} / año</span>
              </div>
            </div>
            {difAnual > 0 && (
              <div className="sim__diff">
                <span>Diferencia anual</span>
                <strong>+ {fmt(difAnual)}</strong>
              </div>
            )}
            <p className="sim__note">Estimación orientativa. Sin exclusividad, sin costos fijos ni mínimos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOSPITALITIES — 4 benefit cards
   ============================================================ */
function Hospitalities() {
  const cards = [
    { img: 'assets/fotos/argentina-open.jpg', title: 'Argentina Open',            desc: 'IEB+ es naming sponsor del torneo. Palcos preferenciales en el evento más importante del tenis argentino.' },
    { img: 'assets/fotos/river-plate.jpg',    title: 'River Plate · Monumental',  desc: 'Acceso VIP a partidos en el estadio más grande de Argentina, para vos y tus mejores clientes.' },
    { img: 'assets/fotos/talleres.jpg',       title: 'Talleres · Kempes',         desc: 'Experiencias premium en uno de los estadios más modernos del país.' },
    { img: 'assets/fotos/movistar-arena.jpg', title: 'Movistar Arena',            desc: 'Espacios preferenciales en los principales shows y eventos del año.' },
  ];
  return (
    <section className="section hosp" id="hospitalities" aria-labelledby="hosp-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow eyebrow--gray">Beneficios IEB</span>
          <h2 className="display-md" id="hosp-title">
            Hospitalities para vivir el deporte y la cultura <span className="em-cyan">en primera fila</span>.
          </h2>
        </div>
        <div className="hosp__grid">
          {cards.map((c, i) => (
            <article className="hosp__card" key={i}>
              <div className="hosp__media"><img src={c.img} alt={c.title} loading="lazy"/></div>
              <div className="hosp__body">
                <h3 className="hosp__title">{c.title}</h3>
                <p className="hosp__desc">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECNOLOGIA — Grow Finance + platforms (merged)
   ============================================================ */
function Tecnologia() {
  return (
    <section className="section surface-muted tec" id="tecnologia" aria-labelledby="tec-title">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Tecnología</span>
          <h2 className="display-md" id="tec-title">
            La mejor tecnología para <span className="em-cyan">acompañar tu crecimiento</span>.
          </h2>
        </div>

        <div className="tec__hero">
          <div className="tec__copy">
            <span className="tec__tag">Para Team Leaders</span>
            <h3 className="tec__grow-title">Tu propia app de inversiones</h3>
            <p className="tec__lead">
              Los team leaders que se suman pueden acceder a Grow Finance: una plataforma
              con marca blanca propia, app en las tiendas y gestión integrada de la cartera
              de clientes. Sin costos de desarrollo y respaldada por la trayectoria de Grupo IEB.
            </p>
            <ul className="tec__features">
              <li>App propia en App Store y Google Play</li>
              <li>Web personalizada con tu logo y colores</li>
              <li>Alta automática de cuentas bajo tu manager</li>
              <li>Respaldada por la trayectoria de Grupo IEB</li>
            </ul>
          </div>
          <div className="tec__visual">
            <img className="tec__mockup" src="assets/fotos/grow-app.png"
                 alt="App de inversiones con marca blanca — Grow Finance, powered by IEB"
                 width="1200" height="1091" loading="lazy"/>
            <span className="tec__mockup-label"><Icon name="phone" size={13}/> Grow Finance · Powered by IEB</span>
          </div>
        </div>

        <div className="tec__cards">
          <div className="tec__card">
            <span className="tec__card-tag">Para tus clientes</span>
            <h3 className="tec__card-title">La app y web más intuitiva del mercado</h3>
            <p>Seguimiento de cartera en tiempo real, operatoria simple y acceso a todos los instrumentos del mercado local.</p>
          </div>
          <div className="tec__card">
            <span className="tec__card-tag">Para vos</span>
            <h3 className="tec__card-title">Plataforma de gestión comercial y operativa</h3>
            <p>Gestión integral de cartera, APIs para informes propios y herramientas de análisis y seguimiento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ (trimmed)
   ============================================================ */
const FAQ_ITEMS = [
  { q: '¿Qué es Espacio IEB?', a: 'Es una iniciativa de Grupo IEB para asesores financieros externos: puestos de trabajo, salas de reunión, boxes privados, soporte de Middle Office, charlas de mercado y comunidad profesional, en Núñez, Buenos Aires.' },
  { q: '¿Tiene costo? ¿Es gratuito?', a: 'El acceso es sin costo para los asesores financieros externos validados por Grupo IEB. No hay membresía ni pagos asociados al uso del espacio.' },
  { q: '¿Puedo seguir operando con mi AlyC actual?', a: 'Sí. No exigimos exclusividad. Seguís operando las cuentas de tus clientes con los AlyC con los que ya tenés contrato. La propuesta suma estructura y respaldo sin condicionar tu libertad operativa.' },
  { q: '¿Quiénes pueden usar Espacio IEB?', a: 'Agentes productores independientes, asesores financieros que trabajan en AlyCs, asesores senior y team leaders que quieren desarrollar equipo propio sin perder estructura.' },
  { q: '¿Puedo recibir clientes en el espacio?', a: 'Sí. Contamos con salas de reunión y boxes privados para videollamadas, pensados para que atiendas a tus clientes en un entorno profesional e institucional.' },
  { q: '¿Cómo funciona el simulador?', a: 'Compara cuánto ganás hoy con el payout de tu AlyC contra el 60% que ofrece IEB External Advisors, según tu comisión mensual bruta. Es una estimación; los números exactos se coordinan en el onboarding.' },
];
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="display-md" id="faq-title">Lo que asesores como vos <span className="em-cyan">nos preguntan</span>.</h2>
          <p className="sec-lead">Todo lo que necesitás saber antes de sumarte. Si tu pregunta no está acá, escribinos directamente desde el formulario.</p>
        </div>
        <div className="faq__list" itemScope itemType="https://schema.org/FAQPage">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}
              className={`faq__item ${open === i ? 'is-open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
              itemProp="mainEntity" itemScope itemType="https://schema.org/Question"
              role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(open === i ? -1 : i); } }}>
              <div className="faq__q">
                <h3 itemProp="name">{item.q}</h3>
                <span className="faq__toggle" aria-hidden="true">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq__a" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACTO (form)
   ============================================================ */
function Contacto() {
  const [data, setData] = useState({ nombre: '', email: '', telefono: '', perfil: '', alyc: '', clientes: '', mensaje: '', consent: false });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const valid = data.nombre.length > 1 && /\S+@\S+\.\S+/.test(data.email) && data.perfil && data.consent;
  const onChange = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({ ...data, [k]: val });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true); setError('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('request failed');
      setSent(true);
    } catch (err) {
      setError('No pudimos enviar tu mensaje. Probá de nuevo en unos minutos.');
    } finally { setSending(false); }
  };

  return (
    <section className="section surface-black contacto" id="contacto" aria-labelledby="contacto-title">
      <div className="container contacto__inner">
        <div className="contacto__copy">
          <span className="eyebrow">Contacto</span>
          <h2 className="display-md" id="contacto-title">
            Sumate a la comunidad de <span className="em-cyan">asesores externos</span>.
          </h2>
          <p className="contacto__lead">
            Completá el formulario y el equipo de IEB External Advisors se contacta a la
            brevedad para validar tu perfil, coordinar una visita y explicarte cómo funciona
            el espacio.
          </p>
          <ul className="contacto__points">
            <li><span className="contacto__tick"><Icon name="check" size={13}/></span> Acceso sin costo, sin membresía ni pagos asociados.</li>
            <li><span className="contacto__tick"><Icon name="check" size={13}/></span> Sin exclusividad: seguí operando con tus AlyCs.</li>
            <li><span className="contacto__tick"><Icon name="check" size={13}/></span> Visita coordinada antes de definir nada.</li>
            <li><span className="contacto__tick"><Icon name="check" size={13}/></span> Respuesta del equipo en menos de 48hs hábiles.</li>
          </ul>
        </div>

        <form className="form" onSubmit={submit} noValidate>
          {sent ? (
            <div className="form__success">
              <div className="form__success-tag">Mensaje recibido</div>
              <h3>Gracias, {data.nombre.split(' ')[0]}.</h3>
              <p>Nos pondremos en contacto a <strong>{data.email}</strong> en menos de 48 horas hábiles para coordinar tu visita.</p>
            </div>
          ) : (
            <>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="nombre">Nombre y apellido <sup>*</sup></label>
                  <input id="nombre" type="text" placeholder="Ej. Lucía Fernández" value={data.nombre} onChange={onChange('nombre')} required/>
                </div>
                <div className="form__field">
                  <label htmlFor="email">Email <sup>*</sup></label>
                  <input id="email" type="email" placeholder="lucia@dominio.com" value={data.email} onChange={onChange('email')} required/>
                </div>
              </div>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input id="telefono" type="tel" placeholder="+54 11 ..." value={data.telefono} onChange={onChange('telefono')}/>
                </div>
                <div className="form__field">
                  <label htmlFor="perfil">Perfil profesional <sup>*</sup></label>
                  <select id="perfil" value={data.perfil} onChange={onChange('perfil')} required>
                    <option value="">Seleccionar…</option>
                    <option value="API">Agente Productor Independiente</option>
                    <option value="ALyC">Asesor financiero en AlyC</option>
                    <option value="TL">Asesor senior / Team leader</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="alyc">AlyC con la que operás</label>
                  <input id="alyc" type="text" placeholder="Opcional" value={data.alyc} onChange={onChange('alyc')}/>
                </div>
                <div className="form__field">
                  <label htmlFor="clientes">Cartera aproximada</label>
                  <select id="clientes" value={data.clientes} onChange={onChange('clientes')}>
                    <option value="">Seleccionar…</option>
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
                <textarea id="mensaje" placeholder="Contanos brevemente qué te interesa" value={data.mensaje} onChange={onChange('mensaje')}/>
              </div>
              <label className="form__check">
                <input type="checkbox" checked={data.consent} onChange={onChange('consent')}/>
                <span>Acepto que Grupo IEB use mis datos para contactarme y validar mi perfil. Ver la <a href="privacidad.html">política de privacidad</a>.</span>
              </label>
              {error && <p className="form__error" role="alert">{error}</p>}
              <button type="submit" className="form__submit" disabled={!valid || sending}>
                {sending ? 'Enviando…' : 'Enviar solicitud'} <Icon name="arrow" size={16}/>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — Grupo-style, monogram links to grupoieb.com.ar
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img className="footer__logo" src="assets/logos/ieb-logotype-white.png" alt="IEB External Advisors" width="383" height="148"/>
            <p>Una iniciativa de Grupo IEB para asesores financieros externos en Argentina. Infraestructura, comunidad y el payout más alto del mercado. Núñez, Buenos Aires.</p>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Navegar</p>
            <ul>
              <li><a href="#grupo">Grupo IEB</a></li>
              <li><a href="#espacio">Espacio IEB</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#simulador">Simulador</a></li>
              <li><a href="#tecnologia">Tecnología</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Grupo IEB</p>
            <ul>
              <li><a href="https://grupoieb.com.ar" target="_blank" rel="noopener noreferrer">grupoieb.com.ar</a></li>
              <li><a href="https://ar.linkedin.com/company/grupoieb" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="privacidad.html">Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <a href="https://grupoieb.com.ar" target="_blank" rel="noopener noreferrer" className="footer__grupo" aria-label="Ir a grupoieb.com.ar">
            <img src="assets/logos/ieb-monogram-on-dark.svg" alt="Grupo IEB" width="40" height="40"/>
            <span>Una empresa de <strong>Grupo IEB</strong></span>
          </a>
          <span className="footer__copy">© 2026 Grupo IEB · Espacio IEB · Núñez, CABA</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP — section order mirrors the base44 reference
   ============================================================ */
function App() {
  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <GrupoIEB/>
        <EspacioIEB/>
        <Partners/>
        <Simulador/>
        <Hospitalities/>
        <Tecnologia/>
        <FAQ/>
        <Contacto/>
      </main>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
