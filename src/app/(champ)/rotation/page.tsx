"use client";

import queryKey from "@/Queries/queryKey";
import { getChamps } from "@/server-actions/champAction";
import { getChampsExtendCustomImage, getChampsWithRotations } from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useQuery } from "@tanstack/react-query";
import ChampGrid from "../components/ChampGrid";
import Image, { StaticImageData } from "next/image";
import champBg from "@/public/assets/images/bg/jhin.jpg";
import CustomSwiper from "@/components/CustomSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [currentBg, setCurrentBg] = useState<StaticImageData | string>(champBg);

  // suspenseQuery -> 배포 안됨
  // useQuery -> suspense:true 사용 안됨
  const { data: rotationKeys, isPending: isRotationKeysPending } = useQuery<Rotation>({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`);
      // const rotationRes = await fetch(`/api/rotation`);
      const rotationKeys = await rotationRes.json();
      return rotationKeys;
    },
    staleTime: 0,
  });

  const { data: champTable, isPending: isChampTablePending } = useQuery<ChampTable>({
    queryKey: queryKey.champ.champs,
    queryFn: () => getChamps(),
    initialData: {},
    staleTime: 0,
  });

  if (isRotationKeysPending || isChampTablePending) {
    return <></>;
  }

  const rotationChamps = getChampsWithRotations(rotationKeys, champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(rotationChamps);

  const handleSlideChange = (swiper) => {
    const { activeIndex, slides } = swiper;

    if (activeIndex) {
      const defaultImage = slides[activeIndex].getElementsByTagName("input")[0].value;
      console.log("defaultImage", defaultImage);
      setCurrentBg(defaultImage);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-0 w-full h-full min-w-[1220px] z-0">
        <Image src={currentBg} alt={"dd"} layout="fill" className="object-cover" priority />
      </div>
      <div className="max-w-[1200px] min-w-[990px] pt-10 rounded-xl relative z-50">
        <div className="flex flex-col justify-center items-center h-20 mt-10 mb-4">
          <h1 className="text-6xl text-[#aa7d30] font-HeirofLight">로테이션 목록</h1>
        </div>
        <div className="w-[1200px] flex items-center mx-auto">
          {/* <CustomSwiper slidesPerView={"auto"}> */}
          <CustomSwiper
            slidesPerView={5}
            spaceBetween={4}
            handleSlideChange={handleSlideChange}
            allowTouchMove={false}>
            {champsExtendCustomImage.map((champ) => (
              <SwiperSlide key={champ.id} style={{ width: "500px" }}>
                <div className="relative">
                  <input
                    type="hidden"
                    name="defaultImage"
                    id="defaultImage"
                    value={champ.defaultImage}
                  />
                  <Image src={champ.loadingImage} alt="" width={300} height={300} />
                  <h1 className="absolute top-2 left-2">{champ.name}</h1>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
        {/* <ChampGrid champs={champsExtendCustomImage} /> */}
      </div>
    </>
  );
};

export default Rotation;
