import { Champ } from "@/types/Champs";
import Link from "next/link";
import React from "react";

const ChampCard = ({ champ }: { champ: Champ }) => {
  return (
    <Link key={champ.id} href={`/champs/detail/${champ.id}`}>
      <div className="flex flex-col items-center relative">
        <img src={`${champ.customImage?.loadingImage}`} alt="" />
        <div className="absolute bottom-0 w-[100%] h-[30px] bg-black opacity-75"></div>
        <div className="absolute bottom-0 h-[30px] flex items-center">
          <span className="text-sm">{champ.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChampCard;
