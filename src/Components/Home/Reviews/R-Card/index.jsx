import React from 'react'
import './styles.css'
import DARKSTAR from '../../../../assets/dark-star.svg'
import LIGHTSTAR from '../../../../assets/light-star.svg'
import { Avatar } from '@chakra-ui/react'

function RCard({stars,desc,src}) {
    const darkStars = Array.from({ length: stars }, (_, index)=>{
        return <img src={DARKSTAR} key={index} alt='' className='star'/>
    })
    const lightStars = Array.from({ length: (5-stars) }, (_, index)=>{
        return <img src={LIGHTSTAR} key={index} alt='' className='star'/>
    })

  return (
    <div className='review-card'>
      <div className="stars">
        {darkStars}
        {lightStars}
      </div>
      <div className="user-review">
        <span className="desc">{desc}</span>        
      </div>
      <div className='Avatar'>
        <Avatar src={src} size={'md'} />
      </div>
    </div>
  )
}

export default RCard
