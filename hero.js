// AUTO-GENERATED from the matching .jsx file — do not edit by hand.
// Run `npm run build` after editing the .jsx source.
// Hero — three layouts driven by tweak.heroLayout
const {
  useState,
  useEffect,
  useRef
} = React;
function Hero({
  tweak
}) {
  const layout = tweak.heroLayout;
  if (layout === 'centered') return /*#__PURE__*/React.createElement(HeroCentered, {
    tweak: tweak
  });
  if (layout === 'terminal') return /*#__PURE__*/React.createElement(HeroTerminal, {
    tweak: tweak
  });
  return /*#__PURE__*/React.createElement(HeroSplit, {
    tweak: tweak
  });
}

// ───────────────────────────────────────────────────────────────
// Shared bits
// ───────────────────────────────────────────────────────────────

function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-eyebrow-dot"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
function CTAs() {
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    className: "lz-btn lz-btn-primary",
    href: "https://github.com/loopzedev/loopze-edge/releases/latest",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", null, "Download binary"), /*#__PURE__*/React.createElement("span", {
    className: "lz-btn-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "lz-btn lz-btn-ghost",
    href: "#install"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "$"), /*#__PURE__*/React.createElement("span", null, "curl -L loopze.dev/install | sh"), /*#__PURE__*/React.createElement(CopyTick, null)));
}
function CopyTick() {
  const [copied, setCopied] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    className: "lz-copy",
    onClick: e => {
      e.preventDefault();
      navigator.clipboard?.writeText('curl -L loopze.dev/install | sh');
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    },
    "aria-label": "copy"
  }, copied ? '✓' : '⧉');
}
function MetaStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-key"
  }, "build"), /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-val"
  }, /*#__PURE__*/React.createElement("span", {
    "data-loopze-version": true
  }, "v0.4.1"), " \xB7 ", /*#__PURE__*/React.createElement("span", {
    "data-loopze-size": true
  }, "5.2"), " MB")), /*#__PURE__*/React.createElement("div", {
    className: "lz-meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-key"
  }, "platforms"), /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-val"
  }, "linux \xB7 darwin \xB7 windows \xB7 arm")), /*#__PURE__*/React.createElement("div", {
    className: "lz-meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-key"
  }, "runtime"), /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-val"
  }, "go 1.24 \xB7 single binary")), /*#__PURE__*/React.createElement("div", {
    className: "lz-meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-key"
  }, "license"), /*#__PURE__*/React.createElement("span", {
    className: "lz-meta-val"
  }, "AGPL-3.0")));
}

// ───────────────────────────────────────────────────────────────
// Layout A — Split (default)
// ───────────────────────────────────────────────────────────────

function HeroSplit({
  tweak
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "lz-hero lz-hero-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-hero-left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "industrial flow automation \xB7 ", /*#__PURE__*/React.createElement("span", {
    "data-loopze-version": true
  }, "v0.4.1")), /*#__PURE__*/React.createElement("h1", {
    className: "lz-h1"
  }, "Visual flow programming,", /*#__PURE__*/React.createElement("br", null), "rebuilt for ", /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "the industrial edge"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lz-sub"
  }, "One Go binary. Goroutine-per-node parallelism. Native MQTT, Modbus and OPC-UA. Write transforms in Go, JavaScript or expr-lang \u2014 drag-and-drop signal flows, without the ", /*#__PURE__*/React.createElement("span", {
    className: "lz-mono lz-tdim"
  }, "node_modules"), "."), /*#__PURE__*/React.createElement(CTAs, null), /*#__PURE__*/React.createElement(MetaStrip, null)), /*#__PURE__*/React.createElement("div", {
    className: "lz-hero-right"
  }, /*#__PURE__*/React.createElement(FlowMock, null)));
}

// ───────────────────────────────────────────────────────────────
// Layout B — Centered
// ───────────────────────────────────────────────────────────────

