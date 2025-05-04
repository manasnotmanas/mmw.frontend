import React from 'react'
import CareerHero from '../components/CareerHero'
import CareerCTASection from '../components/Careerposition'
import ContactFallback from '../components/Contactforjob'
import usePageTitle from '../components/AddTitle'
const Careers = () => {
  usePageTitle("Career")
  return (
    <div>
      <CareerHero/>
      <CareerCTASection/>
      <ContactFallback/>
    </div>
  )
}

export default Careers