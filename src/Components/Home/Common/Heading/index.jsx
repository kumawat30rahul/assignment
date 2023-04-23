import React from 'react'
import './styles.css'
import STAR from '../../../../assets/star.svg'


function Heading({headingTitle}) {
  return (
    <div className='ut-title-div'>
        <img src={STAR} alt="star" />
        <h1 className={`title ut-title ${headingTitle === 'Many Problems One Solution' ? 'small' : ''}`}>{headingTitle}</h1>
        <img src={STAR} alt="star" />
    </div>
  )
}

export default Heading
