import { getChamps } from "@/server-actions/champAction";
import { convertChampsTableToArray, getChampsExtendCustomImage } from "@/service/champService";
import { Metadata } from "next";
import React from "react";
import ChampGrid from "../components/ChampGrid";

export const metadata: Metadata = {
  title: "전체 챔피언 목록",
  description: "리그 오브 레전드 전체 챔피언 목록",
};

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  return (
    <div className="max-w-[1200px] min-w-[990px] p-4">
      <ChampGrid champs={champsExtendCustomImage} />
    </div>
  );
};

export default Champs;
