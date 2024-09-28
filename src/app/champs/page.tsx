import { getChamps } from "@/server-actions/champAction";
import { convertChampsTableToArray, getChampsExtendCustomImage } from "@/service/champService";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);

  // ChampImage이 url 삽입
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);

  console.log("champsExtendCustomImage", champsExtendCustomImage);

  return (
    <div className="grid grid-cols-5 gap-4 w-[100%]">
      {champs.map((champ) => (
        <Link key={champ.id} href={`/champs/detail/${champ.id}`}>
          <div className="flex flex-col items-center relative">
            <img src={`${champ.customImage?.loadingImage}`} alt="" />
            <div className="absolute bottom-0 w-[100%] h-[30px] bg-black opacity-75"></div>
            <div className="absolute bottom-0">
              <span>{champ.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Champs;
