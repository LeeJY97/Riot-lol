import { getItems } from "@/server-actions/itemAction";
import { processItemData } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import ItemGrid from "./components/ItemGrid";

const Items = async () => {
  // TODO 아이템 데이터 활용
  /**
      # 필요한 컴포넌트
      - 아이템 그리드 (왼쪽 3~40%)
        - 아이템 카드
        - 호버 시 정보 컴포넌트
      
      - 우측 영역 
        - 아이템 조합식
        - 하위 아이템, 상위 아이템
   */

  const items: ItemTable = await getItems();
  const itemsCustomExtend: (Item & ItemCustomExtend)[] = processItemData(items);

  return (
    <div className="flex p-4">
      <div className="w-[30%] p-2">
        <ItemGrid items={itemsCustomExtend} />
      </div>
      <div className="w-[70%] p-2"></div>
    </div>
  );
};

export default Items;
