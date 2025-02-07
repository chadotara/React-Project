import React from 'react'
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import hero from '../../../public/hero_banner.jpg'
import hero_title  from '../../assets/hero_title.png'
import play from '../../assets/Play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCard from '../../Component/Title-card/TitleCard'
import Footer from '../../Component/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugiat adipisci deleniti blanditiis veniam voluptas eius obcaecati maiores sapiente. Reiciendis consectetur et pariatur ullam esse quasi hic dolores unde quisquam.</p>
          <div className="hero-btn">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="" />More info</button>

          </div>

          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
        
      <TitleCard title={"Blockbuster Movies"}/>
      <TitleCard title={"Only on Netflix"}/>
      <TitleCard title={"Upcoming New"}/>
      <TitleCard title={"Top pics for you"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
