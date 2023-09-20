import React from 'react'
import './hero.css'

const heroimage = require('../assets/images/circle-man.png')

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="circle-container">
            <img src={heroimage} alt="" srcset="" className='hero-image'/>
        </div>
    </div>
  )
}

export default Hero