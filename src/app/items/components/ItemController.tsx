"use client";

import React, { useState } from "react";
import ItemGrid from "./ItemGrid";
import { Item, ItemCustomExtend } from "@/types/Item";
import ItemInto from "./ItemInto";
import ItemFrom from "./ItemFrom";
import ItemInfo from "./ItemInfo";

type Props = {
  items: (Item & ItemCustomExtend)[];
};

const ItemController = ({ items }: Props) => {
  const [filterOptions, setFilterOptions] = useState("");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleSetItem = (item: Item & ItemCustomExtend) => {
    setSelectedItem((prev) => ({ ...item }));
  };

  return (
    <div className="flex mx-auto p-4 w-[1440px]">
      <div className="flex flex-col p-8 w-[150px] text-xs">
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>모두 지우기</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>공격력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>치명타</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>공격속도</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>적중 시 효과</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>방어구 관통력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>주문력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>마나 및 재생</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>마법 관통력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>체력 및 재생</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>방어력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>마법 저항력</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>스킬 가속</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>이동</span>
        </div>
        <div>
          <button>[&nbsp;&nbsp;&nbsp;]</button>
          <span>생명력 흡수</span>
        </div>
      </div>
      <div className="w-[200px] relative">
        <div className="absolute top-0 w-[100%]">
          <input className="h-6 w-[100%]" type="text" placeholder="아이템명을 입력하세요." />
        </div>
        <div className="mt-8 overflow-y-auto h-full max-h-[600px]">
          <ItemGrid items={items} handleSetItem={handleSetItem} />
        </div>
      </div>
      <div className="grid grid-rows-2 w-[50%] p-4">
        <div className="grid grid-cols-2">
          <ItemInto />
          <ItemFrom />
        </div>
        <div className="">{selectedItem && <ItemInfo item={selectedItem} />}</div>
      </div>
    </div>
  );
};

export default ItemController;
