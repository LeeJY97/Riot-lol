"use client";

import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: Item & ItemCustomExtend;
};

const ItemCard = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={item.defaultImage} alt={item.name} width={50} height={50} />
      {item.gold.base}
    </div>
  );
};

export default ItemCard;
