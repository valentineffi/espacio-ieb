"use strict";
/* global React, ReactDOM */
const {
  useState,
  useEffect
} = React;

/* ============================================================
   ICONS — inline SVG set
   ============================================================ */
const Icon = ({
  name,
  size = 20
}) => {
  const icons = {
    briefcase: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "12",
      x2: "12",
      y2: "12.01"
    })),
    users: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    shield: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    })),
    'trending-up': /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "23 6 13.5 15.5 8.5 10.5 1 18"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "17 6 23 6 23 12"
    })),
    zap: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    })),
    'bar-chart': /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "20",
      x2: "12",
      y2: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "20",
      x2: "18",
      y2: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "20",
      x2: "6",
      y2: "16"
    })),
    mic: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "19",
      x2: "12",
      y2: "23"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "23",
      x2: "16",
      y2: "23"
    })),
    globe: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })),
    layers: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 2 7 12 12 22 7 12 2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 17 12 22 22 17"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 12 12 17 22 12"
    })),
    activity: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })),
    slash: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4.93",
      y1: "4.93",
      x2: "19.07",
      y2: "19.07"
    })),
    minus: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    })),
    check: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }))
  };
  return icons[name] || null;
};

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const [active, setActive] = useState('');
  const links = [{
    id: 'que-es',
    label: 'Qué es'
  }, {
    id: 'por-que',
    label: 'Por qué'
  }, {
    id: 'beneficios',
    label: 'Beneficios'
  }, {
    id: 'comunidad',
    label: 'Comunidad'
  }, {
    id: 'infraestructura',
    label: 'Infraestructura'
  }, {
    id: 'faq',
    label: 'FAQ'
  }];
  useEffect(() => {
    const onScroll = () => {
      let cur = '';
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < 120) cur = l.id;
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
    className: "nav",
    "aria-label": "Navegaci\xF3n principal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "nav__logo",
    "aria-label": "Espacio IEB \u2014 inicio"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav__logo-mark",
    src: "assets/logos/espacio-ieb-nav.png",
    alt: "Espacio IEB",
    width: "558",
    height: "98"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav__divider"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav__logo-sub"
  }, "Una iniciativa de Grupo IEB")), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    className: `nav__link ${active === l.id ? 'is-active' : ''}`
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "#acceso",
    className: "nav__cta"
  }, "Solicitar acceso ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("button", {
    className: "nav__menu-btn",
    "aria-label": "Men\xFA"
  }, "MEN\xDA")));
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const pills = [{
    label: 'Núñez, Buenos Aires',
    accent: false
  }, {
    label: 'Acceso gratuito',
    accent: true
  }, {
    label: 'Sin exclusividad',
    accent: false
  }, {
    label: 'Comunidad de asesores',
    accent: false
  }, {
    label: 'Grupo IEB',
    accent: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__trama"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__meta-tick"
  }), /*#__PURE__*/React.createElement("span", null, "Espacio IEB \xB7 Para asesores financieros externos")), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "El espacio donde los ", /*#__PURE__*/React.createElement("em", null, "asesores financieros"), " hacen ", /*#__PURE__*/React.createElement("u", null, "crecer"), " su negocio."), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "Una iniciativa de Grupo IEB para fortalecer la comunidad de asesores externos en Argentina, combinando infraestructura profesional, soporte operativo, cercan\xEDa con especialistas y un entorno pensado para trabajar mejor."), /*#__PURE__*/React.createElement("div", {
    className: "hero__pills",
    role: "list"
  }, pills.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    role: "listitem",
    className: `hero__pill ${p.accent ? 'hero__pill--accent' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__pill-dot"
  }), p.label))), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#acceso",
    className: "btn btn--primary"
  }, "Solicitar acceso ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#que-es",
    className: "btn btn--outline"
  }, "Ver c\xF3mo funciona"))), /*#__PURE__*/React.createElement("aside", {
    className: "hero__aside",
    "aria-label": "Resumen r\xE1pido"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-label"
  }, /*#__PURE__*/React.createElement("span", null, "Resumen"), /*#__PURE__*/React.createElement("span", null, "EIB \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-stack"
  }, [['01', 'Puestos de trabajo modernos en Núñez, CABA.', 'Espacio'], ['02', 'Salas de reunión y boxes para videollamadas.', 'Clientes'], ['03', 'Cercanía con traders, research y Middle Office.', 'Mercado'], ['04', 'Charlas, encuentros y comunidad de asesores.', 'Red']].map(([num, text, tag]) => /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-row",
    key: num
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__aside-num"
  }, num), /*#__PURE__*/React.createElement("span", {
    className: "hero__aside-text"
  }, text), /*#__PURE__*/React.createElement("span", {
    className: "hero__aside-tag"
  }, tag)))))), /*#__PURE__*/React.createElement("div", {
    className: "hero__floor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__floor-item"
  }, /*#__PURE__*/React.createElement("span", null, "Coord."), /*#__PURE__*/React.createElement("strong", null, "34\xB032'42\"S 58\xB027'34\"O")), /*#__PURE__*/React.createElement("div", {
    className: "hero__floor-item"
  }, /*#__PURE__*/React.createElement("span", null, "Modalidad"), /*#__PURE__*/React.createElement("strong", null, "Acceso libre \xB7 sin exclusividad")), /*#__PURE__*/React.createElement("div", {
    className: "hero__floor-item"
  }, /*#__PURE__*/React.createElement("span", null, "Operador"), /*#__PURE__*/React.createElement("strong", null, "Grupo IEB")))));
}

/* ============================================================
   TICKER
   ============================================================ */
function Ticker() {
  const items = ['Independencia con estructura', 'Comunidad de asesores externos', 'Acceso 100% gratuito', 'Sin exclusividad con IEB', 'Núñez · Buenos Aires', 'Cercanía con especialistas', 'Middle Office en el mismo edificio', 'Charlas y research'];
  const stream = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "ticker",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker__inner"
  }, stream.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ticker__item"
  }, t))));
}

/* ============================================================
   POR QUÉ EXISTE
   ============================================================ */
function PorQue() {
  const before = [{
    icon: 'slash',
    text: 'Sin oficina profesional para recibir clientes.'
  }, {
    icon: 'slash',
    text: 'Sin acceso ágil a soporte operativo.'
  }, {
    icon: 'slash',
    text: 'Sin contacto cotidiano con especialistas.'
  }, {
    icon: 'slash',
    text: 'Sin comunidad donde compartir visión de mercado.'
  }];
  const after = [{
    icon: 'check',
    text: 'Infraestructura para trabajar y recibir clientes.'
  }, {
    icon: 'check',
    text: 'Middle Office para resolver lo operativo.'
  }, {
    icon: 'check',
    text: 'Cercanía con traders, research y comerciales.'
  }, {
    icon: 'check',
    text: 'Comunidad activa de asesores externos.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "tension",
    id: "por-que",
    "aria-labelledby": "por-que-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta sec-head__meta--dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "02 \xB7 Por qu\xE9 existe"), /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "El contexto del asesor independiente")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-head__title",
    id: "por-que-title"
  }, "El mercado necesita m\xE1s asesores ", /*#__PURE__*/React.createElement("em", null, "conectados"), ", informados y con ", /*#__PURE__*/React.createElement("u", null, "estructura"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "tension__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tension__cell tension__cell--before"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tension__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tension__label-dot"
  }), "Hoy \xB7 Trabajar aislado"), /*#__PURE__*/React.createElement("h3", {
    className: "tension__heading"
  }, "El asesor financiero cumple un rol clave en el mercado de capitales argentino."), /*#__PURE__*/React.createElement("ul", {
    className: "tension__list"
  }, before.map((b, i) => /*#__PURE__*/React.createElement("li", {
    className: "tension__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tension__item-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, b.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "tension__cell tension__cell--after"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tension__label tension__label--accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tension__label-dot"
  }), "Espacio IEB \xB7 Trabajar acompa\xF1ado"), /*#__PURE__*/React.createElement("h3", {
    className: "tension__heading"
  }, "Un entorno profesional, conectado al mercado y con respaldo institucional."), /*#__PURE__*/React.createElement("ul", {
    className: "tension__list"
  }, after.map((a, i) => /*#__PURE__*/React.createElement("li", {
    className: "tension__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tension__item-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, a.text))))))), /*#__PURE__*/React.createElement("div", {
    className: "tension__cap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tension__cap-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tension__cap-text"
  }, "Espacio IEB nace para crear ese lugar: ", /*#__PURE__*/React.createElement("em", null, "un punto de encuentro"), " profesional entre asesores externos y el ecosistema financiero argentino."), /*#__PURE__*/React.createElement("a", {
    href: "#que-es",
    className: "btn btn--outline"
  }, "Ver qu\xE9 es \u2192")))));
}

/* ============================================================
   QUÉ ES
   ============================================================ */
function QueEs() {
  const cols = [{
    icon: 'briefcase',
    title: 'Una base operativa',
    body: 'Puestos de trabajo, salas de reunión, boxes privados para videollamadas y cocheras. Todo lo necesario para trabajar y recibir clientes en condiciones profesionales.'
  }, {
    icon: 'activity',
    title: 'Un entorno de mercado',
    body: 'Acceso cercano a equipos comerciales, traders, research y especialistas de IEB, con Middle Office en el mismo edificio para resolver cuestiones operativas.'
  }, {
    icon: 'users',
    title: 'Una comunidad activa',
    body: 'Charlas de mercado, encuentros con especialistas e intercambio entre pares. Un lugar para crecer profesionalmente con el respaldo institucional de Grupo IEB.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "que-es section",
    id: "que-es",
    "aria-labelledby": "que-es-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "que-es__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "03 \xB7 Qu\xE9 es"), /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, /*#__PURE__*/React.createElement("br", null), "Definici\xF3n \xB7 2026")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "que-es__title",
    id: "que-es-title"
  }, "Una base para trabajar.", /*#__PURE__*/React.createElement("br", null), "Un punto de encuentro ", /*#__PURE__*/React.createElement("em", null, "para crecer"), "."), /*#__PURE__*/React.createElement("p", {
    className: "que-es__lead"
  }, "Espacio IEB combina oficinas, salas de reuni\xF3n, boxes privados, soporte operativo, encuentros de mercado y comunidad profesional. No es solo infraestructura: es un entorno creado por Grupo IEB para que los asesores externos puedan trabajar mejor, recibir clientes y crecer con m\xE1s respaldo."))), /*#__PURE__*/React.createElement("div", {
    className: "que-es__cols"
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "que-es__col",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "que-es__col-num"
  }, "0", i + 1, " \xB7 Capa"), /*#__PURE__*/React.createElement("h3", {
    className: "que-es__col-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "que-es__col-body"
  }, c.body))))));
}

/* ============================================================
   BENEFICIOS
   ============================================================ */
function Beneficios() {
  const items = [{
    icon: 'briefcase',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Trabaj\xE1 ", /*#__PURE__*/React.createElement("em", null, "mejor")),
    body: 'Puestos modernos, espacios comunes y cocheras propias. Pensado para asesores que necesitan foco y un entorno profesional todos los días.',
    tags: ['Puestos', 'Espacios comunes', 'Cocheras']
  }, {
    icon: 'users',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Recib\xED mejor a ", /*#__PURE__*/React.createElement("em", null, "tus clientes")),
    body: 'Salas de reunión y boxes privados para videollamadas. Una infraestructura institucional para recibir clientes con la presencia que tu negocio necesita.',
    tags: ['Salas de reunión', 'Boxes privados', 'Videollamadas']
  }, {
    icon: 'zap',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Resolv\xE9 m\xE1s ", /*#__PURE__*/React.createElement("em", null, "r\xE1pido")),
    body: 'Acceso al equipo de Middle Office para resolver cuestiones operativas. Menos fricción para vos y mejor experiencia para tus clientes.',
    tags: ['Middle Office', 'Soporte', 'Operaciones']
  }, {
    icon: 'trending-up',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Estate m\xE1s cerca ", /*#__PURE__*/React.createElement("em", null, "del mercado")),
    body: 'Cercanía cotidiana con traders, comerciales, research y especialistas de IEB. Información, visión de mercado y contacto operativo en el mismo lugar.',
    tags: ['Trading', 'Research', 'Comercial']
  }, {
    icon: 'globe',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Form\xE1 parte de una ", /*#__PURE__*/React.createElement("em", null, "comunidad")),
    body: 'Encuentros, charlas de mercado e intercambio entre asesores externos. Un entorno donde compartir conocimiento y construir red profesional.',
    tags: ['Encuentros', 'Charlas', 'Networking']
  }, {
    icon: 'shield',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Crec\xE9 con ", /*#__PURE__*/React.createElement("em", null, "respaldo")),
    body: 'Trayectoria de Grupo IEB en mercado de capitales, equipos especializados y soluciones para individuos, empresas e instituciones a tu disposición.',
    tags: ['Grupo IEB', 'Trayectoria', 'Respaldo']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "beneficios section",
    id: "beneficios",
    "aria-labelledby": "beneficios-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head beneficios__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta sec-head__meta--dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "04 \xB7 Beneficios"), /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "Lo que vas a encontrar al sumarte")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-head__title",
    id: "beneficios-title"
  }, "Lo que gan\xE1s cuando trabaj\xE1s ", /*#__PURE__*/React.createElement("em", null, "desde Espacio IEB"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "beneficios__grid"
  }, items.map((b, i) => /*#__PURE__*/React.createElement("article", {
    className: "benefit",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "benefit__num"
  }, /*#__PURE__*/React.createElement("span", null, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "benefit__num-arrow"
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    className: "benefit__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    className: "benefit__title"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "benefit__body"
  }, b.body), /*#__PURE__*/React.createElement("div", {
    className: "benefit__tags"
  }, b.tags.map(t => /*#__PURE__*/React.createElement("span", {
    className: "benefit__tag",
    key: t
  }, t))))))));
}

/* ============================================================
   COMUNIDAD
   ============================================================ */
function Comunidad() {
  const blocks = [{
    icon: 'mic',
    title: 'Charlas de mercado',
    body: 'Encuentros recurrentes con foco en macro, renta fija, renta variable y coyuntura local.'
  }, {
    icon: 'globe',
    title: 'Encuentros con especialistas',
    body: 'Acceso directo a referentes de Grupo IEB y del ecosistema financiero argentino.'
  }, {
    icon: 'users',
    title: 'Intercambio entre asesores',
    body: 'Espacio común para conversar, compartir visión y conocer a otros asesores externos.'
  }, {
    icon: 'bar-chart',
    title: 'Research y visión de mercado',
    body: 'Material y lecturas del equipo de research IEB para enriquecer tu asesoramiento.'
  }, {
    icon: 'layers',
    title: 'Equipos comerciales y operativos',
    body: 'Conexión cotidiana con traders, comerciales y Middle Office en el mismo edificio.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "comunidad section",
    id: "comunidad",
    "aria-labelledby": "comunidad-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comunidad__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "05 \xB7 Comunidad"), /*#__PURE__*/React.createElement("h2", {
    className: "comunidad__title",
    id: "comunidad-title"
  }, "Un espacio para fortalecer la ", /*#__PURE__*/React.createElement("em", null, "comunidad financiera"), " local.")), /*#__PURE__*/React.createElement("p", {
    className: "comunidad__lead"
  }, "Espacio IEB busca reunir ", /*#__PURE__*/React.createElement("strong", null, "asesores externos y profesionales del mercado"), " en un entorno activo, donde el intercambio de informaci\xF3n, la cercan\xEDa con especialistas y la formaci\xF3n continua ayuden a elevar la calidad del asesoramiento financiero en Argentina.")), /*#__PURE__*/React.createElement("div", {
    className: "comunidad__grid"
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
    className: "com-block",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "com-block__num"
  }, "0", i + 1, " / 0", blocks.length), /*#__PURE__*/React.createElement("div", {
    className: "com-block__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "com-block__title"
  }, b.title), /*#__PURE__*/React.createElement("p", {
    className: "com-block__body"
  }, b.body))))));
}

/* ============================================================
   PARA QUIÉN
   ============================================================ */
function Audience() {
  const cards = [{
    n: '01',
    title: 'Agentes Productores Independientes',
    body: 'Profesionales registrados que buscan una base operativa, infraestructura para recibir clientes y cercanía cotidiana con el mercado.',
    tag: 'API'
  }, {
    n: '02',
    title: 'Asesores en ALyCs',
    body: 'Asesores que ya operan con una o varias ALyCs y quieren un entorno profesional y una red de pares para crecer su negocio.',
    tag: 'ALyC'
  }, {
    n: '03',
    title: 'Team leaders y asesores senior',
    body: 'Líderes que están desarrollando equipo propio o quieren consolidar su práctica con un espacio institucional de respaldo.',
    tag: 'Senior'
  }, {
    n: '04',
    title: 'Profesionales conectados al ecosistema',
    body: 'Asesores que buscan más independencia sin perder estructura, y quieren estar más conectados con el mercado y con sus pares.',
    tag: 'Independientes'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "audience section",
    id: "para-quien",
    "aria-labelledby": "para-quien-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head audience__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta sec-head__meta--dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "06 \xB7 Para qui\xE9n es"), /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "Pensado para asesores externos en Argentina")), /*#__PURE__*/React.createElement("h2", {
    className: "sec-head__title",
    id: "para-quien-title"
  }, "Pensado para vos, si ", /*#__PURE__*/React.createElement("em", null, "asesor\xE1s clientes"), " y quer\xE9s crecer con estructura."))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audience__grid"
  }, cards.map(c => /*#__PURE__*/React.createElement("article", {
    className: "aud",
    key: c.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "aud__num"
  }, c.n), /*#__PURE__*/React.createElement("h3", {
    className: "aud__title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "aud__body"
  }, c.body), /*#__PURE__*/React.createElement("div", {
    className: "aud__tag"
  }, "\u2192 ", c.tag))))));
}

/* ============================================================
   INFRAESTRUCTURA
   ============================================================ */
function Infra() {
  const fisica = [{
    name: 'Puestos de trabajo modernos',
    meta: 'Espacio principal'
  }, {
    name: 'Salas de reunión para clientes',
    meta: 'Reservables'
  }, {
    name: 'Boxes privados para videollamadas',
    meta: 'Insonorizados'
  }, {
    name: 'Espacios comunes',
    meta: 'Común'
  }, {
    name: 'Cocheras',
    meta: 'Disponible'
  }];
  const servicios = [{
    name: 'Middle Office en el edificio',
    meta: 'Operativo'
  }, {
    name: 'Equipos comerciales y traders',
    meta: 'Mercado'
  }, {
    name: 'Research y visión de mercado',
    meta: 'Información'
  }, {
    name: 'Charlas y encuentros',
    meta: 'Comunidad'
  }, {
    name: 'Comunidad de asesores externos',
    meta: 'Red'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "infra section",
    id: "infraestructura",
    "aria-labelledby": "infra-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infra__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "07 \xB7 Infraestructura"), /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, /*#__PURE__*/React.createElement("br", null), "Lo f\xEDsico + lo institucional")), /*#__PURE__*/React.createElement("h2", {
    className: "infra__title",
    id: "infra-title"
  }, "Todo lo que necesit\xE1s para trabajar mejor, en un solo lugar."), /*#__PURE__*/React.createElement("p", {
    className: "infra__lead",
    style: {
      alignSelf: 'end'
    }
  }, "Espacio IEB combina infraestructura f\xEDsica y soporte institucional. No es un coworking: es una base profesional pensada para asesores financieros externos.")), /*#__PURE__*/React.createElement("div", {
    className: "infra__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infra__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infra__col-label"
  }, "A \xB7 Infraestructura f\xEDsica"), /*#__PURE__*/React.createElement("div", {
    className: "infra__list"
  }, fisica.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "infra__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "infra__item-num"
  }, "A.0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "infra__item-name"
  }, f.name), /*#__PURE__*/React.createElement("span", {
    className: "infra__item-meta"
  }, f.meta))))), /*#__PURE__*/React.createElement("div", {
    className: "infra__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infra__col-label"
  }, "B \xB7 Servicios y comunidad"), /*#__PURE__*/React.createElement("div", {
    className: "infra__list"
  }, servicios.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "infra__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "infra__item-num"
  }, "B.0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "infra__item-name"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "infra__item-meta"
  }, s.meta)))))), /*#__PURE__*/React.createElement("div", {
    className: "infra__location"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "infra__location-eyebrow"
  }, "Ubicaci\xF3n"), /*#__PURE__*/React.createElement("h3", null, "N\xFA\xF1ez, Buenos Aires"), /*#__PURE__*/React.createElement("p", null, "Una zona estrat\xE9gica de CABA, conectada a las principales avenidas y con cercan\xEDa al corredor financiero de la ciudad. Acceso por auto, transporte p\xFAblico y cocheras disponibles.")), /*#__PURE__*/React.createElement("div", {
    className: "infra__map",
    role: "img",
    "aria-label": "Mapa de N\xFA\xF1ez, Buenos Aires"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 280",
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid-map",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "#1f1f1d",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "600",
    height: "280",
    fill: "url(#grid-map)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 L600 60",
    stroke: "#2a2a28",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 180 L600 200",
    stroke: "#2a2a28",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 0 L160 280",
    stroke: "#2a2a28",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M380 0 L440 280",
    stroke: "#2a2a28",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 280 Q200 140 600 100",
    stroke: "#FDE100",
    strokeWidth: "1",
    fill: "none",
    strokeDasharray: "3 6",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "20",
    y: "22",
    fill: "#444",
    fontSize: "10",
    fontFamily: "monospace",
    letterSpacing: "2"
  }, "N\xDA\xD1EZ \xB7 CABA"), /*#__PURE__*/React.createElement("text", {
    x: "500",
    y: "270",
    fill: "#444",
    fontSize: "10",
    fontFamily: "monospace",
    letterSpacing: "2"
  }, "R\xCDO DE LA PLATA")), /*#__PURE__*/React.createElement("div", {
    className: "infra__map-pin"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infra__map-pin-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "infra__map-pin-label"
  }, "Espacio IEB"))))));
}

/* ============================================================
   RESPALDO IEB
   ============================================================ */
function Respaldo() {
  const stats = [{
    n: '01',
    value: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null, "+USD"), "2.000", /*#__PURE__*/React.createElement("em", null, "M")),
    label: 'gestionados a través de Grupo IEB'
  }, {
    n: '02',
    value: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null, "+"), "200"),
    label: 'personas en el equipo IEB'
  }, {
    n: '03',
    value: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("sup", null, "+"), "150"),
    label: 'productores externos vinculados'
  }, {
    n: '04',
    value: /*#__PURE__*/React.createElement(React.Fragment, null, "Mercado", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "de capitales")),
    label: 'trayectoria institucional comprobada'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "respaldo section",
    id: "respaldo",
    "aria-labelledby": "respaldo-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "respaldo__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "respaldo__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "08 \xB7 Respaldo"), /*#__PURE__*/React.createElement("h2", {
    className: "respaldo__title",
    id: "respaldo-title"
  }, "Con el respaldo de ", /*#__PURE__*/React.createElement("em", null, "Grupo IEB"), "."), /*#__PURE__*/React.createElement("p", {
    className: "respaldo__lead"
  }, "Grupo IEB cuenta con trayectoria en mercado de capitales, equipos especializados y una oferta de soluciones para individuos, empresas e instituciones. Espacio IEB toma esa estructura y la pone al servicio de los asesores externos."), /*#__PURE__*/React.createElement("div", {
    className: "respaldo__sig"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/espacio-ieb-nav.png",
    alt: "Espacio IEB",
    width: "558",
    height: "98",
    style: {
      height: '34px',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Grupo IEB \xB7 Buenos Aires, Argentina"))), /*#__PURE__*/React.createElement("div", {
    className: "respaldo__stats",
    "aria-label": "M\xE9tricas de Grupo IEB"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "respaldo__stat",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "respaldo__stat-num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "respaldo__stat-value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "respaldo__stat-label"
  }, s.label)))))));
}

/* ============================================================
   MODELO DE ACCESO
   ============================================================ */
function Modelo() {
  const rules = [{
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "El acceso a Espacio IEB es ", /*#__PURE__*/React.createElement("strong", null, "100% gratuito"), " para asesores externos validados."),
    flag: 'Gratuito',
    neutral: false
  }, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Pod\xE9s ", /*#__PURE__*/React.createElement("strong", null, "seguir operando con las ALyCs"), " con las que ya trabaj\xE1s. No hay exclusividad con IEB."),
    flag: 'Sin exclusividad',
    neutral: false
  }, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Us\xE1s el espacio cuando lo necesit\xE1s. ", /*#__PURE__*/React.createElement("strong", null, "Sin m\xEDnimos de uso"), " ni horarios obligatorios."),
    flag: 'Flexible',
    neutral: false
  }, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Recib\xED clientes en salas de reuni\xF3n, hac\xE9 videollamadas en boxes privados y particip\xE1 de la comunidad."),
    flag: 'Cliente',
    neutral: true
  }, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Acceso al equipo de ", /*#__PURE__*/React.createElement("strong", null, "Middle Office"), " y cercan\xEDa con especialistas, traders y research."),
    flag: 'Soporte',
    neutral: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "modelo section",
    id: "modelo",
    "aria-labelledby": "modelo-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modelo__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "09 \xB7 Modelo de acceso"), /*#__PURE__*/React.createElement("h2", {
    className: "modelo__title",
    id: "modelo-title"
  }, "Gratuito, flexible y ", /*#__PURE__*/React.createElement("em", null, "sin exclusividad"), "."), /*#__PURE__*/React.createElement("p", {
    className: "modelo__lead"
  }, "Espacio IEB est\xE1 pensado para adaptarse a la forma de trabajo de cada asesor. Pod\xE9s usar el espacio, recibir clientes, participar de encuentros y seguir operando con las ALyCs con las que ya trabaj\xE1s."), /*#__PURE__*/React.createElement("a", {
    href: "#acceso",
    className: "btn btn--dark"
  }, "Solicitar acceso \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "modelo__rules"
  }, rules.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "modelo__rule",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "modelo__rule-num"
  }, "REGLA \xB7 0", i + 1), /*#__PURE__*/React.createElement("div", {
    className: "modelo__rule-text"
  }, r.text), /*#__PURE__*/React.createElement("div", {
    className: `modelo__rule-flag ${r.neutral ? 'modelo__rule-flag--neutral' : ''}`
  }, r.flag)))))));
}

/* ============================================================
   FAQ
   ============================================================ */
const FAQ_ITEMS = [{
  q: '¿Qué es Espacio IEB?',
  a: 'Espacio IEB es una iniciativa de Grupo IEB para fortalecer la comunidad de asesores financieros externos en Argentina. Combina puestos de trabajo, salas de reunión, boxes privados, soporte de Middle Office, charlas de mercado y comunidad profesional, en una base ubicada en Núñez, Buenos Aires.'
}, {
  q: '¿Por qué Grupo IEB creó Espacio IEB?',
  a: 'Porque el asesor financiero cumple un rol clave en el desarrollo del mercado de capitales argentino, pero muchas veces trabaja de forma aislada. Espacio IEB nace para crear un entorno profesional donde los asesores externos puedan trabajar, recibir clientes, estar cerca de especialistas y fortalecer la comunidad.'
}, {
  q: '¿Espacio IEB es un coworking?',
  a: 'No. Espacio IEB no es un coworking. Es una base operativa, comercial y profesional pensada exclusivamente para asesores financieros externos, con infraestructura de oficinas, salas de reunión, soporte operativo, cercanía con equipos de Grupo IEB y una comunidad de pares del mercado de capitales.'
}, {
  q: '¿Quiénes pueden usar Espacio IEB?',
  a: 'Está pensado para Agentes Productores Independientes, asesores financieros que trabajan en ALyCs, asesores senior, team leaders que quieren desarrollar equipo propio y profesionales del mercado de capitales que buscan más independencia sin perder estructura.'
}, {
  q: '¿Dónde queda Espacio IEB?',
  a: 'Espacio IEB está ubicado en el barrio de Núñez, en la Ciudad Autónoma de Buenos Aires (CABA), Argentina. Es una zona estratégica con buena conectividad y cocheras disponibles.'
}, {
  q: '¿Tiene costo?',
  a: 'No. El acceso a Espacio IEB es 100% gratuito para los asesores financieros externos validados por Grupo IEB. No hay membresía ni pagos asociados al uso del espacio.'
}, {
  q: '¿Exige exclusividad con IEB?',
  a: 'No. Espacio IEB no exige exclusividad. El asesor puede seguir operando con las ALyCs con las que ya trabaja. La propuesta es sumar estructura, comunidad y respaldo, sin condicionar la libertad operativa del asesor.'
}, {
  q: '¿Puedo recibir clientes?',
  a: 'Sí. Espacio IEB cuenta con salas de reunión y boxes privados para videollamadas, pensados específicamente para que el asesor pueda recibir y atender a sus clientes en un entorno profesional e institucional.'
}, {
  q: '¿Cómo puedo solicitar acceso?',
  a: 'Podés solicitar acceso completando el formulario al final de esta página. El equipo de Espacio IEB se va a contactar para validar el perfil, coordinar una visita y explicarte cómo funciona el espacio en detalle.'
}];
function FAQ() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "faq section",
    id: "faq",
    "aria-labelledby": "faq-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "10 \xB7 FAQ"), /*#__PURE__*/React.createElement("h2", {
    className: "faq__title",
    id: "faq-title"
  }, "Lo que asesores como vos ", /*#__PURE__*/React.createElement("em", null, "nos preguntan"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "faq__lead"
  }, "Si tu pregunta no est\xE1 ac\xE1, escribinos en el formulario de abajo. El equipo de Espacio IEB responde personalmente cada solicitud.")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq__item-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    className: "faq__item-q",
    itemProp: "name"
  }, item.q), /*#__PURE__*/React.createElement("span", {
    className: "faq__item-toggle",
    "aria-hidden": "true"
  }, open === i ? '−' : '+'), /*#__PURE__*/React.createElement("div", {
    className: "faq__item-a",
    itemProp: "acceptedAnswer",
    itemScope: true,
    itemType: "https://schema.org/Answer"
  }, /*#__PURE__*/React.createElement("span", {
    itemProp: "text"
  }, item.a)))))));
}

/* ============================================================
   ACCESO (form)
   ============================================================ */
function Acceso() {
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
  const valid = data.nombre.length > 1 && /\S+@\S+\.\S+/.test(data.email) && data.perfil && data.consent;
  const onChange = k => e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({
      ...data,
      [k]: val
    });
  };
  const submit = e => {
    e.preventDefault();
    if (!valid) return;
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "acceso section",
    id: "acceso",
    "aria-labelledby": "acceso-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acceso__trama"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acceso__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "11 \xB7 Solicitar acceso"), /*#__PURE__*/React.createElement("h2", {
    className: "acceso__title",
    id: "acceso-title"
  }, "Sumate a la comunidad de ", /*#__PURE__*/React.createElement("em", null, "asesores externos"), " de Espacio IEB."), /*#__PURE__*/React.createElement("p", {
    className: "acceso__lead"
  }, "Complet\xE1 el formulario y el equipo de Espacio IEB se va a contactar para validar tu perfil, coordinar una visita y explicarte c\xF3mo funciona el espacio en detalle."), /*#__PURE__*/React.createElement("div", {
    className: "acceso__points"
  }, /*#__PURE__*/React.createElement("div", {
    className: "acceso__point"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acceso__point-tick"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Acceso 100% gratuito"), " \xB7 sin membres\xEDa ni pagos asociados.")), /*#__PURE__*/React.createElement("div", {
    className: "acceso__point"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acceso__point-tick"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Sin exclusividad"), " \xB7 segu\xED operando con las ALyCs con las que ya trabaj\xE1s.")), /*#__PURE__*/React.createElement("div", {
    className: "acceso__point"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acceso__point-tick"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Visita coordinada"), " \xB7 conoc\xE9 el espacio antes de definir nada.")), /*#__PURE__*/React.createElement("div", {
    className: "acceso__point"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acceso__point-tick"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Atenci\xF3n personalizada"), " \xB7 respuesta del equipo en menos de 48hs h\xE1biles.")))), /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__label-row"
  }, /*#__PURE__*/React.createElement("span", null, "Formulario \xB7 Acceso"), /*#__PURE__*/React.createElement("span", null, sent ? 'Enviado' : valid ? 'Listo' : 'Completar')), sent ? /*#__PURE__*/React.createElement("div", {
    className: "form__success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__success-tick"
  }, "Solicitud recibida"), /*#__PURE__*/React.createElement("h4", null, "Gracias, ", data.nombre.split(' ')[0], "."), /*#__PURE__*/React.createElement("p", null, "El equipo de Espacio IEB va a contactarte a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, data.email), " en menos de 48 horas h\xE1biles para coordinar tu visita.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "nombre"
  }, "Nombre y apellido", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("input", {
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
  }, "Email", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("input", {
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
  }, "Perfil profesional", /*#__PURE__*/React.createElement("sup", null, "*")), /*#__PURE__*/React.createElement("select", {
    id: "perfil",
    value: data.perfil,
    onChange: onChange('perfil'),
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), /*#__PURE__*/React.createElement("option", {
    value: "API"
  }, "Agente Productor Independiente"), /*#__PURE__*/React.createElement("option", {
    value: "ALyC"
  }, "Asesor financiero en ALyC"), /*#__PURE__*/React.createElement("option", {
    value: "Senior"
  }, "Asesor senior / Team leader"), /*#__PURE__*/React.createElement("option", {
    value: "Otro"
  }, "Otro")))), /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "alyc"
  }, "ALyC con la que oper\xE1s"), /*#__PURE__*/React.createElement("input", {
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
  }, "Seleccionar..."), /*#__PURE__*/React.createElement("option", null, "1 \u2013 25 clientes"), /*#__PURE__*/React.createElement("option", null, "26 \u2013 100 clientes"), /*#__PURE__*/React.createElement("option", null, "101 \u2013 300 clientes"), /*#__PURE__*/React.createElement("option", null, "+300 clientes"), /*#__PURE__*/React.createElement("option", null, "Prefiero no responder")))), /*#__PURE__*/React.createElement("div", {
    className: "form__field form__field--full"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "mensaje"
  }, "Comentario (opcional)"), /*#__PURE__*/React.createElement("textarea", {
    id: "mensaje",
    placeholder: "Contanos brevemente qu\xE9 te interesa de Espacio IEB",
    value: data.mensaje,
    onChange: onChange('mensaje')
  })), /*#__PURE__*/React.createElement("label", {
    className: "form__check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.consent,
    onChange: onChange('consent')
  }), /*#__PURE__*/React.createElement("span", null, "Acepto que Grupo IEB use mis datos para contactarme y validar mi perfil. Consultar la ", /*#__PURE__*/React.createElement("a", {
    href: "#privacidad"
  }, "pol\xEDtica de privacidad"), ".")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "form__submit",
    disabled: !valid
  }, /*#__PURE__*/React.createElement("span", null, "Enviar solicitud"), /*#__PURE__*/React.createElement("span", null, "\u2192")))))));
}

/* ============================================================
   FOOTER
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
    src: "assets/logos/espacio-ieb-nav.png",
    alt: "Espacio IEB",
    width: "558",
    height: "98",
    style: {
      height: '28px',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", null, "Una iniciativa de Grupo IEB para fortalecer la comunidad de asesores financieros externos en Argentina. N\xFA\xF1ez, Buenos Aires.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Navegar"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#que-es"
  }, "Qu\xE9 es")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#por-que"
  }, "Por qu\xE9 existe")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#beneficios"
  }, "Beneficios")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#comunidad"
  }, "Comunidad")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#infraestructura"
  }, "Infraestructura")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Sumate"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#para-quien"
  }, "Para qui\xE9n es")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#modelo"
  }, "Modelo de acceso")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#acceso"
  }, "Solicitar acceso")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Grupo IEB"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://grupoieb.com.ar",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "grupoieb.com.ar")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://ar.linkedin.com/company/grupoieb",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#acceso"
  }, "Contacto")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "privacidad.html"
  }, "Privacidad"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Grupo IEB \xB7 Espacio IEB \xB7 N\xFA\xF1ez, CABA"), /*#__PURE__*/React.createElement("div", {
    className: "footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "T\xE9rminos"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cookies")))));
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(PorQue, null), /*#__PURE__*/React.createElement(QueEs, null), /*#__PURE__*/React.createElement(Beneficios, null), /*#__PURE__*/React.createElement(Comunidad, null), /*#__PURE__*/React.createElement(Audience, null), /*#__PURE__*/React.createElement(Infra, null), /*#__PURE__*/React.createElement(Respaldo, null), /*#__PURE__*/React.createElement(Modelo, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Acceso, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
