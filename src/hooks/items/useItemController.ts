import { Item, ItemCustomExtend } from "@/types/Item";
import { TAGS_TYPE } from "@/utils/itemTagMap";
import { useState } from "react";

const initialFilterOptions = Object.values(TAGS_TYPE).reduce((acc, value) => {
  acc[value] = false;
  return acc;
}, {});

type FilterOptions = typeof initialFilterOptions;

export const useFilterOptions = () => {
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  const clearItemFilter = () => {
    setFilterOptions(initialFilterOptions);
  };

  const toggleItemFilter = (tagKey: string): void => {
    setFilterOptions((prev) => ({
      ...prev,
      [tagKey]: !filterOptions[tagKey],
    }));
  };

  return { filterOptions, toggleItemFilter, clearItemFilter };
};

export const useFilterItems = (items: (Item & ItemCustomExtend)[]) => {
  const [filterItems, setFilterItems] = useState(items);

  const getFilteredAndSortedItems = (
    filterOptions: FilterOptions,
    itemName: string,
    sortOption: string,
  ) => {
    const filterArray = Object.entries(filterOptions).reduce((acc, [key, value]) => {
      if (value) acc.push(key);
      return acc;
    }, []);

    const getFilterItemByTag = () => {
      return items.filter((item) => {
        return filterArray.every((filterTag) => {
          if (filterTag === "Boots") {
            return item.tags.includes(filterTag) || item.tags.includes("NonbootsMovement");
          }
          return item.tags.includes(filterTag);
        });
      });
    };
    const filterItemByTag = getFilterItemByTag();

    const getFilterItemByName = () => {
      return filterItemByTag.filter((item) => item.name.includes(itemName));
    };
    const filterItemByName = getFilterItemByName();

    const getSortItemByOption = () => {
      if (sortOption === "asc") {
        return filterItemByName.sort((a, b) => a.gold.total - b.gold.total);
      }
      return filterItemByName.sort((a, b) => b.gold.total - a.gold.total);
    };
    const sortItemByOption = getSortItemByOption();

    setFilterItems(sortItemByOption);
  };

  return { filterItems, getFilteredAndSortedItems };
};

export const useSearchByItemName = () => {
  const [itemName, setItemName] = useState("");

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  console.log("itemName", itemName);

  return { itemName, handleChangeItemName };
};
