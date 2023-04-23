import React from 'react'
import SUN from '../../../../assets/SUN.svg'
import './styles.css'
import UTSlider from '../Slider'
import Heading from '../../Common/Heading'
import './styles.css'



function Testimonials() {
  return (
    <div className='user-testimonials'>
      <div className='heading'>
        <img src={SUN} alt='sun' className='sun'/>
        <Heading headingTitle='User Testimonials' />
      </div>
      <div className='ut-slider'>
        <UTSlider />
      </div>
    </div>
  )
}

export default Testimonials
