import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  selectedItem: Item & ItemCustomExtend;
};

const ItemInfo = ({ selectedItem }: Props) => {
  const getBorderColor = () => {
    if (selectedItem.gold.base === selectedItem.gold.total) {
      return "#grey";
    } else if (selectedItem.into) {
      return "#subColor";
    }
    return "mainColor";
  };
  const borderColor = getBorderColor();
  const description =
    selectedItem.customDescription.passive.length > 0
      ? selectedItem.customDescription.passive
      : selectedItem.plaintext;

  return (
    <div className="flex flex-col justify-between border-mainColor border-2 p-4 h-[200px]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div className={`hover-element border-[1px] h-[53px] p-[1px] border-${borderColor}`}>
            <Image src={selectedItem.defaultImage} width={50} height={50} alt={selectedItem.name} />
          </div>
          <div className="flex flex-col">
            <h3>{selectedItem.name}</h3>
            <p className="text-[#ce9d49]">{selectedItem.gold.total} Gold</p>
          </div>
        </div>
        <div className="flex flex-col">
          {selectedItem.customDescription.stats.map((stat) => (
            <div key={stat.name} className="flex">
              <p className="text-xs text-[#0596AA]">{`${stat.name} ${stat.value}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs">
        {/* <p>{selectedItem.customDescription.passive}</p> */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemInfo;
