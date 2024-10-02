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

// if (filterArray.length < 1) {
// setFilterItems(items);
// return;
// }

// const filterArray = Object.entries(filterOptions).reduce((acc, [key, value]) => {
//   if (value) acc.push(key);
//   return acc;
// }, []);

// const filterArray = Object.entries(filterOptions).filter(([key, value]) => value);

export const useFilterItems = (items: (Item & ItemCustomExtend)[]) => {
  const [filterItems, setFilterItems] = useState(items);

  const updateFilterItems = (filterOptions: FilterOptions, itemName: string) => {
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
      console.log("filterItemByTag", filterItemByTag);
      console.log("itemName", itemName);
      return filterItemByTag.filter((item) => item.name.includes(itemName));
    };

    // lodash => reduce, filter, include 등을 체이닝해서 편하게 뭐 ..

    const filterItemByName = getFilterItemByName();

    // const searchFilterItem = tagFilterItem.filter((tagItem) => tagItem.name === itemName);

    // filter된, item목록을 만들고, setFilterItems에 set해주도록 변경
    // 그리고, 타이핑으로 필터, 태그로 필터한 이후 set. (함수 역할 분리)
    setFilterItems(filterItemByName);
  };

  // const updateSearchFilterItems = () => {}

  return { filterItems, updateFilterItems };
};

export const useSearchByItemName = () => {
  const [itemName, setItemName] = useState("");

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  console.log("itemName", itemName);

  return { itemName, handleChangeItemName };
};
