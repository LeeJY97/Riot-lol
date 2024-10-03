import { ChampsSeparationByTag, champTagMapKr } from "@/types/Champs";
import React from "react";
import ChampGrid from "../../components/ChampGrid";

type Props = {
  champsSeparationByTag: ChampsSeparationByTag;
};

const ChampSeparationByTag = ({ champsSeparationByTag }: Props) => {
  return (
    <div className="w-[100%]">
      <ul className="z-10">
        {Object.keys(champsSeparationByTag).map((tag) => (
          <ul
            key={tag}
            className="mb-10 pb-10 border-b-2 pt-14 pl-4 pr-4 bg-[rgba(255,255,255,.2)] rounded-xl">
            <div className="flex flex-col justify-center items-center h-7 mb-4">
              <h1 className="">{champTagMapKr[tag]}</h1>
              <h1>{champsSeparationByTag[tag].length}</h1>
            </div>
            <ChampGrid champs={champsSeparationByTag[tag]} />
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default ChampSeparationByTag;
