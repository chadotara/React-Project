import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'





const Testimonial = () => {

  const slider = useRef();
  let tx = 0;


  const slideForward = ( )=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  
  const slideBackward = ( )=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }


  return (
    <div className='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Horizon, UK</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga non quas earum voluptatum, alias totam provident cupiditate animi eveniet quisquam iusto ratione veniam culpa accusamus nam id reprehenderit facilis. Exercitationem?</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Smith</h3>
                  <span>Horizon, USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga non quas earum voluptatum, alias totam provident cupiditate animi eveniet quisquam iusto ratione veniam culpa accusamus nam id reprehenderit facilis. Exercitationem?</p>
            </div>
          </li><li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Hennary Stive </h3>
                  <span>Horizon, CANADA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga non quas earum voluptatum, alias totam provident cupiditate animi eveniet quisquam iusto ratione veniam culpa accusamus nam id reprehenderit facilis. Exercitationem?</p>
            </div>
          </li><li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Mr nikolash</h3>
                  <span>Horizon, UAE</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga non quas earum voluptatum, alias totam provident cupiditate animi eveniet quisquam iusto ratione veniam culpa accusamus nam id reprehenderit facilis. Exercitationem?</p>
            </div>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default Testimonial
