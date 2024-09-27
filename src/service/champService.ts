import { Champ, ChampTable } from "@/types/champ/Champs";
import Rotation from "@/types/Rotation";

const getChampsWithRotations = (rotationKeys: Rotation, champTable: ChampTable): Champ[] => {
  // 1) champData의 values를 배열로 만들고, rotationKeys에 포함되는 요소만 배열로 반환
  const rotationChampList = Object.values(champTable).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key),
  );

  return rotationChampList;
};

export { getChampsWithRotations };
