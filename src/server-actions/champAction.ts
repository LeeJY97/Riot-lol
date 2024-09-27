"use server";

import Champs, { Champ, ChampTable } from "@/types/Champs";

const getChamps = async (): Promise<ChampTable> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/14.14.1/data/ko_KR/champion.json`, {
    next: {
      revalidate: 86400,
    },
  });

  const data: Champs = await res.json();
  return data.data;
};

const getChamp = async (id: string): Promise<Champ> => {
  const res = await fetch(`${process.env.DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion/${id}.json`);

  const data: Champ = await res.json();
  return data;
};

export { getChamps, getChamp };
