import React from 'react'
import './footer.css'
import * as Unicons from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-social">
            <p>Catch Us Through</p>
            <div className="social-icons">
                <Unicons.UilFacebookF  color='white' size = '2.3rem' />
                <Unicons.UilTwitter  color='white' size = '2.3rem' />
                <Unicons.UilInstagram  color='white' size = '2.3rem' />
                <Unicons.UilLinkedin  color='white' size = '2.3rem' />
            </div>
            <div className="footer-link">
                <p>Images from <a href="https://www.freepik.com/">Freepik</a></p>
            </div>
        </div>
        <div className="footer-conclusion">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi voluptatum veniam placeat ipsum. Quis impedit reprehenderit quaerat quod recusandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis veniam deleniti minima qui excepturi.</p>
        </div>
        <div className="footer-end">
            <p>Take a glance on <a href="https://eleconone.com/">eleconone.com</a></p>
        </div>
    </div>
  )
}

export default Footer
