import React from 'react'
import "./home.css"
import Navbar from '../components/Navbar'
import Video from '../components/Video'

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Video />
    </div>
  )
}

export default Home