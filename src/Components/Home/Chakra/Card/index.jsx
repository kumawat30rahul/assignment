import React from 'react'
import './styles.css'

function Card({title,src,invert}) {
  return (
    <div className={`mpos-card ${invert === "true" ? 'reverse' : '' }`}>
      <div className={`mpos-img-div ${invert === "true" ? 'reverse-img-div' : '' }`}>
        <img src={src} alt="" className='mpos-card-img'/>
      </div>
      <div className='mpos-title'>
        {title}
      </div>
    </div>
  )
}

export default Card
