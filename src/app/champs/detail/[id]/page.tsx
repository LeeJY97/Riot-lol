import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import React from "react";
import SkinSwiper from "./SkinSwiper";
import tagMap from "@/utils/champTagMap";
import { skillInfo } from "./skillInfo";
import SkillCard from "./SkillCard";

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
  const { skins, tags, stats, info, image, spells, passive } = champ;

  const skinImageUrl = skins.map(
    (skin) => `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`,
  );

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
      // cooldownBurn,
      // costBurn,
      // costType,
      // rangeBurn,
      url: `https://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${image.full}`,
    };
  });

  const passiveInfo = {
    id: "P",
    keyboard: "P",
    name: passive.name,
    description: passive.description,
    url: `https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${passive.image.full}`,
  };

  const skillsInfo: skillInfo[] = [passiveInfo, ...activeInfo];

  // console.log("스펠", spells);
  // const spellImageUrl = spells.map((spell) => console.log("스펠", spell.image));

  return (
    <div className="flex flex-col max-w-[1920px] gap-10 mx-auto">
      <section className="w-[100%] relative">
        <div className="flex justify-center">
          <div className="w-[100%] min-w-[1200px] max-w-[1920px] opacity-50 ">
            <img src={skinImageUrl[0]} alt="" className="w-[100%] object-cover" />
          </div>
        </div>
        <div className="absolute top-1/3 w-[40%] min-w-[500px] max-w-[900px] p-4">
          <h1 className="text-4xl font-bold text-[#C8AA6E]">{champ.title}</h1>
          <div className="flex">
            <h1 className="text-8xl">{champ.name}</h1>
            <span className="text-2xl">{`(${tags.map((tag) => tagMap[tag]).join("/")})`}</span>
          </div>
          <span className="text-lg">{champ.lore}</span>
        </div>
      </section>
      <section className="w-[100%] min-w-[1200px]">
        {/* <h1 className="text-2xl">스킬 정보</h1> */}
        <div className="flex justify-between gap-4">
          {skillsInfo.map((skillInfo) => (
            <SkillCard skillInfo={skillInfo} />
          ))}
        </div>
      </section>
      <section className="max-w-[1440px]">
        <div className="flex flex-col">
          <h1 className="text-2xl">스킨 목록</h1>
          <div>
            <SkinSwiper skins={skinImageUrl} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChampDetail;
