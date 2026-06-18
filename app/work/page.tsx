"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Base = {
  id: string;
  title: string;
  year: number;
  tags: string[];
  client: string;
  team: string;
  role: string;
  task: string;
};
type VideoItem = Base & { type: "video"; youtubeId: string; gallery?: string[] };
type PhotoItem = Base & { type: "photo"; images: string[] };
type ProjectItem = Base & { type: "project"; keyStatement: string; metric?: string; color?: "red" | "yellow" | "blue"; images?: string[] };
type Item = VideoItem | PhotoItem | ProjectItem;

// ===================== HIER DEINE INHALTE EINTRAGEN =====================
const ITEMS: Item[] = [
  {
    type: "video", id: "doorbird-imagefilm", youtubeId: "xPlbu0OogBA",
    title: "Das ist Doorbird", year: 2024, tags: ["Corporate", "Stockmaterial", "Imagefilm"],
    client: "Doorbird", team: "In Zusammenarbeit mit dem Marketing-Team von Doorbird", role: "Animation, Schnitt, Kameraarbeit",
    task: "Aus Stockmaterial einen Imagefilm erstellen, der das Unternehmen Doorbird und sein Schlüsselprodukt vorstellt.",
  },
  {
    type: "video", id: "doorbird-sip-fritzbox", youtubeId: "32ufvvYuUk4",
    title: "SIP-Integration mit einer FRITZ!Box am Beispiel des FRITZ!Fon C5", year: 2021, tags: ["Corporate", "Erklärfilm", "Tutorial", "Talking Head"],
    client: "Doorbird", team: "Solo", role: "Animation, Schnitt, Kameraarbeit, vor der Kamera",
    task: "Schritt für Schritt durch ein komplexes technisches Thema führen und so das Support-Team spürbar entlasten.",
  },
];
// =======================================================================

const PAGE_PAD = "32px";

const TYPE_LABEL: Record<Item["type"], string> = { video: "Video", photo: "Foto", project: "Projekt" };
const TYPE_FILTERS: Item["type"][] = ["video", "photo", "project"];
const THEME_TAGS = Array.from(new Set(ITEMS.flatMap((i) => i.tags))).sort();

const PROJECT_COLORS = {
  red:    { bg: "var(--color-red)",    text: "#fff", metric: "var(--color-yellow)" },
  yellow: { bg: "var(--color-yellow)", text: "#111", metric: "var(--color-red)" },
  blue:   { bg: "var(--color-sky)",    text: "#fff", metric: "var(--color-yellow)" },
};

function searchBlob(i: Item): string {
  const parts = [i.title, i.client, i.team, i.role, i.task, i.year.toString(), ...i.tags, TYPE_LABEL[i.type]];
  if (i.type === "project") parts.push(i.keyStatement, i.metric ?? "");
  return parts.join(" ").toLowerCase();
}

