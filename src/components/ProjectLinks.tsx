import { projects } from '../data/projects'

export function ProjectLinks() {
  return (
    <section aria-labelledby="projects-heading" className="relative border-t border-white/10 bg-transparent px-4 py-20 sm:px-6 sm:py-28" id="projects">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-white/45">Selected work</p>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl" id="projects-heading">Small tools, made with care.</h2>
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {projects.map((project) => (
            <a className="group min-h-40 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] focus-visible:-translate-y-1 focus-visible:border-white/40" href={project.url} key={project.name} rel="noreferrer" target="_blank">
              <span className="flex items-start justify-between gap-3 text-lg font-medium">
                {project.name}<span aria-hidden="true" className="text-white/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </span>
              <p className="mt-4 text-sm leading-6 text-white/55">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
