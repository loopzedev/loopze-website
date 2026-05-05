// AUTO-GENERATED from the matching .jsx file — do not edit by hand.
// Run `npm run build` after editing the .jsx source.
;(function () {
// Feature grid — 6 features in a 3-col layout, with monospace meta lines
const FEATURES = [{
  id: '01',
  title: 'Three ways to script',
  body: 'Need raw speed? Drop a Go Transform — runs natively in the runtime, no interpreter, full goroutine parallelism. Need flexibility? Function nodes run JavaScript via Goja. Need a one-liner? expr-lang for fast field-level expressions.',
  meta: [['go transform', 'native, zero-copy'], ['javascript', 'Goja sandbox'], ['expr-lang', 'inline']],
  glyph: 'fn'
}, {
  id: '02',
  title: 'Validation node',
  body: 'Drop a Validation node at any system boundary. Conforming messages pass through, non-conforming ones route to a separate error output. Explicit data contracts between flow sections.',
  meta: [['inputs', 'msg + model ref'], ['outputs', 'pass · reject']],
  glyph: 'opc'
}, {
  id: '03',
  title: 'Native queuing',
  body: 'Embedded NATS JetStream means a Queue node ships in the box. Configurable delivery (at-least-once, exactly-once), retries, dead-letter — no Redis, no RabbitMQ, no plugin.',
  meta: [['broker', 'embedded NATS'], ['delivery', 'at-least · exactly-once']],
  glyph: 'flow'
}, {
  id: '04',
  title: 'Per-node profiling',
  body: 'Toggle the profiling overlay and see latency, msg/s and queue fill directly on every node. Slow nodes are highlighted on the canvas — performance issues become visible before they hurt.',
  meta: [['metrics', 'p50 · p99 · msg/s'], ['cost', 'opt-in, zero idle']],
  glyph: 'cpu'
}, {
  id: '05',
  title: 'Message tracing',
  body: 'Pick a single message and follow it through the flow. The path lights up on the canvas, with timestamps and payload snapshots at every hop. Debugging branched flows finally makes sense.',
  meta: [['scope', 'single msg · live'], ['snapshots', 'in/out per node']],
  glyph: 'bin'
}, {
  id: '06',
  title: 'Encrypted credentials',
  body: 'Secrets live in a separate file, AES-256-GCM at rest. Local user accounts with Argon2id, three roles (admin, editor, viewer), sliding sessions out of the box.',
  meta: [['secrets', 'AES-256-GCM'], ['auth', 'Argon2id · 3 roles']],
  glyph: 'lock'
}];
function Features({
  tweak
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "lz-features",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-section-mono"
  }, "// features"), /*#__PURE__*/React.createElement("h2", {
    className: "lz-h2"
  }, "Six things Loopze takes seriously,", /*#__PURE__*/React.createElement("br", null), "so your ", /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "nights stay quiet.")), /*#__PURE__*/React.createElement("p", {
    className: "lz-section-sub"
  }, "Concrete capabilities that come from running flow-based systems in production for a decade \u2014 and noticing what was missing.")), /*#__PURE__*/React.createElement("div", {
    className: "lz-feat-grid"
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.id,
    f: f
  }))), /*#__PURE__*/React.createElement(ProtoStrip, null));
}
function FeatureCard({
  f
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "lz-feat"
  }, /*#__PURE__*/React.createElement("header", {
    className: "lz-feat-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-feat-num lz-mono"
  }, f.id), /*#__PURE__*/React.createElement(Glyph, {
    kind: f.glyph
  })), /*#__PURE__*/React.createElement("h3", {
    className: "lz-feat-title"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "lz-feat-body"
  }, f.body), /*#__PURE__*/React.createElement("dl", {
    className: "lz-feat-meta"
  }, f.meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "lz-feat-meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v)))));
}

// Tiny abstract glyphs — squares, lines, circles — never figurative
function Glyph({
  kind
}) {
  const c = 'currentColor';
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: c,
    strokeWidth: 1.4
  };
  switch (kind) {
    case 'bin':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "6",
        width: "18",
        height: "16",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "5",
        y1: "11",
        x2: "23",
        y2: "11"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "8.5",
        r: "0.8",
        fill: c
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "11.5",
        cy: "8.5",
        r: "0.8",
        fill: c
      }));
    case 'flow':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "11",
        width: "6",
        height: "6",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "19",
        y: "6",
        width: "6",
        height: "6",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "19",
        y: "16",
        width: "6",
        height: "6",
        rx: "1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 9 14 C 13 14, 15 9, 19 9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 9 14 C 13 14, 15 19, 19 19"
      }));
    case 'opc':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "14",
        cy: "14",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 14 5 L 14 23 M 5 14 L 23 14"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "14",
        cy: "14",
        r: "3",
        fill: c,
        stroke: "none"
      }));
    case 'cpu':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "7",
        y: "7",
        width: "14",
        height: "14",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "11",
        y: "11",
        width: "6",
        height: "6",
        rx: "0.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "11",
        x2: "7",
        y2: "11"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "17",
        x2: "7",
        y2: "17"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "21",
        y1: "11",
        x2: "25",
        y2: "11"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "21",
        y1: "17",
        x2: "25",
        y2: "17"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "11",
        y1: "3",
        x2: "11",
        y2: "7"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "17",
        y1: "3",
        x2: "17",
        y2: "7"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "11",
        y1: "21",
        x2: "11",
        y2: "25"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "17",
        y1: "21",
        x2: "17",
        y2: "25"
      }));
    case 'fn':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M 8 22 C 8 14, 12 6, 16 6 C 17.5 6, 18.5 7, 18.5 8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "14",
        x2: "16",
        y2: "14"
      }));
    case 'lock':
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "13",
        width: "16",
        height: "11",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 9 13 V 9 a 5 5 0 0 1 10 0 V 13"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "14",
        cy: "18",
        r: "1.4",
        fill: c,
        stroke: "none"
      }));
    default:
      return null;
  }
}

// Protocol strip — wide row showing supported industrial protocols as chips
function ProtoStrip() {
  const items = [{
    k: 'MQTT',
    v: 'v3 · v5 · TLS'
  }, {
    k: 'Modbus',
    v: 'TCP · RTU'
  }, {
    k: 'OPC-UA',
    v: 'Read · Sub · Write'
  }, {
    k: 'Serial',
    v: 'RS-232 · RS-485'
  }, {
    k: 'NATS',
    v: 'embedded broker'
  }, {
    k: 'HTTP',
    v: 'REST · WS · SSE'
  }, {
    k: 'WebSocket',
    v: 'inbound · outbound'
  }, {
    k: 'Cron',
    v: 'parsed by cronstrue'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-protos",
    id: "protocols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-protos-label lz-mono"
  }, "// protocols out of the box"), /*#__PURE__*/React.createElement("div", {
    className: "lz-protos-row"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.k,
    className: "lz-proto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-proto-k"
  }, p.k), /*#__PURE__*/React.createElement("span", {
    className: "lz-proto-v lz-mono"
  }, p.v)))));
}
Object.assign(window, {
  Features
});
})();
