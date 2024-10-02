import { Champ, ChampCustomImage } from "@/types/Champs";
import React from "react";
import ChampCard from "./ChampCard";

type Props = {
  champs: (Champ & ChampCustomImage)[];
};

const ChampGrid = ({ champs }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-4 w-[100%]">
      {champs.map((champ) => (
        <ChampCard key={champ.id} champ={champ} />
      ))}
    </div>
  );
};

export default ChampGrid;
