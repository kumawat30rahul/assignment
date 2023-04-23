import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { EffectFade, Navigation, Pagination } from "swiper";
import RCard from "../R-Card";
import AvatarSlider from "./avatar";

export default function RSlider({ userReviews }) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onAvatarClick = (index) => {
    const reviewIndex = userReviews.findIndex(
      (review) => review.avatar === userReviews[index].avatar
    );
    setActiveReviewIndex(reviewIndex);
    setActiveSlideIndex(reviewIndex);
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        initialSlide={0}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper review-swiper"
        onSlideChange={(swiper) => {
          setActiveReviewIndex(swiper.activeIndex);
        }}
      >
        {userReviews.map((review,index) => (
          <SwiperSlide key={review.id}>
            <RCard
              stars={review.stars}
              desc={review.desc}
              src={review.avatar}
              isActive={review.avatar === userReviews[activeReviewIndex].avatar}
            />
            {/* <AvatarSlider index={index} userReviews={userReviews} onAvatarClick={onAvatarClick} className="avatars"/> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
