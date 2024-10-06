"use client";

import { Swiper, SwiperClass } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // pagination 스타일 추가
import "swiper/css/navigation";
import "./swiper.css";

import React from "react";

type Props = {
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  handleSlideChange?: (swiper: SwiperClass) => void;
  allowTouchMove?: boolean;
  children: React.JSX.Element[];
  // children: any;
};

const CustomSwiper = ({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  handleSlideChange,
  allowTouchMove = true,
}: Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      // navigation
      navigation
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      allowTouchMove={allowTouchMove}
      onSlideChange={handleSlideChange}>
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
