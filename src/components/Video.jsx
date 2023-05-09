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
                <div>
                <Link to="/training" className='btn'> Training</Link>
                <Link to="/contact" className='btn btn-light'> Launch</Link>
            </div>
            </div>
            

        </div>
    )
}

export default Video