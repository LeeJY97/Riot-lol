type Champs = {
  type: string;
  format: string;
  version: string;
  data: ChampTable;
};

export type ChampTable = {
  [key: string]: Champ;
};

export type Champ = {
  version?: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  tags: string[];
  partype: string;
  stats: ChampStats;
  info: ChampInfo;
  image: ChampImage;
  // customImage?: ChampCustomImage; // 이거 뺴고 &로 타입 합쳐 사용하기 OK
};

export type ChampImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampCustomImage = {
  defaultImage?: string;
  skins?: Skin[];
  loadingImage?: string;
};

export type ChampInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type ChampStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

export enum CHAMP_TAGS {
  Fighter = "Fighter",
  Tank = "Tank",
  Assassin = "Assassin",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
}

export type ChampTags = keyof typeof CHAMP_TAGS;

export const champTagMapKr = {
  [CHAMP_TAGS.Fighter]: "전사",
  [CHAMP_TAGS.Tank]: "탱커",
  [CHAMP_TAGS.Assassin]: "암살자",
  [CHAMP_TAGS.Mage]: "마법사",
  [CHAMP_TAGS.Marksman]: "원거리딜러",
  [CHAMP_TAGS.Support]: "서포터",
};

export type ChampsSeparationByTag = {
  [key in ChampTags]: Champ[];
};

/** 여기부터 상세 */
export type ChampExtends = {
  skins: Skin[];
  lore: string; // 챔프 배경,
  spells: Spell[]; // 스킬 [id, name, description, cooldown, cost, costType, range, image, resource(소모값)]
  passive: Passive; //
  // recommended?: never[];
  // allytips: string[];
  // enemytips: string[];
};

export type Skin = {
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

export default Champs;
