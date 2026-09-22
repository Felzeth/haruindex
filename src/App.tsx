import { Home } from './pages/Home'
import { MemberProfilePage } from './members/MemberProfilePage'
import { MembersPage } from './members/MembersPage'
import { members } from './members/data'
import { ProjectsPage } from './projects/ProjectsPage'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path !== window.location.pathname) window.history.replaceState(null, '', `${path}${window.location.search}${window.location.hash}`)
  if (path === '/members') return <MembersPage />
  if (path === '/projects') return <ProjectsPage />
  // Member profiles live at /<slug> (e.g. /felzeth); legacy /members/<slug> still resolves
  const legacySlug = path.startsWith('/members/') ? path.slice('/members/'.length) : null
  const rootSlug = path.startsWith('/') && path !== '/' && !path.slice(1).includes('/') ? path.slice(1) : null
  const slug = legacySlug ?? rootSlug
  if (slug) {
    const member = members.find((item) => item.slug === slug)
    if (member) return <MemberProfilePage member={member} />
  }
  return <Home />
}

export default App
