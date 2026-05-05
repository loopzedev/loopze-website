// AUTO-GENERATED from the matching .jsx file — do not edit by hand.
// Run `npm run build` after editing the .jsx source.
;(function () {
// App entry — composes nav + hero + features + footer with tweak state
const {
  useEffect,
  useState,
  useRef
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "blue",
  "heroLayout": "split",
  "typo": "inter"
} /*EDITMODE-END*/;
function App() {
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply theme + typo as data-attrs on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweak.theme);
    document.documentElement.setAttribute('data-typo', tweak.typo);
  }, [tweak.theme, tweak.typo]);

  // simple scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.lz-reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('lz-in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [tweak.heroLayout]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lz-app",
    id: "top"
  }, /*#__PURE__*/React.createElement(TopNav, null), /*#__PURE__*/React.createElement("div", {
    className: "lz-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lz-reveal"
  }, /*#__PURE__*/React.createElement(Hero, {
    tweak: tweak
  })), /*#__PURE__*/React.createElement("div", {
    className: "lz-reveal"
  }, /*#__PURE__*/React.createElement(WhyLoopze, {
    tweak: tweak
  })), /*#__PURE__*/React.createElement("div", {
    className: "lz-reveal"
  }, /*#__PURE__*/React.createElement(Features, {
    tweak: tweak
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lz-shell"
  }, /*#__PURE__*/React.createElement(Footer, null)), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Accent",
    value: tweak.theme,
    onChange: v => setTweak('theme', v),
    options: [{
      value: 'blue',
      label: 'Blue'
    }, {
      value: 'amber',
      label: 'Amber'
    }, {
      value: 'green',
      label: 'Green'
    }, {
      value: 'violet',
      label: 'Violet'
    }]
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Layout",
    value: tweak.heroLayout,
    onChange: v => setTweak('heroLayout', v),
    options: [{
      value: 'split',
      label: 'Split'
    }, {
      value: 'centered',
      label: 'Center'
    }, {
      value: 'terminal',
      label: 'Term'
    }]
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Typography"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Type pair",
    value: tweak.typo,
    onChange: v => setTweak('typo', v),
    options: [{
      value: 'inter',
      label: 'Inter + Plex Mono'
    }, {
      value: 'space',
      label: 'Space Mono'
    }, {
      value: 'serif',
      label: 'Inter + Fraunces'
    }, {
      value: 'sans',
      label: 'Inter only'
    }]
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
