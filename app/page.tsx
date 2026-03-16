import ScrollReveal from '@/components/ScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Work />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
