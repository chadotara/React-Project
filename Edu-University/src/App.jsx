import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Videoplayer from './Component/Videoplayer/Videoplayer'

const App = () => {

  const [playState, setPlayState] = useState(false);




  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Campus Memories'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonial/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>


      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
     
    </div>
  )
}

export default App
