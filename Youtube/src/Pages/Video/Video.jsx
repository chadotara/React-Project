import React from 'react'
import './Video.css'
import Playvideo from '../../Component/Playvideo/Playvideo'
import Recommaded from '../../Component/Recommaded/Recommaded'
import { useParams } from 'react-router-dom'

function Video() {

  const {videoId , categoryId} =  useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recommaded categoryId={categoryId}/>
    </div>
  )
}

export default Video
