// Top nav + footer + logo

function Logo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="1.5 2 20 20" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

function TopNav() {
  return (
    <nav className="lz-nav">
      <div className="lz-nav-left">
        <a className="lz-brand" href="#top">
          <span className="lz-brand-mark"><Logo /></span>
          <span className="lz-brand-name">LOOPZE</span>
          <span className="lz-brand-ver lz-mono" data-loopze-version>v0.4.1</span>
        </a>
        <span className="lz-nav-sep" />
        <ul className="lz-nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#protocols">Protocols</a></li>
          <li><a href="#why">Why</a></li>
          <li><a href="https://docs.loopze.dev/">Docs</a></li>
          <li><a href="https://github.com/loopzedev/loopze-edge/releases/latest" target="_blank" rel="noreferrer">Download</a></li>
        </ul>
      </div>
      <div className="lz-nav-right">
        <span className="lz-nav-status">
          <span className="lz-dot lz-dot-green" />
          <span className="lz-mono lz-tdim">all systems · build #2014 passed</span>
        </span>
        <a className="lz-nav-gh lz-mono" href="https://github.com/loopzedev/loopze-edge" target="_blank" rel="noreferrer">
          <span>github</span>
        </a>
        <a className="lz-btn lz-btn-primary lz-btn-sm" href="https://github.com/loopzedev/loopze-edge/releases/latest" target="_blank" rel="noreferrer">Download</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="lz-footer">
      <div className="lz-footer-row">
        <div className="lz-footer-brand">
          <span className="lz-brand-mark"><Logo /></span>
          <span className="lz-brand-name">LOOPZE</span>
        </div>
        <div className="lz-footer-tag lz-mono lz-tdim">
          // small, hard, reliable. like the stone that sparks the fire.
        </div>
      </div>
      <div className="lz-footer-grid">
        <FooterCol title="Product"
                   items={[
                     'Editor',
                     'Runtime',
                     'Nodes',
                     { label: 'Documentation', href: 'https://docs.loopze.dev/' },
                     { label: 'Node-RED alternative', href: '/node-red-alternative/' },
                     'Changelog',
                   ]} />
        <FooterCol title="Protocols"
                   items={['MQTT', 'Modbus', 'OPC-UA', 'Serial']} />
        <FooterCol title="Source"
                   items={['GitHub', 'Issues', 'Roadmap', 'License (AGPL)']} />
        <FooterCol title="Contact"
                   items={['hello@loopze.dev', 'commercial license', 'security disclosure']} />
      </div>
      <div className="lz-footer-foot lz-mono lz-tdim">
        <span>© 2026 Dennis Bleul · AGPL-3.0-or-later</span>
        <span>build 41a9fcd · go1.24.2 · linux/amd64</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="lz-footer-col">
      <div className="lz-footer-col-title lz-mono lz-tdim">{title.toLowerCase()}</div>
      <ul>
        {items.map((i) => {
          const obj = typeof i === 'string' ? { label: i, href: '#' } : i;
          const ext = obj.external ? { target: '_blank', rel: 'noreferrer' } : {};
          return <li key={obj.label}><a href={obj.href} {...ext}>{obj.label}</a></li>;
        })}
      </ul>
    </div>
  );
}

Object.assign(window, { TopNav, Footer, Logo });
