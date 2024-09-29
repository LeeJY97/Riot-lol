"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // pagination 스타일 추가
import "swiper/css/navigation";
import "./swiper.css";

import React from "react";

type Props = {
  slidesPerView?: number;
  children: React.JSX.Element[];
  // children: any;
};

const CustomSwiper = ({ children, slidesPerView = 1 }: Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      navigation
      centeredSlides
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}>
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
