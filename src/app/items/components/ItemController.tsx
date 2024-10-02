"use client";

import React, { useEffect, useState } from "react";
import ItemGrid from "./ItemGrid";
import { Item, ItemCustomExtend } from "@/types/Item";
import ItemInto from "./ItemInto";
import ItemFrom from "./ItemFrom";
import ItemInfo from "./ItemInfo";
import { itemFilterTags, itemTagMapKr } from "@/utils/itemTagMap";
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
  const { filterItems, getFilteredAndSortedItems } = useFilterItems(items);
  const { itemName, handleChangeItemName } = useSearchByItemName();
  const [sortOption, setSortOption] = useState("asc");

  const handleSetItem = (item: Item & ItemCustomExtend) => {
    setSelectedItem(item);
  };

  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortOption(e.target.value);
  // };

  useEffect(() => {
    getFilteredAndSortedItems(filterOptions, itemName, sortOption);
  }, [filterOptions, itemName, sortOption]);

  return (
    <div className="flex mx-auto p-4 w-[1440px]">
      <div className="flex flex-col p-8 w-[170px] text-xs">
        <div
          onClick={() => clearItemFilter()}
          className="flex h-6 items-center gap-2 text-[#aa7d30] text-sm">
          <button>✖</button>
          <span className="">모두 지우기</span>
        </div>

        <ul className="flex flex-col gap-[2px]">
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
      <div className="w-[200px] relative">
        <div className="absolute top-0 flex gap-2 w-[100%]">
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
        <ScrollArea className="mt-8 h-[600px] w-52 rounded-md border p-4">
          <ItemGrid items={filterItems} handleSetItem={handleSetItem} />
        </ScrollArea>
      </div>
      {!selectedItem ? (
        <SkeltonInfo />
      ) : (
        <div className="mx-auto flex flex-col w-[50%] p-4 gap-2">
          <div className="h-[20%] border-4">
            <ItemInto
              items={filterItems}
              selectedItem={selectedItem}
              handleSetItem={handleSetItem}
            />
          </div>
          <div className="h-[40%] border-4">
            <ItemFrom
              items={filterItems}
              selectedItem={selectedItem}
              handleSetItem={handleSetItem}
            />
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
