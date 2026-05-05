// AUTO-GENERATED from the matching .jsx file — do not edit by hand.
// Run `npm run build` after editing the .jsx source.
// Why Loopze — four headline arguments. Pain (status quo) → Loopze answer.

const WHY = [{
  id: '01',
  kicker: 'concurrency',
  headline: 'Real parallelism. Not a single thread.',
  pain: {
    label: 'Status quo',
    text: 'Most flow runtimes sit on a single-threaded event loop. One slow Function node stalls every other node — every other flow, every other message.'
  },
  answer: {
    label: 'Loopze',
    text: 'One goroutine per node. The Go runtime spreads work across every CPU core. Thousands of nodes run truly in parallel — not cooperatively-sequentially.',
    bullets: ['goroutine-per-node', 'go runtime scheduler', 'no event-loop bottleneck']
  }
}, {
  id: '02',
  kicker: 'distribution',
  headline: 'One binary. Zero dependencies.',
  pain: {
    label: 'Status quo',
    text: 'A scripting runtime, a package manager, and a directory full of dependencies. Multi-step installs, version conflicts, and orphaned community modules that rot in production.'
  },
  answer: {
    label: 'Loopze',
    text: 'A single Go executable. Frontend embedded, NATS embedded, credentials encrypted at rest. Drop the binary on an edge device and run it.',
    bullets: ['~5 MB stripped', 'linux · darwin · windows · arm', 'zero runtime deps']
  }
}, {
  id: '03',
  kicker: 'context',
  headline: 'Reactive context. Stop polling.',
  pain: {
    label: 'Status quo',
    text: 'Context is a passive key-value store. To react to changes, flows poll every 500 ms — anti-patterns, race conditions, lost intermediate states.'
  },
  answer: {
    label: 'Loopze',
    text: 'Context lives on NATS JetStream KV. The Context Watch node subscribes to keys or patterns and fires a message the instant a value changes. No timers, no missed updates.',
    bullets: ['NATS KV watcher', 'global · flow scope', 'event-driven, not polled']
  }
}, {
  id: '04',
  kicker: 'industrial',
  headline: 'Industrial protocols, in the box.',
  pain: {
    label: 'Status quo',
    text: 'OPC-UA, Modbus, Sparkplug — usually community modules. Three-to-five forks per protocol, varying maturity, dependency chains that break on the next update.'
  },
  answer: {
    label: 'Loopze',
    text: 'MQTT, Modbus TCP/RTU, OPC-UA (Read · Subscribe · Write with structure-aware ExtensionObjects), Serial — all native, all maintained alongside the runtime, all using one shared config-node pattern.',
    bullets: ['shared connection pooling', 'unified credentials (AES-256-GCM)', 'one release cycle']
  }
}];
function WhyLoopze({
  tweak
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "lz-why",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-section-mono"
  }, "// why loopze"), /*#__PURE__*/React.createElement("h2", {
    className: "lz-h2"
  }, "Four deliberate decisions.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "Built ground-up."), " Not patched on."), /*#__PURE__*/React.createElement("p", {
    className: "lz-section-sub"
  }, "Loopze is a clean-room runtime informed by a decade of running flow-based systems in production. Same philosophy \u2014 visual flow programming. Different answers to the parts that hurt.")), /*#__PURE__*/React.createElement("div", {
    className: "lz-why-grid"
  }, WHY.map(w => /*#__PURE__*/React.createElement(WhyCard, {
    key: w.id,
    w: w
  }))), /*#__PURE__*/React.createElement(WhySpotlight, null), /*#__PURE__*/React.createElement(CompareTable, null));
}
function WhyCard({
  w
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "lz-why-card"
  }, /*#__PURE__*/React.createElement("header", {
    className: "lz-why-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-why-num lz-mono"
  }, w.id), /*#__PURE__*/React.createElement("span", {
    className: "lz-why-kicker lz-mono"
  }, w.kicker)), /*#__PURE__*/React.createElement("h3", {
    className: "lz-why-title"
  }, w.headline), /*#__PURE__*/React.createElement("div", {
    className: "lz-why-pain"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-why-tag lz-why-tag-pain"
  }, w.pain.label), /*#__PURE__*/React.createElement("p", null, w.pain.text)), /*#__PURE__*/React.createElement("div", {
    className: "lz-why-answer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-why-tag lz-why-tag-answer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-why-tag-dot"
  }), w.answer.label), /*#__PURE__*/React.createElement("p", null, w.answer.text), /*#__PURE__*/React.createElement("ul", {
    className: "lz-why-bullets"
  }, w.answer.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "\u2192"), " ", b)))));
}
function WhySpotlight() {
  return /*#__PURE__*/React.createElement("article", {
    className: "lz-spot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-spot-num lz-mono"
  }, "05"), /*#__PURE__*/React.createElement("span", {
    className: "lz-spot-kicker lz-mono"
  }, "reliability")), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-mid"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "lz-spot-title"
  }, "One repo. One release. ", /*#__PURE__*/React.createElement("span", {
    className: "lz-accent-text"
  }, "No broken nodes.")), /*#__PURE__*/React.createElement("p", {
    className: "lz-spot-body"
  }, "Every node \u2014 MQTT, Modbus, OPC-UA, Function, Context, Queue \u2014 lives in the same repository as the runtime. They ship together. They're tested together. Upgrade Loopze and every node moves with it. No abandoned community modules, no version skew, no hunt through three forks for the one that still compiles."), /*#__PURE__*/React.createElement("ul", {
    className: "lz-spot-bullets"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "\u2192"), " single source of truth \xB7 monorepo"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "\u2192"), " end-to-end integration tests across all nodes"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "\u2192"), " semver-versioned together \xB7 one changelog"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "lz-mono"
  }, "\u2192"), " deprecations announced, not discovered in production"))), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-num"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-lbl lz-mono"
  }, "repository")), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-num"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-lbl lz-mono"
  }, "release cycle")), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-num"
  }, "0"), /*#__PURE__*/React.createElement("div", {
    className: "lz-spot-stat-lbl lz-mono"
  }, "orphaned nodes"))));
}
function CompareTable() {
  const rows = [['runtime', 'single-threaded event loop', 'go, goroutine-per-node'], ['distribution', 'runtime + package manager + deps', 'one ~5 MB binary'], ['protocols', 'community packages', 'native MQTT · Modbus · OPC-UA'], ['context', 'passive key-value, polled', 'reactive NATS KV, watched'], ['queuing', 'external (Redis, RabbitMQ)', 'embedded NATS JetStream'], ['scripting', 'one language', 'JavaScript (Goja) + expr-lang'], ['credentials', 'plaintext or community module', 'AES-256-GCM, separate file'], ['profiling', '— (no per-node metrics)', 'per-node latency · msg/s · queue fill']];
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-cmp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-cmp-head lz-mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-tdim"
  }, "// at a glance"), /*#__PURE__*/React.createElement("span", {
    className: "lz-tdim"
  }, "elsewhere"), /*#__PURE__*/React.createElement("span", {
    className: "lz-cmp-head-us"
  }, "loopze")), rows.map(([k, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "lz-cmp-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-cmp-key lz-mono"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "lz-cmp-a"
  }, a), /*#__PURE__*/React.createElement("span", {
    className: "lz-cmp-b"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-cmp-tick"
  }, "\u2713"), " ", b))));
}
Object.assign(window, {
  WhyLoopze
});