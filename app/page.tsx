export default function Home() {
  return (
    <main>

      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #F0EDED', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px' }}>MF</span>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['Work', 'Services', 'Blog'].map(l => (
            <a key={l} href="#" style={{ fontSize: '14px', color: '#888', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <a href="#" style={{ background: '#111', color: '#fff', padding: '8px 18px', borderRadius: '3px', fontSize: '13px', textDecoration: 'none' }}>Kontakt</a>
      </nav>

      {/* Hero – Rot */}
      <section style={{ background: 'var(--color-red)', padding: '80px 40px 72px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>
          · Marketing · Content · Digital
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 0.9, color: '#fff', marginBottom: 0 }}>
          MATTHIAS
        </h1>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 96px)', lineHeight: 0.9, color: 'var(--color-yellow)', marginBottom: '32px' }}>
          FRIETHOFF
        </h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: '480px', marginBottom: '36px' }}>
          15 Jahre Erfahrung in Content, Kampagnen und digitalem Marketing. Kreativität trifft Strategie.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#" style={{ background: '#fff', color: 'var(--color-red)', padding: '13px 26px', borderRadius: '3px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
            Meine Arbeit ansehen
          </a>
          <a href="#" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '12px 24px', borderRadius: '3px', fontSize: '14px', textDecoration: 'none' }}>
            Kontakt aufnehmen →
          </a>
        </div>
      </section>

      {/* Sky Trennlinie */}
      <div style={{ height: '5px', background: 'var(--color-sky)' }} />

      {/* Stats – Schwarz */}
      <section style={{ background: 'var(--color-ink)', display: 'flex' }}>
        {[
          { num: '15+', label: 'Jahre Erfahrung', color: '#fff' },
          { num: '50+', label: 'Projekte',         color: '#fff' },
          { num: 'B2B', label: 'Schwerpunkt',       color: 'var(--color-sky)' },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: '24px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '28px', color: s.color, margin: '0 0 4px' }}>{s.num}</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Work – Weiß */}
      <section style={{ padding: '64px 40px', background: '#fff' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888', marginBottom: '32px' }}>
          Ausgewählte Projekte
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {[
            { name: 'LEDAB',  sub: 'Agrartech · Marketing · 2026', bg: '#FFF5F5', accent: 'var(--color-red)' },
            { name: 'VIDEO',  sub: 'YouTube · 80k Subscribers',     bg: '#F0FAFF', accent: 'var(--color-sky)' },
            { name: 'SEO',    sub: 'Google Ads · B2B · Kampagnen',  bg: '#FFFBEE', accent: '#B89000' },
          ].map((c, i) => (
            <div key={i} style={{ border: '1px solid #F0EDED', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: c.bg, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', color: c.accent }}>{c.name}</span>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', margin: '0 0 4px' }}>{c.name}</p>
                <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}