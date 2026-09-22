import { useEffect, useRef, type ReactNode } from "react";
import {
  ArrowLeft, ArrowUpRight, AtSign, Brush, Clock3, Inbox, Palette,
} from "lucide-react";
import { NavLink } from "../../components/Navbar";
import "./rek.css";

const IG_PROFILE_URL = "https://www.instagram.com/thndon_jj02/";

/** His 3 latest posts, newest first (grid order from @thndon_jj02's public profile). Thumbnails hotlinked from Instagram's CDN — nothing downloaded. */
const IG_POSTS = [
  {
    url: "https://www.instagram.com/p/DbpYBMnneY2/",
    caption: "latest piece",
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/762944111_17906155095463973_3432177598156920873_n.webp?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=cgyJ3jo87LsQ7kNvwFtDcPO&_nc_oc=AdqMnxSLfEswu8IJwcDJ0OphJ5qiDX5pRyck1cy2FjuapTPY9I472W858-f6vMsX8_c&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=vp8QTWkcgVIlO4l2MckGAw&_nc_ss=7a689&oh=00_AQKwolndre0Z7_2eM4Fm0K0qHSCmILnp9dSpF_2I_Zrl5A&oe=6AB8804D",
  },
  {
    url: "https://www.instagram.com/p/DbSnhxKnXOH/",
    caption: "recent work",
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/755807190_17904834006463973_8646189362114773368_n.webp?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=l1Nq2m0-myIQ7kNvwFuZ7Xp&_nc_oc=Adp538obSeP6zRJA-KqPTbYRi20DOloHgiNLtr-55-zqRcyfWa0Nn3G-JnjurBtj2tA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=vp8QTWkcgVIlO4l2MckGAw&_nc_ss=7a689&oh=00_AQL2XucKy01jFwCYfg4a4tPA7qCWa3E0I1ofcU3Jt2CkSg&oe=6AB889C5",
  },
  {
    url: "https://www.instagram.com/p/DbODvHhHRSV/",
    caption: "recent work",
    image: "https://scontent.cdninstagram.com/v/t51.82787-15/754126892_17904575541463973_56773931806110149_n.webp?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=p25jSs8qep4Q7kNvwGSNUdB&_nc_oc=AdqREO0YxNiqbWkmXWpVpNswTr2zN3u_W5MU33RmF2eBW3adBd7Lj7wRexhTJLJk5AA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ku0M-6Lr_Yn0P-Rahty08A&_nc_ss=7a689&oh=00_AQLfC6sIujNGzX0wUx2-kzigfkc6s8OnScxJAVrceTBEuw&oe=6AB870AA",
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
                <a
                  className="ig-card glass"
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${post.caption} — view on Instagram`}
                >
                  <img className="ig-thumb" src={post.image} alt={post.caption} loading="lazy" />
                  <span className="ig-caption">{post.caption}</span>
                </a>
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
