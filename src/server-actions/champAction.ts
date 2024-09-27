import Champ from "@/types/Champ";

const getChamps = async () => {
  const res = await fetch(
    `${process.env.DDRAGON_BASE_URL}/14.14.1/data/ko_KR/champion.json`
  );

  const data: Champ = await res.json();
  return data.data;
};

export { getChamps };