function HeroCentered({
  tweak
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "lz-hero lz-hero-centered"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "industrial flow automation \xB7 ", /*#__PURE__*/React.createElement("span", {
    "data-loopze-version": true
  }, "v0.4.1")), /*#__PURE__*/React.createElement("h1", {
    className: "lz-h1 lz-h1-center"
  }, "Visual flows compiled to", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "a single 5 MB binary"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lz-sub lz-sub-center"
  }, "Drag-and-drop signal flows for engineers who think in MQTT topics, Modbus registers and OPC-UA nodes. Built in Go for true parallelism, native industrial protocols and zero install ceremony."), /*#__PURE__*/React.createElement(CTAs, null), /*#__PURE__*/React.createElement("div", {
    className: "lz-hero-mock-wide"
  }, /*#__PURE__*/React.createElement(FlowMock, null)));
}

// ───────────────────────────────────────────────────────────────
// Layout C — Terminal-first
// ───────────────────────────────────────────────────────────────

function HeroTerminal({
  tweak
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "lz-hero lz-hero-terminal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-hero-term-left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "industrial flow automation \xB7 ", /*#__PURE__*/React.createElement("span", {
    "data-loopze-version": true
  }, "v0.4.1")), /*#__PURE__*/React.createElement("h1", {
    className: "lz-h1"
  }, "Small. Hard.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "Reliable.")), /*#__PURE__*/React.createElement("p", {
    className: "lz-sub"
  }, "A flow runtime for the industrial edge. One Go binary, three industrial protocols, embedded NATS, zero install ceremony \u2014 like the stone that sparks the fire."), /*#__PURE__*/React.createElement(CTAs, null)), /*#__PURE__*/React.createElement("div", {
    className: "lz-hero-term-right"
  }, /*#__PURE__*/React.createElement(TerminalCard, null)));
}

// ───────────────────────────────────────────────────────────────
// Flow mock — fake editor with animated dataflow
// ───────────────────────────────────────────────────────────────

