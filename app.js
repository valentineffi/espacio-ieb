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
    })),
    smartphone: /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "2",
      width: "14",
      height: "20",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "18",
      x2: "12",
      y2: "18"
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
    id: 'simulador',
    label: 'Simulador'
  }, {
    id: 'partners',
    label: 'Partners'
  }, {
    id: 'espacio',
    label: 'Espacio'
  }, {
    id: 'hospitalities',
    label: 'Beneficios'
  }, {
    id: 'tecnologia',
    label: 'Tecnología'
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
    label: 'Payout más alto del mercado',
    accent: true
  }, {
    label: 'Sin exclusividad',
    accent: false
  }, {
    label: 'Acceso 100% gratuito',
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
  }), /*#__PURE__*/React.createElement("span", null, "Espacio IEB \xB7 Partners para asesores financieros externos")), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "La propuesta m\xE1s completa del mercado para ", /*#__PURE__*/React.createElement("em", null, "asesores financieros"), " externos."), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "Escal\xE1 tu cartera y la de tu equipo con el respaldo de Grupo IEB. Sin exclusividad, sin costos fijos y con el payout m\xE1s alto del mercado."), /*#__PURE__*/React.createElement("div", {
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
    href: "#simulador",
    className: "btn btn--primary"
  }, "Simular mi upside ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#partners",
    className: "btn btn--outline"
  }, "Ver c\xF3mo funciona"))), /*#__PURE__*/React.createElement("aside", {
    className: "hero__aside",
    "aria-label": "Resumen r\xE1pido"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-label"
  }, /*#__PURE__*/React.createElement("span", null, "Resumen"), /*#__PURE__*/React.createElement("span", null, "Partners \xB7 2026")), /*#__PURE__*/React.createElement("div", {
    className: "hero__aside-stack"
  }, [['01', 'Payout del 60% — el más alto del mercado.', 'Comisiones'], ['02', 'Oficinas en Núñez con Middle Office en el edificio.', 'Espacio'], ['03', 'App propia para Team Leaders con Grow Finance.', 'Tecnología'], ['04', 'Hospitalities: tennis, fútbol, shows y más.', 'Beneficios']].map(([num, text, tag]) => /*#__PURE__*/React.createElement("div", {
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
  const items = ['Broker #1 en servicio a Agentes Productores', 'Acceso 100% gratuito', 'Sin exclusividad con IEB', 'Espacio IEB · Núñez, CABA', 'Payout más alto del mercado', '+15 años de trayectoria en mercado de capitales', 'Middle Office en el mismo edificio', 'Hospitalities exclusivas para asesores'];
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
   SIMULADOR
   ============================================================ */
function Simulador() {
  const [comision, setComision] = useState(2000000);
  const [payout, setPayout] = useState(30);
  const PARTNERS_PAYOUT = 0.60;
  const netoHoy = comision * (payout / 100);
  const netoPartners = comision * PARTNERS_PAYOUT;
  const incrementoPct = payout < 60 ? Math.round((PARTNERS_PAYOUT - payout / 100) / (payout / 100) * 100) : 0;
  const difAnual = (netoPartners - netoHoy) * 12;
  const sliderPct = (payout - 10) / (55 - 10) * 100;
  const fmt = n => 'US$ ' + Math.round(Math.abs(n)).toLocaleString('es-AR');
  return /*#__PURE__*/React.createElement("section", {
    className: "sim-section section",
    id: "simulador",
    "aria-labelledby": "sim-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "Simulador de upside"), /*#__PURE__*/React.createElement("h2", {
    className: "sim-title",
    id: "sim-title"
  }, "\xBFCu\xE1nto m\xE1s ganar\xEDas operando ", /*#__PURE__*/React.createElement("em", null, "con Partners"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "sim-lead"
  }, "Ingres\xE1 tu comisi\xF3n mensual bruta y el payout que te paga tu AlyC actual. Calculamos cu\xE1nto m\xE1s podr\xEDas ganar con el 60% que paga Partners."))), /*#__PURE__*/React.createElement("div", {
    className: "sim-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-inputs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sim-label",
    htmlFor: "sim-comision"
  }, "Comisi\xF3n mensual bruta (US$)"), /*#__PURE__*/React.createElement("input", {
    id: "sim-comision",
    className: "sim-input-number",
    type: "number",
    value: comision,
    min: "0",
    step: "100000",
    onChange: e => setComision(parseFloat(e.target.value) || 0)
  })), /*#__PURE__*/React.createElement("div", {
    className: "sim-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sim-label",
    htmlFor: "sim-payout"
  }, "Payout actual en tu AlyC: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ieb-yellow)'
    }
  }, payout, "%")), /*#__PURE__*/React.createElement("input", {
    id: "sim-payout",
    type: "range",
    min: "10",
    max: "55",
    value: payout,
    step: "1",
    className: "sim-range",
    onChange: e => setPayout(parseInt(e.target.value)),
    style: {
      background: `linear-gradient(to right, var(--ieb-yellow) ${sliderPct}%, #333 ${sliderPct}%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sim-range-labels"
  }, /*#__PURE__*/React.createElement("span", null, "10%"), /*#__PURE__*/React.createElement("span", null, "55%")))), /*#__PURE__*/React.createElement("div", {
    className: "sim-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-badge"
  }, incrementoPct > 0 ? `+${incrementoPct}%` : payout >= 60 ? 'Ya tenés 60%' : '='), /*#__PURE__*/React.createElement("div", {
    className: "sim-cards-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-card-today"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-card-label"
  }, "Hoy en tu AlyC (", payout, "%)"), /*#__PURE__*/React.createElement("div", {
    className: "sim-card-value"
  }, fmt(netoHoy)), /*#__PURE__*/React.createElement("div", {
    className: "sim-card-annual"
  }, "\u2248 ", fmt(netoHoy * 12), " / a\xF1o")), /*#__PURE__*/React.createElement("div", {
    className: "sim-arrow"
  }, "\u2192"), /*#__PURE__*/React.createElement("div", {
    className: "sim-card-partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-card-label"
  }, "Con Partners (60%)"), /*#__PURE__*/React.createElement("div", {
    className: "sim-card-value"
  }, fmt(netoPartners)), /*#__PURE__*/React.createElement("div", {
    className: "sim-card-annual"
  }, "\u2248 ", fmt(netoPartners * 12), " / a\xF1o"))), difAnual > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim-diff"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-diff-label"
  }, "Diferencia anual"), /*#__PURE__*/React.createElement("span", {
    className: "sim-diff-value"
  }, "+ ", fmt(difAnual))), /*#__PURE__*/React.createElement("p", {
    className: "sim-disclaimer"
  }, "Partners paga el payout m\xE1s alto del mercado \xB7 Sin exclusividad \xB7 Sin costos fijos \xB7 Estructura 100% gratuita."))), /*#__PURE__*/React.createElement("div", {
    className: "sim-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#acceso",
    className: "btn btn--primary"
  }, "Quiero conocer m\xE1s ", /*#__PURE__*/React.createElement("span", null, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#partners",
    className: "btn btn--outline"
  }, "Ver perfiles de acceso"))));
}

/* ============================================================
   PARTNERS (comparison table)
   ============================================================ */
function Partners() {
  const features = [{
    label: 'Oficinas privadas',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Salas de reuniones',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Soporte operativo',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Soporte comercial',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Charlas con referentes',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Hospitalities',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Trabajás con AlyCs que quieras',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: '100% gratuito',
    agente: true,
    asesor: true,
    tl: true
  }, {
    label: 'Sala exclusiva para desayunos',
    agente: true,
    asesor: false,
    tl: true
  }, {
    label: 'Acceso directo a mesa de operaciones',
    agente: true,
    asesor: false,
    tl: true
  }, {
    label: 'Coordinador / tutor',
    agente: false,
    asesor: true,
    tl: false
  }, {
    label: 'Soporte para reuniones con clientes',
    agente: false,
    asesor: true,
    tl: false
  }, {
    label: 'Seguimiento y armado de carteras',
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
    label: 'Atención de clientes propios',
    agente: false,
    asesor: false,
    tl: true
  }, {
    label: 'APIs para informes propios',
    agente: false,
    asesor: false,
    tl: true
  }, {
    label: 'Reclutamiento y selección',
    agente: false,
    asesor: false,
    tl: true
  }];
  const Cell = ({
    val
  }) => /*#__PURE__*/React.createElement("span", {
    className: `partners-cell ${val ? 'partners-cell--yes' : 'partners-cell--no'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: val ? 'check' : 'minus',
    size: 16
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "partners-section section section--light",
    id: "partners",
    "aria-labelledby": "partners-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "Partners \xB7 Perfiles de acceso")), /*#__PURE__*/React.createElement("h2", {
    id: "partners-title"
  }, "Eleg\xED el perfil que ", /*#__PURE__*/React.createElement("em", null, "mejor se adapta"), " a tu forma de trabajar.")), /*#__PURE__*/React.createElement("div", {
    className: "partners-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "partners-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "partners-th-feature"
  }), /*#__PURE__*/React.createElement("th", {
    className: "partners-th-col"
  }, "Agente", /*#__PURE__*/React.createElement("br", null), "Productor"), /*#__PURE__*/React.createElement("th", {
    className: "partners-th-col"
  }, "Asesor", /*#__PURE__*/React.createElement("br", null), "Financiero"), /*#__PURE__*/React.createElement("th", {
    className: "partners-th-col partners-th-col--highlight"
  }, "Team Leader", /*#__PURE__*/React.createElement("span", {
    className: "partners-badge"
  }, "\u2605 Completo")))), /*#__PURE__*/React.createElement("tbody", null, features.map((f, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: "partners-row"
  }, /*#__PURE__*/React.createElement("td", {
    className: "partners-td-feature"
  }, f.label), /*#__PURE__*/React.createElement("td", {
    className: "partners-td-cell"
  }, /*#__PURE__*/React.createElement(Cell, {
    val: f.agente
  })), /*#__PURE__*/React.createElement("td", {
    className: "partners-td-cell"
  }, /*#__PURE__*/React.createElement(Cell, {
    val: f.asesor
  })), /*#__PURE__*/React.createElement("td", {
    className: "partners-td-cell partners-td-cell--highlight"
  }, /*#__PURE__*/React.createElement(Cell, {
    val: f.tl
  }))))))), /*#__PURE__*/React.createElement("p", {
    className: "partners-note"
  }, "Sin exclusividad \xB7 Sin costos fijos \xB7 Acceso 100% gratuito para asesores validados por Grupo IEB.")));
}

