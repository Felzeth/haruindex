import { Home } from './pages/Home'
import { MemberProfilePage } from './members/MemberProfilePage'
import { MembersPage } from './members/MembersPage'
import { members } from './members/data'
import { ProjectsPage } from './projects/ProjectsPage'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path !== window.location.pathname) window.history.replaceState(null, '', `${path}${window.location.search}${window.location.hash}`)
  if (path === '/members') return <MembersPage />
  if (path.startsWith('/members/')) {
    const member = members.find((item) => item.slug === path.slice('/members/'.length))
    if (member) return <MemberProfilePage member={member} />
  }
  if (path === '/projects') return <ProjectsPage />
  return <Home />
}

export default App
