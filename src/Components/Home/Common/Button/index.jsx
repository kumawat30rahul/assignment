import React from 'react'
import './styles.css'

function Button({title,buttonFunction}) {
  return (
    <>
      <button className='btn' onClick={buttonFunction}>{title}</button>
    </>
  )
}

export default Button
