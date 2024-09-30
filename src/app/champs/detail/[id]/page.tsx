import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import React from "react";
import SkinSection from "./SkinSection";
import SkillSection from "./SkillSection";
import InfoSection from "./InfoSection";
import { getDetailPageInfos } from "@/service/champService";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.id;

  return {
    title: id,
  };
}

const requestOption: RequestInit = {
  next: {
    revalidate: 86400,
  },
};

const ChampDetail = async ({ params }: Props) => {
  const champ: Champ & ChampExtends = await getChamp(params.id, requestOption);
  const { info, skillsInfo, skinsInfo } = getDetailPageInfos(champ);

  return (
    <div className="flex flex-col max-w-[1920px] gap-10 mx-auto">
      <div className="w-[100%]">
        <InfoSection {...info} />
      </div>
      <div className="max-w-[1200px] min-w-[1200px] mx-auto">
        {" "}
        {/** 이걸 Section에 넣을 수도 */}
        <SkillSection skills={skillsInfo} />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <SkinSection skins={skinsInfo} />
      </div>
    </div>
  );
};

export default ChampDetail;
