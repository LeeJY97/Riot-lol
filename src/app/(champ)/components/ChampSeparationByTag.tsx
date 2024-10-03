import { ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React from "react";
import ChampGrid from "./ChampGrid";
type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const ChampSeparationByTag = ({ champsSeparationByTag }: Props) => {
  console.log("champsSeparationByTag", champsSeparationByTag.Assassin);

  return (
    <ul>
      {Object.keys(champsSeparationByTag).map((tag) => (
        <ul key={tag}>
          <h1 className="mb-4 text-xl">{champTagMapKr[tag]}</h1>
          <ChampGrid champs={champsSeparationByTag[tag]} />
        </ul>
      ))}
    </ul>
  );
};

export default ChampSeparationByTag;
