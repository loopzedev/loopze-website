// Hero — three layouts driven by tweak.heroLayout
const { useState, useEffect, useRef } = React;

function Hero({ tweak }) {
  const layout = tweak.heroLayout;

  if (layout === 'centered') return <HeroCentered tweak={tweak} />;
  if (layout === 'terminal') return <HeroTerminal tweak={tweak} />;
  return <HeroSplit tweak={tweak} />;
}

// ───────────────────────────────────────────────────────────────
// Shared bits
// ───────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <div className="lz-eyebrow">
      <span className="lz-eyebrow-dot" />
      <span>{children}</span>
    </div>
  );
}

function CTAs() {
  return (
    <div className="lz-ctas">
      <a className="lz-btn lz-btn-primary" href="https://github.com/loopzedev/loopze-edge/releases/latest">
        <span>Download binary</span>
        <span className="lz-btn-arrow">→</span>
      </a>
      <a className="lz-btn lz-btn-ghost" href="#install">
        <span className="lz-mono">$</span>
        <span>curl -L loopze.dev/install | sh</span>
        <CopyTick />
      </a>
    </div>
  );
}

function CopyTick() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="lz-copy"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard?.writeText('curl -L loopze.dev/install | sh');
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      aria-label="copy"
    >
      {copied ? '✓' : '⧉'}
    </button>
  );
}

