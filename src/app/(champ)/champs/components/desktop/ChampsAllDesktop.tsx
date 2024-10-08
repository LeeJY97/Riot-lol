import React from "react";
import ChampGrid from "./ChampGrid";
import { Champ, ChampCustomImage } from "@/types/Champs";

type Props = {
  champs: (Champ & ChampCustomImage)[];
};

const ChampsAllDesktop = ({ champs }: Props) => {
  return (
    <div className="hidden md:flex pt-[56px] max-w-[1200px] min-w-[990px]">
      <div className="flex flex-col">
        <div className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 rounded-xl">
          <div className="flex flex-col justify-center items-center h-20 mb-4">
            <h1 className="text-4xl font-HeirofLight font-bold text-subColor mb-8 ">
              전체 챔피언 목록
            </h1>
          </div>
          <ChampGrid champs={champs} />
        </div>
      </div>
    </div>
  );
};

export default ChampsAllDesktop;
