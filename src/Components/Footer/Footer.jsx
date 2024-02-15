import React from 'react'
import logo from '../Assets/logo.png'
import footer from './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {

    const date = new Date()
  return (
    <div className='footer'>
        <div className="nav-logo">
            <img src={logo}/>
            <h4>Addidas</h4>
        </div>
        <ul className='list'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="logo">
        <FaInstagram />
        <FaWhatsapp />
        <CiLinkedin />
        </div>
        <p className='copyright'>copyright @ {date.getFullYear()} - All Rights Reserved.</p>
    
        

    </div>
  )
}

export default Footer