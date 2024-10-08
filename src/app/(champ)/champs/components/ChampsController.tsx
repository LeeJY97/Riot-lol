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
import ChampsAll from "./ChampsAll";
import useMediaQuery from "@/components/ui/useMediaQuery";
import ChampsAllMobile from "./mobile/ChampsAllMobile";
import ChampSeparationByTagMobile from "./mobile/ChampSeparationByTagMobile";

type Props = {
  champTable: ChampTable;
};

const ChampsController = ({ champTable }: Props) => {
  const champs = convertChampsTableToArray(champTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  const champsSeparationByTag = separationChampsByTag(champsExtendCustomImage);

  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  console.log("isMobile", isMobile);
  console.log("isTablet", isTablet);
  console.log("isDesktop", isDesktop);

  const [viewOption, setViewOption] = useState("all");

  return (
    // <div className="flex flex-col gap-2 justify-end max-w-[1200px] min-w-[990px] p-4 relative">
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
        <>
          {!isMobile ? (
            <ChampSeparationByTag
              champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTag>
          ) : (
            <ChampSeparationByTagMobile champsSeparationByTag={champsSeparationByTag} />
          )}
        </>
      ) : (
        <>
          {!isMobile ? (
            <ChampsAll champs={champsExtendCustomImage} />
          ) : (
            <ChampsAllMobile champs={champsExtendCustomImage}></ChampsAllMobile>
          )}
        </>
      )}
    </div>
  );
};

export default ChampsController;
