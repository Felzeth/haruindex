type LogoProps = {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex min-h-10 items-center gap-2 text-sm font-medium tracking-tight text-white/80">
      <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.7" />
        <path d="M14.8 5.9a6.7 6.7 0 1 0 0 12.2A6.1 6.1 0 0 1 14.8 5.9Z" fill="#17181c" fillOpacity="0.9" />
        <circle cx="9" cy="9" r="1.1" fill="#17181c" fillOpacity="0.75" />
      </svg>
      {!compact && <span>Haru Team</span>}
    </span>
  )
}
