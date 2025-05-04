import React from 'react'
import CareerHero from '../components/CareerHero'
import CareerCTASection from '../components/Careerposition'
import ContactFallback from '../components/Contactforjob'

const Careers = () => {
  return (
    <div>
      <CareerHero/>
      <CareerCTASection/>
      <ContactFallback/>
    </div>
  )
}

export default Careers