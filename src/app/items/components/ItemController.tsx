"use client";

import React, { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";
import { Item, ItemCustomExtend } from "@/types/Item";
import ItemInto from "./ItemInto";
import ItemFrom from "./ItemFrom";
import ItemInfo from "./ItemInfo";
import { itemFilterTags, itemTagMapKr } from "@/constant/itemTags";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useFilterItems,
  useFilterOptions,
  useSearchByItemName,
} from "@/hooks/items/useItemController";
import nonChecked from "@/public/assets/images/non_checked.png";
import checked from "@/public/assets/images/checked2.png";
import Image from "next/image";

type Props = {
  items: (Item & ItemCustomExtend)[];
};

const ItemController = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const { filterOptions, toggleItemFilter, clearItemFilter } = useFilterOptions();
  const { filterAndSortItems, handleFilterAndSortItems } = useFilterItems(items);
  const { itemName, handleChangeItemName } = useSearchByItemName();
  const [sortOption, setSortOption] = useState("asc");

  const handleSetItem = (item: Item & ItemCustomExtend) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    handleFilterAndSortItems(filterOptions, itemName, sortOption);
  }, [filterOptions, itemName, sortOption]);

  return (
    <div className="flex p-4 w-[100%] min-w-[1200px] justify-center">
      <div className="flex flex-col justify-center p-8 w-[170px] h-[650px] text-xs z-50">
        <div
          onClick={() => clearItemFilter()}
          className="flex h-6 items-center gap-2 text-[#aa7d30] text-sm">
          <button>✖</button>
          <span className="">모두 지우기</span>
        </div>
        <ul className="flex flex-col gap-[2px] z-50 ">
          {itemFilterTags.map((tagKey, idx) => (
            <li key={idx} onClick={() => toggleItemFilter(tagKey)}>
              <div className="flex h-6 items-center gap-[2px]">
                {filterOptions[tagKey] ? (
                  <button>
                    <Image src={checked} alt="버튼 이미지" width={15} height={15} />
                  </button>
                ) : (
                  <button>
                    <Image src={nonChecked} alt="버튼 이미지" width={15} height={15} />
                  </button>
                )}
                &nbsp;
                <span>{itemTagMapKr[tagKey]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-[230px] h-[650px] z-50">
        <div className="absolute top-[16px] flex gap-2 w-[100%] h-[30px]">
          <input
            className="h-6 w-[60%] text-black text-xs"
            type="text"
            value={itemName}
            onChange={handleChangeItemName}
            placeholder="아이템명을 입력하세요."
          />
          <select
            className="h-6 w-[40%] text-black"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}>
            <option value="asc">골드 ▲</option>
            <option value="desc">골드 ▼</option>
          </select>
        </div>
        {/* <div className="mt-8 overflow-y-auto h-[600px]">
          <ItemGrid items={filterItems} handleSetItem={handleSetItem} />
        </div> */}
        <ScrollArea className="mt-14 h-[565px] w-[100%] rounded-md border-2 border-[#aa7d30] p-4">
          <ItemGrid items={filterAndSortItems} handleSetItem={handleSetItem} />
        </ScrollArea>
      </div>
      {!selectedItem ? (
        <SkeltonInfo />
      ) : (
        <div className="flex flex-col w-[50%] p-4 gap-2 h-[650px] z-50">
          <div className="h-[20%] border-4">
            <ItemInto items={items} selectedItem={selectedItem} handleSetItem={handleSetItem} />
          </div>
          <div className="h-[40%] border-4">
            <ItemFrom items={items} selectedItem={selectedItem} handleSetItem={handleSetItem} />
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
  return (
    <div className="flex items-center justify-center w-[50%] p-4 z-50">아이템을 선택하세요.</div>
  );
};

export default ItemController;
