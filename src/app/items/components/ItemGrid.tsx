import { Item, ItemCustomExtend } from "@/types/Item";
import React from "react";
import ItemCard from "./ItemCard";
type Props = {
  items: (Item & ItemCustomExtend)[];
  handleSetItem: (item: Item & ItemCustomExtend) => void;
};
const ItemGrid = ({ items, handleSetItem }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} handleSetItem={handleSetItem} />
      ))}
    </div>
  );
};

ItemGrid.propTypes = {};

export default ItemGrid;
