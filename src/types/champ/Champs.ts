import { ChampImage, ChampInfo, ChampStats } from "./ChampCommon";

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
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampInfo;
  image: ChampImage;
  tags: string[];
  partype: string;
  stats: ChampStats;
};

export default Champs;
