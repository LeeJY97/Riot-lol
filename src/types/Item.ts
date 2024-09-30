export type ItemTable = {
  [key: string]: Item;
};

export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[]; // 상위템 아이디 배열
  image: ItemImage;
  gold: ItemGold;
  tags: string; // 아이템 카테고리 ? ["Boots"]
  maps: { [key: string]: boolean };
  stacks: number; // 몇개까지 들고 있을 수 있는지
  consumed: boolean; // 소모성 - 이 속성 있으면 목록에서 제외
  inStore?: boolean; // 속성이 `존재하면` 상점에서 파는 템 `!아님!`, 속성이 존재해도 false임
  stats: {
    FlatMovementSpeedMod: 25;
  };
};

export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
export type ItemGold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

export type ItemStats = {
  FlatMovementSpeedMod: number; // 이속
  FlatHPPoolMod: number; // HP
  FlatMPPoolMod: number; // MP
  FlatArmorMod: number; // 방어력
  FlatHPRegenMod: number; // 체젠
  FlatPhysicalDamageMod: number; // AD
  FlatMagicDamageMod: number; // AP
  PercentAttackSpeedMod: number; // 공속
  FlatCritChanceMod: number; // 치명타
  PercentLifeStealMod: number; // 피흡
};
