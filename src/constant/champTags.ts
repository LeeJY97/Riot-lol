export enum CHAMP_TAGS {
  Fighter = "Fighter",
  Tank = "Tank",
  Assassin = "Assassin",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
}

export type Tags = keyof typeof CHAMP_TAGS;

export const champTagMapKr = {
  [CHAMP_TAGS.Fighter]: "전사",
  [CHAMP_TAGS.Tank]: "탱커",
  [CHAMP_TAGS.Assassin]: "암살자",
  [CHAMP_TAGS.Mage]: "마법사",
  [CHAMP_TAGS.Marksman]: "원거리딜러",
  [CHAMP_TAGS.Support]: "서포터",
};