/* ============================================================
   GRUPO IEB (6 pillars)
   ============================================================ */
function GrupoIEB() {
  const pillars = [{
    icon: 'shield',
    title: 'Respaldo',
    body: 'La solidez institucional de Grupo IEB, con más de 15 años de trayectoria en el mercado de capitales argentino.'
  }, {
    icon: 'layers',
    title: 'Todo en un lugar',
    body: 'Todos los productos e instrumentos del mercado desde una sola operatoria integrada.'
  }, {
    icon: 'bar-chart',
    title: 'Información actualizada',
    body: 'Especialistas en cada área que te mantienen al tanto de la macro, los mercados y las oportunidades.'
  }, {
    icon: 'users',
    title: 'Soporte comercial',
    body: 'Equipo de Asesores Idóneos a tu disposición para acompañarte en el desarrollo de tu negocio.'
  }, {
    icon: 'activity',
    title: 'Las mejores plataformas',
    body: 'Una plataforma para que tus clientes inviertan y otra exclusiva para que vos gestiones tu cartera.'
  }, {
    icon: 'trending-up',
    title: 'Condiciones competitivas',
    body: 'Acuerdos y beneficios exclusivos diseñados para el crecimiento de asesores y team leaders.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "grupo-ieb section",
    id: "grupo",
    "aria-labelledby": "grupo-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head grupo-ieb-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta sec-head__meta--dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "Por qu\xE9 Grupo IEB")), /*#__PURE__*/React.createElement("h2", {
    id: "grupo-title"
  }, "El respaldo de una instituci\xF3n con ", /*#__PURE__*/React.createElement("em", null, "trayectoria comprobada"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "grupo-ieb-grid"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "grupo-ieb-card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "grupo-ieb-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "grupo-ieb-title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "grupo-ieb-body"
  }, p.body))))));
}

