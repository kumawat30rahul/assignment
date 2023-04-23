import React from 'react'
import Heading from '../../Common/Heading'
import './styles.css'
import AstroCard from '../AstrologerCard';
import ASTRO1 from '../../../../assets/1.png'
import ASTRO2 from '../../../../assets/2.png'
import ASTRO3 from '../../../../assets/3.png'
import ASTRO4 from '../../../../assets/4.png'
import ASTRO5 from '../../../../assets/5.png'
import ASTRO6 from '../../../../assets/6.png'
import ASTRO7 from '../../../../assets/7.png'


function AstroComp() {
    const astrologers = [
        {
            src: ASTRO1,
            title: "Asdfasdf",
        },
        {
            src: ASTRO2,
            title: "Asdfasdf",
        },
        {
            src: ASTRO3,
            title: "Asdfasdf",
        },
        {
            src: ASTRO4,
            title: "Asdfasdf",
        },
        {
            src: ASTRO5,
            title: "Asdfasdf",
        },
        {
            src: ASTRO6,
            title: "Asdfasdf",
        },
        {
            src: ASTRO7,
            title: "Asdfasdf",
        },
        {
            src: ASTRO2,
            title: "Asdfasdf",
        },
        {
            src: ASTRO3,
            title: "Asdfasdf",
        },
    ]
  return (
    <div className='astro-comp'>
      <Heading headingTitle="Premium Astrologers" />
      <div className='astro-card-div'>
        {astrologers.map((astrologer,index)=>(
            <AstroCard index={index} src={astrologer.src}/>
        ))}
      </div>
    </div>
  )
}

export default AstroComp