export default function WorkPage() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<Item["type"] | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showTags, setShowTags] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState<Item | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!hovered) return;
    const item = ITEMS.find((i) => i.id === hovered);
    if (!item || item.type !== "photo" || item.images.length < 2) return;
    setSlide(0);
    const t = setInterval(() => setSlide((s) => (s + 1) % item.images.length), 850);
    return () => clearInterval(t);
  }, [hovered]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ITEMS.filter((i) => {
      if (activeType && i.type !== activeType) return false;
      if (activeTag && !i.tags.includes(activeTag)) return false;
      if (q && !searchBlob(i).includes(q)) return false;
      return true;
    });
  }, [query, activeType, activeTag]);

  const openItem = (item: Item) => { setGalleryIndex(0); setOpen(item); };
  const resetAll = () => { setQuery(""); setActiveType(null); setActiveTag(null); };
  const filtersActive = Boolean(query || activeType || activeTag);

  return (
    <main style={{ background: "var(--color-red)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "var(--color-red)", padding: `16px ${PAGE_PAD}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50 }}>
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "#fff", textDecoration: "none" }}>MF</Link>
        <Link href="/" style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>← Zur Startseite</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: `48px ${PAGE_PAD} 24px` }}>
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-yellow)", marginBottom: "12px" }}>Ausgewählte Arbeiten</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 7vw, 84px)", lineHeight: 0.95, margin: 0, color: "#fff" }}>PORTFOLIO</h1>
      </section>

      {/* STEUERLEISTE */}
      <section style={{ padding: `0 ${PAGE_PAD} 20px` }}>
        <div style={{ background: "var(--color-sky)", borderRadius: "6px", padding: "12px", display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ position: "relative", flex: "1 1 240px", minWidth: "200px" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Suche ..."
              style={{ width: "100%", fontFamily: "var(--font-body)", fontSize: "14px", padding: "9px 32px 9px 13px", border: "none", borderRadius: "4px", outline: "none", background: "#D6EFF8", color: "#111" }}
            />
            {query && (
              <button onClick={() => setQuery("")} style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: "17px", color: "#666", cursor: "pointer", lineHeight: 1 }}>×</button>
            )}
          </div>

          {[{ key: null, label: "Alle" }, ...TYPE_FILTERS.map((t) => ({ key: t, label: TYPE_LABEL[t] }))].map(({ key, label }) => {
            const active = activeType === key;
            return (
              <button key={label} onClick={() => setActiveType(key as Item["type"] | null)}
                style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, padding: "8px 15px", borderRadius: "4px", cursor: "pointer", border: "none", background: active ? "#111" : "rgba(255,255,255,0.92)", color: active ? "#fff" : "#111", transition: "all 0.15s" }}>
                {label}
              </button>
            );
          })}

          <button onClick={() => setShowTags((s) => !s)}
            style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, padding: "8px 15px", borderRadius: "4px", cursor: "pointer", border: "none", background: showTags ? "#111" : "rgba(255,255,255,0.92)", color: showTags ? "#fff" : "#111", transition: "all 0.15s" }}>
            Tags {showTags ? "▲" : "▼"}
          </button>

          {filtersActive && (
            <button onClick={resetAll} style={{ fontFamily: "var(--font-body)", fontSize: "12px", padding: "8px 12px", background: "none", border: "none", color: "#fff", cursor: "pointer", textDecoration: "underline" }}>zurücksetzen</button>
          )}
        </div>

        <AnimatePresence>
          {showTags && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "14px 2px 0" }}>
                {THEME_TAGS.map((tag) => {
                  const active = activeTag === tag;
                  return (
                    <button key={tag} onClick={() => setActiveTag(active ? null : tag)}
                      style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, padding: "6px 13px", borderRadius: "20px", cursor: "pointer", border: "1px solid", borderColor: active ? "#fff" : "rgba(255,255,255,0.4)", background: active ? "#fff" : "transparent", color: active ? "#111" : "#fff", transition: "all 0.15s" }}>
                      {tag}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* GRID – fugenlos, mit Seitenrand */}
      <section style={{ padding: `0 ${PAGE_PAD} ${PAGE_PAD}` }}>
        {filtered.length === 0 ? (
          <p style={{ color: "#fff", fontSize: "15px", padding: "40px 0" }}>Nichts gefunden. Versuch einen anderen Begriff oder setze die Filter zurück.</p>
        ) : (
          <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 0, borderRadius: "6px", overflow: "hidden" }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div key={item.id} layout
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onMouseEnter={() => setHovered(item.id)} onMouseLeave={() => setHovered(null)}
                  onClick={() => openItem(item)}
                  style={{ cursor: "pointer", position: "relative", overflow: "hidden", background: "#111", aspectRatio: "1 / 1" }}>

                  <div style={{ position: "absolute", inset: 0 }}>
                    {item.type === "video" && (
                      hovered === item.id ? (
                        <iframe src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&modestbranding=1&playsinline=1`}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", pointerEvents: "none", objectFit: "cover" }} allow="autoplay" />
                      ) : (
                        <img src={`https://i.ytimg.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                          onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`; }}
                          alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      )
                    )}
                    {item.type === "photo" && (
                      <AnimatePresence mode="popLayout">
                        <motion.img key={hovered === item.id ? slide : "cover"}
                          src={item.images[hovered === item.id ? slide : 0]} alt={item.title}
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      </AnimatePresence>
                    )}
                    {item.type === "project" && (() => {
                      const c = PROJECT_COLORS[item.color ?? "blue"];
                      return (
                        <div style={{ position: "absolute", inset: 0, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", textAlign: "center" }}>
                          <AnimatePresence mode="wait">
                            {hovered === item.id ? (
                              <motion.p key="key" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, color: c.text, margin: 0 }}>
                                {item.keyStatement}
                              </motion.p>
                            ) : (
                              <motion.p key="metric" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "30px", color: c.metric, margin: 0 }}>
                                {item.metric ?? item.title}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })()}
                  </div>

                  <span style={{ position: "absolute", top: "10px", left: "10px", zIndex: 3, background: "rgba(0,0,0,0.7)", color: "#fff", fontSize: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 8px", borderRadius: "3px" }}>{TYPE_LABEL[item.type]}</span>
                  <span style={{ position: "absolute", top: "10px", right: "10px", zIndex: 3, background: "var(--color-yellow)", color: "#111", fontSize: "11px", fontWeight: 700, fontFamily: "var(--font-display)", padding: "3px 9px", borderRadius: "3px" }}>{item.year}</span>

                  <motion.div initial={false}
                    animate={{ y: hovered === item.id ? 0 : "101%" }}
                    transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
                    style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 2, background: "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.75))", padding: "16px", backdropFilter: "blur(2px)" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px", margin: "0 0 8px", color: "#fff" }}>{item.title}</h3>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {item.tags.map((t) => (
                        <span key={t} style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-yellow)", border: "1px solid rgba(245,196,0,0.5)", padding: "2px 7px", borderRadius: "2px" }}>{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* DETAIL OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", overflow: "auto" }}>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: "#fff", borderRadius: "10px", maxWidth: "1100px", width: "100%", maxHeight: "92vh", overflow: "auto" }}>

              <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.6fr) minmax(260px, 1fr)" }}>
                <div style={{ background: "#000" }}>
                  {open.type === "video" && (
                    <div style={{ position: "relative", width: "100%", paddingTop: "62%" }}>
                      <iframe src={`https://www.youtube.com/embed/${open.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; fullscreen" allowFullScreen />
                    </div>
                  )}
                  {(open.type === "photo" || open.type === "project") && (() => {
                    const imgs = open.type === "photo" ? open.images : (open.images ?? []);
                    const projColor = open.type === "project" ? PROJECT_COLORS[open.color ?? "blue"] : null;
                    return (
                      <div>
                        {open.type === "project" && imgs.length === 0 ? (
                          <div style={{ background: projColor!.bg, minHeight: "320px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                            <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "32px", lineHeight: 1.15, color: projColor!.text, margin: 0, textAlign: "center" }}>{open.keyStatement}</p>
                          </div>
                        ) : (
                          <>
                            <div style={{ position: "relative", width: "100%", paddingTop: "66%", background: "#111" }}>
                              <AnimatePresence mode="wait">
                                <motion.img key={galleryIndex} src={imgs[galleryIndex]} alt={open.title}
                                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                              </AnimatePresence>
                            </div>
                            {imgs.length > 1 && (
                              <div style={{ display: "flex", gap: "8px", padding: "12px", flexWrap: "wrap", background: "#000" }}>
                                {imgs.map((src, i) => (
                                  <button key={i} onClick={() => setGalleryIndex(i)}
                                    style={{ width: "64px", height: "44px", padding: 0, border: i === galleryIndex ? "2px solid var(--color-yellow)" : "2px solid transparent", borderRadius: "4px", overflow: "hidden", cursor: "pointer", background: "none" }}>
                                    <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                  </button>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })()}
                </div>

                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-sky)" }}>{TYPE_LABEL[open.type]} · {open.year}</span>
                    <button onClick={() => setOpen(null)} style={{ background: "#111", color: "#fff", border: "none", borderRadius: "3px", padding: "6px 12px", fontSize: "12px", cursor: "pointer", flexShrink: 0 }}>Schließen</button>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "28px", lineHeight: 1.05, margin: "0 0 16px" }}>{open.title}</h2>
                  {open.type === "project" && (open as ProjectItem).metric && (
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "var(--color-red)", margin: "0 0 16px" }}>{(open as ProjectItem).metric}</p>
                  )}
                  <p style={{ fontSize: "15px", color: "#333", lineHeight: 1.7, margin: "0 0 24px" }}>{open.task}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", borderTop: "1px solid #F0EDED", paddingTop: "20px" }}>
                    {[
                      { label: "Für wen", value: open.client },
                      { label: "Mit wem", value: open.team },
                      { label: "Mein Anteil", value: open.role },
                    ].map((d) => (
                      <div key={d.label}>
                        <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-sky)", margin: "0 0 3px" }}>{d.label}</p>
                        <p style={{ fontSize: "14px", color: "#111", margin: 0, lineHeight: 1.5 }}>{d.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "20px" }}>
                    {open.tags.map((t) => (
                      <span key={t} style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-red)", background: "#FFF5F5", padding: "3px 8px", borderRadius: "2px" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}