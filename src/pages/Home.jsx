import React from 'react'
import "./home.css"
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Video />
      <Footer />
    </div>
  )
}

export default Home