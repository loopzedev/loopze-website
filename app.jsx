// App entry — composes nav + hero + features + footer with tweak state
const { useEffect, useState, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "blue",
  "heroLayout": "split",
  "typo": "inter"
}/*EDITMODE-END*/;

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
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('lz-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [tweak.heroLayout]);

  return (
    <div className="lz-app" id="top">
      <TopNav />
      <div className="lz-shell">
        <div className="lz-reveal"><Hero tweak={tweak} /></div>
        <div className="lz-reveal"><WhyLoopze tweak={tweak} /></div>
        <div className="lz-reveal"><Features tweak={tweak} /></div>
      </div>
      <div className="lz-shell"><Footer /></div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Accent"
          value={tweak.theme}
          onChange={(v) => setTweak('theme', v)}
          options={[
            { value: 'blue',   label: 'Blue' },
            { value: 'amber',  label: 'Amber' },
            { value: 'green',  label: 'Green' },
            { value: 'violet', label: 'Violet' },
          ]}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={tweak.heroLayout}
          onChange={(v) => setTweak('heroLayout', v)}
          options={[
            { value: 'split',    label: 'Split' },
            { value: 'centered', label: 'Center' },
            { value: 'terminal', label: 'Term' },
          ]}
        />
        <TweakSection label="Typography" />
        <TweakSelect
          label="Type pair"
          value={tweak.typo}
          onChange={(v) => setTweak('typo', v)}
          options={[
            { value: 'inter', label: 'Inter + Plex Mono' },
            { value: 'space', label: 'Space Mono' },
            { value: 'serif', label: 'Inter + Fraunces' },
            { value: 'sans',  label: 'Inter only' },
          ]}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
