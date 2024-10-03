import { SkillInfo } from "@/types/Champs";
import {
  Champ,
  CHAMP_TAGS,
  ChampCustomImage,
  ChampExtends,
  ChampTable,
  ChampsSeparationByTag,
} from "@/types/Champs";
import Rotation from "@/types/Rotation";
import version from "@/constant/constant";
// import { CHAMP_TAGS, ChampTags }

const initialChampList: ChampsSeparationByTag = {
  [CHAMP_TAGS.Fighter]: [],
  [CHAMP_TAGS.Tank]: [],
  [CHAMP_TAGS.Assassin]: [],
  [CHAMP_TAGS.Mage]: [],
  [CHAMP_TAGS.Marksman]: [],
  [CHAMP_TAGS.Support]: [],
};

const separationChampsByTag = (champs: (Champ & ChampCustomImage)[]) => {
  const tags = Object.entries(CHAMP_TAGS).map(([key]) => key);
  const champsSeparationByTag: ChampsSeparationByTag = tags.reduce((acc, tag) => {
    acc[tag] = champs.filter((champ) => {
      return champ.tags.includes(tag);
    });

    return acc;
  }, initialChampList);

  return champsSeparationByTag;
};

const convertChampsTableToArray = (champTable: ChampTable): Champ[] => {
  return Object.values(champTable).sort((a, b) => {
    return a.name.localeCompare(b.name, "ko");
  });
};

const getChampsExtendCustomImage = (champs: Champ[]): (Champ & ChampCustomImage)[] => {
  const champsExtendCustomImage = champs.map((champ) => {
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

const convertDetailPageInfos = (champ: Champ & ChampExtends) => {
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
      description: description.replace(/<[^>]*>/g, ""),
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
    description: passive.description.replace(/<[^>]*>/g, ""),
    url: `${SKILL_BASE_URL}/passive/${passive.image.full}`,
  };

  const skillsInfo: SkillInfo[] = [passiveInfo, ...activeInfo];

  return { info, skillsInfo, skinsInfo };
};

export {
  convertChampsTableToArray,
  getChampsExtendCustomImage,
  getChampsWithRotations,
  convertDetailPageInfos,
  separationChampsByTag,
};
