import { socials } from '../data/socials'

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2" id="contact">
      {socials.map((link) => (
        <a className="min-h-10 content-center text-sm text-white/60 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline" href={link.url} key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  )
}
