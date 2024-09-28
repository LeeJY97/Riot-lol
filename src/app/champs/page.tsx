import ChampGrid from "@/components/ChampGrid";
import { getChamps } from "@/server-actions/champAction";
import { convertChampsTableToArray, getChampsExtendCustomImage } from "@/service/champService";
import React from "react";

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);
  const champsExtendCustomImage = getChampsExtendCustomImage(champs);
  return <ChampGrid champs={champsExtendCustomImage} />;
};

export default Champs;