/* ============================================================
   ESPACIO IEB (6 numbered features)
   ============================================================ */
function EspacioIEB() {
  const features = [{
    n: '01',
    keyword: 'productividad',
    desc: 'Trabajá rodeado de colegas en un espacio profesional. Puestos modernos, espacios comunes y ambiente de foco.'
  }, {
    n: '02',
    keyword: 'dinámica comercial',
    desc: 'Codo a codo con traders y el equipo comercial de IEB. Acceso cotidiano a información y pulso de mercado.'
  }, {
    n: '03',
    keyword: 'agilidad',
    desc: 'Middle Office en el mismo edificio para resolver cuestiones operativas sin demoras ni fricción.'
  }, {
    n: '04',
    keyword: 'información',
    desc: 'Charlas de expertos y research de IEB para tomar mejores decisiones de asesoramiento todos los días.'
  }, {
    n: '05',
    keyword: 'sin exclusividad',
    desc: 'Seguís operando con las ALyCs con las que ya tenés contrato. No hay restricciones operativas.'
  }, {
    n: '06',
    keyword: 'disponibilidad libre',
    desc: 'Venís cuando lo necesitás. Traés clientes, hacés reuniones, usás las salas y los boxes privados.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "espacio-ieb section section--light",
    id: "espacio",
    "aria-labelledby": "espacio-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "El espacio")), /*#__PURE__*/React.createElement("h2", {
    id: "espacio-title"
  }, "Una base dise\xF1ada para que ", /*#__PURE__*/React.createElement("em", null, "trabajes mejor"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-list"
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-item",
    key: f.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "espacio-ieb-num"
  }, f.n), /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-keyword"
  }, "M\xE1s ", /*#__PURE__*/React.createElement("strong", null, f.keyword)), /*#__PURE__*/React.createElement("p", {
    className: "espacio-ieb-desc"
  }, f.desc))))), /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-img",
    "aria-label": "Espacio IEB \u2014 N\xFA\xF1ez, Buenos Aires"
  }, /*#__PURE__*/React.createElement("div", {
    className: "espacio-ieb-placeholder"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 500 360",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid-esp",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "#2a2a28",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "500",
    height: "360",
    fill: "#141414"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "500",
    height: "360",
    fill: "url(#grid-esp)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "45%",
    textAnchor: "middle",
    fill: "#333",
    fontSize: "13",
    fontFamily: "monospace",
    letterSpacing: "3"
  }, "N\xDA\xD1EZ \xB7 BUENOS AIRES"), /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "55%",
    textAnchor: "middle",
    fill: "#222",
    fontSize: "11",
    fontFamily: "monospace",
    letterSpacing: "2"
  }, "Espacio IEB \xB7 Fotos pr\xF3ximamente")))))));
}

