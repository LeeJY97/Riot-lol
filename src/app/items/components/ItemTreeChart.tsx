import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import Image from "next/image";

type NestedItemFromTree = {
  [key: string]: NestedItemFromTree | null;
};

type TreeProps = {
  tree: NestedItemFromTree;
  itemTable: ItemTable;
  handleSetItem: (item: Item & ItemCustomExtend) => void;
};

const ItemTreeChart = ({ tree, itemTable, handleSetItem }: TreeProps) => {
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
        <li key={childId} onClick={() => handleSetItem(childItem)}>
          <Image
            width={50}
            height={50}
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${childId}.png`}
            alt={childItem ? childItem.name : `아이템 ${childId} 없음`}
          />
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

export default ItemTreeChart;
