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
    return (
      <div className="h-[100px] flex justify-center items-center border-b-[1px] border-mainColor">
        상위 아이템이 없습니다.
      </div>
    );
  }
  const filterIds = selectedItem.into;
  const filterItems = items.filter((item) => filterIds.includes(item.id));

  return (
    // 배경 색 조금 투명하게해서 주기
    <div className="p-2 flex border-b-[1px] border-mainColor h-[100px]">
      <ul className="flex items-center flex-wrap gap-2">
        {filterItems.map((item) => (
          <li
            key={item.id}
            className="hover-element flex justify-center items-center border-[1px] border-itemBorder h-[34px] w-[34px] p-[1px]"
            onClick={() => handleSetItem(item)}>
            <Image src={item.defaultImage} alt={item.name} width={50} height={50} />
            {/* <span className="text-[0.6rem]">{item.gold.total}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemInto;
