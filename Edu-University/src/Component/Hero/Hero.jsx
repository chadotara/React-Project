import React from 'react'
import './Hero.css'
import  dark_arrow from'../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-name">
            <h1>We Ensure better education for better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sapiente? Eveniet numquam sit nihil reprehenderit, quasi minima obcaecati vitae ullam voluptatibus porro aut adipisci, itaque, tempore voluptatem nulla mollitia dignissimos?</p>
            <button className='btn'> Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Hero
