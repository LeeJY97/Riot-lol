"use client";
import {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  separationChampsByTag,
} from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import React, { useState } from "react";
import ChampSeparationByTag from "./ChampSeparationByTag";
import ChampGrid from "../../components/ChampGrid";

type Props = {
  champTable: ChampTable;
};

const ChampsController = ({ champTable }: Props) => {
  const champs = convertChampsTableToArray(champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const champsSeparationByTag = separationChampsByTag(champsExtendCustomImage);

  const [viewOption, setViewOption] = useState("all");

  return (
    // <div className="flex flex-col gap-2 justify-end max-w-[1200px] min-w-[990px] p-4 relative">
    <div className="flex flex-col gap-2 justify-end p-4 relative">
      <div className="flex flex-col gap-10 w-[15%]">
        <select
          className="h-6 w-[100%] text-black"
          value={viewOption}
          onChange={(e) => setViewOption(e.target.value)}>
          <option value="all">전체</option>
          <option value="tag">역할군</option>
        </select>
      </div>
      {viewOption === "tag" ? (
        <ChampSeparationByTag champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTag>
      ) : (
        <div className="flex flex-col">
          {/* <div className="flex gap-4 mb-4 text-xl"> */}
          <div className="mb-10 pb-10 border-b-2 pt-10 pl-4 pr-4 bg-[rgba(255,255,255,.2)] rounded-xl">
            <div className="flex flex-col justify-center items-center h-20 mb-4">
              <h1 className="text-6xl text-[#aa7d30] font-HeirofLight">전체 챔피언 목록</h1>
            </div>
            <ChampGrid champs={champsExtendCustomImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChampsController;
