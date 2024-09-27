import { ChampImage, ChampInfo, ChampStats } from "./ChampCommon";

type ChampDetail = {
  [key: string]: Champ;
};
type Champ = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampImage;
  skins: Skin[];
  lore: string; // 챔프 배경,
  blurb: string; // 챔프 배경 잘린 버전
  tags: string[]; // 역할군
  partype: string; // 피의 샘, 마나, 체력, 노코스트, 기류, 없음 등 .
  info: ChampInfo; // 모르겠음
  stats: ChampStats; // 기본 스탯
  spells: Spell[]; // 스킬 [id, name, description, cooldown, cost, costType, range, image, resource(소모값)]
  passive: Passive; //
  // recommended?: never[];
  // allytips: string[];
  // enemytips: string[];
};

type Skin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

type Spell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldownBurn: string;
  costBurn: string;
  costType: string;
  rangeBurn: string;
  image: SkillImage;
  resource: string;
  // cooldown: number[];
  // cost: number[];
  // range: number[];
  // leveltip: {
  //   label: string[];
  //   effect: string[];
  // };
};

type SkillImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Passive = {
  name: string;
  description: string;
  image: SkillImage;
};

export default ChampDetail;
