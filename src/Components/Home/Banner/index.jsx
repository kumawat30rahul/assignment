import React from 'react'
import BANNER from '../../../assets/banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './styles.css'

function Banner() {
        const bannerSlides = Array.from({ length: 3 }, (_, index)=>{
            return <img src={BANNER} key={index} alt='' className='banner_slides'/>
        })

    const settings = {
        className: "banner-slider-main-div",
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      };
      return (
        <div className='banner-slider-div'>
          <Slider {...settings} className="banner-div">
            {bannerSlides}
          </Slider>
        </div>
      );
}

export default Banner
