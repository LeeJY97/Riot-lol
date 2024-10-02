import { convertArrayToItemTable } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import "./tree.scss";
import ItemTreeChart from "./ItemTreeChart";

type Props = {
  items: (Item & ItemCustomExtend)[];
  selectedItem: Item & ItemCustomExtend;
  handleSetItem: (item: Item & ItemCustomExtend) => void;
};

type NestedItemFromTree = {
  [key: string]: NestedItemFromTree | null;
};

const ItemFrom = ({ items, selectedItem, handleSetItem }: Props) => {
  if (!selectedItem.from) {
    return <div>하위 아이템이 없습니다.</div>;
  }
  const itemTable = convertArrayToItemTable(items);

  const itemFromTree = buildItemHierarchy(selectedItem.id, itemTable);
  return (
    <div className="">
      <ItemTreeChart
        tree={{ [selectedItem.id]: itemFromTree }}
        itemTable={itemTable}
        handleSetItem={handleSetItem}
      />
    </div>
  );
};

const buildItemHierarchy = (
  itemId: string,
  itemTable: ItemTable,
  // ): { [key: string]: string | undefined } => {
): NestedItemFromTree => {
  const item = itemTable[itemId];

  // 아이템이 없으면 null 반환
  if (!item) {
    return null;
  }

  // 하위 아이템들을 재귀적으로 탐색
  const children = {};

  if (item.from) {
    for (const fromId of item.from) {
      const childItem = buildItemHierarchy(fromId, itemTable);
      if (childItem) {
        children[fromId] = childItem;
      } else {
        children[fromId] = null; // 하위 아이템이 없으면 null
      }
    }
  }

  return children;
};

export default ItemFrom;
