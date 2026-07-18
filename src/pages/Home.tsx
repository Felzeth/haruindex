import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

export function Home() {
  return (
    <main className="page-shell flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  )
}



