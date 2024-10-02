export enum ITEM_TAGS {
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
  [ITEM_TAGS.Damage]: "공격력",
  [ITEM_TAGS.CriticalStrike]: "치명타",
  [ITEM_TAGS.AttackSpeed]: "공격속도",
  [ITEM_TAGS.OnHit]: "적중 시 효과",
  [ITEM_TAGS.ArmorPenetration]: "방어구 관통력",
  [ITEM_TAGS.SpellDamage]: "주문력",
  [ITEM_TAGS.Mana]: "마나 및 재생",
  [ITEM_TAGS.MagicPenetration]: "마법 관통력",
  [ITEM_TAGS.Health]: "체력 및 재생",
  [ITEM_TAGS.Armor]: "방어력",
  [ITEM_TAGS.SpellBlock]: "마법 저항력",
  [ITEM_TAGS.CooldownReduction]: "스킬 가속",
  [ITEM_TAGS.Boots]: "이동",
  [ITEM_TAGS.NonbootsMovement]: "이동",
  [ITEM_TAGS.LifeSteal]: "생명력 흡수",
} as const;

export const tagTypeKeys = Object.values(ITEM_TAGS);

export const itemFilterTags = Object.values(ITEM_TAGS).filter(
  (value) => value !== ITEM_TAGS["NonbootsMovement"],
);

export type Tags = keyof typeof ITEM_TAGS;
