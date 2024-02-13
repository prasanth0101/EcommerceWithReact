import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import hero from './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-part">
        <h1>New <br/>Collections<br/> for Everyone.</h1>
       <button> Latest Collections <FaArrowRight  className='arrow'/></button>
        </div>


    </div>
  )
}

export default Hero