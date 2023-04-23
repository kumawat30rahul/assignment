import React from "react";
import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import ASTRO1 from '../../../../assets/1.png'
import ASTRO2 from '../../../../assets/2.png'
import ASTRO3 from '../../../../assets/3.png'
import ASTRO4 from '../../../../assets/4.png'
import ASTRO5 from '../../../../assets/5.png'
import ASTRO6 from '../../../../assets/6.png'
import ASTRO7 from '../../../../assets/7.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

export default function UTSlider() {
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
const settings = {
  className: "center ut-slider-main-div",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
};
return (
  <div className="user-test-slider">
    <Slider {...settings}>
    {astrologers.map((astrologer,index)=>(
      <div className="slider-card" key={index}>
        <div className="video-icon">
          <PlayCircleOutlinedIcon className="play-icon"/>
        </div>
        <img src={astrologer.src} alt="" className="swiper-slide-img" />
      </div>
    ))}
    </Slider>
  </div>
  );
}


