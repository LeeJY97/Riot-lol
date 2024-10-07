import { CHAMP_TAGS, ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React from "react";
import ChampGrid from "../../components/ChampGrid";
import Fighter from "@/public/assets/images/champTags/Fighter.webp";
import Tank from "@/public/assets/images/champTags/Tank.webp";
import Assassin from "@/public/assets/images/champTags/Assassin.webp";
import Mage from "@/public/assets/images/champTags/Mage.webp";
import Marksman from "@/public/assets/images/champTags/Marksman.webp";
import Support from "@/public/assets/images/champTags/Support.webp";
import Image from "next/image";

type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const tagIconMap = {
  Fighter: Fighter,
  Tank: Tank,
  Assassin: Assassin,
  Mage: Mage,
  Marksman: Marksman,
  Support: Support,
};

const ChampSeparationByTag = ({ champsSeparationByTag }: Props) => {
  return (
    <div className="w-full">
      <ul className="z-10">
        {Object.keys(champsSeparationByTag).map((tag) => (
          <ul
            key={tag}
            // className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 bg-[rgba(255,255,255,.2)] rounded-xl">
            // className="mb-10 pb-10 pt-10 pl-4 pr-4 rounded-xl">
            // className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 rounded-xl">
            className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 rounded-xl border-[#9e9e9e]">
            <div className="flex flex-col justify-center items-center h-20 mb-4">
              <div className="flex gap-2">
                <Image
                  src={tagIconMap[tag]}
                  alt={`${champTagMapKr[tag]} 아이콘`}
                  width={30}
                  height={30}
                  priority
                />
                {/* <h1 className="text-4xl text-[#aa7d30] font-HeirofLight">{champTagMapKr[tag]}</h1> */}
                <h1 className="text-4xl text-subColor font-HeirofLight font-bold">
                  {champTagMapKr[tag]}
                </h1>
              </div>
              <h1 className="text-2xl text-[#c9c9c9] mb-8">
                {champsSeparationByTag[tag].length} 명
              </h1>
            </div>
            <ChampGrid champs={champsSeparationByTag[tag]} />
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ChampSeparationByTag;
