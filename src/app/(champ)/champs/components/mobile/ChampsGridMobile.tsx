import { Champ, ChampCustomImage } from "@/types/Champs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  champs: (Champ & ChampCustomImage)[];
};
const ChampsGridMobile = ({ champs }: Props) => {
  return (
    <div className="grid grid-cols-2 justify-center items-center gap-4 w-full pl-2 pr-2">
      {champs.map((champ: Champ & ChampCustomImage) => (
        <Link key={champ.id} href={`/champs/${champ.id}`} className="w-full">
          <div className="flex flex-col justify-center items-center w-full relative">
            <div className="w-full h-full">
              <Image src={champ.defaultImage} alt="" width={1920} height={1080} />
            </div>
            <div className="absolute top-2 right-2 h-[30px] flex items-center">
              <div className="bg-black opacity-75 pl-2 pr-2 rounded-lg">
                <span className="text-sm">{champ.name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChampsGridMobile;
