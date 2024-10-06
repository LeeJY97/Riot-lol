import { Champ, ChampCustomImage } from "@/types/Champs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampCard = ({ champ }: { champ: Champ & ChampCustomImage }) => {
  return (
    <Link key={champ.id} href={`/champs/${champ.id}`} className="w-[calc(20%-1rem)]">
      <div className="flex flex-col items-center relative py-[85%] w-full h-full">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-50"></div>
        {/* <img src={`${champ.loadingImage}`} alt="" /> */}
        {/* <div className="w-[]"> */}
        {/* <Image src={champ.loadingImage} alt="" width={500} height={500} /> */}
        <Image src={champ.loadingImage} alt="" layout="fill" />
        {/* <Image src={champ.loadingImage} alt="" width={200} height={363} /> */}
        {/* </div> */}
        <div className="absolute bottom-0 w-[100%] h-[30px] bg-black opacity-75"></div>
        <div className="absolute bottom-0 h-[30px] flex items-center">
          <span className="text-sm">{champ.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChampCard;
