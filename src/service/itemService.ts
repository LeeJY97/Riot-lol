import { Item, ItemTable } from "@/types/Item";

const processItemData = (itemTable: ItemTable) => {
  const itemTableToArray = convertItemTableToArray(itemTable);
  const filteredItemsForRift = filterItemsForRift(itemTableToArray);

  return filteredItemsForRift;
};

const convertItemTableToArray = (itemTable: ItemTable): Item[] => {
  return Object.entries(itemTable).map(([id, item]) => ({
    id,
    ...item,
  }));
};

const filterItemsForRift = (items: Item[]): Item[] => {
  const filteredItems = items.filter((item) => item.maps["11"]);
  return filteredItems;
};

export { processItemData };
