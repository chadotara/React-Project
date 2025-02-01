import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'



const About = () => {
  return (
    <div className='about'>
        <div className="about-left">

            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi omnis ullam quia repellat aut dolore excepturi illum, cupiditate nemo temporibus amet saepe! Earum impedit ut molestiae veritatis ipsa vel!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla velit atque. Temporibus quam natus assumenda ad vero, corrupti in molestias excepturi repellat quae culpa necessitatibus quaerat eos labore iure?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eius doloremque, dolore numquam, eos itaque sint dolor aperiam nam cupiditate porro fuga. Deleniti, harum ipsa. Reiciendis quis excepturi assumenda consequatur!</p>
        </div>
      
    </div>
  )
}

export default About
