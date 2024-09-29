"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // pagination 스타일 추가
import "swiper/css/navigation";
import "./swiper.css";

type Props = {
  skins: string[];
};

const SkinSwiper = ({ skins }: Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      centeredSlides
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      {skins.map((url) => (
        <SwiperSlide key={url}>
          <img src={url} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}>
    //   {skins.map((url) => (
    //     <SwiperSlide key={url}>1</SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

export default SkinSwiper;
