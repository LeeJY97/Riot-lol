"use server";

import Champs, { Champ, ChampExtends, ChampTable } from "@/types/Champs";

const getChamps = async (): Promise<ChampTable> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });

  const data: Champs = await res.json();
  return data.data;
};

const getChamp = async (id: string, requestOption: RequestInit): Promise<Champ & ChampExtends> => {
  const res = await fetch(`${process.env.DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion/${id}.json`, requestOption);
  const data = (await res.json()).data[id];
  return data;
};

export { getChamps, getChamp };
