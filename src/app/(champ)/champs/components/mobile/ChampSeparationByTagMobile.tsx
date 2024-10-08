import React from "react";

import Fighter from "@/public/assets/images/champTags/Fighter.webp";
import Tank from "@/public/assets/images/champTags/Tank.webp";
import Assassin from "@/public/assets/images/champTags/Assassin.webp";
import Mage from "@/public/assets/images/champTags/Mage.webp";
import Marksman from "@/public/assets/images/champTags/Marksman.webp";
import Support from "@/public/assets/images/champTags/Support.webp";
import Image from "next/image";
import { Champ, ChampCustomImage, ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import Link from "next/link";

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
              {/* <h1 className="text-4xl text-[#aa7d30] font-HeirofLight">{champTagMapKr[tag]}</h1> */}
              <h1 className="text-xl text-subColor font-HeirofLight font-bold">
                {champTagMapKr[tag]}
              </h1>
            </div>
            <h1 className="text-sm text-[#c9c9c9]">{champsSeparationByTag[tag].length} 명</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full pl-2 pr-2">
            {champsSeparationByTag[tag].map((champ: Champ & ChampCustomImage) => (
              <Link key={champ.id} href={`/champs/${champ.id}`} className="w-full">
                <div className="flex flex-col justify-center items-center w-full relative">
                  <div className="w-full h-full">
                    <Image src={champ.defaultImage} alt="" width={1920} height={1080} />
                  </div>
                  <div className="absolute top-2 right-2 h-[30px] flex items-center">
                    <div className="bg-black opacity-75 pl-2 pr-2 rounded-lg">
                      <span className="text-sm">{champ.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ul>
      ))}
    </ul>
  );
};

export default ChampSeparationByTagMobile;
