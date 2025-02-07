import React, { useEffect, useRef } from 'react'
import './Title.css'
import cards_cata from '../../assets/cards/Cards_data'





const TitleCard = ({title,category}) => {





  const cardRef =  useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY; 
  }
  
  useEffect(()=>{
  
    cardRef.current.addEventListener('wheel',handleWheel)
  
  },[])
  

  
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"} </h2>
      <div className="card-list " ref={cardRef}>
        {cards_cata.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default TitleCard
