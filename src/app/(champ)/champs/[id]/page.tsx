import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import React from "react";
import SkinSection from "./components/SkinSection";
import SkillSection from "./components/SkillSection";
import InfoSection from "./components/InfoSection";
import { convertDetailPageInfos } from "@/service/champService";

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
    <div className="flex flex-col w-[full] max-w-[1440px] gap-10 mx-auto">
      {/* 페이지 전체에 배경 넣기 */}
      <InfoSection {...info} />
      <SkillSection skills={skillsInfo} />
      {/* <div className="max-w-[1200px] mx-auto"> */}
      <SkinSection skins={skinsInfo} />
      {/* </div> */}
    </div>
  );
};

export default ChampDetail;
