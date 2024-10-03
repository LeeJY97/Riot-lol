import { getChamps } from "@/server-actions/champAction";
import { Metadata } from "next";
import React from "react";
import ChampsController from "./components/ChampsController";
import rift from "@/public/assets/images/rift.webp";
import Image from "next/image";

export const metadata: Metadata = {
  title: "전체 챔피언 목록",
  description: "리그 오브 레전드 전체 챔피언 목록",
};

const Champs = async () => {
  const champTable = await getChamps();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full">
        <Image src={rift} alt={"dd"} layout="fill"></Image>
      </div>
      <div className="pt-[56px]">
        <ChampsController champTable={champTable} />
      </div>
    </>
    // <div className="flex justify-end max-w-[1440px] min-w-[990px] p-4 relative">
    //   <div className="absolute right-4 flex flex-col gap-10 w-[15%]">
    //     <select
    //       className="h-6 w-[100%] text-black"
    //       // value={sortOption}
    //       // onChange={(e) => setSortOption(e.target.value)}
    //     >
    //       <option value="asc">전체</option>
    //       <option value="desc">역할군</option>
    //     </select>
    //   </div>
    //   {viewOption === "tag" ? (
    //     <ChampSeparationByTag champsSeparationByTag={champsSeparationByTag}></ChampSeparationByTag>
    //   ) : (
    //     <>
    //       <h1>전체 챔피언 목록</h1>
    //       <ChampGrid champs={champsExtendCustomImage} />
    //     </>
    //   )}
    // </div>
  );
};

export default Champs;
