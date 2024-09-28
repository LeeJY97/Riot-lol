import { Champ } from "@/types/Champs";
import Link from "next/link";
import React from "react";

type Props = {
  champs: Champ[];
};

const ChampGrid = ({ champs }: Props) => {
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

export default ChampGrid;
