import React from 'react'
import BG from '../../../../assets/bg-Vector.svg'
import './styles.css'

function Background({ children }) {
    return (
        <div className='background-div'>
            <div className='background'>
                <div className='content'>
                    {children}
                </div>
            </div>
            <img src={BG} alt='' className='papercut-img' />
        </div>
    )
}

export default Background
