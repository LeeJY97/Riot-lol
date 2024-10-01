import { Item, ItemCustomExtend } from "@/types/Item";
import Image from "next/image";
import React from "react";

type Props = {
  item: Item & ItemCustomExtend;
};

const ItemInfo = ({ item }: Props) => {
  return (
    <div className="flex flex-col justify-between h-[100%] border-[#7F602A] border-2 p-4">
      <div className="flex flex-col gap-2">
        <section className="flex gap-4">
          <Image src={item.defaultImage} width={50} height={50} alt={item.name}></Image>
          <div className="flex flex-col">
            <h3>{item.name}</h3>
            <p className="text-[#ce9d49]">{item.gold.total} Gold</p>
          </div>
        </section>
        <section className="flex flex-col">
          {item.customDescription.stats.map((stat) => (
            <div key={stat.name} className="flex">
              <p className="text-xs text-[#0596AA]">{`${stat.name} ${stat.value}`}</p>
            </div>
          ))}
        </section>
      </div>
      <section className="text-sm">
        <p>{item.customDescription.passive}</p>
      </section>
    </div>
  );
};

export default ItemInfo;
