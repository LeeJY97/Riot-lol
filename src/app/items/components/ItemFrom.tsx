import { convertArrayToItemTable } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  items: (Item & ItemCustomExtend)[];
  selectedItem: Item & ItemCustomExtend;
};

type NestedItemFromTree = {
  [key: string]: NestedItemFromTree | null;
};

const ItemTree = ({ tree }: NestedItemFromTree) => {
  return (
    <>
      <div className="tree">
        <ul>
          <li>
            <Image
              width={50}
              height={50}
              src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
              alt=""
            />
            {/* <a href="#">Parent</a> */}
            <ul>
              <li>
                <Image
                  width={50}
                  height={50}
                  src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                  alt=""
                />
                <ul>
                  <li>
                    <Image
                      width={50}
                      height={50}
                      src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <Image
                      width={50}
                      height={50}
                      src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <Image
                      width={50}
                      height={50}
                      src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                      alt=""
                    />
                  </li>
                </ul>
              </li>
              <li>
                <Image
                  width={50}
                  height={50}
                  src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                  alt=""
                />
                <ul>
                  <li>
                    <Image
                      width={50}
                      height={50}
                      src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <Image
                      width={50}
                      height={50}
                      src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/1001.png"
                      alt=""
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

const ItemFrom = ({ items, selectedItem }: Props) => {
  if (!selectedItem.from) {
    return <div>하위 아이템이 없습니다.</div>;
  }
  const itemTable = convertArrayToItemTable(items);

  const itemFromTree = buildItemHierarchy(selectedItem.id, itemTable);
  console.log("tree", itemFromTree);
  return (
    <div className="">
      <ItemTree tree={{ [selectedItem.id]: itemFromTree }} />
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
