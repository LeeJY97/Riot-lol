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
          className="hover-element flex flex-col items-center  "
          onClick={() => (handleSetItem ? handleSetItem(item) : "")}>
          <div className="border-[1px] border-[#3C3C41] h-[36px] p-[1px]">
            <Image src={item.defaultImage} alt={item.name} width={34} height={34} />
          </div>
          <span className="text-[0.6rem]">{item.gold.total}</span>
        </li>
      ))}
    </ul>
  );
};

ItemGrid.propTypes = {};

export default ItemGrid;
