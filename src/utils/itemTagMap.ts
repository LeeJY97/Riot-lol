// const itemTagMap = {
//   Damage: "공격력",
//   CriticalStrike: "치명타",
//   AttackSpeed: "공격속도",
//   OnHit: "적중 시 효과",
//   ArmorPenetration: "방어구 관통력",
//   SpellDamage: "주문력",
//   Mana: "마나 및 재생",
//   MagicPenetration: "마법 관통력",
//   Health: "체력 및 재생",
//   Armor: "방어력",
//   SpellBlock: "마법 저항력",
//   CooldownReduction: "스킬 가속",
//   Boots: "이동",
//   NonbootsMovement: "이동",
//   LifeSteal: "생명력 흡수",
// };

// export const itemTagList = [
//   "Damage",
//   "CriticalStrike",
//   "AttackSpeed",
//   "OnHit",
//   "ArmorPenetration",
//   "SpellDamage",
//   "Mana",
//   "MagicPenetration",
//   "Health",
//   "Armor",
//   "SpellBlock",
//   "CooldownReduction",
//   "Boots",
//   "LifeSteal",
// ];

export enum TAGS_TYPE {
  Damage = "Damage",
  CriticalStrike = "CriticalStrike",
  AttackSpeed = "AttackSpeed",
  OnHit = "OnHit",
  ArmorPenetration = "ArmorPenetration",
  SpellDamage = "SpellDamage",
  Mana = "Mana",
  MagicPenetration = "MagicPenetration",
  Health = "Health",
  Armor = "Armor",
  SpellBlock = "SpellBlock",
  CooldownReduction = "CooldownReduction",
  Boots = "Boots",
  NonbootsMovement = "NonbootsMovement",
  LifeSteal = "LifeSteal",
}

export const itemTagMapKr = {
  [TAGS_TYPE.Damage]: "공격력",
  [TAGS_TYPE.CriticalStrike]: "치명타",
  [TAGS_TYPE.AttackSpeed]: "공격속도",
  [TAGS_TYPE.OnHit]: "적중 시 효과",
  [TAGS_TYPE.ArmorPenetration]: "방어구 관통력",
  [TAGS_TYPE.SpellDamage]: "주문력",
  [TAGS_TYPE.Mana]: "마나 및 재생",
  [TAGS_TYPE.MagicPenetration]: "마법 관통력",
  [TAGS_TYPE.Health]: "체력 및 재생",
  [TAGS_TYPE.Armor]: "방어력",
  [TAGS_TYPE.SpellBlock]: "마법 저항력",
  [TAGS_TYPE.CooldownReduction]: "스킬 가속",
  [TAGS_TYPE.Boots]: "이동",
  [TAGS_TYPE.NonbootsMovement]: "이동",
  [TAGS_TYPE.LifeSteal]: "생명력 흡수",
} as const;

// // filter nonboots 하나 만들기
export const tagTypeKeys = Object.values(TAGS_TYPE); // filter nonboots

export const itemFilterTags = Object.values(TAGS_TYPE).filter(
  (value) => value !== TAGS_TYPE["NonbootsMovement"],
);

export type Tags = keyof typeof TAGS_TYPE;

// export default itemTagMap;
