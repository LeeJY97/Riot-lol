import Champ from "@/types/Champ";
import Rotation from "@/types/Rotation";

const getChampDetailWithRotations = async (rotationKeys: Rotation) => {
  console.log("rotationKeys", rotationKeys);

  // 여기에 fetch 넣으면 종속되서 별로임, 그냥 champ data 매개변수로 받기
  const res = await fetch(
    `${process.env.DDRAGON_BASE_URL}/14.14.1/data/ko_KR/champion.json`
  );

  const data = await res.json();

  // 1) 해시테이블 구조로 champData를 만듬
  const champData: Champ = data.data;

  // 2) champData의 values를 배열로 만들고, rotationKeys에 포함되는 요소만 배열로 반환
  const rotationChampList = Object.values(champData).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key)
  );

  return rotationChampList;
};

export { getChampDetailWithRotations };

// export default rotationService;
