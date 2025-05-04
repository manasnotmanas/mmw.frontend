import React, { use } from 'react'
import SolutionHero from '../components/SolutionHero'
import DigitalTransformationCard from '../components/SolutionsDigital'
import TransformationCards from '../components/TwocardsSolution'
import SolutionImage from '../components/SolutionImage'
import usePageTitle from "../components/AddTitle";

const Solutions = () => {
  usePageTitle("Solutions")
  return (
    <>
    <SolutionHero/>
    <SolutionImage/>
    <DigitalTransformationCard/>
    <TransformationCards/>
    
    </>
  )
}

export default Solutions