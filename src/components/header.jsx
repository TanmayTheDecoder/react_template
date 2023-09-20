import React from 'react'
import './header.css'

const logoimg = require('../assets/icons/logo.png')
const hamburger = require('../assets/icons/hamburger.png')

const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-inner">
            <div className="logo">
                <img src={logoimg} alt="" />
            </div>
            <div className="hamburger-menu">
                <img src={hamburger} alt="" className='logoimage'/>
            </div>
        </div>
    </div>
  )
}

export default Header;