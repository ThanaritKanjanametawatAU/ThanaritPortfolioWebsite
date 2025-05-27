import { About, Experience, Projects, Skills, Blog } from '@/components/sections'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero section would go here */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      {/* Contact and Footer sections would go here */}
    </main>
  )
}