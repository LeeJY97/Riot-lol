"use client";

import queryKey from "@/Queries/queryKey";
import { getChamps } from "@/server-actions/champAction";
import { getChampsExtendCustomImage, getChampsWithRotations } from "@/service/champService";
import { Champ, ChampCustomImage, ChampTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useQuery } from "@tanstack/react-query";
import Image, { StaticImageData } from "next/image";
import champBg from "@/public/assets/images/bg/jhin.jpg";
import CustomSwiper from "@/components/CustomSwiper";
import { SwiperClass, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { CHAMP_DEFAULT_IMAGE_BASE_URL, CHAMP_LOADING_IMAGE_BASE_URL } from "@/constant/urls";

const Rotation = () => {
  const [currentBg, setCurrentBg] = useState<StaticImageData | string>(champBg);
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

  if (isRotationKeysPending || isChampTablePending) {
    return <></>;
  }

  const rotationChamps = getChampsWithRotations(rotationKeys, champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(rotationChamps);

  const handleSlideChange = (swiper: SwiperClass) => {
    const { activeIndex, slides } = swiper;

    if (activeIndex) {
      const { value: champId, name: champName } =
        slides[activeIndex].getElementsByTagName("input")[0];
      const defaultImage = `${CHAMP_DEFAULT_IMAGE_BASE_URL}/${champId}_0.jpg`;

      setCurrentChampId(champId);
      setCurrentChampName(champName);
      setCurrentBg(defaultImage);
    }
  };

  return (
    <>
      <div className="fixed top-10 left-0 w-full h-full min-w-[1220px] z-0">
        <Image src={currentBg} alt={"dd"} layout="fill" className="object-cover blur-sm" priority />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      </div>
      <div className="max-w-[1200px] min-w-[990px] pt-10 rounded-xl relative z-50">
        <div className="flex flex-col justify-center items-center h-20 mt-10 mb-4">
          <div className="flex flex-col gap-2 items-center ">
            <h1 className="text-2xl text-white">로테이션 목록</h1>
            <h1 className="text-6xl text-[#aa7d30] font-HeirofLight">{currentChampName}</h1>
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
                <div className="relative">
                  <input type="hidden" id="defaultImage" value={champ.id} name={champ.name} />
                  <Image
                    src={champ.loadingImage}
                    alt=""
                    width={300}
                    height={300}
                    // className={`object-cover ${currentChampId !== champ.id && "blur-sm"}`}
                    className={`object-cover`}
                  />
                  {currentChampId !== champ.id && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
                      <div className="absolute w-[100%] top-1/2 flex items-center justify-center">
                        <h1 className="">{champ.name}</h1>
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
