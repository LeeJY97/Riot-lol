import { Item, ItemCustomExtend } from "@/types/Item";
import React from "react";
import Image from "next/image";
type Props = {
  items: (Item & ItemCustomExtend)[];
  handleSetItem: (item: Item & ItemCustomExtend) => void;
};
const ItemGrid = ({ items, handleSetItem }: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center hover-element"
          onClick={() => (handleSetItem ? handleSetItem(item) : "")}>
          <Image src={item.defaultImage} alt={item.name} width={34} height={34} />
          <span className="text-[0.6rem]">{item.gold.total}</span>
        </li>
        // <ItemCard key={item.id} item={item} handleSetItem={handleSetItem} />
      ))}
    </ul>
  );
};

ItemGrid.propTypes = {};

export default ItemGrid;
