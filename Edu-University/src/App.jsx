import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonal/Testimonial'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Memories'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonial/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>


      </div>
     
    </div>
  )
}

export default App
