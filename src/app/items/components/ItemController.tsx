"use client";

import React, { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";
import { Item, ItemCustomExtend } from "@/types/Item";
import ItemInto from "./ItemInto";
import ItemFrom from "./ItemFrom";
import ItemInfo from "./ItemInfo";
import itemTagMap, { itemTagList } from "@/utils/itemTagMap";
import { useFilterItems, useFilterOptions } from "@/hooks/items/useItemController";

type Props = {
  items: (Item & ItemCustomExtend)[];
};

const ItemController = ({ items }: Props) => {
  // const [filterOptions, setFilterOptions] = useState(initialFilterOptions);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const { filterOptions, toggleItemFilter } = useFilterOptions();
  const { filterItems, updateFilterItems } = useFilterItems(items);

  // TODO filter 하는중
  // const { filterItems, setFilterItems } = useFilterItems(items, filterOptions);
  const handleSetItem = (item: Item & ItemCustomExtend) => {
    setSelectedItem(item);
  };

  // filterOptions가 변경될 때마다 filterItems를 업데이트
  useEffect(() => {
    updateFilterItems(filterOptions);
  }, [filterOptions]);

  // const toggleItemFilter = (tagKey: string): void => {
  //   setFilterOptions((prev) => ({
  //     ...prev,
  //     [tagKey]: !filterOptions[tagKey],
  //   }));
  // };

  return (
    <div className="flex mx-auto p-4 w-[1440px]">
      <div className="flex flex-col p-8 w-[150px] text-xs">
        <div onClick={() => toggleItemFilter(null)}>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>모두 지우기</span>
        </div>

        <ul>
          {itemTagList.map((tagKey, idx) => (
            <li key={idx} onClick={() => toggleItemFilter(tagKey)}>
              {filterOptions[tagKey] ? <button>[V]</button> : <button>[&nbsp;&nbsp;&nbsp;]</button>}
              <span>{itemTagMap[tagKey]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[200px] relative">
        <div className="absolute top-0 w-[100%]">
          <input className="h-6 w-[100%]" type="text" placeholder="아이템명을 입력하세요." />
        </div>
        <div className="mt-8 overflow-y-auto h-full max-h-[600px]">
          <ItemGrid items={filterItems} handleSetItem={handleSetItem} />
        </div>
      </div>
      {!selectedItem ? (
        <SkeltonInfo />
      ) : (
        <div className="mx-auto flex flex-col w-[50%] p-4 gap-2">
          <div className="h-[20%] border-4">
            <ItemInto items={filterItems} selectedItem={selectedItem} />
          </div>
          <div className="h-[40%] border-4">
            <ItemFrom items={filterItems} selectedItem={selectedItem} />
          </div>
          <div className="h-[35%]">
            <ItemInfo selectedItem={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
};

const SkeltonInfo = () => {
  return <div className="flex items-center justify-center w-[50%] p-4">아이템을 선택하세요.</div>;
};

export default ItemController;
