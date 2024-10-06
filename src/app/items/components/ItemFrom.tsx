import { convertArrayToItemTable } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import "./tree.scss";
import ItemTreeChart from "./ItemTreeChart";
import Image from "next/image";

type Props = {
  items: (Item & ItemCustomExtend)[];
  selectedItem: Item & ItemCustomExtend;
  handleSetItem: (item: Item & ItemCustomExtend) => void;
};

type NestedItemFromTree = {
  [key: string]: NestedItemFromTree | null;
};

const SelfItem = ({ selfItem }) => {
  return (
    <div className="flex items-center justify-center h-[250px]">
      <div className="w-[75px] h-[75px] border-[1px] border-white p-[1px]">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${selfItem.id}.png`}
          width={100}
          height={100}
          alt={selfItem.name}
        />
      </div>
    </div>
  );
};

const ItemFrom = ({ items, selectedItem, handleSetItem }: Props) => {
  if (!selectedItem.from) {
    return <SelfItem selfItem={selectedItem} />;
  }

  const itemTable = convertArrayToItemTable(items);
  const itemFromTree = buildItemHierarchy(selectedItem.id, itemTable);
  return (
    <div className="h-[250px]">
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
