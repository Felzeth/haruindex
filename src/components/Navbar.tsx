import type { ReactNode } from 'react'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/50 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5">
        <a className="min-h-10 content-center text-sm font-semibold tracking-tight" href="/">haru<span className="text-white/45">.team</span></a>
      </nav>
    </header>
  )
}

type NavLinkProps = {
  href: string
  active?: boolean
  children: ReactNode
}

export function NavLink({ href, active = false, children }: NavLinkProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 text-sm transition-colors duration-200 focus-visible:text-white ${active ? 'bg-white/10 text-white' : 'text-white/65 hover:text-white'}`}
      href={href}
    >
      {active && <span aria-hidden="true" className="size-1.5 rounded-full bg-white/60" />}
      {children}
    </a>
  )
}


