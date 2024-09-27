type Champs = {
  type: string;
  format: string;
  version: string;
  data: ChampsTable;
};

export type ChampsTable = {
  [key: string]: Champ;
};

export type Champ = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampInfo;
  image: ChampImage;
  tags: ChampTags;
  partype: string;
  stats: ChampStats;
};

type ChampInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type ChampImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type ChampTags = string[];

type ChampStats = {
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

export default Champs;
