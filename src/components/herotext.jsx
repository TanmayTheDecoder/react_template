import React from 'react'
import './herotext.css'

const HeroText = () => {
  return (
    <div className='hero-text-container'>
        <div className="hero-text-inner">
            <div className="different-headings">
                <span>Creative</span>
                <h1>Portfolio</h1>
            </div>
            <div className="text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt totam mollitia placeat, dolorem quis reprehenderit non, ullam minus distinctio molestias veritatis culpa facilis voluptatibus vel consectetur ducimus voluptas cumque doloremque?</p>
                <p>Images from <a href="https://www.freepik.com/">Freepik</a></p>
                <a href="https://www.eleconone.com/">Read More</a>
            </div>    
        </div>
    </div>
  )
}

export default HeroText