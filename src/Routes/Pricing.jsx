import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Price from '../components/Price'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading = "PRICING." text = "CHOOSE YOUR TRIP"/>
        <Price />
        <Footer />
    </div>
  )
}

export default Pricing