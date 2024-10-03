import { getChamps } from "@/server-actions/champAction";
import {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  separationChampsByTag,
} from "@/service/champService";
import { Metadata } from "next";
import React from "react";
import ChampGrid from "../components/ChampGrid";
import ChampSeparationByTag from "../components/ChampSeparationByTag";

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

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const champsSeparationByTag = separationChampsByTag(champsExtendCustomImage);

  const viewOption = "tag";

  return (
    <div className="flex justify-end max-w-[1440px] min-w-[990px] p-4 relative">
      <div className="absolute top-10 left-4 flex flex-col gap-10 w-[15%] bg-black">
        <input type="text" name="" id="" placeholder="검색" />
        <select
          className="h-6 w-[100%] text-black"
          // value={sortOption}
          // onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="asc">전체</option>
          <option value="desc">역할군</option>
        </select>
      </div>
      <div className="w-[80%]">
        {viewOption === "tag" ? (
          <ChampSeparationByTag
            champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTag>
        ) : (
          <>
            <h1>전체 챔피언 목록</h1>
            <ChampGrid champs={champsExtendCustomImage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Champs;
