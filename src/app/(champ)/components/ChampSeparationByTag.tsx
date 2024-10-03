import { ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React from "react";
import ChampGrid from "./ChampGrid";
type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const ChampSeparationByTag = ({ champsSeparationByTag }: Props) => {
  return (
    <ul>
      {Object.keys(champsSeparationByTag).map((tag) => (
        <ul key={tag} className="mb-10 pb-10 border-b-2">
          <div className="flex gap-4 mb-4 text-xl">
            <h1 className="">{champTagMapKr[tag]}</h1>
            <h1>{champsSeparationByTag[tag].length}</h1>
          </div>
          <ChampGrid champs={champsSeparationByTag[tag]} />
        </ul>
      ))}
    </ul>
  );
};

export default ChampSeparationByTag;
