import Link from "next/link";

export const metadata = {
  title: "Impressum – Matthias Friethoff",
  description: "Anbieterkennzeichnung nach § 5 DDG.",
};

const h = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", margin: "32px 0 8px" } as const;
const p = { fontSize: "15px", color: "#333", lineHeight: 1.7, margin: 0 } as const;

export default function ImpressumPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <header style={{ borderBottom: "1px solid #F0EDED", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "#111", textDecoration: "none" }}>MF</Link>
        <Link href="/" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>← Zur Startseite</Link>
      </header>

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px 96px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 6vw, 56px)", margin: 0 }}>Impressum</h1>
        <div style={{ width: "48px", height: "4px", background: "var(--color-red)", margin: "16px 0 32px" }} />

        <h2 style={h}>Angaben gemäß § 5 DDG</h2>
        <p style={p}>
          Matthias Friethoff<br />
          Siegfriedstraße 20<br />
          33615 Bielefeld<br />
          Deutschland
        </p>

        <h2 style={h}>Kontakt</h2>
        <p style={p}>
          Telefon: 0176 22115497<br />
          E-Mail: matze.diedrichs@gmail.com
        </p>

        <h2 style={h}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p style={p}>
          Matthias Friethoff, Anschrift wie oben
        </p>

        <h2 style={h}>Haftung für Inhalte</h2>
        <p style={p}>
          Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2 style={h}>Haftung für Links</h2>
        <p style={p}>
          Mein Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>

        <h2 style={h}>Urheberrecht</h2>
        <p style={p}>
          Die auf diesen Seiten erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
        </p>
      </article>
    </main>
  );
}