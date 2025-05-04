import React from 'react'
import CasestudiesHero from '../components/CasestudiesHero'
import CardSlider from '../components/SliderCase'
import usePageTitle from '../components/AddTitle'

const Casestudies = () => {
  usePageTitle("Casestudies")
  return (
    <>
    <CasestudiesHero/>
    <CardSlider/>
    </>
  )
}

export default Casestudies