import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowLeft, ArrowUpRight, AtSign, Brush, Clock3, Inbox, Palette,
} from "lucide-react";
import { NavLink } from "../../components/Navbar";
import "./rek.css";

const IG_PROFILE_URL = "https://www.instagram.com/thndon_jj02/";

/**
 * Paste each uploaded artwork URL into `image`. Provider-hosted image URLs are
 * displayed directly, so the gallery does not rely on Instagram embeds.
 */
const IG_POSTS = [
  {
    url: "https://www.instagram.com/p/DbpYBMnneY2/",
    caption: "latest piece",
    image: "https://i.8upload.com/image/7ded6d39d1dbd5a9/762944111-17906155095463973-3432177598156920873-n.webp",
  },
  {
    url: "https://www.instagram.com/p/DbSnhxKnXOH/",
    caption: "recent work",
    image: "https://i.8upload.com/image/cae399f47712b5f4/755807190-17904834006463973-8646189362114773368-n.webp",
  },
  {
    url: "https://www.instagram.com/p/DbODvHhHRSV/",
    caption: "recent work",
    image: "https://i.8upload.com/image/3d5538c3aca5509a/754126892-17904575541463973-56773931806110149-n.webp",
  },
];

/* ---------------- tiny building blocks ---------------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------- data ---------------- */

const STATS = [
  { value: "27", label: "posts on ig" },
  { value: "4 yrs", label: "making art" },
  { value: "3", label: "featured below" },
  { value: "∞", label: "wip folder" },
];

const TOOLS = [
  { label: "draws in", value: "ibispaint + paper" },
  { label: " brushes", value: "too many to count" },
  { label: "listens", value: "music" },
  { label: "status", value: "commissions open" },
];

/* ---------------- page ---------------- */

export default function RekProfile() {
  return (
    <div className="rek-profile">
      <header className="nav">
        <nav className="nav-inner">
          <a className="nav-brand" href="/">haru<span>.team</span></a>
          <NavLink active href="/members">Members</NavLink>
        </nav>
      </header>

      <div className="bg-scene" aria-hidden="true">
        <img src="/images/sidetracked.sunset.jpg" alt="" />
        <div className="vignette" />
      </div>
      <div className="grain" aria-hidden="true" />

      {/* hero */}
      <section className="hero">
        <div className="avatar-wrap">
          <img src="/images/rekke.jpg" alt="portrait of rek" />
        </div>
        <h1> Rekke <span className="smile">:)</span></h1>
        <p className="sub">
          Artist from Astra.
          <span className="chip">ARTIST</span>
          <span className="dotline" aria-hidden="true" />
          <span className="clock"> making things daily</span>
        </p>
        <p className="sub dim">Scroll for the gallery ^~^</p>

        <div className="hero-cta">
          <a className="btn primary" href="#gallery"><Brush size={14} /> see the gallery</a>
          <a className="btn ghost" href="#commissions"><Inbox size={14} /> commissions</a>
        </div>
      </section>

      {/* gallery */}
      <section className="section" id="gallery">
        <div className="container">
          <Reveal>
            <p className="kicker">01 — straight from the grid</p>
            <h2>Gallery</h2>
            <p className="lede">
              Live from <a className="text-link" href={IG_PROFILE_URL} target="_blank" rel="noreferrer">@thndon_jj02</a> —
              recent posts embedded right from Instagram.
            </p>
          </Reveal>

          <div className="ig-grid">
            {IG_POSTS.map((post, i) => (
              <Reveal key={post.url} delay={(i % 3) * 70}>
                <article className="ig-card glass">
                  {post.image ? (
                    <a
                      className="ig-image-link"
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${post.caption} — view on Instagram`}
                    >
                      <img className="ig-thumb" src={post.image} alt={post.caption} loading="lazy" />
                    </a>
                  ) : (
                    <div className="ig-empty" aria-label="Artwork URL has not been added yet">
                      Add artwork URL
                    </div>
                  )}
                  <a className="ig-caption" href={post.url} target="_blank" rel="noreferrer">
                    {post.caption} <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section className="section" id="about">
        <div className="container">
          <Reveal>
            <p className="kicker">02 — behind the canvas</p>
            <h2>About</h2>
          </Reveal>

          <div className="about-grid">
            <Reveal>
              <div className="about-card glass">
                <p>
                  Rek is the team's artist — sketching characters, scenes and the occasional
                  cursed doodle. Most pieces start on paper and end up painted late at night.
                </p>
                <p>
                  Most helpful member in the team, and usually the one fixing everyone else's
                  thumbnails too.
                </p>
              </div>
            </Reveal>

            <div className="stats">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 55}>
                  <div className="stat glass">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about-grid" style={{ marginTop: 16 }}>
            {TOOLS.map((t, i) => (
              <Reveal key={t.label} delay={i * 55}>
                <div className="stat glass" style={{ flexDirection: "row", alignItems: "baseline", gap: 10 }}>
                  <span style={{ margin: 0 }}>{t.label}</span>
                  <strong style={{ fontSize: 16 }}>{t.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* commissions */}
      <section className="section" id="commissions">
        <div className="container narrow">
          <Reveal>
            <p className="kicker">03 — work with me</p>
            <h2>Commissions</h2>
            <div className="commission-card glass">
              <div>
                <h3><span className="status-dot" aria-hidden="true" /> Slots open</h3>
                <p>
                  Want a portrait, an icon, or something stranger? DM on
                  {' '}<a className="text-link" href={IG_PROFILE_URL} target="_blank" rel="noreferrer">@thndon_jj02</a> —
                  reference images welcome, vague vibes also accepted.
                </p>
              </div>
              <a className="btn primary" href={IG_PROFILE_URL} target="_blank" rel="noreferrer">
                <AtSign size={14} /> DM on Instagram <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <div className="container footer-row">
          <p>© 2026 rek · painted between commits</p>
          <div className="footer-links">
            <a className="btn ghost small" href="/members"><ArrowLeft size={14} /> all members</a>
            <a className="social" href={IG_PROFILE_URL} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><AtSign size={16} /></a>
          </div>
        </div>
      </footer>

      <a className="btn ghost small to-top-fab" href="#top" style={{ position: "fixed", right: 24, bottom: 24, zIndex: 30 }}>
        <ArrowLeft size={14} style={{ transform: "rotate(90deg)" }} /> top
      </a>
    </div>
  );
}
