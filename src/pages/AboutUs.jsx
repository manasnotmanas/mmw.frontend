import React from 'react'
import AboutHero from '../components/AboutusHero'
import CompetitiveSection from '../components/AboutUscard'
import AboutCard from '../components/Aboutsection'
import AboutUsTeam from '../components/AboutUsTeam'
import usePageTitle from '../components/AddTitle'

const AboutUs = () => {
  usePageTitle("about")
  return (
    <div>
      <AboutHero/>
      <CompetitiveSection/>
      <AboutCard/>
      <AboutUsTeam/>
  </div>
  )
}

export default AboutUs