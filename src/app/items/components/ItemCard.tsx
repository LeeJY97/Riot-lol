"use client";

import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: Item & ItemCustomExtend;
  handleSetItem?: (item: Item & ItemCustomExtend) => void;
};

const ItemCard = ({ item, handleSetItem }: Props) => {
  return (
    <div
      className="flex flex-col items-center hover-element"
      onClick={() => (handleSetItem ? handleSetItem(item) : "")}>
      <Image src={item.defaultImage} alt={item.name} width={34} height={34} />
      <span className="text-[0.6rem]">{item.gold.total}</span>
    </div>
  );
};

export default ItemCard;
