"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "@/components/CustomSwiper";

type Props = {
  skins: {
    name: string;
    url: string;
  }[];
};

const SkinSection = ({ skins }: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-4">스킨 목록</h1>
        <div>
          <CustomSwiper slidesPerView={1}>
            {skins.map((skin) => (
              <SwiperSlide key={skin.url}>
                <div className="relative">
                  <img src={skin.url} alt={`${skin.name} 이미지`} />

                  <h1 className="absolute top-4 left-4 text-4xl italic">
                    {skin.name === "default" ? "기본 스킨" : skin.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </div>
  );
};

export default SkinSection;
