// AUTO-GENERATED from the matching .jsx file — do not edit by hand.
// Run `npm run build` after editing the .jsx source.
;(function () {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Top nav + footer + logo

function Logo({
  size = 22
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "1.5 2 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L3 14h8l-1 8 10-12h-8l1-8z"
  }));
}
function TopNav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "lz-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-nav-left"
  }, /*#__PURE__*/React.createElement("a", {
    className: "lz-brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-brand-mark"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("span", {
    className: "lz-brand-name"
  }, "LOOPZE"), /*#__PURE__*/React.createElement("span", {
    className: "lz-brand-ver lz-mono",
    "data-loopze-version": true
  }, "v0.4.1")), /*#__PURE__*/React.createElement("span", {
    className: "lz-nav-sep"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "lz-nav-links"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#protocols"
  }, "Protocols")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://docs.loopze.dev/"
  }, "Docs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/loopzedev/loopze-edge/releases/latest",
    target: "_blank",
    rel: "noreferrer"
  }, "Download")))), /*#__PURE__*/React.createElement("div", {
    className: "lz-nav-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-nav-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-dot lz-dot-green"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lz-mono lz-tdim"
  }, "all systems \xB7 build #2014 passed")), /*#__PURE__*/React.createElement("a", {
    className: "lz-nav-gh lz-mono",
    href: "https://github.com/loopzedev/loopze-edge",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", null, "github")), /*#__PURE__*/React.createElement("a", {
    className: "lz-btn lz-btn-primary lz-btn-sm",
    href: "https://github.com/loopzedev/loopze-edge/releases/latest",
    target: "_blank",
    rel: "noreferrer"
  }, "Download")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "lz-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lz-brand-mark"
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement("span", {
    className: "lz-brand-name"
  }, "LOOPZE")), /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-tag lz-mono lz-tdim"
  }, "// small, hard, reliable. like the stone that sparks the fire.")), /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-grid"
  }, /*#__PURE__*/React.createElement(FooterCol, {
    title: "Product",
    items: ['Editor', 'Runtime', 'Nodes', {
      label: 'Documentation',
      href: 'https://docs.loopze.dev/'
    }, {
      label: 'Node-RED alternative',
      href: '/node-red-alternative/'
    }, 'Changelog']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Protocols",
    items: ['MQTT', 'Modbus', 'OPC-UA', 'Serial']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Source",
    items: ['GitHub', 'Issues', 'Roadmap', 'License (AGPL)']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Contact",
    items: ['hello@loopze.dev', 'commercial license', 'security disclosure']
  })), /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-foot lz-mono lz-tdim"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Dennis Bleul \xB7 AGPL-3.0-or-later"), /*#__PURE__*/React.createElement("span", null, "build 41a9fcd \xB7 go1.24.2 \xB7 linux/amd64")));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-footer-col-title lz-mono lz-tdim"
  }, title.toLowerCase()), /*#__PURE__*/React.createElement("ul", null, items.map(i => {
    const obj = typeof i === 'string' ? {
      label: i,
      href: '#'
    } : i;
    const ext = obj.external ? {
      target: '_blank',
      rel: 'noreferrer'
    } : {};
    return /*#__PURE__*/React.createElement("li", {
      key: obj.label
    }, /*#__PURE__*/React.createElement("a", _extends({
      href: obj.href
    }, ext), obj.label));
  })));
}
Object.assign(window, {
  TopNav,
  Footer,
  Logo
});
})();
