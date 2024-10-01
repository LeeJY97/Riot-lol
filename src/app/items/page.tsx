import { getItems } from "@/server-actions/itemAction";
import { processItemData } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import ItemController from "./components/ItemController";

const Items = async () => {
  const items: ItemTable = await getItems();
  const itemsCustomExtend: (Item & ItemCustomExtend)[] = processItemData(items);

  return <ItemController items={itemsCustomExtend} />;
};

export default Items;
