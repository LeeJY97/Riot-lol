import { getChamps } from "@/server-actions/champAction";
import { convertChampsTableToArray, getChampsExtendCustomImage } from "@/service/champService";
import { Metadata } from "next";
import React from "react";
import ChampGrid from "../components/ChampGrid";
import { CHAMP_TAGS } from "@/constant/champTags";

export const metadata: Metadata = {
  title: "전체 챔피언 목록",
  description: "리그 오브 레전드 전체 챔피언 목록",
};

// Fighter = "Fighter",
// Tank = "Tank",
// Assassin = "Assassin",
// Mage = "Mage",
// Marksman = "Marksman",
// Support = "Support",
// }

const Tags = Object.entries(CHAMP_TAGS).map(([key]) => key);

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const viewOption = "tag";

  console.log("Tags", Tags);

  return (
    <div className="max-w-[1200px] min-w-[990px] p-4">
      <h1>전체 챔피언 목록</h1>
      <ChampGrid champs={champsExtendCustomImage} />
    </div>
  );
};

export default Champs;
