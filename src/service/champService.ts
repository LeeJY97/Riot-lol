import Champs from "@/app/champs/page";
import { Champ, ChampCustomImage, ChampTable } from "@/types/Champs";
import Rotation from "@/types/Rotation";

const convertChampsTableToArray = (champTable: ChampTable): Champ[] => {
  return Object.values(champTable).sort((a, b) => {
    return a.name.localeCompare(b.name, "ko");
  });
};

const getChampsExtendCustomImage = (champs: Champ[]): Champ[] => {
  console.log("Champs", champs);

  const champsExtendCustomImage = champs.map((champ) => {
    const customImage: ChampCustomImage = {
      loadingImage: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`,
    };
    champ.customImage = customImage;

    return champ;
  });

  return champsExtendCustomImage;
};

const getChampsWithRotations = (rotationKeys: Rotation, champTable: ChampTable): Champ[] => {
  const rotationChampList = convertChampsTableToArray(champTable).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key),
  );

  return rotationChampList;
};

export { convertChampsTableToArray, getChampsExtendCustomImage, getChampsWithRotations };