/* ============================================================
   HOSPITALITIES (4 benefit cards)
   ============================================================ */
function Hospitalities() {
  const cards = [{
    emoji: '🎾',
    title: 'Argentina Open',
    desc: 'IEB+ es naming sponsor del torneo. Palcos preferenciales y acceso exclusivo al evento más importante del tenis argentino.'
  }, {
    emoji: '⚽',
    title: 'River Plate · Monumental',
    desc: 'Acceso VIP a partidos en el estadio más grande de Argentina. Una experiencia única para vos y tus mejores clientes.'
  }, {
    emoji: '🏟️',
    title: 'Atlético Talleres · Kempes',
    desc: 'Experiencias premium en uno de los estadios más modernos del país, con atención y espacios de primer nivel.'
  }, {
    emoji: '🎵',
    title: 'Movistar Arena',
    desc: 'Espacios preferenciales en los principales shows y eventos del año. El entretenimiento como herramienta comercial.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hospitalities section",
    id: "hospitalities",
    "aria-labelledby": "hosp-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta sec-head__meta--dark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line"
  }, "Hospitalities")), /*#__PURE__*/React.createElement("h2", {
    id: "hosp-title"
  }, "Experiencias exclusivas para vos ", /*#__PURE__*/React.createElement("em", null, "y tus clientes"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "hosp-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "hosp-card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "hosp-emoji",
    "aria-hidden": "true"
  }, c.emoji), /*#__PURE__*/React.createElement("h3", {
    className: "hosp-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "hosp-desc"
  }, c.desc))))));
}

/* ============================================================
   GROW FINANCE (custom app for Team Leaders)
   ============================================================ */
function GrowFinance() {
  const features = ['App propia en App Store y Google Play', 'Web 100% personalizada con tu logo y colores', 'Alta automática de cuentas bajo tu manager', 'Fondo común propio (o fondo dedicado)', 'Sin costos de desarrollo ni estructura adicional', 'Respaldada por la trayectoria de Grupo IEB'];
  return /*#__PURE__*/React.createElement("section", {
    className: "grow-finance section",
    id: "grow-finance",
    "aria-labelledby": "gf-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Para Team Leaders"), /*#__PURE__*/React.createElement("h2", {
    className: "gf-title",
    id: "gf-title"
  }, "Tu propia plataforma ", /*#__PURE__*/React.createElement("em", null, "de inversiones"), "."), /*#__PURE__*/React.createElement("p", {
    className: "gf-lead"
  }, "Los team leaders que se suman a Partners pueden acceder a Grow Finance: una plataforma con marca blanca propia, app en las tiendas y gesti\xF3n integrada de cartera de clientes. Sin costos de desarrollo."), /*#__PURE__*/React.createElement("div", {
    className: "gf-features"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "gf-feature",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "gf-num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    className: "gf-feature-text"
  }, f)))), /*#__PURE__*/React.createElement("a", {
    href: "#acceso",
    className: "btn btn--dark",
    style: {
      marginTop: '32px'
    }
  }, "Quiero saber m\xE1s \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "gf-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gf-phone-brand"
  }, "Tu marca")), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-line gf-phone-line--short"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-chart"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-line gf-phone-line--short"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-line"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gf-phone-label"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, "Grow Finance \xB7 Powered by IEB")))))));
}

