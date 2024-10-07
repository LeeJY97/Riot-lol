import { getItems } from "@/server-actions/itemAction";
import { processItemData } from "@/service/itemService";
import { Item, ItemCustomExtend, ItemTable } from "@/types/Item";
import React from "react";
import ItemController from "./components/ItemController";
import rift from "@/public/assets/images/bg/rift.webp";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아이템 도감",
  description: "리그 오브 레전드 아이템 도감 페이지",
};

const Items = async () => {
  const items: ItemTable = await getItems();
  const itemsCustomExtend: (Item & ItemCustomExtend)[] = processItemData(items);

  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Image src={rift} alt="페이지 배경 이미지" layout="fill" className="opacity-40" />
      <div className="pt-[56px]">
        <ItemController items={itemsCustomExtend} />;
      </div>
    </div>
  );
};

export default Items;
