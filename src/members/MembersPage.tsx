import countrysideImage from '../assets/images/japan-countryside.jpg'
import { Footer } from '../components/Footer'
import { members } from './data'

export function MembersPage() {
  return (
    <main className="page-shell relative isolate flex min-h-dvh flex-col overflow-hidden">
      <img alt="" aria-hidden="true" className="absolute inset-[-4%] -z-20 h-[108%] w-[108%] max-w-none scale-110 object-cover object-center blur-md" src={countrysideImage} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-zinc-950/70 to-zinc-950" />

      <header className="fixed inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/50 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-5">
          <a className="min-h-10 content-center text-sm font-semibold tracking-tight" href="/">haru<span className="text-white/45">.team</span></a>

          <a className="min-h-10 content-center text-sm text-white/65 transition-colors duration-200 hover:text-white focus-visible:text-white" href="/members" aria-current="page">
            Members
          </a>
        </nav>
      </header>

      <section className="flex flex-1 items-center justify-center px-4 pb-4 pt-24 sm:px-6 sm:pt-28">
        <div className="w-full max-w-5xl text-center">
          <p className="text-sm font-medium tracking-[0.2em] text-white/55 uppercase">Haru Team</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">Members</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">The people behind Haru Team.</p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {members.map((member) => (
              <a className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]" href={`/members/${member.slug}`} key={member.slug}>
                <h2 className="text-base font-semibold text-white">{member.name}</h2>
                <p className="mt-2 text-sm text-white/50">{member.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}





