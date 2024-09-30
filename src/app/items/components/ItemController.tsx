"use client";

import React from "react";
import ItemGrid from "./ItemGrid";
import { Item, ItemCustomExtend } from "@/types/Item";

type Props = {
  items: (Item & ItemCustomExtend)[];
};

const ItemController = ({ items }: Props) => {
  return (
    <div className="flex flex-col w-[100%]">
      <div>버튼</div>
      <div className="flex mx-auto p-4 w-[100%]">
        <div className="w-[350px] p-2 overflow-y-auto h-full max-h-[600px]">
          <ItemGrid items={items} />
        </div>
        <div className="w-[70%] p-2"></div>
      </div>
    </div>
  );
};

export default ItemController;
