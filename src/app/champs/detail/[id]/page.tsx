import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import React from "react";
import SkinSwiper from "./SkinSwiper";
import tagMap from "@/utils/champTagMap";
import { skillInfo } from "./skillInfo";
import version from "@/utils/constant";
import SkinSection from "./SkinSection";
import SkillSection from "./SkillSection";
import InfoSection from "./InfoSection";

type Props = {
  params: {
    id: string;
  };
};

const requestOption: RequestInit = {
  next: {
    revalidate: 86400,
  },
};

export function generateMetadata({ params }: Props): Metadata {
  // 경로 매개변수 읽기
  const id = params.id;

  return {
    title: id,
  };
}

const ChampDetail = async ({ params }: Props) => {
  const { id } = params;
  const champ: Champ & ChampExtends = await getChamp(id, requestOption);
  const { title, name, lore, skins, tags, stats, image, spells, passive } = champ;

  const skinsInfo = skins.map((skin) => ({
    name: skin.name,
    url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`,
  }));

  const activeInfo = spells.map((spell, idx) => {
    const { id, name, cooldownBurn, description, costBurn, costType, rangeBurn, image } = spell;
    const keyMap = {
      0: "Q",
      1: "W",
      2: "E",
      3: "R",
    };

    return {
      id,
      keyboard: keyMap[idx],
      name,
      description,
      cooldownBurn,
      costBurn,
      costType,
      rangeBurn,
      url: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${image.full}`,
    };
  });

  const passiveInfo = {
    id: "P",
    keyboard: "P",
    name: passive.name,
    description: passive.description,
    url: `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passive.image.full}`,
  };

  const skillsInfo: skillInfo[] = [passiveInfo, ...activeInfo];

  // console.log("스펠", spells);
  // const spellImageUrl = spells.map((spell) => console.log("스펠", spell.image));

  const info = {
    imageUrl: skinsInfo[0].url,
    title,
    name,
    lore,
    tags,
  };

  return (
    <div className="flex flex-col max-w-[1920px] gap-10 mx-auto">
      <div className="w-[100%]">
        <InfoSection {...info} />
      </div>
      <div className="max-w-[1200px] min-w-[1200px] mx-auto">
        <SkillSection skills={skillsInfo} />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <SkinSection skins={skinsInfo} />
      </div>
    </div>
  );
};

export default ChampDetail;
