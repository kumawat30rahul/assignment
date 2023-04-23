import React from 'react'
import FACEBOOK from '../../../assets/facebook.svg'
import INSTA from '../../../assets/insta.svg'
import TWITTER from '../../../assets/twitter.svg'
import YOUTUBE from '../../../assets/youtube.svg'
import LOGO from '../../../assets/LOGO.svg'
import RAZORPAY from '../../../assets/razorpay.svg'
import STRIPE from '../../../assets/stripe.svg'
import PAYTM from '../../../assets/paytm.svg'
import './styles.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='f-about'>
        <img src={LOGO} alt='' className='f-img' />
        <div className='guruji-about'>
            <span className='f-span'>
            Guruji is a platform where astrologers can provide consultant service to users and charge money for this. Guruji reviews the information of astrologers and make sure users can enjoy service beyond a certain standard.
            </span>
        </div>
        <div className='f-socials'>
            <img className='socials-icon' src={FACEBOOK} alt='' />
            <img className='socials-icon' src={INSTA} alt='' />
            <img className='socials-icon' src={TWITTER} alt='' />
            <img className='socials-icon' src={YOUTUBE} alt='' />
        </div>
        <div className='payments'>
            <h1 className='f-title-h1'>Trusted & Seals</h1>
            <img className='f-payment-img' src={RAZORPAY} alt='' />
            <img className='f-payment-img' src={STRIPE} alt='' />
            <img className='f-payment-img' src={PAYTM} alt='' />
        </div>
      </div>
      <div className='f-content'>
      <div className='FIRST-DIV'>
        <div className='first'>
                <h1 className='f-title-h1'>Company</h1>
                <ul className='f-ul'>
                    <li className='f-li'>Home</li>
                    <li className='f-li'>Privacy Policy</li>
                    <li className='f-li'>T & C</li>
                    <li className='f-li'>Varied Payment</li>
                </ul>
            </div>
            <div className='second'>
            <h1 className='f-title-h1'>Collaborate</h1>
            <ul className='f-ul'>
                <li className='f-li'>Clever Tap</li>
                <li className='f-li'>Exotel</li>
                <li className='f-li'>Quora</li>
                <li className='f-li'>Youtube</li>
                <li className='f-li'>Facebook</li>
                <li className='f-li'>Google</li>
            </ul>
        </div>
      </div>
      <div className='SECOND-DIV'>
      <div className='third'>
                <h1 className='f-title-h1'>Support</h1>
                <ul className='f-ul'>
                <li className='f-li'>Home</li>
                    <li className='f-li'>Privacy Policy</li>
                    <li className='f-li'>T & C</li>
                    <li className='f-li'>Varied Payment</li>
                </ul>
            </div>
      
        <div className='fourth'>
            <h1 className='f-title-h1'>Immportant Link</h1>
            <ul className='f-ul'>
            <li className='f-li'></li>
                <li className='f-li'>Tarot Reader</li>
                <li className='f-li'>Vedix Astrology</li>
                <li className='f-li'>Palmistry</li>
                <li className='f-li'>Geomology</li>
                <li className='f-li'>Vastu</li>
                <li className='f-li'>Numerology</li>
            </ul>
        </div>
      </div>
      </div>
      <div className='f-form'>
        <form className='form'>
            <input type="text" className='input fullname' placeholder='Your Name' />
            <input type="email" className='input email' placeholder='Email' />
            <textarea rows="4" cols="50" className='input textarea' placeholder='Query' />
            <button className='f-btn'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
