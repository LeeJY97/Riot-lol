import { getItems } from "@/server-actions/itemAction";
import { processItemData } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import ItemGrid from "./components/ItemGrid";
import ItemController from "./components/ItemController";

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
    <ItemController items={itemsCustomExtend} />
    // <div className="flex flex-col w-[100%]">
    //   <div>버튼</div>
    //   <div className="flex mx-auto p-4 w-[100%]">
    //     <div className="w-[350px] p-2 overflow-y-auto h-full max-h-[600px]">
    //       <ItemGrid items={itemsCustomExtend} />
    //     </div>
    //     <div className="w-[70%] p-2"></div>
    //   </div>
    // </div>
  );
};

export default Items;
