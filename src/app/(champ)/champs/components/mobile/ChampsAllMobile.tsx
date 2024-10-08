import React from "react";
import { Champ, ChampCustomImage } from "@/types/Champs";
import ChampsGridMobile from "./ChampsGridMobile";
type Props = {
  champs: (Champ & ChampCustomImage)[];
};
const ChampsAllMobile = ({ champs }: Props) => {
  return (
    <div className="md:hidden flex flex-col justify-center items-center w-full max-w-[768px]">
      <div className="flex items-center">
        <h1 className="text-xl font-HeirofLight font-bold text-subColor">전체 챔피언 목록</h1>
      </div>
      <ChampsGridMobile champs={champs} />
    </div>
  );
};

export default ChampsAllMobile;
