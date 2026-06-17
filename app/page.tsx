export default function Home() {
  return (
    <main>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #F0EDED', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px' }}>MF</span>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['Work', 'Services', 'Blog'].map(l => (
            <a key={l} href="#" style={{ fontSize: '14px', color: '#888', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        <a href="#kontakt" style={{ background: '#111', color: '#fff', padding: '8px 18px', borderRadius: '3px', fontSize: '13px', textDecoration: 'none' }}>Kontakt</a>
      </nav>

      {/* HERO – Rot */}
      <section style={{ background: 'var(--color-red)', padding: '88px 40px 76px' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '24px' }}>
          · Marketing · Content · Digital
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.9, color: '#fff', margin: 0 }}>MATTHIAS</h1>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 8vw, 104px)', lineHeight: 0.9, color: 'var(--color-yellow)', marginBottom: '32px' }}>FRIETHOFF</h1>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '36px' }}>
          Marketing aus einer Hand. Von der Idee über Design und Strategie zu deinem Ziel.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#work" style={{ background: '#fff', color: 'var(--color-red)', padding: '13px 26px', borderRadius: '3px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>Meine Arbeit ansehen</a>
          <a href="#kontakt" style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', padding: '12px 24px', borderRadius: '3px', fontSize: '14px', textDecoration: 'none' }}>Lass uns reden →</a>
        </div>
      </section>

      {/* Sky Trennlinie */}
      <div style={{ height: '5px', background: 'var(--color-sky)' }} />

      {/* LEISTUNGEN – Weiß */}
      <section style={{ padding: '72px 40px', background: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: '48px' }}>Was ich mache</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
          {[
            { t: 'Bewegtbild & Content', d: 'Video, Foto, Podcast, Studio. Ich habe YouTube-Kanäle mit aufgebaut und ganze Studios inklusive Workflows von Null aufgesetzt. Von der Planung bis zum fertigen Schnitt.' },
            { t: 'Marketing & Kampagnen', d: 'Kompletter Marketing-Mix aus einer Hand. Strategie, Kampagnen, Social, Print, Newsletter. Vom ersten Konzept bis zur Auswertung.' },
            { t: 'SEO & Digital', d: 'Google Ads, SEO, Shopware, Web. Zertifizierter Online Marketing Manager mit Technik-Verständnis. Landingpages, die laden und ranken.' },
          ].map((b, i) => (
            <div key={i}>
              <div style={{ width: '40px', height: '4px', background: 'var(--color-red)', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', marginBottom: '12px' }}>{b.t}</h3>
              <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.7, margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOKUS-BOX – Schwarz */}
      <section style={{ background: 'var(--color-ink)', padding: '72px 40px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', color: '#fff', marginBottom: '24px' }}>
          Mal Überblick, <span style={{ color: 'var(--color-yellow)' }}>mal Tiefe.</span>
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '640px', marginBottom: '32px' }}>
          Den gesamten Marketing-Mix im Blick behalten oder tief in ein einzelnes Thema eintauchen, beides hat seine Zeit. Geht man in die Tiefe, muss man bereit sein, das große Ganze nur noch aus dem Augenwinkel zu betrachten. Eine klare Rolle ist deshalb unvermeidlich. Bedarf und Aufgabe müssen geklärt sein: Braucht es eine umfassende Kampagne, oder geht es darum, im Rahmen einer großen Idee an den Feinheiten zu arbeiten?
        </p>
        <p style={{ fontSize: '20px', fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>
          Lass uns klären, was du gerade brauchst.
        </p>
        <a href="#kontakt" style={{ background: 'var(--color-yellow)', color: '#111', padding: '13px 26px', borderRadius: '3px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>Gespräch starten →</a>
      </section>

      {/* PROJEKTE – Weiß */}
      <section id="work" style={{ padding: '72px 40px', background: '#fff' }}>
        <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888', marginBottom: '32px' }}>Ausgewählte Projekte</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            { name: 'LEDAB GmbH', sub: 'Agrartech · Marketing', desc: 'Alleinverantwortliches Marketing für einen B2B-Spezialisten. Kampagnen, Influencer, Shopware, Print.', bg: '#FFF5F5', accent: 'var(--color-red)' },
            { name: 'Content Production', sub: 'YouTube · 80k+', desc: 'Kanalwachstum, Studioaufbau, Live-Produktion. Bewegtbild von der Planung bis zum Schnitt.', bg: '#F0FAFF', accent: 'var(--color-sky)' },
            { name: 'SEO & Ads', sub: 'B2B · Performance', desc: 'Suchmaschinenmarketing und Google Ads. Sichtbarkeit, die messbar ankommt.', bg: '#FFFBEE', accent: '#B89000' },
            { name: 'Produktfotografie', sub: 'Studio · E-Commerce', desc: 'Saubere Produktshots für Shop und Kampagne. Vom Setup bis zur fertigen Retusche.', bg: '#F4F4F4', accent: '#111' },
          ].map((c, i) => (
            <div key={i} style={{ border: '1px solid #F0EDED', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: c.bg, height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', color: c.accent }}>{c.name}</span>
              </div>
              <div style={{ padding: '16px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', margin: '0 0 2px' }}>{c.name}</p>
                <p style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>{c.sub}</p>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAKT-CTA – Rot */}
      <section id="kontakt" style={{ background: 'var(--color-red)', padding: '88px 40px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 72px)', color: '#fff', marginBottom: '20px' }}>Lass uns reden.</h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '500px', marginBottom: '32px' }}>
          Egal ob feste Stelle, Projekt oder freie Zusammenarbeit. Wenn du jemanden suchst, der Marketing kreativ und strategisch denkt, schreib mir.
        </p>
        <a href="mailto:matze.diedrichs@gmail.com" style={{ background: '#fff', color: 'var(--color-red)', padding: '14px 28px', borderRadius: '3px', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>Kontakt aufnehmen →</a>
      </section>

    </main>
  )
}