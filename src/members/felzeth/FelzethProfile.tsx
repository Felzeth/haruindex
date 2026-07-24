import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Monitor, Keyboard, Mouse,
  Headphones, Terminal, Laptop, Type, Music, Flower2,
  Mail, AtSign, MapPin, NotebookPen, ArrowUp, ArrowLeft,
} from "lucide-react";
import "./felzeth.css";

/* ---------------- haru nav ---------------- */
function HaruBackNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/50 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5">
        <a className="min-h-10 content-center text-sm font-semibold tracking-tight" href="/">haru<span className="text-white/45">.team</span></a>

      <a className="min-h-10 content-center text-sm text-white/65 transition-colors duration-200 hover:text-white focus-visible:text-white" href="/members" aria-current="page">Members</a>
      </nav>
    </header>
  );
}

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

type Page = "home" | "notes";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------- tiny building blocks ---------------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) { el.classList.add("in"); return; }
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

function useParisTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Tokyo" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ---------------- data ---------------- */

const SETUP = [
  { icon: Laptop, label: "machine", value: "Acer Nitro 5" },
  { icon: Monitor, label: "editor", value: "VS Code · Catppuccin" },
  { icon: Keyboard, label: "keyboard", value: "AULA · WIN68HE MAX" },
  { icon: Mouse, label: "mouse", value: "Attack Shark · X11" },
  { icon: Headphones, label: "audio", value: "IEM" },
  { icon: Terminal, label: "terminal", value: "Warp + zsh + starship" },
  { icon: Type, label: "font", value: "JetBrains Mono" },
  { icon: Music, label: "vibes", value: "lo-fi / Jpop" },
];

const NOTES = [
  { date: "JUL 7 2026", title: "CR-DL", body: "Fork a repo from @cutetenshii, fixing it till it work for me." },
  { date: "JUL 2 2026", title: "Anihook", body: "Start develop a discord webhook." },
  { date: "MAR 6 2026", title: "First repository", body: "Building an index for Haru.team website." },
  { date: "OCT 29 2024", title: "Joined GitHub", body: "First time joining github." },
];

/* ---------------- home page ---------------- */

function FelzethHome({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const time = useParisTime();

  return (
    <>
      <header className="hero">
        <div className="avatar-wrap">
          <img src="/images/izumi-miyamura-anime-profile-3uvm1r016vm9dkg4.jpg" alt="anime portrait of felzeth" />
        </div>
        <h1>Hi! I'm Felzeth <span className="smile">:)</span></h1>
        <p className="sub">
          Founder of Haru Team.
          <span className="chip">JP</span>
          <span className="dotline" aria-hidden="true" />
          <span className="clock"><MapPin size={11} /> Japan · {time}</span>
        </p>
        <p className="sub dim">Scroll down to know more about me ^~^</p>

        <Reveal delay={150} className="miwa-card-wrap">
          <div className="miwa-card glass">
            <p>
              We're currently <Flower2 size={15} className="flower" aria-hidden="true" />{" "}
              <span className="jobless-link">jobless</span>, and unwilling to find one.
            </p>
            <p className="miwa-meta">
              <span className="pulse" aria-hidden="true" />
              We're <strong>High school</strong> students, who love breaking things.
            </p>
          </div>
        </Reveal>
      </header>

      <section id="setup" className="section">
        <div className="container">
          <Reveal>
            <p className="kicker">01 — the desk</p>
            <h2>Setup</h2>
          </Reveal>
          <div className="grid-4 setup">
            {SETUP.map((s, i) => (
              <Reveal key={s.label} delay={i * 55}>
                <div className="gear glass">
                  <span className="gear-icon"><s.icon size={17} /></span>
                  <span className="gear-label">{s.label}</span>
                  <strong>{s.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <p>© 2026 felzeth · made with too much coffee <span aria-hidden="true">☕</span></p>
          <div className="footer-links">
            <button className="btn ghost small" onClick={() => onNavigate("notes")}>
              <NotebookPen size={14} /> notes
            </button>
            <a className="social" href="https://github.com/felzeth" target="_blank" rel="noreferrer" aria-label="GitHub" title="Github"><Github size={16} /></a>
            <a className="social" href="https://x.com/felzeth" target="_blank" rel="noreferrer" aria-label="X / Twitter" title="X / Twitter"><AtSign size={16} /></a>
            <a className="social" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=felzeth@haru.team" aria-label="Email" title="Email"><Mail size={16} /></a>
          </div>
        </div>
      </footer>

      <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" })} aria-label="Back to top">
        <ArrowUp size={16} />
      </button>
    </>
  );
}

/* ---------------- notes page ---------------- */

function FelzethNotes({ onBack }: { onBack: () => void }) {
  return (
    <>
      <main className="notes-page">
        <div className="container narrow">
          <Reveal>
            <button className="btn ghost small" onClick={onBack} style={{ marginBottom: 20 }}>
              <ArrowLeft size={14} /> back
            </button>
            <p className="kicker">small thoughts, kept safe</p>
            <h2>notes <span className="smile">^~^</span></h2>
            <p className="notes-lede">things i wanted to remember, written between commits.</p>
          </Reveal>

          <div className="notes-list">
            {NOTES.map((n, i) => (
              <Reveal key={n.title} delay={i * 80}>
                <article className="glass note-card">
                  <span className="note-date">{n.date}</span>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="notes-end">— that's all for now. more soon, maybe. <span className="smile">:)</span></p>
          </Reveal>
        </div>
      </main>
    </>
  );
}

/* ---------------- shell ---------------- */

export default function FelzethProfile() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="felzeth-profile">
      <HaruBackNav />
      <div className="bg-scene" aria-hidden="false">
        <img src="https://i.8upload.com/image/497f337abed3a931/bg-blossom.jpg" alt="" />
        <i className="orb o1" /><i className="orb o2" /><i className="orb o3" /><i className="orb o4" /><i className="orb o5" />
        <div className="vignette" />
      </div>
      <div className="grain" aria-hidden="true" />
      {page === "home" ? <FelzethHome onNavigate={navigate} /> : <FelzethNotes onBack={() => navigate("home")} />}
    </div>
  );
}
