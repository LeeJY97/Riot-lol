"use client";
import {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  separationChampsByTag,
} from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import React from "react";
import ChampSeparationByTag from "../../components/ChampSeparationByTag";
import ChampGrid from "../../components/ChampGrid";

type Props = {
  champTable: ChampTable;
};

const ChampsController = ({ champTable }: Props) => {
  const champs = convertChampsTableToArray(champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const champsSeparationByTag = separationChampsByTag(champsExtendCustomImage);

  const viewOption = "tag";

  return (
    <div className="flex justify-end max-w-[1440px] min-w-[990px] p-4 relative">
      <div className="absolute right-4 flex flex-col gap-10 w-[15%]">
        <select
          className="h-6 w-[100%] text-black"
          // value={sortOption}
          // onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="asc">전체</option>
          <option value="desc">역할군</option>
        </select>
      </div>
      {viewOption === "tag" ? (
        <ChampSeparationByTag champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTag>
      ) : (
        <>
          <h1>전체 챔피언 목록</h1>
          <ChampGrid champs={champsExtendCustomImage} />
        </>
      )}
    </div>
  );
};

export default ChampsController;
