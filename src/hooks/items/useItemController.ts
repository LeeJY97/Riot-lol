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

// 추상화 레벨을 더 올려서 다른 곳에서(챔피언 등)도 filter 조건으로 사용 가능한 함수로 만들어보기?
// 도전?
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
        return filterArray.every((filterTag) => {
          if (filterTag === "Boots") {
            return item.tags.includes(filterTag) || item.tags.includes("NonbootsMovement");
          }
          return item.tags.includes(filterTag);
        });
      }),
    );
  };

  return { filterItems, updateFilterItems };
};