function MetaStrip() {
  return (
    <div className="lz-meta">
      <div className="lz-meta-item">
        <span className="lz-meta-key">build</span>
        <span className="lz-meta-val"><span data-loopze-version>v0.4.1</span> · <span data-loopze-size>5.2</span> MB</span>
      </div>
      <div className="lz-meta-item">
        <span className="lz-meta-key">platforms</span>
        <span className="lz-meta-val">linux · darwin · windows · arm</span>
      </div>
      <div className="lz-meta-item">
        <span className="lz-meta-key">runtime</span>
        <span className="lz-meta-val">go 1.24 · single binary</span>
      </div>
      <div className="lz-meta-item">
        <span className="lz-meta-key">license</span>
        <span className="lz-meta-val">AGPL-3.0</span>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Layout A — Split (default)
// ───────────────────────────────────────────────────────────────

function HeroSplit({ tweak }) {
  return (
    <section className="lz-hero lz-hero-split">
      <div className="lz-hero-left">
        <Eyebrow>industrial flow automation · <span data-loopze-version>v0.4.1</span></Eyebrow>
        <h1 className="lz-h1">
          Visual flow programming,<br />
          rebuilt for <span className="lz-accent-text">the industrial edge</span>.
        </h1>
        <p className="lz-sub">
          One Go binary. Goroutine-per-node parallelism. Native MQTT, Modbus
          and OPC-UA. Write transforms in Go, JavaScript or expr-lang —
          drag-and-drop signal flows, without the <span className="lz-mono lz-tdim">node_modules</span>.
        </p>
        <CTAs />
        <MetaStrip />
      </div>
      <div className="lz-hero-right">
        <FlowMock />
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Layout B — Centered
// ───────────────────────────────────────────────────────────────

function HeroCentered({ tweak }) {
  return (
    <section className="lz-hero lz-hero-centered">
      <Eyebrow>industrial flow automation · <span data-loopze-version>v0.4.1</span></Eyebrow>
      <h1 className="lz-h1 lz-h1-center">
        Visual flows compiled to<br />
        <span className="lz-accent-text">a single 5 MB binary</span>.
      </h1>
      <p className="lz-sub lz-sub-center">
        Drag-and-drop signal flows for engineers who think in MQTT topics,
        Modbus registers and OPC-UA nodes. Built in Go for true parallelism,
        native industrial protocols and zero install ceremony.
      </p>
      <CTAs />
      <div className="lz-hero-mock-wide">
        <FlowMock />
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Layout C — Terminal-first
// ───────────────────────────────────────────────────────────────

function HeroTerminal({ tweak }) {
  return (
    <section className="lz-hero lz-hero-terminal">
      <div className="lz-hero-term-left">
        <Eyebrow>industrial flow automation · <span data-loopze-version>v0.4.1</span></Eyebrow>
        <h1 className="lz-h1">
          Small. Hard.<br />
          <span className="lz-accent-text">Reliable.</span>
        </h1>
        <p className="lz-sub">
          A flow runtime for the industrial edge. One Go binary, three
          industrial protocols, embedded NATS, zero install ceremony — like
          the stone that sparks the fire.
        </p>
        <CTAs />
      </div>
      <div className="lz-hero-term-right">
        <TerminalCard />
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Flow mock — fake editor with animated dataflow
// ───────────────────────────────────────────────────────────────

function FlowMock() {
  // Animated pulse along the wires
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="lz-flow">
      <div className="lz-flow-chrome">
        <div className="lz-flow-tabs">
          <span className="lz-flow-tab lz-flow-tab-active">flows / temp-watch.json</span>
          <span className="lz-flow-tab">credentials</span>
          <span className="lz-flow-tab">debug</span>
        </div>
        <div className="lz-flow-status">
          <span className="lz-dot lz-dot-green" />
          <span className="lz-mono lz-tdim">deployed · 14 nodes · 312 msg/s</span>
        </div>
      </div>
      <div className="lz-flow-canvas">
        <FlowGrid />
        <FlowWires tick={tick} />
        <FlowNode style={{ left: 24, top: 36 }}
                  type="MQTT Subscribe" label="sensors/temp/+"
                  status={{ kind: 'green', text: 'connected' }} icon="↘" />
        <FlowNode style={{ left: 280, top: 24 }}
                  type="Go Transform" label="normalize()"
                  status={{ kind: 'blue', text: '0.4 ms' }} icon="ƒ" />
        <FlowNode style={{ left: 280, top: 132 }}
                  type="Context Watch" label="cache.users"
                  status={{ kind: 'yellow', text: 'watching' }} icon="◎" />
        <FlowNode style={{ left: 540, top: 36 }}
                  type="OPC-UA Write" label="ns=2;s=Setpoint"
                  status={{ kind: 'green', text: '12 msgs' }} icon="↗" toggle />
        <FlowNode style={{ left: 540, top: 144 }}
                  type="Debug" label="msg.payload"
                  status={{ kind: 'red', text: 'error: null' }} icon="•" />
      </div>
    </div>
  );
}

function FlowGrid() {
  return (
    <svg className="lz-flow-grid" aria-hidden="true">
      <defs>
        <pattern id="lz-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lz-dots)" />
    </svg>
  );
}

function FlowWires({ tick }) {
  // 4 cubic bezier paths between nodes
  const wires = [
    { d: 'M 220 76 C 250 76, 250 64, 280 64' },
    { d: 'M 220 76 C 250 76, 250 172, 280 172' },
    { d: 'M 480 64 C 510 64, 510 76, 540 76' },
    { d: 'M 480 64 C 510 64, 510 184, 540 184' },
    { d: 'M 480 172 C 510 172, 510 184, 540 184' },
  ];
  return (
    <svg className="lz-flow-wires" aria-hidden="true">
      {wires.map((w, i) => (
        <g key={i}>
          <path d={w.d} className="lz-wire" />
          <circle r="3" className="lz-pulse">
            <animateMotion key={tick + '-' + i}
                           dur="1.4s" begin={`${i * 0.15}s`}
                           path={w.d} fill="freeze" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function FlowNode({ style, type, label, status, icon, toggle }) {
  return (
    <div className="lz-node" style={style}>
      <div className="lz-node-port lz-node-port-in" />
      <div className="lz-node-port lz-node-port-out" />
      <div className="lz-node-accent" />
      <div className="lz-node-row">
        <span className="lz-node-icon">{icon}</span>
        <span className="lz-node-type">{type}</span>
      </div>
      <div className="lz-node-label">{label}</div>
      <div className="lz-node-foot">
        <StatusPill kind={status.kind} text={status.text} />
        {toggle && <span className="lz-node-toggle">ON</span>}
      </div>
    </div>
  );
}

function StatusPill({ kind, text }) {
  return (
    <span className={`lz-pill lz-pill-${kind}`}>
      <span className="lz-pill-dot" />
      <span>{text}</span>
    </span>
  );
}

// ───────────────────────────────────────────────────────────────
// Terminal card (Layout C)
// ───────────────────────────────────────────────────────────────

function TerminalCard() {
  const lines = [
    { p: '$', t: 'loopze --port 1880 --data-dir ./data', cls: 'lz-t-cmd' },
    { p: '·', t: '[18:42:01] starting loopze __LOOPZE_VERSION__ (linux/arm64)', cls: 'lz-t-info' },
    { p: '·', t: '[18:42:01] embedded NATS broker → :4222', cls: 'lz-t-info' },
    { p: '·', t: '[18:42:01] flow runtime ready · 14 nodes', cls: 'lz-t-info' },
    { p: '✓', t: '[18:42:01] http server → http://0.0.0.0:1880', cls: 'lz-t-ok' },
    { p: '↘', t: '[18:42:03] mqtt:sensors/temp/+   {"id":"r-04","c":21.4}', cls: 'lz-t-msg' },
    { p: 'ƒ', t: '[18:42:03] fn:normalize          12 msg/s', cls: 'lz-t-msg' },
    { p: '↗', t: '[18:42:03] opcua:Setpoint        ns=2;s=Setpoint ← 21.4', cls: 'lz-t-msg' },
    { p: '✓', t: '[18:42:03] flow temp-watch deployed (312ms)', cls: 'lz-t-ok' },
    { p: '$', t: '_', cls: 'lz-t-cursor' },
  ];

  // typing-style reveal
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= lines.length) return;
    const id = setTimeout(() => setN((x) => x + 1), n === 0 ? 200 : 220);
    return () => clearTimeout(id);
  }, [n]);

  return (
    <div className="lz-term">
      <div className="lz-term-chrome">
        <span className="lz-term-tl" /><span className="lz-term-tl" /><span className="lz-term-tl" />
        <span className="lz-term-title">loopze@edge ─ /opt/loopze</span>
      </div>
      <div className="lz-term-body">
        {lines.slice(0, n).map((l, i) => (
          <div key={i} className={`lz-t-line ${l.cls}`}>
            <span className="lz-t-prefix">{l.p}</span>
            <span>{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Hero });
