import ScrollReveal from '@/components/ScrollReveal'
import ScrollMotion from '@/components/ScrollMotion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'
import VisitTracker from '@/components/visit-tracker'
import { getSiteBooking } from '@/lib/booking'
import { getCaseStudiesData, getServicesData } from '@/lib/site-data'

export default async function Home() {
  const [services, caseStudies, booking] = await Promise.all([
    getServicesData(),
    getCaseStudiesData(),
    getSiteBooking(),
  ])

  return (
    <>
      <VisitTracker />
      <ScrollMotion />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <HowItWorks booking={booking} />
        <Ticker />
        <About />
        <Services services={services} />
        <Work projects={caseStudies} />
        <Connect booking={booking} />
      </main>
      <Footer />
    </>
  )
}
