import ScrollReveal from '@/components/ScrollReveal'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'
import VisitTracker from '@/components/visit-tracker'
import { getCaseStudiesData, getServicesData } from '@/lib/site-data'

export default async function Home() {
  const [services, caseStudies] = await Promise.all([
    getServicesData(),
    getCaseStudiesData(),
  ])

  return (
    <>
      <VisitTracker />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services services={services} />
        <Work projects={caseStudies} />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
