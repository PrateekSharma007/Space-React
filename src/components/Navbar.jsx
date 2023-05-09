import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.css"



const Navbar = () => {

    const [click,setClick] = useState(false);

    const handleclick = () => { 
        setClick(!click)
    }
    return (
        <div className="header">

            <Link to="/" style={{ color: "white ", textDecoration: 'none' }} > <h1>ISRO </h1>  </Link>

            <div className='lists'>
                <ul className={click? "list active" : "list"}>

                    <li><Link to="/" style={{ color: "white ", textDecoration: 'none' }} >Home</Link></li>

                    <li><Link to="/pricing" style={{ color: "white ", textDecoration: 'none' }} >Pricing</Link></li>

                    <li><Link to="/training" style={{ color: "white ", textDecoration: 'none' }} >Training</Link></li>

                    <li><Link to="/contact" style={{ color: "white ", textDecoration: 'none' }} >Contact</Link></li>



                </ul>

                <div className="icon" onClick={handleclick}>
                {click ? (<FaTimes />) : (<FaBars/>)}
                   
                </div>
            </div>




        </div>
    )
}

export default Navbar