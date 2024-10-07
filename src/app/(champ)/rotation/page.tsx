"use client";

import queryKey from "@/Queries/queryKey";
import { getChamps } from "@/server-actions/champAction";
import { getChampsExtendCustomImage, getChampsWithRotations } from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useQuery } from "@tanstack/react-query";
// import Image, { StaticImageData } from "next/image";
// import champBg from "@/public/assets/images/bg/jhin.jpg";
import CustomSwiper from "@/components/CustomSwiper";
import { SwiperClass, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { CHAMP_DEFAULT_IMAGE_BASE_URL } from "@/constant/urls";
import { getDefaultImage } from "@/utils/champion";

const Rotation = () => {
  // const [currentBg, setCurrentBg] = useState<StaticImageData | string>(champBg);
  const [currentBg, setCurrentBg] = useState<string>("@/public/assets/images/bg/jhin.jpg");
  const [currentChampId, setCurrentChampId] = useState<string>();
  const [currentChampName, setCurrentChampName] = useState<string>();

  // suspenseQuery -> 배포 안됨
  // useQuery -> suspense:true 사용 안됨
  const { data: rotationKeys, isPending: isRotationKeysPending } = useQuery<Rotation>({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`);
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

  // if (isRotationKeysPending || isChampTablePending) {
  //   return <></>;
  // }

  const rotationChamps = getChampsWithRotations(rotationKeys, champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(rotationChamps);

  const handleSlideChange = (swiper: SwiperClass) => {
    const { activeIndex, slides } = swiper;

    if (activeIndex) {
      const { value: champId, name: champName } =
        slides[activeIndex].getElementsByTagName("input")[0];
      const defaultImage = getDefaultImage(champId);

      setCurrentChampId(champId);
      setCurrentChampName(champName);
      setCurrentBg(defaultImage);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-0 w-full h-full min-w-[1220px] z-0">
        {/* 기본 img 태그 */}
        <div className="relative w-full h-full">
          <img
            src={currentBg}
            alt={`${currentChampName} 배경 이미지`}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        {/* Image 태그 */}
        {/* <Image
          src={currentBg}
          alt={`${currentChampName} 배경 이미지`}
          layout="fill"
          className="object-cover blur-sm"
          priority
        /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      </div>
      <div className="max-w-[1200px] min-w-[990px] pt-10 rounded-xl relative z-50">
        <div className="flex flex-col justify-center items-center h-20 mt-10 mb-4">
          <div className="flex flex-col gap-2 items-center ">
            <h1 className="text-2xl ">로테이션 목록</h1>
            <h1 className="text-6xl text-[#aa7d30] font-HeirofLight font-bold">
              {currentChampName}
            </h1>
          </div>
        </div>
        <div className="w-[1200px] flex items-center mx-auto mt-14">
          <CustomSwiper
            slidesPerView={5}
            spaceBetween={4}
            handleSlideChange={handleSlideChange}
            allowTouchMove={false}>
            {champsExtendCustomImage.map((champ) => (
              <SwiperSlide key={champ.id} style={{ width: "500px" }}>
                <div className={`relative `}>
                  <input type="hidden" id="defaultImage" value={champ.id} name={champ.name} />
                  <img src={champ.loadingImage} alt={`${champ.name} 이미지`} fetchPriority="high" />
                  {/* <Image
                    src={champ.loadingImage}
                    alt={`${champ.name} 이미지`}
                    width={300}
                    height={300}
                    className={`object-cover`}
                  /> */}
                  {currentChampId !== champ.id && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
                      <div className="absolute w-full top-1/2 flex items-center justify-center">
                        <h1 className="absolute z-50 text-subColor2">{champ.name}</h1>
                      </div>
                    </>
                  )}
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
