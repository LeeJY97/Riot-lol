import { Item, ItemCustomExtend } from "@/types/Item";
import React from "react";
import Image from "next/image";

type Props = {
  items: (Item & ItemCustomExtend)[];
  selectedItem: Item & ItemCustomExtend;
  handleSetItem?: (item: Item & ItemCustomExtend) => void;
};

const ItemInto = ({ items, selectedItem, handleSetItem }: Props) => {
  if (!selectedItem.into) {
    return <div>상위 아이템이 없습니다.</div>;
  }
  const filterIds = selectedItem.into;
  const filterItems = items.filter((item) => filterIds.includes(item.id));

  return (
    // 배경 색 조금 투명하게해서 주기
    <div className="p-2 ">
      <h3 className="text-sm">상위 아이템</h3>
      <div className="flex flex-wrap gap-2 ">
        {filterItems.map((item) => (
          <div
            key={item.id}
            className="hover-element border-[1px] border-[#3C3C41] h-[37px] p-[1px]"
            onClick={() => handleSetItem(item)}>
            <Image src={item.defaultImage} alt={item.name} width={34} height={34} />
            {/* <span className="text-[0.6rem]">{item.gold.total}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemInto;
