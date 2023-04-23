import React, { useEffect, useState } from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LIVE from '../../../../assets/Live.svg'
import './styles.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AstroCard({index,src}) {
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
    <div className={`astro-card ${
                        index === 1 || 
                        index === 4 ||
                        index === 7  ? 'down' : ''}`}>
            <div className='top'>
                <div className='astro-img-div'>
                    <img src={src} alt='' className='astro-img' />
                </div>
                <div className='astro-content-div'>
                    <div className='astro-content-top'>
                        {loading ? <Skeleton width={50}/> : <span className='exp'>10+ exp</span>}
                        {loading ? <Skeleton width={50}/> :
                            <div className='online'>
                                <CircleIcon className="circle-icon" /> Online
                            </div>
                        }
                    </div>
                    <div className='astro-content-bottom'>
                    <div className='bottom-content-first'>
                    {loading ? <Skeleton circle height="10%" width='10%'/> :<span className='rating'><StarOutlinedIcon className="circle-icon" /> 4.5</span> }
                    {loading ? <Skeleton width={80}/> :<span className='name'>Astrologer Ramraj</span>}
                    {loading ? <Skeleton width={20}/> :<span className='astro-card-heading special-heading'>Specialities</span>}
                    {loading ? <Skeleton width={70}/> :<span className='astro-card-desc speciality'>Love,Business,Life</span>}
                    {loading ? <Skeleton width={20}/> :<span className='astro-card-heading skills-heading'>Skills</span>}
                    {loading ? <Skeleton width={70}/> :<span className='astro-card-desc skills'>Vedic, Astrologer, Kundali</span>}
                    </div>
                    <div className='bottom-content-second'></div>
                    {loading ? <Skeleton height="20%"  width={40}/> :
                        <span className='price-heading'>
                            Price
                            <br />
                            <span className='price'>$10</span>
                            /min
                        </span>
                    }
                    </div>
                </div>
            </div>
            <div className='bottom'>
                {loading ? <Skeleton width={50}/> :
                    <div className='chat astro-card-btn'>
                    <SmsOutlinedIcon className='bottom-btn-icons'/> Chat
                    </div>
                }
                <div className='live astro-card-btn'>
                {loading ? <Skeleton circle height='100%' width="100%"/> : <img src={LIVE} alt='' className='live-svg'/> }
                </div>
                {loading ? <Skeleton width={50}/> : 
                    <div className='call astro-card-btn border-left'>
                    <PhoneOutlinedIcon className='bottom-btn-icons'/> Call
                    </div>
                }
            </div>
        </div>
  )
}

export default AstroCard
