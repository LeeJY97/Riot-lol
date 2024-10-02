import { skillInfo } from "@/app/champs/detail/[id]/skillInfo";
import { Champ, ChampCustomImage, ChampExtends, ChampTable } from "@/types/Champs";
import Rotation from "@/types/Rotation";
import version from "@/utils/constant";

const convertChampsTableToArray = (champTable: ChampTable): Champ[] => {
  return Object.values(champTable).sort((a, b) => {
    return a.name.localeCompare(b.name, "ko");
  });
};

const getChampsExtendCustomImage = (champs: Champ[]): (Champ & ChampCustomImage)[] => {
  const champsExtendCustomImage = champs.map((champ) => {
    // const customImage: ChampCustomImage = {
    //   loadingImage: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`,
    // };
    // champ.customImage = customImage;

    const loadingImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`;

    return { ...champ, loadingImage };
  });

  return champsExtendCustomImage;
};

const getChampsWithRotations = (rotationKeys: Rotation, champTable: ChampTable): Champ[] => {
  const rotationChampList = convertChampsTableToArray(champTable).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key),
  );

  return rotationChampList;
};

// get -> convert
const getDetailPageInfos = (champ: Champ & ChampExtends) => {
  const { title, name, lore, skins, tags, spells, passive } = champ;

  const skinsInfo = skins.map((skin) => ({
    name: skin.name,
    url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${skin.num}.jpg`,
  }));

  const info = {
    imageUrl: skinsInfo[0].url,
    title,
    name,
    lore,
    tags,
  };

  const SKILL_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/${version}/img`;
  const activeInfo = spells.map((spell, idx) => {
    const { id, name, cooldownBurn, description, costBurn, costType, rangeBurn, image } = spell;
    const keyMap = {
      0: "Q",
      1: "W",
      2: "E",
      3: "R",
    };

    return {
      id,
      keyboard: keyMap[idx],
      name,
      description,
      cooldownBurn,
      costBurn,
      costType,
      rangeBurn,
      url: `${SKILL_BASE_URL}/spell/${image.full}`,
    };
  });

  const passiveInfo = {
    id: "P",
    keyboard: "P",
    name: passive.name,
    description: passive.description,
    url: `${SKILL_BASE_URL}/passive/${passive.image.full}`,
  };

  const skillsInfo: skillInfo[] = [passiveInfo, ...activeInfo];

  return { info, skillsInfo, skinsInfo };
};

export {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  getChampsWithRotations,
  getDetailPageInfos,
};
