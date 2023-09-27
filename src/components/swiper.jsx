import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
const swiper = () => {
  return (
    <Swiper
      modules={[Autoplay, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="mySwiper"
    >
      <SwiperSlide><img src="/slide-img1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/slide-img2.jpg" alt="" /></SwiperSlide>
    </Swiper>
  );
};

export default swiper;
