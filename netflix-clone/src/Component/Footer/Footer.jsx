import React from 'react'

import './Footer.css'


import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div  className='footer'>
      <div className="footer-icon">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />


      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li> 
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal  Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information </li>
        <li>Contact Us</li>
        </ul>
      
      <p className='copy-right'> 1997-2025 Netflix Inc.</p>
    </div>
  )
}

export default Footer
