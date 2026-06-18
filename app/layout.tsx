import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import NoirToggle from "./NoirToggle";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://friethoff.marketing"),
  title: {
    default: "Matthias Friethoff – Marketing, Content & Digital",
    template: "%s | Matthias Friethoff",
  },
  description:
    "Marketing aus einer Hand. Von der Idee über Design und Strategie zu deinem Ziel. 15 Jahre Erfahrung in Content, Kampagnen und digitalem Marketing.",
  keywords: ["Marketing", "Content", "Video", "SEO", "Google Ads", "Freelancer", "Bielefeld"],
  authors: [{ name: "Matthias Friethoff" }],
  openGraph: {
    title: "Matthias Friethoff – Marketing, Content & Digital",
    description: "Marketing aus einer Hand. Von der Idee über Design und Strategie zu deinem Ziel.",
    url: "https://friethoff.marketing",
    siteName: "Matthias Friethoff",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthias Friethoff – Marketing, Content & Digital",
    description: "Marketing aus einer Hand. Von der Idee über Design und Strategie zu deinem Ziel.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <NoirToggle />

        {children}

        {/* FOOTER */}
        <footer style={{ background: "#111", color: "#fff", padding: "48px clamp(20px, 5vw, 40px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "22px" }}>MF</span>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Start</Link>
              <Link href="/work" style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Work</Link>
              <Link href="/impressum" style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Impressum</Link>
              <Link href="/datenschutz" style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Datenschutz</Link>
            </div>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "24px" }}>
            © {new Date().getFullYear()} Matthias Friethoff. Alle Rechte vorbehalten.
          </p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}