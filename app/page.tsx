import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Hero, About, Experience, Projects, Skills, Blog, Contact } from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}