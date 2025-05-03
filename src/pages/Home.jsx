import React from 'react'
import Hero from '../components/CubeFace'
import Seamless from '../components/Seamless'
import AnimatedDigitalTransformationCard from '../components/AnimatedDigitalTransformationCard'
import DigitalServicesCardsSideBySide from '../components/DigitalServicesCardsSideBySide'
import OutsourcingPartnerProfile from '../components/OutsourcingPartnerProfile'
import WhyChooseUs from '../components/WhyChooseUs'


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Seamless></Seamless>
      <AnimatedDigitalTransformationCard/>
      
    
        <DigitalServicesCardsSideBySide></DigitalServicesCardsSideBySide>
        <OutsourcingPartnerProfile/>
        <WhyChooseUs/>
       
      
    </div>
  )
}

export default Home