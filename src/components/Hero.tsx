import { Footer } from './Footer'
import { SocialLinks } from './SocialLinks'
import countrysideImage from '../assets/images/japan-countryside.jpg'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-0 flex-1 flex-col overflow-hidden" id="top">
      <img alt="" aria-hidden="true" className="absolute inset-[-4%] -z-20 h-[108%] w-[108%] max-w-none scale-110 object-cover object-center blur-md" src={countrysideImage} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-zinc-950/70 to-zinc-950" />
      <div className="flex flex-1 items-center justify-center px-4 pb-4 pt-24 sm:px-6 sm:pt-28">
        <div className="w-full max-w-4xl text-center">
          <p className="animate-[pulse_5s_ease-in-out_infinite] text-sm font-medium tracking-[0.2em] text-white/60 uppercase">Haru Team</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl md:text-8xl">Hello from Haru.</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">A small collective for thoughtful tools, curious experiments, and the moments in between.</p>
          <div className="mt-10"><SocialLinks /></div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
