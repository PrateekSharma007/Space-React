import React from 'react'
import "./video.css"
import spacevideo from "../assets/spacevideo.mp4";
import { Link } from 'react-router-dom';


const Video = () => {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">

                <source src={spacevideo} type="video/mp4" />

            </video>
            <div className="content">
                <h1> Galaxy Travel</h1>
                <p>World first civilian space travel </p>
                <div className = "buttons">
                <Link to="/training" className='btn' style={{ color: "gray", textDecoration: 'none' }}> Training</Link>
                <Link to="/contact" className='btn-btn light' style={{ color: "white ", textDecoration: 'none' }}> Launch</Link>
            </div>
            </div>
            

        </div>
    )
}

export default Video