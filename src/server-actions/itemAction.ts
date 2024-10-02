"use server";

import { ItemTable } from "@/types/Item";
import version from "@/utils/constant";

const getItems = async (): Promise<ItemTable> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/${version}/data/ko_KR/item.json`,
    {
      cache: "no-cache",
    },
  );

  const { data } = await res.json();
  return data;
};

// const getChamp = async (id: string, requestOption: RequestInit): Promise<Champ & ChampExtends> => {
//   const res = await fetch(`${process.env.DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion/${id}.json`, requestOption);
//   const data = (await res.json()).data[id];
//   return data;
// };

export { getItems };
