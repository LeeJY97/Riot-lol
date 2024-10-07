"use client";
import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "@/components/CustomSwiper";
import Image from "next/image";

type Props = {
  skins: {
    name: string;
    url: string;
  }[];
};

const SkinSection = ({ skins }: Props) => {
  return (
    <section className="w-full  max-w-[1200px] min-w-[1200px] mx-auto">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-4">스킨 목록</h1>
        <article>
          <CustomSwiper slidesPerView={1}>
            {skins.map((skin) => (
              <SwiperSlide key={skin.url}>
                <div className="relative">
                  <Image src={skin.url} width={1920} height={1080} alt={`${skin.name} 이미지`} />

                  <h1 className="absolute top-4 left-4 text-4xl italic">
                    {skin.name === "default" ? "기본 스킨" : skin.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </article>
      </div>
    </section>
  );
};

export default SkinSection;
