import { Item, ItemCustomExtend } from "@/types/Item";
import { useState } from "react";

const initialFilterOptions = {
  Damage: false,
  CriticalStrike: false,
  AttackSpeed: false,
  OnHit: false,
  ArmorPenetration: false,
  SpellDamage: false,
  Mana: false,
  MagicPenetration: false,
  Health: false,
  Armor: false,
  SpellBlock: false,
  CooldownReduction: false,
  Boots: false,
  LifeSteal: false,
};

type FilterOptions = typeof initialFilterOptions;

export const useFilterOptions = () => {
  const initialFilterOptions = {
    Damage: false,
    CriticalStrike: false,
    AttackSpeed: false,
    OnHit: false,
    ArmorPenetration: false,
    SpellDamage: false,
    Mana: false,
    MagicPenetration: false,
    Health: false,
    Armor: false,
    SpellBlock: false,
    CooldownReduction: false,
    Boots: false,
    LifeSteal: false,
  };
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  const toggleItemFilter = (tagKey: string): void => {
    if (!tagKey) {
      setFilterOptions(initialFilterOptions);
      return;
    }
    setFilterOptions((prev) => ({
      ...prev,
      [tagKey]: !filterOptions[tagKey],
    }));
  };

  return { filterOptions, toggleItemFilter };
};

export const useFilterItems = (items: (Item & ItemCustomExtend)[]) => {
  const [filterItems, setFilterItems] = useState(items);

  const updateFilterItems = (filterOptions: FilterOptions) => {
    const filterArray = Object.entries(filterOptions).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);

    if (filterArray.length < 1) {
      setFilterItems(items);
      return;
    }
    setFilterItems(
      items.filter((item) => {
        return filterArray.every((filterTag) => item.tags.includes(filterTag));
      }),
    );
  };

  // const updateFilterItems = () => {};

  return { filterItems, updateFilterItems };
};
