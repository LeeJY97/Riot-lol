import { getItems } from "@/server-actions/itemAction";
import { processItemData } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import ItemController from "./components/ItemController";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아이템 도감",
  description: "리그 오브 레전드 아이템 도감 페이지",
};

const Items = async () => {
  const items: ItemTable = await getItems();
  const itemsCustomExtend: (Item & ItemCustomExtend)[] = processItemData(items);

  return <ItemController items={itemsCustomExtend} />;
};

export default Items;
