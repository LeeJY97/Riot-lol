import Champ from "@/types/Champ";
import Rotation from "@/types/Rotation";

const getChampDetailWithRotations = (rotationKeys: Rotation, champs: Champ) => {
  // 1) 해시테이블 구조로 champData를 만듬
  const champs = champs.data;

  // 2) champData의 values를 배열로 만들고, rotationKeys에 포함되는 요소만 배열로 반환
  const rotationChampList = Object.values(champs).filter((champ) =>
    rotationKeys.freeChampionIds.includes(+champ.key)
  );

  return rotationChampList;
};

export { getChampDetailWithRotations };

// export default rotationService;
