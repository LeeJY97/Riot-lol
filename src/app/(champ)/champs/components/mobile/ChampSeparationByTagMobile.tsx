import React from "react";

import Fighter from "@/public/assets/images/champTags/Fighter.webp";
import Tank from "@/public/assets/images/champTags/Tank.webp";
import Assassin from "@/public/assets/images/champTags/Assassin.webp";
import Mage from "@/public/assets/images/champTags/Mage.webp";
import Marksman from "@/public/assets/images/champTags/Marksman.webp";
import Support from "@/public/assets/images/champTags/Support.webp";
import Image from "next/image";
import { ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import ChampsGridMobile from "./ChampsGridMobile";

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

const ChampSeparationByTagMobile = ({ champsSeparationByTag }: Props) => {
  return (
    <ul className="z-10">
      {Object.keys(champsSeparationByTag).map((tag) => (
        <ul key={tag} className="pl-2 pr-2 rounded-xl">
          <div className="flex flex-col justify-center items-center h-20 mb-4">
            <div className="flex gap-2">
              <Image
                src={tagIconMap[tag]}
                alt={`${champTagMapKr[tag]} 아이콘`}
                width={30}
                height={30}
                priority
              />
              <h1 className="text-xl text-subColor font-HeirofLight font-bold">
                {champTagMapKr[tag]}
              </h1>
            </div>
            <h1 className="text-sm text-[#c9c9c9]">{champsSeparationByTag[tag].length} 명</h1>
          </div>
          <ChampsGridMobile champs={champsSeparationByTag[tag]} />
        </ul>
      ))}
    </ul>
  );
};

export default ChampSeparationByTagMobile;
