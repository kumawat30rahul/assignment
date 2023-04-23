import React from 'react'
import './styles.css'
import BG from '../../../assets/about_bg.png'
import Button from '../Common/Button'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedIcon from '@mui/icons-material/Verified';

function About() {

    const services = [
        {
            icon: <SupportAgentIcon className='icon'/>,
            title: "24 X 7 Customer Support"
        },
        {
            icon: <img className='icon img-icon' src="https://cdn-icons-png.flaticon.com/512/181/181645.png" alt="" />,
            title: "100% Refund if Unsatisfied"
        },
        {
            icon: <LockIcon className='icon'/>,
            title: "24 X 7 Customer Support"
        },
        {
            icon: <VerifiedIcon className='icon'/>,
            title: "Verified Astrologers"
        },
        {
            icon: <img className='icon img-icon' src="https://cdn.onlinewebfonts.com/svg/img_452747.png" alt="" />,
            title: "24 X 7 Customer Support"
        }
    ]
    
  return (
    <div className='About'>
      <div className='about-image-div'>
        <img className='about-image' src={BG} alt='' />
      </div>
      <div className='about-contents-div'>
        <div className='about-contents'>
            <h1 className='about-contents-title'>"Astrology for Clarity"</h1>
            <span className='about-contens-tagline'>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy </span>
            <Button 
                title="Consult Now"
                buttonFunction={()=> alert("Redirecting to consulting page")}
                />
        </div>
        <div className='about-info'>
            {services.map((service)=>(
                <div className='service-div'>
                    {service.icon}
                    <span className='service-title'>
                        {service.title}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default About
