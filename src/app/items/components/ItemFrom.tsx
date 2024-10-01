import { convertArrayToItemTable } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import Image from "next/image";
import React from "react";
import "./tree.scss";

type Props = {
  items: (Item & ItemCustomExtend)[];
  selectedItem: Item & ItemCustomExtend;
};

type NestedItemFromTree = {
  [key: string]: NestedItemFromTree | null;
};

type TreeProps = {
  tree: NestedItemFromTree;
  itemTable: ItemTable;
};

const ItemTree = ({ tree, itemTable }: TreeProps) => {
  const renderTree = () => {
    const result = [];

    // 최상위 아이템 순회
    for (const parentId in tree) {
      const parentItem = itemTable[parentId];
      const parentLi = (
        <li key={parentId}>
          <Image
            width={50}
            height={50}
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${parentId}.png`}
            alt={parentItem ? parentItem.name : `아이템 ${parentId} 없음`}
          />
          {/* 하위 아이템이 있을 경우 */}
          {tree[parentId] && Object.keys(tree[parentId]).length > 0 && (
            <ul>{renderChildren(tree[parentId])}</ul>
          )}
        </li>
      );
      result.push(parentLi);
    }

    return result;
  };
  const renderChildren = (children: NestedItemFromTree) => {
    const childItems = [];

    // 하위 아이템 순회
    for (const childId in children) {
      const childItem = itemTable[childId];
      const childLi = (
        <li key={childId}>
          <Image
            width={50}
            height={50}
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${childId}.png`}
            alt={childItem ? childItem.name : `아이템 ${childId} 없음`}
          />
          {/* 더 하위 아이템이 있을 경우 */}
          {children[childId] && Object.keys(children[childId]).length > 0 && (
            <ul>{renderChildren(children[childId])}</ul>
          )}
        </li>
      );
      childItems.push(childLi);
    }

    return childItems;
  };

  return (
    <div className="tree">
      <ul>
        {renderTree()} {/* 최상위 아이템 렌더링 */}
      </ul>
    </div>
  );
};
const ItemFrom = ({ items, selectedItem }: Props) => {
  if (!selectedItem.from) {
    return <div>하위 아이템이 없습니다.</div>;
  }
  const itemTable = convertArrayToItemTable(items);

  const itemFromTree = buildItemHierarchy(selectedItem.id, itemTable);
  return (
    <div className="">
      <ItemTree tree={{ [selectedItem.id]: itemFromTree }} itemTable={itemTable} />
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
