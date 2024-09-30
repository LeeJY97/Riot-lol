import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: Item & ItemCustomExtend;
};

const ItemCard = ({ item }: Props) => {
  return (
    <div>
      <Image src={item.defaultImage} width={50} height={50} />
      {item.name}
    </div>
  );
};

export default ItemCard;
