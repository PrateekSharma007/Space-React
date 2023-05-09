import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from "react-icons/fa"
import "./Footer.css"


const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-container ">
                <div className="left">
                    <div className='location'>
                        <FaSearchLocation size = {20} style={{marginRight : "20px"}}/>
                        <div>
                            <p>New York</p>
                        </div>
                    </div>
                    <div className='number'>
                        <FaPhone size = {20} style={{marginRight : "20px"}}/>
                        <div>9643716090</div>
                    </div>
                    <div className='email'>
                        <FaMailBulk size = {20} style={{marginRight : "20px"}}/>
                        <div>sharma.prateek000@gmail.com</div>
                    </div>
                    
                </div>

                <div className='right'>
                    <h4>About the company</h4>
                    <p>Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the benefits of outer space for India and the mankind.</p>
                    <div className='social'>
                        <FaFacebook size = {40} style={{marginRight : "20px"}}/>
                        <FaLinkedin ize = {40} style={{marginRight : "20px"}}/>
                        <FaTwitter ize = {40} style={{marginRight : "20px"}}/> 
                        <FaInstagram ize = {40} style={{marginRight : "20px"}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer