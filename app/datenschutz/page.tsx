import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung – Matthias Friethoff",
  description: "Informationen zum Datenschutz nach DSGVO.",
};

const h = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", margin: "32px 0 8px" } as const;
const p = { fontSize: "15px", color: "#333", lineHeight: 1.7, margin: "0 0 12px" } as const;

export default function DatenschutzPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh" }}>
      <header style={{ borderBottom: "1px solid #F0EDED", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "#111", textDecoration: "none" }}>MF</Link>
        <Link href="/" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>← Zur Startseite</Link>
      </header>

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px 96px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 6vw, 56px)", margin: 0 }}>Datenschutz</h1>
        <div style={{ width: "48px", height: "4px", background: "var(--color-red)", margin: "16px 0 32px" }} />

        <h2 style={h}>1. Verantwortlicher</h2>
        <p style={p}>
          Matthias Friethoff, Siegfriedstraße 20, 33615 Bielefeld<br />
          E-Mail: matze.diedrichs@gmail.com
        </p>

        <h2 style={h}>2. Allgemeines</h2>
        <p style={p}>
          Der Schutz deiner personenbezogenen Daten ist mir wichtig. Ich verarbeite Daten nur im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG). Nachfolgend informiere ich dich über Art, Umfang und Zweck der Verarbeitung.
        </p>

        <h2 style={h}>3. Hosting</h2>
        <p style={p}>
          Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der Seite werden technisch notwendige Daten verarbeitet, um die Auslieferung der Website zu ermöglichen. Vercel kann Daten auch in den USA verarbeiten. Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln und eines Auftragsverarbeitungsvertrags. Rechtsgrundlage ist mein berechtigtes Interesse an einem sicheren und effizienten Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 style={h}>4. Server-Logfiles</h2>
        <p style={p}>
          Beim Besuch der Website werden automatisch Informationen erfasst, die dein Browser übermittelt, etwa Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeitpunkt und die gekürzte IP-Adresse. Diese Daten dienen der technischen Bereitstellung und Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 style={h}>5. Web-Analyse</h2>
        <p style={p}>
          Zur Reichweitenmessung nutze ich Vercel Web Analytics. Dieser Dienst arbeitet ohne Cookies und ohne die Speicherung personenbezogener Daten. Es findet kein seitenübergreifendes Tracking und keine Wiedererkennung einzelner Personen statt. Aus diesem Grund ist keine Einwilligung erforderlich. Rechtsgrundlage ist mein berechtigtes Interesse an der statistischen Auswertung des Website-Traffics (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2 style={h}>6. Kontaktaufnahme</h2>
        <p style={p}>
          Wenn du mir per E-Mail schreibst, verarbeite ich deine Angaben zur Bearbeitung deiner Anfrage. Diese Daten gebe ich nicht ohne deine Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO.
        </p>

        <h2 style={h}>7. Deine Rechte</h2>
        <p style={p}>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).
        </p>

        <h2 style={h}>8. SSL/TLS-Verschlüsselung</h2>
        <p style={p}>
          Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du am Schloss-Symbol in der Adresszeile deines Browsers.
        </p>
      </article>
    </main>
  );
}