function FlowMock() {
  // Animated pulse along the wires
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1600);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-flow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-flow-chrome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-flow-tabs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-flow-tab lz-flow-tab-active"
  }, "flows / temp-watch.json"), /*#__PURE__*/React.createElement("span", {
    className: "lz-flow-tab"
  }, "credentials"), /*#__PURE__*/React.createElement("span", {
    className: "lz-flow-tab"
  }, "debug")), /*#__PURE__*/React.createElement("div", {
    className: "lz-flow-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-dot lz-dot-green"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono lz-tdim"
  }, "deployed \xB7 14 nodes \xB7 312 msg/s"))), /*#__PURE__*/React.createElement("div", {
    className: "lz-flow-canvas"
  }, /*#__PURE__*/React.createElement(FlowGrid, null), /*#__PURE__*/React.createElement(FlowWires, {
    tick: tick
  }), /*#__PURE__*/React.createElement(FlowNode, {
    style: {
      left: 24,
      top: 36
    },
    type: "MQTT Subscribe",
    label: "sensors/temp/+",
    status: {
      kind: 'green',
      text: 'connected'
    },
    icon: "\u2198"
  }), /*#__PURE__*/React.createElement(FlowNode, {
    style: {
      left: 280,
      top: 24
    },
    type: "Go Transform",
    label: "normalize()",
    status: {
      kind: 'blue',
      text: '0.4 ms'
    },
    icon: "\u0192"
  }), /*#__PURE__*/React.createElement(FlowNode, {
    style: {
      left: 280,
      top: 132
    },
    type: "Context Watch",
    label: "cache.users",
    status: {
      kind: 'yellow',
      text: 'watching'
    },
    icon: "\u25CE"
  }), /*#__PURE__*/React.createElement(FlowNode, {
    style: {
      left: 540,
      top: 36
    },
    type: "OPC-UA Write",
    label: "ns=2;s=Setpoint",
    status: {
      kind: 'green',
      text: '12 msgs'
    },
    icon: "\u2197",
    toggle: true
  }), /*#__PURE__*/React.createElement(FlowNode, {
    style: {
      left: 540,
      top: 144
    },
    type: "Debug",
    label: "msg.payload",
    status: {
      kind: 'red',
      text: 'error: null'
    },
    icon: "\u2022"
  })));
}
function FlowGrid() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "lz-flow-grid",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "lz-dots",
    width: "16",
    height: "16",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "1",
    cy: "1",
    r: "1",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#lz-dots)"
  }));
}
function FlowWires({
  tick
}) {
  // 4 cubic bezier paths between nodes
  const wires = [{
    d: 'M 220 76 C 250 76, 250 64, 280 64'
  }, {
    d: 'M 220 76 C 250 76, 250 172, 280 172'
  }, {
    d: 'M 480 64 C 510 64, 510 76, 540 76'
  }, {
    d: 'M 480 64 C 510 64, 510 184, 540 184'
  }, {
    d: 'M 480 172 C 510 172, 510 184, 540 184'
  }];
  return /*#__PURE__*/React.createElement("svg", {
    className: "lz-flow-wires",
    "aria-hidden": "true"
  }, wires.map((w, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("path", {
    d: w.d,
    className: "lz-wire"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3",
    className: "lz-pulse"
  }, /*#__PURE__*/React.createElement("animateMotion", {
    key: tick + '-' + i,
    dur: "1.4s",
    begin: `${i * 0.15}s`,
    path: w.d,
    fill: "freeze"
  })))));
}
function FlowNode({
  style,
  type,
  label,
  status,
  icon,
  toggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-node",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-node-port lz-node-port-in"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lz-node-port lz-node-port-out"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lz-node-accent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lz-node-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-node-icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "lz-node-type"
  }, type)), /*#__PURE__*/React.createElement("div", {
    className: "lz-node-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "lz-node-foot"
  }, /*#__PURE__*/React.createElement(StatusPill, {
    kind: status.kind,
    text: status.text
  }), toggle && /*#__PURE__*/React.createElement("span", {
    className: "lz-node-toggle"
  }, "ON")));
}
function StatusPill({
  kind,
  text
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `lz-pill lz-pill-${kind}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-pill-dot"
  }), /*#__PURE__*/React.createElement("span", null, text));
}

// ───────────────────────────────────────────────────────────────
// Terminal card (Layout C)
// ───────────────────────────────────────────────────────────────

function TerminalCard() {
  const lines = [{
    p: '$',
    t: 'loopze --port 1880 --data-dir ./data',
    cls: 'lz-t-cmd'
  }, {
    p: '·',
    t: '[18:42:01] starting loopze __LOOPZE_VERSION__ (linux/arm64)',
    cls: 'lz-t-info'
  }, {
    p: '·',
    t: '[18:42:01] embedded NATS broker → :4222',
    cls: 'lz-t-info'
  }, {
    p: '·',
    t: '[18:42:01] flow runtime ready · 14 nodes',
    cls: 'lz-t-info'
  }, {
    p: '✓',
    t: '[18:42:01] http server → http://0.0.0.0:1880',
    cls: 'lz-t-ok'
  }, {
    p: '↘',
    t: '[18:42:03] mqtt:sensors/temp/+   {"id":"r-04","c":21.4}',
    cls: 'lz-t-msg'
  }, {
    p: 'ƒ',
    t: '[18:42:03] fn:normalize          12 msg/s',
    cls: 'lz-t-msg'
  }, {
    p: '↗',
    t: '[18:42:03] opcua:Setpoint        ns=2;s=Setpoint ← 21.4',
    cls: 'lz-t-msg'
  }, {
    p: '✓',
    t: '[18:42:03] flow temp-watch deployed (312ms)',
    cls: 'lz-t-ok'
  }, {
    p: '$',
    t: '_',
    cls: 'lz-t-cursor'
  }];

  // typing-style reveal
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= lines.length) return;
    const id = setTimeout(() => setN(x => x + 1), n === 0 ? 200 : 220);
    return () => clearTimeout(id);
  }, [n]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-term"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-term-chrome"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-term-tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-term-tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-term-tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-term-title"
  }, "loopze@edge \u2500 /opt/loopze")), /*#__PURE__*/React.createElement("div", {
    className: "lz-term-body"
  }, lines.slice(0, n).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `lz-t-line ${l.cls}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-t-prefix"
  }, l.p), /*#__PURE__*/React.createElement("span", null, l.t)))));
}
Object.assign(window, {
  Hero
});