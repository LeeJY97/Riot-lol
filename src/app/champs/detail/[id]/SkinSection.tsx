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
    <div className="w-[100%]">
      <div className="flex flex-col">
        <h1 className="text-2xl">스킨 목록</h1>
        <div>
          <CustomSwiper slidesPerView={1}>
            {skins.map((skin) => (
              <SwiperSlide key={skin.url}>
                <div className="relative">
                  <img src={skin.url} alt="" />
                  <h1 className="absolute top-2 left-2">
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
