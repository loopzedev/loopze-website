// Why Loopze — four headline arguments. Pain (status quo) → Loopze answer.

const WHY = [
  {
    id: '01',
    kicker: 'concurrency',
    headline: 'Real parallelism. Not a single thread.',
    pain: {
      label: 'Status quo',
      text: 'Most flow runtimes sit on a single-threaded event loop. One slow Function node stalls every other node — every other flow, every other message.',
    },
    answer: {
      label: 'Loopze',
      text: 'One goroutine per node. The Go runtime spreads work across every CPU core. Thousands of nodes run truly in parallel — not cooperatively-sequentially.',
      bullets: ['goroutine-per-node', 'go runtime scheduler', 'no event-loop bottleneck'],
    },
  },
  {
    id: '02',
    kicker: 'distribution',
    headline: 'One binary. Zero dependencies.',
    pain: {
      label: 'Status quo',
      text: 'A scripting runtime, a package manager, and a directory full of dependencies. Multi-step installs, version conflicts, and orphaned community modules that rot in production.',
    },
    answer: {
      label: 'Loopze',
      text: 'A single Go executable. Frontend embedded, NATS embedded, credentials encrypted at rest. Drop the binary on an edge device and run it.',
      bullets: ['~5 MB stripped', 'linux · darwin · windows · arm', 'zero runtime deps'],
    },
  },
  {
    id: '03',
    kicker: 'context',
    headline: 'Reactive context. Stop polling.',
    pain: {
      label: 'Status quo',
      text: 'Context is a passive key-value store. To react to changes, flows poll every 500 ms — anti-patterns, race conditions, lost intermediate states.',
    },
    answer: {
      label: 'Loopze',
      text: 'Context lives on NATS JetStream KV. The Context Watch node subscribes to keys or patterns and fires a message the instant a value changes. No timers, no missed updates.',
      bullets: ['NATS KV watcher', 'global · flow scope', 'event-driven, not polled'],
    },
  },
  {
    id: '04',
    kicker: 'industrial',
    headline: 'Industrial protocols, in the box.',
    pain: {
      label: 'Status quo',
      text: 'OPC-UA, Modbus, Sparkplug — usually community modules. Three-to-five forks per protocol, varying maturity, dependency chains that break on the next update.',
    },
    answer: {
      label: 'Loopze',
      text: 'MQTT, Modbus TCP/RTU, OPC-UA (Read · Subscribe · Write with structure-aware ExtensionObjects), Serial — all native, all maintained alongside the runtime, all using one shared config-node pattern.',
      bullets: ['shared connection pooling', 'unified credentials (AES-256-GCM)', 'one release cycle'],
    },
  },
];

function WhyLoopze({ tweak }) {
  return (
    <section className="lz-why" id="why">
      <div className="lz-section-head">
        <div className="lz-section-mono">// why loopze</div>
        <h2 className="lz-h2">
          Four deliberate decisions.<br />
          <span className="lz-accent-text">Built ground-up.</span> Not patched on.
        </h2>
        <p className="lz-section-sub">
          Loopze is a clean-room runtime informed by a decade of running
          flow-based systems in production. Same philosophy — visual flow
          programming. Different answers to the parts that hurt.
        </p>
      </div>

      <div className="lz-why-grid">
        {WHY.map((w) => <WhyCard key={w.id} w={w} />)}
      </div>

      <WhySpotlight />

      <CompareTable />
    </section>
  );
}

function WhyCard({ w }) {
  return (
    <article className="lz-why-card">
      <header className="lz-why-head">
        <span className="lz-why-num lz-mono">{w.id}</span>
        <span className="lz-why-kicker lz-mono">{w.kicker}</span>
      </header>
      <h3 className="lz-why-title">{w.headline}</h3>

      <div className="lz-why-pain">
        <span className="lz-why-tag lz-why-tag-pain">{w.pain.label}</span>
        <p>{w.pain.text}</p>
      </div>

      <div className="lz-why-answer">
        <span className="lz-why-tag lz-why-tag-answer">
          <span className="lz-why-tag-dot" />
          {w.answer.label}
        </span>
        <p>{w.answer.text}</p>
        <ul className="lz-why-bullets">
          {w.answer.bullets.map((b) => (
            <li key={b}><span className="lz-mono">→</span> {b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function WhySpotlight() {
  return (
    <article className="lz-spot">
      <div className="lz-spot-left">
        <span className="lz-spot-num lz-mono">05</span>
        <span className="lz-spot-kicker lz-mono">reliability</span>
      </div>
      <div className="lz-spot-mid">
        <h3 className="lz-spot-title">
          One repo. One release. <span className="lz-accent-text">No broken nodes.</span>
        </h3>
        <p className="lz-spot-body">
          Every node — MQTT, Modbus, OPC-UA, Function, Context, Queue — lives
          in the same repository as the runtime. They ship together. They're
          tested together. Upgrade Loopze and every node moves with it.
          No abandoned community modules, no version skew, no hunt through
          three forks for the one that still compiles.
        </p>
        <ul className="lz-spot-bullets">
          <li><span className="lz-mono">→</span> single source of truth · monorepo</li>
          <li><span className="lz-mono">→</span> end-to-end integration tests across all nodes</li>
          <li><span className="lz-mono">→</span> semver-versioned together · one changelog</li>
          <li><span className="lz-mono">→</span> deprecations announced, not discovered in production</li>
        </ul>
      </div>
      <div className="lz-spot-right">
        <div className="lz-spot-stat">
          <div className="lz-spot-stat-num">1</div>
          <div className="lz-spot-stat-lbl lz-mono">repository</div>
        </div>
        <div className="lz-spot-stat">
          <div className="lz-spot-stat-num">1</div>
          <div className="lz-spot-stat-lbl lz-mono">release cycle</div>
        </div>
        <div className="lz-spot-stat">
          <div className="lz-spot-stat-num">0</div>
          <div className="lz-spot-stat-lbl lz-mono">orphaned nodes</div>
        </div>
      </div>
    </article>
  );
}

function CompareTable() {
  const rows = [
    ['runtime',         'single-threaded event loop',        'go, goroutine-per-node'],
    ['distribution',    'runtime + package manager + deps',  'one ~5 MB binary'],
    ['protocols',       'community packages',                'native MQTT · Modbus · OPC-UA'],
    ['context',         'passive key-value, polled',         'reactive NATS KV, watched'],
    ['queuing',         'external (Redis, RabbitMQ)',        'embedded NATS JetStream'],
    ['scripting',       'one language',                      'JavaScript (Goja) + expr-lang'],
    ['credentials',     'plaintext or community module',     'AES-256-GCM, separate file'],
    ['profiling',       '— (no per-node metrics)',            'per-node latency · msg/s · queue fill'],
  ];
  return (
    <div className="lz-cmp">
      <div className="lz-cmp-head lz-mono">
        <span className="lz-tdim">// at a glance</span>
        <span className="lz-tdim">elsewhere</span>
        <span className="lz-cmp-head-us">loopze</span>
      </div>
      {rows.map(([k, a, b]) => (
        <div key={k} className="lz-cmp-row">
          <span className="lz-cmp-key lz-mono">{k}</span>
          <span className="lz-cmp-a">{a}</span>
          <span className="lz-cmp-b"><span className="lz-cmp-tick">✓</span> {b}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { WhyLoopze });
