import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import React from "react";
import SkinSection from "./components/SkinSection";
import SkillSection from "./components/SkillSection";
import InfoSection from "./components/InfoSection";
import { convertDetailPageInfos } from "@/service/champService";
import Image from "next/image";
import bg from "@/public/assets/images/bg/jhin2.jpg";
import rift from "@/public/assets/images/bg/rift.webp";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.id,
  };
}

const requestOption: RequestInit = {
  next: {
    revalidate: 86400,
  },
};

const ChampDetail = async ({ params }: Props) => {
  const champ: Champ & ChampExtends = await getChamp(params.id, requestOption);
  const { info, skillsInfo, skinsInfo } = convertDetailPageInfos(champ);

  return (
    <div className="flex flex-col w-[full] max-w-[1440px] gap-10 mx-auto relative">
      {/* 페이지 전체에 배경 넣기 */}
      {/* <div className="fixed left-0 top-0 w-svw h-svh -z-50">
        <Image src={info.imageUrl} alt={"메인 배경사진"} layout="fill" className="-z-50"></Image>
      </div> */}
      <InfoSection {...info} />
      <SkillSection skills={skillsInfo} />
      <SkinSection skins={skinsInfo} />
    </div>
  );
};

export default ChampDetail;
