import React from 'react'

import ContactForm from '../components/OpenInput'
import OpenHero from '../components/OpenHero'
import DropdownForm from '../components/Position'

import usePageTitle from "../components/AddTitle";


const OpenPosition = () => {
  usePageTitle("Open postions")
  return (
    
    <div>
        <OpenHero/>
    <DropdownForm/>
        </div>
  )
}

export default OpenPosition