/* ============================================================
   TECNOLOGIA (2-card tech grid)
   ============================================================ */
function Tecnologia() {
  return /*#__PURE__*/React.createElement("section", {
    className: "tecnologia section section--light",
    id: "tecnologia",
    "aria-labelledby": "tec-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow-line is-gray"
  }, "Tecnolog\xEDa")), /*#__PURE__*/React.createElement("h2", {
    id: "tec-title"
  }, "Dos plataformas. ", /*#__PURE__*/React.createElement("em", null, "Un ecosistema"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "tec-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tec-card tec-card--investor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tec-card-eyebrow"
  }, "Para tus clientes"), /*#__PURE__*/React.createElement("h3", {
    className: "tec-card-title"
  }, "App para inversores"), /*#__PURE__*/React.createElement("p", {
    className: "tec-card-body"
  }, "La experiencia digital que tus clientes necesitan para invertir y hacer seguimiento de su cartera con facilidad."), /*#__PURE__*/React.createElement("ul", {
    className: "tec-card-list"
  }, /*#__PURE__*/React.createElement("li", null, "Seguimiento de cartera en tiempo real"), /*#__PURE__*/React.createElement("li", null, "Operatoria simple e intuitiva"), /*#__PURE__*/React.createElement("li", null, "Acceso a todos los instrumentos del mercado local"))), /*#__PURE__*/React.createElement("div", {
    className: "tec-card tec-card--advisor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tec-card-eyebrow"
  }, "Para vos"), /*#__PURE__*/React.createElement("h3", {
    className: "tec-card-title"
  }, "Plataforma para asesores"), /*#__PURE__*/React.createElement("p", {
    className: "tec-card-body"
  }, "La herramienta exclusiva para gestionar tu cartera de clientes, operar y armar informes con datos en tiempo real."), /*#__PURE__*/React.createElement("ul", {
    className: "tec-card-list"
  }, /*#__PURE__*/React.createElement("li", null, "Gesti\xF3n integral de cartera de clientes"), /*#__PURE__*/React.createElement("li", null, "APIs para armado de informes propios"), /*#__PURE__*/React.createElement("li", null, "Herramientas de an\xE1lisis y seguimiento"))))));
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
  q: '¿Cómo funciona el simulador de comisiones?',
  a: 'El simulador te muestra cuánto más ganarías si el payout que recibís fuera del 60% que ofrece Partners, comparado con el porcentaje actual de tu AlyC. Es una estimación basada en tu comisión mensual bruta. Los números exactos se coordinan en la etapa de onboarding.'
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
  }, "FAQ"), /*#__PURE__*/React.createElement("h2", {
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
  }, "Solicitar acceso"), /*#__PURE__*/React.createElement("h2", {
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
    value: "TL"
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
    href: "privacidad.html"
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
  }), /*#__PURE__*/React.createElement("p", null, "Una iniciativa de Grupo IEB para asesores financieros externos en Argentina. Infraestructura, comunidad y el payout m\xE1s alto del mercado. N\xFA\xF1ez, Buenos Aires.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Navegar"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#simulador"
  }, "Simulador")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#partners"
  }, "Partners")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#espacio"
  }, "Espacio IEB")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#hospitalities"
  }, "Beneficios")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#tecnologia"
  }, "Tecnolog\xEDa")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__col-heading"
  }, "Sumate"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#grow-finance"
  }, "Grow Finance")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
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
    href: "privacidad.html"
  }, "Privacidad"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cookies")))));
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Ticker, null), /*#__PURE__*/React.createElement(Simulador, null), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(GrupoIEB, null), /*#__PURE__*/React.createElement(EspacioIEB, null), /*#__PURE__*/React.createElement(Hospitalities, null), /*#__PURE__*/React.createElement(GrowFinance, null), /*#__PURE__*/React.createElement(Tecnologia, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Acceso, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
