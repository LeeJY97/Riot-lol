import { Champ, ChampTable } from "@/types/Champs";
import Rotation from "@/types/Rotation";

const convertChampsTableToArray = (champTable: ChampTable): Champ[] => {
  return Object.values(champTable).sort((a, b) => {
    return a.name.localeCompare(b.name, "ko");
  });
};

const getChampsWithRotations = (rotationKeys: Rotation, champTable: ChampTable): Champ[] => {
  const rotationChampList = convertChampsTableToArray(champTable).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key),
  );

  return rotationChampList;
};

export { convertChampsTableToArray, getChampsWithRotations };
