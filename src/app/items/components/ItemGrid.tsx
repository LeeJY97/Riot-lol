import { Item, ItemCustomExtend } from "@/types/Item";
import React from "react";
import ItemCard from "./ItemCard";

type Props = {
  items: (Item & ItemCustomExtend)[];
};

const ItemGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

ItemGrid.propTypes = {};

export default ItemGrid;
