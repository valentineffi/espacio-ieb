"use strict";
/* global React, ReactDOM */
const {
  useState,
  useEffect
} = React;

/* ============================================================
   ICONS — minimal inline set
   ============================================================ */
const Icon = ({
  name,
  size = 18
}) => {
  const p = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const icons = {
    check: /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    })),
    minus: /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    arrow: /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    phone: /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "18"
    })),
    pin: /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.5"
    }))
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
  const links = [{
    id: 'grupo',
    label: 'Grupo IEB'
  }, {
    id: 'espacio',
    label: 'Espacio'
  }, {
    id: 'partners',
    label: 'Partners'
  }, {
    id: 'simulador',
    label: 'Simulador'
  }, {
    id: 'tecnologia',
    label: 'Tecnología'
  }, {
    id: 'faq',
    label: 'FAQ'
  }];
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'is-scrolled' : ''}`,
    "aria-label": "Navegaci\xF3n principal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav__logo",
    "aria-label": "IEB External Advisors \u2014 inicio"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav__logo-img",
    src: "assets/logos/ieb-logotype-black.png",
    alt: "IEB External Advisors",
    width: "383",
    height: "148"
  })), /*#__PURE__*/React.createElement("div", {
    className: `nav__links ${menuOpen ? 'is-open' : ''}`
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: () => setMenuOpen(false),
    className: `nav__link ${active === l.id ? 'is-active' : ''}`
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "nav__cta nav__cta--mobile",
    onClick: () => setMenuOpen(false)
  }, "Contacto")), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    className: "nav__cta"
  }, "Contacto"), /*#__PURE__*/React.createElement("button", {
    className: "nav__menu-btn",
    "aria-label": "Men\xFA",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))));
}

/* ============================================================
   HERO — office footage (subtle motion) + thesis headline
   ============================================================ */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__media",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__media-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__pattern"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container hero__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow hero__eyebrow"
  }, "Grupo IEB \xB7 External Advisors"), /*#__PURE__*/React.createElement("h1", {
    className: "display-lg hero__title"
  }, "Asesoramiento externo como ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "ventaja estructural"), "."), /*#__PURE__*/React.createElement("p", {
    className: "body-lg hero__sub"
  }, "El payout m\xE1s alto del mercado y el respaldo de Grupo IEB, sin resignar tu independencia. Infraestructura, tecnolog\xEDa y espacio de trabajo para asesores y agentes productores en Argentina."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#simulador",
    className: "btn btn--accent"
  }, "Simular mi payout ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "#espacio",
    className: "btn btn--ghost-dark"
  }, "Conocer Espacio IEB")), /*#__PURE__*/React.createElement("div", {
    className: "hero__proof"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 15
  }), " N\xFA\xF1ez, Buenos Aires"), /*#__PURE__*/React.createElement("span", {
    className: "hero__proof-sep"
  }), /*#__PURE__*/React.createElement("span", null, "Sin exclusividad"), /*#__PURE__*/React.createElement("span", {
    className: "hero__proof-sep"
  }), /*#__PURE__*/React.createElement("span", null, "Acceso sin costo")))));
}

/* ============================================================
   GRUPO IEB — why (6 pillars, light)
   ============================================================ */
function GrupoIEB() {
  const pillars = [{
    title: 'Respaldo',
    body: 'La sólida trayectoria de Grupo IEB en el mercado de capitales argentino detrás de cada operación.'
  }, {
    title: 'Todo en un mismo lugar',
    body: 'Todos los productos e instrumentos del mercado desde una sola operatoria integrada.'
  }, {
    title: 'Información actualizada',
    body: 'Especialistas que te mantienen al tanto de la macro, los mercados y las oportunidades.'
  }, {
    title: 'Soporte comercial',
    body: 'Un equipo de Asesores Idóneos para el seguimiento diario de tus operaciones.'
  }, {
    title: 'Las mejores plataformas',
    body: 'Una para que tus clientes inviertan y otra exclusiva para eficientizar tu trabajo.'
  }, {
    title: 'Condiciones competitivas',
    body: 'Acuerdos comerciales y beneficios diferenciales para que crezca tu negocio.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section grupo",
    id: "grupo",
    "aria-labelledby": "grupo-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Por qu\xE9 Grupo IEB"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "grupo-title"
  }, "Somos el ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "broker #1"), " en servicio a agentes productores.")), /*#__PURE__*/React.createElement("div", {
    className: "grupo__grid"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "grupo__card",
    key: i
  }, /*#__PURE__*/React.createElement("h3", {
    className: "grupo__card-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "grupo__card-body"
  }, p.body))))));
}

/* ============================================================
   ESPACIO IEB — photos + 6 "Más…" features
   ============================================================ */
function EspacioIEB() {
  const features = [{
    k: 'Más productividad',
    d: 'Interactuá con colegas en un espacio profesional pensado para asesores externos.'
  }, {
    k: 'Más dinámica comercial',
    d: 'Trabajá junto a comerciales de IEB y traders, mejorando tu view de mercado.'
  }, {
    k: 'Más agilidad',
    d: 'Middle Office en el mismo edificio para resolver operativa, aperturas y temas diarios.'
  }, {
    k: 'Más información',
    d: 'Charlas con especialistas de Grupo IEB para tomar mejores decisiones de mercado.'
  }, {
    k: 'Sin exclusividad',
    d: 'Seguís operando las cuentas de tus clientes con los AlyC con los que ya tenés contrato.'
  }, {
    k: 'Libre disponibilidad',
    d: 'Vas las veces que quieras, recibís clientes y armás reuniones cuando te haga falta.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section surface-muted espacio",
    id: "espacio",
    "aria-labelledby": "espacio-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--gray"
  }, "El espacio"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "espacio-title"
  }, "Un espacio ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "exclusivo"), " para asesores externos."), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "Sin costo. Oficinas, salas privadas, Middle Office y todo el equipo de IEB acompa\xF1\xE1ndote, en N\xFA\xF1ez.")), /*#__PURE__*/React.createElement("div", {
    className: "espacio__gallery",
    "aria-label": "Espacio IEB \u2014 oficinas en N\xFA\xF1ez, Buenos Aires"
  }, /*#__PURE__*/React.createElement("img", {
    className: "espacio__photo espacio__photo--main",
    src: "assets/fotos/oficina-1.jpg",
    alt: "Oficinas de Espacio IEB en N\xFA\xF1ez, Buenos Aires",
    width: "1600",
    height: "900",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("img", {
    className: "espacio__photo",
    src: "assets/fotos/oficina-2.jpg",
    alt: "Puestos de trabajo en Espacio IEB",
    width: "1600",
    height: "1200",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("img", {
    className: "espacio__photo",
    src: "assets/fotos/oficina-3.jpg",
    alt: "Salas de reuni\xF3n en Espacio IEB",
    width: "1600",
    height: "1200",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "espacio__features"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "espacio__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "espacio__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, f.k), /*#__PURE__*/React.createElement("p", null, f.d)))))));
}

/* ============================================================
   PARTNERS — comparison table (condensed)
   ============================================================ */
function Partners() {
  const features = [{
    label: 'Oficinas y salas de reunión',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Soporte operativo y comercial',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Hospitalities y charlas con referentes',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Trabajás con las AlyCs que quieras',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Acceso directo a mesa de operaciones',
    agente: true,
    asesor: false,
    tl: true
  }, {
    label: 'Coordinador y armado de carteras',
    agente: false,
    asesor: true,
    tl: false
  }, {
    label: 'Atención de clientes nuevos',
    agente: false,
    asesor: true,
    tl: false
  }, {
    label: 'App propia (Grow Finance)',
    agente: false,
    asesor: false,
    tl: true
  }, {
    label: 'APIs para informes propios',
    agente: false,
    asesor: false,
    tl: true
  }, {
    label: 'Reclutamiento y selección de equipo',
    agente: false,
    asesor: false,
    tl: true
  }];
  const Cell = ({
    val
  }) => /*#__PURE__*/React.createElement("span", {
    className: `partners__cell ${val ? 'is-yes' : 'is-no'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: val ? 'check' : 'minus',
    size: 15
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "section partners",
    id: "partners",
    "aria-labelledby": "partners-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--gray"
  }, "Partners \xB7 Perfiles de acceso"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "partners-title"
  }, "Desarroll\xE1 tu propio equipo, con estructura y ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "sin resignar independencia"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "partners__wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "partners__table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, "Agente", /*#__PURE__*/React.createElement("br", null), "Productor"), /*#__PURE__*/React.createElement("th", null, "Asesor", /*#__PURE__*/React.createElement("br", null), "Financiero"), /*#__PURE__*/React.createElement("th", {
    className: "is-highlight"
  }, "Team Leader"))), /*#__PURE__*/React.createElement("tbody", null, features.map((f, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    className: "partners__feature"
  }, f.label), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Cell, {
    val: f.agente
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Cell, {
    val: f.asesor
  })), /*#__PURE__*/React.createElement("td", {
    className: "is-highlight"
  }, /*#__PURE__*/React.createElement(Cell, {
    val: f.tl
  }))))))), /*#__PURE__*/React.createElement("p", {
    className: "partners__note"
  }, "Sin exclusividad \xB7 Sin costos fijos \xB7 Acceso sin costo para asesores validados por Grupo IEB.")));
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
  const incrementoPct = Math.round((PARTNERS_PAYOUT - payout / 100) / (payout / 100) * 100);
  const difAnual = (netoPartners - netoHoy) * 12;
  const sliderPct = (payout - 10) / (55 - 10) * 100;
  const fmt = n => 'US$ ' + Math.round(Math.abs(n)).toLocaleString('es-AR');
  return /*#__PURE__*/React.createElement("section", {
    className: "section surface-muted sim",
    id: "simulador",
    "aria-labelledby": "sim-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Simulador de ingresos"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "sim-title"
  }, "\xBFCu\xE1nto m\xE1s pod\xE9s ganar como ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "asesor independiente"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "Ingres\xE1 tu comisi\xF3n mensual bruta y el payout que te paga tu AlyC hoy. Calculamos la diferencia contra el 60% que paga IEB External Advisors.")), /*#__PURE__*/React.createElement("div", {
    className: "sim__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim__controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sim__label",
    htmlFor: "sim-comision"
  }, "Comisi\xF3n bruta promedio mensual"), /*#__PURE__*/React.createElement("div", {
    className: "sim__input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim__input-prefix"
  }, "US$"), /*#__PURE__*/React.createElement("input", {
    id: "sim-comision",
    className: "sim__input",
    type: "number",
    inputMode: "numeric",
    value: comision,
    min: "0",
    max: "5000000",
    step: "100000",
    onChange: e => setComision(Math.min(Math.max(parseFloat(e.target.value) || 0, 0), 5000000))
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sim__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sim__label",
    htmlFor: "sim-payout"
  }, "Payout actual en tu AlyC ", /*#__PURE__*/React.createElement("span", {
    className: "sim__label-val"
  }, payout, "%")), /*#__PURE__*/React.createElement("input", {
    id: "sim-payout",
    type: "range",
    min: "10",
    max: "55",
    value: payout,
    step: "1",
    className: "sim__range",
    onChange: e => setPayout(parseInt(e.target.value)),
    style: {
      background: `linear-gradient(to right, var(--ieb-cyan) ${sliderPct}%, var(--gray-100) ${sliderPct}%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sim__range-labels"
  }, /*#__PURE__*/React.createElement("span", null, "10%"), /*#__PURE__*/React.createElement("span", null, "55%")))), /*#__PURE__*/React.createElement("div", {
    className: "sim__result"
  }, incrementoPct > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim__badge"
  }, "+", incrementoPct, "% de ingreso"), /*#__PURE__*/React.createElement("div", {
    className: "sim__compare"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim__col-label"
  }, "Hoy en tu AlyC \xB7 ", payout, "%"), /*#__PURE__*/React.createElement("span", {
    className: "sim__col-value"
  }, fmt(netoHoy)), /*#__PURE__*/React.createElement("span", {
    className: "sim__col-annual"
  }, fmt(netoHoy * 12), " / a\xF1o")), /*#__PURE__*/React.createElement("div", {
    className: "sim__col sim__col--accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim__col-label"
  }, "Como independiente \xB7 60%"), /*#__PURE__*/React.createElement("span", {
    className: "sim__col-value"
  }, fmt(netoPartners)), /*#__PURE__*/React.createElement("span", {
    className: "sim__col-annual"
  }, fmt(netoPartners * 12), " / a\xF1o"))), difAnual > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim__diff"
  }, /*#__PURE__*/React.createElement("span", null, "Diferencia anual"), /*#__PURE__*/React.createElement("strong", null, "+ ", fmt(difAnual))), /*#__PURE__*/React.createElement("p", {
    className: "sim__note"
  }, "Estimaci\xF3n orientativa. Sin exclusividad, sin costos fijos ni m\xEDnimos.")))));
}

/* ============================================================
   HOSPITALITIES — 4 benefit cards
   ============================================================ */
function Hospitalities() {
  const cards = [{
    img: 'assets/fotos/argentina-open.jpg',
    title: 'Argentina Open',
    desc: 'IEB+ es naming sponsor del torneo. Palcos preferenciales en el evento más importante del tenis argentino.'
  }, {
    img: 'assets/fotos/river-plate.jpg',
    title: 'River Plate · Monumental',
    desc: 'Acceso VIP a partidos en el estadio más grande de Argentina, para vos y tus mejores clientes.'
  }, {
    img: 'assets/fotos/talleres.jpg',
    title: 'Talleres · Kempes',
    desc: 'Experiencias premium en uno de los estadios más modernos del país.'
  }, {
    img: 'assets/fotos/movistar-arena.jpg',
    title: 'Movistar Arena',
    desc: 'Espacios preferenciales en los principales shows y eventos del año.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section hosp",
    id: "hospitalities",
    "aria-labelledby": "hosp-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--gray"
  }, "Beneficios IEB"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "hosp-title"
  }, "Hospitalities para vivir el deporte y la cultura ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "en primera fila"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "hosp__grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("article", {
    className: "hosp__card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "hosp__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hosp__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "hosp__title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hosp__desc"
  }, c.desc)))))));
}

/* ============================================================
   TECNOLOGIA — Grow Finance + platforms (merged)
   ============================================================ */
function Tecnologia() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section surface-muted tec",
    id: "tecnologia",
    "aria-labelledby": "tec-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Tecnolog\xEDa"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "tec-title"
  }, "La mejor tecnolog\xEDa para ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "acompa\xF1ar tu crecimiento"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "tec__hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tec__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tec__tag"
  }, "Para Team Leaders"), /*#__PURE__*/React.createElement("h3", {
    className: "tec__grow-title"
  }, "Tu propia app de inversiones"), /*#__PURE__*/React.createElement("p", {
    className: "tec__lead"
  }, "Los team leaders que se suman pueden acceder a Grow Finance: una plataforma con marca blanca propia, app en las tiendas y gesti\xF3n integrada de la cartera de clientes. Sin costos de desarrollo y respaldada por la trayectoria de Grupo IEB."), /*#__PURE__*/React.createElement("ul", {
    className: "tec__features"
  }, /*#__PURE__*/React.createElement("li", null, "App propia en App Store y Google Play"), /*#__PURE__*/React.createElement("li", null, "Web personalizada con tu logo y colores"), /*#__PURE__*/React.createElement("li", null, "Alta autom\xE1tica de cuentas bajo tu manager"), /*#__PURE__*/React.createElement("li", null, "Respaldada por la trayectoria de Grupo IEB"))), /*#__PURE__*/React.createElement("div", {
    className: "tec__visual"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tec__mockup",
    src: "assets/fotos/grow-app.png",
    alt: "App de inversiones con marca blanca \u2014 Grow Finance, powered by IEB",
    width: "1200",
    height: "1091",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tec__mockup-label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13
  }), " Grow Finance \xB7 Powered by IEB"))), /*#__PURE__*/React.createElement("div", {
    className: "tec__cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tec__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tec__card-tag"
  }, "Para tus clientes"), /*#__PURE__*/React.createElement("h3", {
    className: "tec__card-title"
  }, "La app y web m\xE1s intuitiva del mercado"), /*#__PURE__*/React.createElement("p", null, "Seguimiento de cartera en tiempo real, operatoria simple y acceso a todos los instrumentos del mercado local.")), /*#__PURE__*/React.createElement("div", {
    className: "tec__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tec__card-tag"
  }, "Para vos"), /*#__PURE__*/React.createElement("h3", {
    className: "tec__card-title"
  }, "Plataforma de gesti\xF3n comercial y operativa"), /*#__PURE__*/React.createElement("p", null, "Gesti\xF3n integral de cartera, APIs para informes propios y herramientas de an\xE1lisis y seguimiento.")))));
}

/* ============================================================
   FAQ (trimmed)
   ============================================================ */
const FAQ_ITEMS = [{
  q: '¿Qué es Espacio IEB?',
  a: 'Es una iniciativa de Grupo IEB para asesores financieros externos: puestos de trabajo, salas de reunión, boxes privados, soporte de Middle Office, charlas de mercado y comunidad profesional, en Núñez, Buenos Aires.'
}, {
  q: '¿Tiene costo? ¿Es gratuito?',
  a: 'El acceso es sin costo para los asesores financieros externos validados por Grupo IEB. No hay membresía ni pagos asociados al uso del espacio.'
}, {
  q: '¿Puedo seguir operando con mi AlyC actual?',
  a: 'Sí. No exigimos exclusividad. Seguís operando las cuentas de tus clientes con los AlyC con los que ya tenés contrato. La propuesta suma estructura y respaldo sin condicionar tu libertad operativa.'
}, {
  q: '¿Quiénes pueden usar Espacio IEB?',
  a: 'Agentes productores independientes, asesores financieros que trabajan en AlyCs, asesores senior y team leaders que quieren desarrollar equipo propio sin perder estructura.'
}, {
  q: '¿Puedo recibir clientes en el espacio?',
  a: 'Sí. Contamos con salas de reunión y boxes privados para videollamadas, pensados para que atiendas a tus clientes en un entorno profesional e institucional.'
}, {
  q: '¿Cómo funciona el simulador?',
  a: 'Compara cuánto ganás hoy con el payout de tu AlyC contra el 60% que ofrece IEB External Advisors, según tu comisión mensual bruta. Es una estimación; los números exactos se coordinan en el onboarding.'
}];
function FAQ() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section faq",
    id: "faq",
    "aria-labelledby": "faq-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container faq__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "faq-title"
  }, "Lo que asesores como vos ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "nos preguntan"), "."), /*#__PURE__*/React.createElement("p", {
    className: "sec-lead"
  }, "Todo lo que necesit\xE1s saber antes de sumarte. Si tu pregunta no est\xE1 ac\xE1, escribinos directamente desde el formulario.")), /*#__PURE__*/React.createElement("div", {
    className: "faq__list",
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  }, FAQ_ITEMS.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `faq__item ${open === i ? 'is-open' : ''}`,
    onClick: () => setOpen(open === i ? -1 : i),
    itemProp: "mainEntity",
    itemScope: true,
    itemType: "https://schema.org/Question",
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(open === i ? -1 : i);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__q"
  }, /*#__PURE__*/React.createElement("h3", {
    itemProp: "name"
  }, item.q), /*#__PURE__*/React.createElement("span", {
    className: "faq__toggle",
    "aria-hidden": "true"
  }, open === i ? '−' : '+')), /*#__PURE__*/React.createElement("div", {
    className: "faq__a",
    itemProp: "acceptedAnswer",
    itemScope: true,
    itemType: "https://schema.org/Answer"
  }, /*#__PURE__*/React.createElement("p", {
    itemProp: "text"
  }, item.a)))))));
}

/* ============================================================
   CONTACTO (form)
   ============================================================ */
function Contacto() {
  const [data, setData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    perfil: '',
    alyc: '',
    clientes: '',
    mensaje: '',
    consent: false
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const valid = data.nombre.length > 1 && /\S+@\S+\.\S+/.test(data.email) && data.perfil && data.consent;
  const onChange = k => e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({
      ...data,
      [k]: val
    });
  };
  const submit = async e => {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('request failed');
      setSent(true);
    } catch (err) {
      setError('No pudimos enviar tu mensaje. Probá de nuevo en unos minutos.');
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section surface-black contacto",
    id: "contacto",
    "aria-labelledby": "contacto-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contacto__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contacto__copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    id: "contacto-title"
  }, "Sumate a la comunidad de ", /*#__PURE__*/React.createElement("span", {
    className: "em-cyan"
  }, "asesores externos"), "."), /*#__PURE__*/React.createElement("p", {
    className: "contacto__lead"
  }, "Complet\xE1 el formulario y el equipo de IEB External Advisors se contacta a la brevedad para validar tu perfil, coordinar una visita y explicarte c\xF3mo funciona el espacio."), /*#__PURE__*/React.createElement("ul", {
    className: "contacto__points"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contacto__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  })), " Acceso sin costo, sin membres\xEDa ni pagos asociados."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contacto__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  })), " Sin exclusividad: segu\xED operando con tus AlyCs."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contacto__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  })), " Visita coordinada antes de definir nada."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "contacto__tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  })), " Respuesta del equipo en menos de 48hs h\xE1biles."))), /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit,
    noValidate: true
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "form__success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__success-tag"
  }, "Mensaje recibido"), /*#__PURE__*/React.createElement("h3", null, "Gracias, ", data.nombre.split(' ')[0], "."), /*#__PURE__*/React.createElement("p", null, "Nos pondremos en contacto a ", /*#__PURE__*/React.createElement("strong", null, data.email), " en menos de 48 horas h\xE1biles para coordinar tu visita.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nombre"
  }, "Nombre y apellido ", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("input", {
    id: "nombre",
    type: "text",
    placeholder: "Ej. Luc\xEDa Fern\xE1ndez",
    value: data.nombre,
    onChange: onChange('nombre'),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email ", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("input", {
    id: "email",
    type: "email",
    placeholder: "lucia@dominio.com",
    value: data.email,
    onChange: onChange('email'),
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "telefono"
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
    id: "telefono",
    type: "tel",
    placeholder: "+54 11 ...",
    value: data.telefono,
    onChange: onChange('telefono')
  })), /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "perfil"
  }, "Perfil profesional ", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("select", {
    id: "perfil",
    value: data.perfil,
    onChange: onChange('perfil'),
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar\u2026"), /*#__PURE__*/React.createElement("option", {
    value: "API"
  }, "Agente Productor Independiente"), /*#__PURE__*/React.createElement("option", {
    value: "ALyC"
  }, "Asesor financiero en AlyC"), /*#__PURE__*/React.createElement("option", {
    value: "TL"
  }, "Asesor senior / Team leader"), /*#__PURE__*/React.createElement("option", {
    value: "Otro"
  }, "Otro")))), /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "alyc"
  }, "AlyC con la que oper\xE1s"), /*#__PURE__*/React.createElement("input", {
    id: "alyc",
    type: "text",
    placeholder: "Opcional",
    value: data.alyc,
    onChange: onChange('alyc')
  })), /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "clientes"
  }, "Cartera aproximada"), /*#__PURE__*/React.createElement("select", {
    id: "clientes",
    value: data.clientes,
    onChange: onChange('clientes')
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar\u2026"), /*#__PURE__*/React.createElement("option", null, "1 \u2013 25 clientes"), /*#__PURE__*/React.createElement("option", null, "26 \u2013 100 clientes"), /*#__PURE__*/React.createElement("option", null, "101 \u2013 300 clientes"), /*#__PURE__*/React.createElement("option", null, "+300 clientes"), /*#__PURE__*/React.createElement("option", null, "Prefiero no responder")))), /*#__PURE__*/React.createElement("div", {
    className: "form__field form__field--full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mensaje"
  }, "Comentario (opcional)"), /*#__PURE__*/React.createElement("textarea", {
    id: "mensaje",
    placeholder: "Contanos brevemente qu\xE9 te interesa",
    value: data.mensaje,
    onChange: onChange('mensaje')
  })), /*#__PURE__*/React.createElement("label", {
    className: "form__check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.consent,
    onChange: onChange('consent')
  }), /*#__PURE__*/React.createElement("span", null, "Acepto que Grupo IEB use mis datos para contactarme y validar mi perfil. Ver la ", /*#__PURE__*/React.createElement("a", {
    href: "privacidad.html"
  }, "pol\xEDtica de privacidad"), ".")), error && /*#__PURE__*/React.createElement("p", {
    className: "form__error",
    role: "alert"
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "form__submit",
    disabled: !valid || sending
  }, sending ? 'Enviando…' : 'Enviar solicitud', " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 16
  }))))));
}

/* ============================================================
   FOOTER — Grupo-style, monogram links to grupoieb.com.ar
   ============================================================ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "footer__logo",
    src: "assets/logos/ieb-logotype-white.png",
    alt: "IEB External Advisors",
    width: "383",
    height: "148"
  }), /*#__PURE__*/React.createElement("p", null, "Una iniciativa de Grupo IEB para asesores financieros externos en Argentina. Infraestructura, comunidad y el payout m\xE1s alto del mercado. N\xFA\xF1ez, Buenos Aires.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Navegar"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#grupo"
  }, "Grupo IEB")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#espacio"
  }, "Espacio IEB")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#simulador"
  }, "Simulador")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#tecnologia"
  }, "Tecnolog\xEDa")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Grupo IEB"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://grupoieb.com.ar",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "grupoieb.com.ar")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://ar.linkedin.com/company/invertirenbolsa",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#contacto"
  }, "Contacto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "privacidad.html"
  }, "Privacidad"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://grupoieb.com.ar",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "footer__grupo",
    "aria-label": "Ir a grupoieb.com.ar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/ieb-logotype-white.png",
    alt: "IEB External Advisors",
    width: "140",
    height: "54"
  }), /*#__PURE__*/React.createElement("span", null, "Una empresa de ", /*#__PURE__*/React.createElement("strong", null, "Grupo IEB"))), /*#__PURE__*/React.createElement("span", {
    className: "footer__copy"
  }, "\xA9 2026 Grupo IEB \xB7 Espacio IEB \xB7 N\xFA\xF1ez, CABA"))));
}

/* ============================================================
   APP — section order mirrors the base44 reference
   ============================================================ */
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(GrupoIEB, null), /*#__PURE__*/React.createElement(EspacioIEB, null), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(Simulador, null), /*#__PURE__*/React.createElement(Hospitalities, null), /*#__PURE__*/React.createElement(Tecnologia, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Contacto, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
