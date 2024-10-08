"use client";
import {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  separationChampsByTag,
} from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import React, { useState } from "react";
import ChampSeparationByTagController from "./ChampSeparationByTagController";
import ChampsAllController from "./ChampsAllController";

type Props = {
  champTable: ChampTable;
};

const ChampsController = ({ champTable }: Props) => {
  const champs = convertChampsTableToArray(champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const champsSeparationByTag = separationChampsByTag(champsExtendCustomImage);

  const [viewOption, setViewOption] = useState("all");

  return (
    <div className="flex flex-col gap-2 justify-end p-4 relative">
      <div className="flex flex-col gap-10 w-[15%] pl-4">
        <select
          className="h-6 w-[150px] text-black"
          value={viewOption}
          onChange={(e) => setViewOption(e.target.value)}>
          <option value="all">전체</option>
          <option value="tag">역할군</option>
        </select>
      </div>
      {viewOption === "tag" ? (
        <ChampSeparationByTagController champsSeparationByTag={champsSeparationByTag} />
      ) : (
        <ChampsAllController champs={champsExtendCustomImage} />
      )}
    </div>
  );
};

export default ChampsController;
