import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  selectedItem: Item & ItemCustomExtend;
};

{
  /* <div
  key={item.id}
  className="hover-element border-[1px] border-[#3C3C41] h-[36px] p-[1px]"
  onClick={() => handleSetItem(item)}>
  <Image src={item.defaultImage} alt={item.name} width={34} height={34} />
  {/* <span className="text-[0.6rem]">{item.gold.total}</span> */
}

const ItemInfo = ({ selectedItem }: Props) => {
  console.log("first", selectedItem.gold.base);
  console.log("first", selectedItem.gold.total);
  const getBorderColor = () => {
    if (selectedItem.gold.base === selectedItem.gold.total) {
      return "#3C3C41";
    } else if (selectedItem.into) {
      return "#FFF";
    }
    return "#7F602A";
  };
  const borderColor = getBorderColor();

  return (
    <div className="flex flex-col justify-between h-[100%] border-[#7F602A] border-2 p-4">
      <div className="flex flex-col gap-2">
        <section className="flex gap-4">
          <div className={`hover-element border-[1px] h-[53px] p-[1px] border-[${borderColor}]`}>
            <Image src={selectedItem.defaultImage} width={50} height={50} alt={selectedItem.name} />
          </div>
          <div className="flex flex-col">
            <h3>{selectedItem.name}</h3>
            <p className="text-[#ce9d49]">{selectedItem.gold.total} Gold</p>
          </div>
        </section>
        <section className="flex flex-col">
          {selectedItem.customDescription.stats.map((stat) => (
            <div key={stat.name} className="flex">
              <p className="text-xs text-[#0596AA]">{`${stat.name} ${stat.value}`}</p>
            </div>
          ))}
        </section>
      </div>
      <section className="text-sm">
        <p>{selectedItem.customDescription.passive}</p>
      </section>
    </div>
  );
};

export default ItemInfo;
