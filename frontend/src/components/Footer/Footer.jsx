import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} className='footer-logo' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dicta ea aliquid hic numquam laborum! Qui amet ullam deleniti ut atque in reprehenderit natus cumque beatae accusamus, tempore quam modi?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-1234567890</li>
                    <li>contact@fm.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Food-Mantra.com -All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
