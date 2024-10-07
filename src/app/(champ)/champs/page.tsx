import { getChamps } from "@/server-actions/champAction";
import { Metadata } from "next";
import React from "react";
import ChampsController from "./components/ChampsController";
import bg from "@/public/assets/images/bg/jhin.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "전체 챔피언 목록",
  description: "리그 오브 레전드 전체 챔피언 목록",
};

const Champs = async () => {
  const champTable = await getChamps();

  return (
    <>
      <div className="fixed top-10 left-0 w-full h-full min-w-[1220px]">
        <Image src={bg} alt={"목록 페이지 배경 사진"} layout="fill"></Image>
      </div>
      <div className="pt-[56px] max-w-[1200px] min-w-[990px]">
        <ChampsController champTable={champTable} />
      </div>
    </>
  );
};

export default Champs;
