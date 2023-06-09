import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Cont from '../components/Cont'


const Training = () => {
  return (
    <div>
    
        <Navbar /> 
        <HeroImage heading = "TRAINING" text = "PRE-FLIGHT && IN-FlIGHT TRAINING " />
        <Cont />
        <Footer />
    </div>
  )
}

export default Training