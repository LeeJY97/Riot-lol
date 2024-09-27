"use server";

import Champ, { ChampDetail, ChampTable } from "@/types/Champ";

const getChamps = async (): Promise<ChampTable> => {
  const res = await fetch(
    `${process.env.DDRAGON_BASE_URL}/14.14.1/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  const data: Champ = await res.json();
  console.log("data", data.data);
  return data.data;
};

const getChamp = async (id: string): Promise<ChampDetail> => {
  const res = await fetch(
    `${process.env.DDRAGON_BASE_URL}/14.19.1/data/ko_KR/champion/${id}.json`
  );

  const data: ChampDetail = await res.json();
  return data;
};

export { getChamps, getChamp };
