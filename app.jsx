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
  };
  return icons[name] || null;
};

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [active, setActive] = useState('');
  const links = [
    { id: 'que-es', label: 'Qué es' },
    { id: 'por-que', label: 'Por qué' },
    { id: 'beneficios', label: 'Beneficios' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'infraestructura', label: 'Infraestructura' },
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
    { label: 'Acceso gratuito', accent: true },
    { label: 'Sin exclusividad', accent: false },
    { label: 'Comunidad de asesores', accent: false },
    { label: 'Grupo IEB', accent: false }
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
              <span>Espacio IEB · Para asesores financieros externos</span>
            </div>
            <h1 className="hero__title">
              El espacio donde los <em>asesores financieros</em> hacen <u>crecer</u> su negocio.
            </h1>
            <p className="hero__sub">
              Una iniciativa de Grupo IEB para fortalecer la comunidad de asesores externos
              en Argentina, combinando infraestructura profesional, soporte operativo,
              cercanía con especialistas y un entorno pensado para trabajar mejor.
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
              <a href="#acceso" className="btn btn--primary">
                Solicitar acceso <span>→</span>
              </a>
              <a href="#que-es" className="btn btn--outline">
                Ver cómo funciona
              </a>
            </div>
          </div>
          <aside className="hero__aside" aria-label="Resumen rápido">
            <div className="hero__aside-label">
              <span>Resumen</span>
              <span>EIB · 2026</span>
            </div>
            <div className="hero__aside-stack">
              {[
                ['01', 'Puestos de trabajo modernos en Núñez, CABA.', 'Espacio'],
                ['02', 'Salas de reunión y boxes para videollamadas.', 'Clientes'],
                ['03', 'Cercanía con traders, research y Middle Office.', 'Mercado'],
                ['04', 'Charlas, encuentros y comunidad de asesores.', 'Red'],
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
    'Independencia con estructura',
    'Comunidad de asesores externos',
    'Acceso 100% gratuito',
    'Sin exclusividad con IEB',
    'Núñez · Buenos Aires',
    'Cercanía con especialistas',
    'Middle Office en el mismo edificio',
    'Charlas y research',
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
   POR QUÉ EXISTE
   ============================================================ */
function PorQue() {
  const before = [
    { icon: 'slash', text: 'Sin oficina profesional para recibir clientes.' },
    { icon: 'slash', text: 'Sin acceso ágil a soporte operativo.' },
    { icon: 'slash', text: 'Sin contacto cotidiano con especialistas.' },
    { icon: 'slash', text: 'Sin comunidad donde compartir visión de mercado.' },
  ];
  const after = [
    { icon: 'check', text: 'Infraestructura para trabajar y recibir clientes.' },
    { icon: 'check', text: 'Middle Office para resolver lo operativo.' },
    { icon: 'check', text: 'Cercanía con traders, research y comerciales.' },
    { icon: 'check', text: 'Comunidad activa de asesores externos.' },
  ];
  return (
    <section className="tension" id="por-que" aria-labelledby="por-que-title">
      <div className="container">
        <div className="sec-head">
          <div className="sec-head__meta sec-head__meta--dark">
            <span className="eyebrow-line">02 · Por qué existe</span>
            <span className="section-num">El contexto del asesor independiente</span>
          </div>
          <h2 className="sec-head__title" id="por-que-title">
            El mercado necesita más asesores <em>conectados</em>, informados y con <u>estructura</u>.
          </h2>
        </div>
      </div>
      <div className="tension__inner">
        <div className="tension__cell tension__cell--before">
          <div>
            <div className="tension__label">
              <span className="tension__label-dot"></span>
              Hoy · Trabajar aislado
            </div>
            <h3 className="tension__heading">
              El asesor financiero cumple un rol clave en el mercado de capitales argentino.
            </h3>
            <ul className="tension__list">
              {before.map((b, i) => (
                <li className="tension__item" key={i}>
                  <span className="tension__item-icon"><Icon name={b.icon} size={16}/></span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="tension__cell tension__cell--after">
          <div>
            <div className="tension__label tension__label--accent">
              <span className="tension__label-dot"></span>
              Espacio IEB · Trabajar acompañado
            </div>
            <h3 className="tension__heading">
              Un entorno profesional, conectado al mercado y con respaldo institucional.
            </h3>
            <ul className="tension__list">
              {after.map((a, i) => (
                <li className="tension__item" key={i}>
                  <span className="tension__item-icon"><Icon name={a.icon} size={16}/></span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tension__cap">
        <div className="container">
          <div className="tension__cap-inner">
            <p className="tension__cap-text">
              Espacio IEB nace para crear ese lugar: <em>un punto de encuentro</em> profesional
              entre asesores externos y el ecosistema financiero argentino.
            </p>
            <a href="#que-es" className="btn btn--outline">Ver qué es →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   QUÉ ES
   ============================================================ */
function QueEs() {
  const cols = [
    {
      icon: 'briefcase',
      title: 'Una base operativa',
      body: 'Puestos de trabajo, salas de reunión, boxes privados para videollamadas y cocheras. Todo lo necesario para trabajar y recibir clientes en condiciones profesionales.'
    },
    {
      icon: 'activity',
      title: 'Un entorno de mercado',
      body: 'Acceso cercano a equipos comerciales, traders, research y especialistas de IEB, con Middle Office en el mismo edificio para resolver cuestiones operativas.'
    },
    {
      icon: 'users',
      title: 'Una comunidad activa',
      body: 'Charlas de mercado, encuentros con especialistas e intercambio entre pares. Un lugar para crecer profesionalmente con el respaldo institucional de Grupo IEB.'
    }
  ];
  return (
    <section className="que-es section" id="que-es" aria-labelledby="que-es-title">
      <div className="container">
        <div className="que-es__top">
          <div>
            <span className="eyebrow-line is-gray">03 · Qué es</span>
            <span className="section-num"><br/>Definición · 2026</span>
          </div>
          <div>
            <h2 className="que-es__title" id="que-es-title">
              Una base para trabajar.<br/>Un punto de encuentro <em>para crecer</em>.
            </h2>
            <p className="que-es__lead">
              Espacio IEB combina oficinas, salas de reunión, boxes privados, soporte
              operativo, encuentros de mercado y comunidad profesional. No es solo
              infraestructura: es un entorno creado por Grupo IEB para que los
              asesores externos puedan trabajar mejor, recibir clientes y crecer
              con más respaldo.
            </p>
          </div>
        </div>
        <div className="que-es__cols">
          {cols.map((c, i) => (
            <div className="que-es__col" key={i}>
              <div className="que-es__col-num">0{i+1} · Capa</div>
              <h3 className="que-es__col-title">{c.title}</h3>
              <p className="que-es__col-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENEFICIOS
   ============================================================ */
function Beneficios() {
  const items = [
    {
      icon: 'briefcase',
      title: <>Trabajá <em>mejor</em></>,
      body: 'Puestos modernos, espacios comunes y cocheras propias. Pensado para asesores que necesitan foco y un entorno profesional todos los días.',
      tags: ['Puestos', 'Espacios comunes', 'Cocheras']
    },
    {
      icon: 'users',
      title: <>Recibí mejor a <em>tus clientes</em></>,
      body: 'Salas de reunión y boxes privados para videollamadas. Una infraestructura institucional para recibir clientes con la presencia que tu negocio necesita.',
      tags: ['Salas de reunión', 'Boxes privados', 'Videollamadas']
    },
    {
      icon: 'zap',
      title: <>Resolvé más <em>rápido</em></>,
      body: 'Acceso al equipo de Middle Office para resolver cuestiones operativas. Menos fricción para vos y mejor experiencia para tus clientes.',
      tags: ['Middle Office', 'Soporte', 'Operaciones']
    },
    {
      icon: 'trending-up',
      title: <>Estate más cerca <em>del mercado</em></>,
      body: 'Cercanía cotidiana con traders, comerciales, research y especialistas de IEB. Información, visión de mercado y contacto operativo en el mismo lugar.',
      tags: ['Trading', 'Research', 'Comercial']
    },
    {
      icon: 'globe',
      title: <>Formá parte de una <em>comunidad</em></>,
      body: 'Encuentros, charlas de mercado e intercambio entre asesores externos. Un entorno donde compartir conocimiento y construir red profesional.',
      tags: ['Encuentros', 'Charlas', 'Networking']
    },
    {
      icon: 'shield',
      title: <>Crecé con <em>respaldo</em></>,
      body: 'Trayectoria de Grupo IEB en mercado de capitales, equipos especializados y soluciones para individuos, empresas e instituciones a tu disposición.',
      tags: ['Grupo IEB', 'Trayectoria', 'Respaldo']
    }
  ];
  return (
    <section className="beneficios section" id="beneficios" aria-labelledby="beneficios-title">
      <div className="container">
        <div className="sec-head beneficios__head">
          <div className="sec-head__meta sec-head__meta--dark">
            <span className="eyebrow-line">04 · Beneficios</span>
            <span className="section-num">Lo que vas a encontrar al sumarte</span>
          </div>
          <h2 className="sec-head__title" id="beneficios-title">
            Lo que ganás cuando trabajás <em>desde Espacio IEB</em>.
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="beneficios__grid">
          {items.map((b, i) => (
            <article className="benefit" key={i}>
              <div className="benefit__num">
                <span>0{i+1}</span>
                <span className="benefit__num-arrow">↗</span>
              </div>
              <div className="benefit__icon"><Icon name={b.icon} size={32}/></div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__body">{b.body}</p>
              <div className="benefit__tags">
                {b.tags.map(t => <span className="benefit__tag" key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMUNIDAD
   ============================================================ */
function Comunidad() {
  const blocks = [
    { icon: 'mic', title: 'Charlas de mercado', body: 'Encuentros recurrentes con foco en macro, renta fija, renta variable y coyuntura local.' },
    { icon: 'globe', title: 'Encuentros con especialistas', body: 'Acceso directo a referentes de Grupo IEB y del ecosistema financiero argentino.' },
    { icon: 'users', title: 'Intercambio entre asesores', body: 'Espacio común para conversar, compartir visión y conocer a otros asesores externos.' },
    { icon: 'bar-chart', title: 'Research y visión de mercado', body: 'Material y lecturas del equipo de research IEB para enriquecer tu asesoramiento.' },
    { icon: 'layers', title: 'Equipos comerciales y operativos', body: 'Conexión cotidiana con traders, comerciales y Middle Office en el mismo edificio.' }
  ];
  return (
    <section className="comunidad section" id="comunidad" aria-labelledby="comunidad-title">
      <div className="container">
        <div className="comunidad__head">
          <div>
            <span className="eyebrow-line is-gray">05 · Comunidad</span>
            <h2 className="comunidad__title" id="comunidad-title">
              Un espacio para fortalecer la <em>comunidad financiera</em> local.
            </h2>
          </div>
          <p className="comunidad__lead">
            Espacio IEB busca reunir <strong>asesores externos y profesionales del mercado</strong> en
            un entorno activo, donde el intercambio de información, la cercanía con especialistas
            y la formación continua ayuden a elevar la calidad del asesoramiento financiero
            en Argentina.
          </p>
        </div>
        <div className="comunidad__grid">
          {blocks.map((b, i) => (
            <div className="com-block" key={i}>
              <div className="com-block__num">0{i+1} / 0{blocks.length}</div>
              <div className="com-block__icon">
                <Icon name={b.icon} size={24}/>
              </div>
              <h3 className="com-block__title">{b.title}</h3>
              <p className="com-block__body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PARA QUIÉN
   ============================================================ */
function Audience() {
  const cards = [
    {
      n: '01',
      title: 'Agentes Productores Independientes',
      body: 'Profesionales registrados que buscan una base operativa, infraestructura para recibir clientes y cercanía cotidiana con el mercado.',
      tag: 'API'
    },
    {
      n: '02',
      title: 'Asesores en ALyCs',
      body: 'Asesores que ya operan con una o varias ALyCs y quieren un entorno profesional y una red de pares para crecer su negocio.',
      tag: 'ALyC'
    },
    {
      n: '03',
      title: 'Team leaders y asesores senior',
      body: 'Líderes que están desarrollando equipo propio o quieren consolidar su práctica con un espacio institucional de respaldo.',
      tag: 'Senior'
    },
    {
      n: '04',
      title: 'Profesionales conectados al ecosistema',
      body: 'Asesores que buscan más independencia sin perder estructura, y quieren estar más conectados con el mercado y con sus pares.',
      tag: 'Independientes'
    }
  ];
  return (
    <section className="audience section" id="para-quien" aria-labelledby="para-quien-title">
      <div className="container">
        <div className="sec-head audience__head">
          <div className="sec-head__meta sec-head__meta--dark">
            <span className="eyebrow-line">06 · Para quién es</span>
            <span className="section-num">Pensado para asesores externos en Argentina</span>
          </div>
          <h2 className="sec-head__title" id="para-quien-title">
            Pensado para vos, si <em>asesorás clientes</em> y querés crecer con estructura.
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="audience__grid">
          {cards.map(c => (
            <article className="aud" key={c.n}>
              <div className="aud__num">{c.n}</div>
              <h3 className="aud__title">{c.title}</h3>
              <p className="aud__body">{c.body}</p>
              <div className="aud__tag">→ {c.tag}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INFRAESTRUCTURA
   ============================================================ */
function Infra() {
  const fisica = [
    { name: 'Puestos de trabajo modernos', meta: 'Espacio principal' },
    { name: 'Salas de reunión para clientes', meta: 'Reservables' },
    { name: 'Boxes privados para videollamadas', meta: 'Insonorizados' },
    { name: 'Espacios comunes', meta: 'Común' },
    { name: 'Cocheras', meta: 'Disponible' }
  ];
  const servicios = [
    { name: 'Middle Office en el edificio', meta: 'Operativo' },
    { name: 'Equipos comerciales y traders', meta: 'Mercado' },
    { name: 'Research y visión de mercado', meta: 'Información' },
    { name: 'Charlas y encuentros', meta: 'Comunidad' },
    { name: 'Comunidad de asesores externos', meta: 'Red' }
  ];
  return (
    <section className="infra section" id="infraestructura" aria-labelledby="infra-title">
      <div className="container">
        <div className="infra__top">
          <div>
            <span className="eyebrow-line is-gray">07 · Infraestructura</span>
            <span className="section-num"><br/>Lo físico + lo institucional</span>
          </div>
          <h2 className="infra__title" id="infra-title">
            Todo lo que necesitás para trabajar mejor, en un solo lugar.
          </h2>
          <p className="infra__lead" style={{alignSelf:'end'}}>
            Espacio IEB combina infraestructura física y soporte institucional.
            No es un coworking: es una base profesional pensada para asesores
            financieros externos.
          </p>
        </div>
        <div className="infra__main">
          <div className="infra__col">
            <div className="infra__col-label">A · Infraestructura física</div>
            <div className="infra__list">
              {fisica.map((f, i) => (
                <div className="infra__item" key={i}>
                  <span className="infra__item-num">A.0{i+1}</span>
                  <span className="infra__item-name">{f.name}</span>
                  <span className="infra__item-meta">{f.meta}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="infra__col">
            <div className="infra__col-label">B · Servicios y comunidad</div>
            <div className="infra__list">
              {servicios.map((s, i) => (
                <div className="infra__item" key={i}>
                  <span className="infra__item-num">B.0{i+1}</span>
                  <span className="infra__item-name">{s.name}</span>
                  <span className="infra__item-meta">{s.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="infra__location">
          <div>
            <div className="infra__location-eyebrow">Ubicación</div>
            <h3>Núñez, Buenos Aires</h3>
            <p>Una zona estratégica de CABA, conectada a las principales avenidas y con cercanía al
            corredor financiero de la ciudad. Acceso por auto, transporte público y cocheras
            disponibles.</p>
          </div>
          <div className="infra__map" role="img" aria-label="Mapa de Núñez, Buenos Aires">
            <svg viewBox="0 0 600 280" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid-map" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f1f1d" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="600" height="280" fill="url(#grid-map)"/>
              <path d="M0 80 L600 60" stroke="#2a2a28" strokeWidth="1.5"/>
              <path d="M0 180 L600 200" stroke="#2a2a28" strokeWidth="1.5"/>
              <path d="M120 0 L160 280" stroke="#2a2a28" strokeWidth="1.5"/>
              <path d="M380 0 L440 280" stroke="#2a2a28" strokeWidth="1.5"/>
              <path d="M40 280 Q200 140 600 100" stroke="#FDE100" strokeWidth="1" fill="none" strokeDasharray="3 6" opacity="0.5"/>
              <text x="20" y="22" fill="#444" fontSize="10" fontFamily="monospace" letterSpacing="2">NÚÑEZ · CABA</text>
              <text x="500" y="270" fill="#444" fontSize="10" fontFamily="monospace" letterSpacing="2">RÍO DE LA PLATA</text>
            </svg>
            <div className="infra__map-pin">
              <span className="infra__map-pin-dot"></span>
              <span className="infra__map-pin-label">Espacio IEB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   RESPALDO IEB
   ============================================================ */
function Respaldo() {
  const stats = [
    { n: '01', value: <><sup>+USD</sup>2.000<em>M</em></>, label: 'gestionados a través de Grupo IEB' },
    { n: '02', value: <><sup>+</sup>200</>, label: 'personas en el equipo IEB' },
    { n: '03', value: <><sup>+</sup>150</>, label: 'productores externos vinculados' },
    { n: '04', value: <>Mercado<br/><em>de capitales</em></>, label: 'trayectoria institucional comprobada' }
  ];
  return (
    <section className="respaldo section" id="respaldo" aria-labelledby="respaldo-title">
      <div className="respaldo__bg"></div>
      <div className="container">
        <div className="respaldo__inner">
          <div>
            <span className="eyebrow-line">08 · Respaldo</span>
            <h2 className="respaldo__title" id="respaldo-title">
              Con el respaldo de <em>Grupo IEB</em>.
            </h2>
            <p className="respaldo__lead">
              Grupo IEB cuenta con trayectoria en mercado de capitales, equipos especializados y
              una oferta de soluciones para individuos, empresas e instituciones. Espacio IEB
              toma esa estructura y la pone al servicio de los asesores externos.
            </p>
            <div className="respaldo__sig">
              <img src="assets/logos/espacio-ieb-nav.png" alt="Espacio IEB" width="558" height="98" style={{height:'34px',width:'auto'}}/>
              <span>Grupo IEB · Buenos Aires, Argentina</span>
            </div>
          </div>
          <div className="respaldo__stats" aria-label="Métricas de Grupo IEB">
            {stats.map(s => (
              <div className="respaldo__stat" key={s.n}>
                <div className="respaldo__stat-num">{s.n}</div>
                <div className="respaldo__stat-value">{s.value}</div>
                <div className="respaldo__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MODELO DE ACCESO
   ============================================================ */
function Modelo() {
  const rules = [
    { text: <>El acceso a Espacio IEB es <strong>100% gratuito</strong> para asesores externos validados.</>, flag: 'Gratuito', neutral: false },
    { text: <>Podés <strong>seguir operando con las ALyCs</strong> con las que ya trabajás. No hay exclusividad con IEB.</>, flag: 'Sin exclusividad', neutral: false },
    { text: <>Usás el espacio cuando lo necesitás. <strong>Sin mínimos de uso</strong> ni horarios obligatorios.</>, flag: 'Flexible', neutral: false },
    { text: <>Recibí clientes en salas de reunión, hacé videollamadas en boxes privados y participá de la comunidad.</>, flag: 'Cliente', neutral: true },
    { text: <>Acceso al equipo de <strong>Middle Office</strong> y cercanía con especialistas, traders y research.</>, flag: 'Soporte', neutral: true }
  ];
  return (
    <section className="modelo section" id="modelo" aria-labelledby="modelo-title">
      <div className="container">
        <div className="modelo__inner">
          <div>
            <span className="eyebrow-line is-gray">09 · Modelo de acceso</span>
            <h2 className="modelo__title" id="modelo-title">
              Gratuito, flexible y <em>sin exclusividad</em>.
            </h2>
            <p className="modelo__lead">
              Espacio IEB está pensado para adaptarse a la forma de trabajo de cada asesor.
              Podés usar el espacio, recibir clientes, participar de encuentros y seguir
              operando con las ALyCs con las que ya trabajás.
            </p>
            <a href="#acceso" className="btn btn--dark">Solicitar acceso →</a>
          </div>
          <div className="modelo__rules">
            {rules.map((r, i) => (
              <div className="modelo__rule" key={i}>
                <div className="modelo__rule-num">REGLA · 0{i+1}</div>
                <div className="modelo__rule-text">{r.text}</div>
                <div className={`modelo__rule-flag ${r.neutral ? 'modelo__rule-flag--neutral' : ''}`}>{r.flag}</div>
              </div>
            ))}
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
  { q: '¿Puedo recibir clientes?', a: 'Sí. Espacio IEB cuenta con salas de reunión y boxes privados para videollamadas, pensados específicamente para que el asesor pueda recibir y atender a sus clientes en un entorno profesional e institucional.' },
  { q: '¿Cómo puedo solicitar acceso?', a: 'Podés solicitar acceso completando el formulario al final de esta página. El equipo de Espacio IEB se va a contactar para validar el perfil, coordinar una visita y explicarte cómo funciona el espacio en detalle.' }
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__head">
          <div>
            <span className="eyebrow-line">10 · FAQ</span>
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
              <span className="faq__item-num">{String(i+1).padStart(2,'0')}</span>
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
    consent: false
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
            <span className="eyebrow-line">11 · Solicitar acceso</span>
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
                      <option value="Senior">Asesor senior / Team leader</option>
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
                  <span>Acepto que Grupo IEB use mis datos para contactarme y validar mi perfil. Consultar la <a href="#privacidad">política de privacidad</a>.</span>
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
            <p>Una iniciativa de Grupo IEB para fortalecer la comunidad de asesores financieros externos en Argentina. Núñez, Buenos Aires.</p>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Navegar</p>
            <ul>
              <li><a href="#que-es">Qué es</a></li>
              <li><a href="#por-que">Por qué existe</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#comunidad">Comunidad</a></li>
              <li><a href="#infraestructura">Infraestructura</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Sumate</p>
            <ul>
              <li><a href="#para-quien">Para quién es</a></li>
              <li><a href="#modelo">Modelo de acceso</a></li>
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
            <a href="#">Privacidad</a>
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
        <PorQue/>
        <QueEs/>
        <Beneficios/>
        <Comunidad/>
        <Audience/>
        <Infra/>
        <Respaldo/>
        <Modelo/>
        <FAQ/>
        <Acceso/>
      </main>
      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
