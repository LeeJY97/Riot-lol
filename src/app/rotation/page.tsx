"use client";

import queryKey from "@/Queries/queryKey";
import useGetChamps from "@/Queries/useGetRotationKeys";
import { getChamps } from "@/server-actions/champAction";
import Rotation from "@/types/Rotation";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const initialRotationKeys: Rotation = {
  freeChampionIds: [],
  freeChampionIdsForNewPlayers: [],
  maxNewPlayerLevel: 0,
};

const Rotation = () => {
  const [rotationPending, setRotationPending] = useState<boolean>(true);
  // const [rotationKeys, setRotationKeys] =
  //   useState<Rotation>(initialRotationKeys);

  // useEffect(() => {
  //   const fetchRotationKeys = async () => {
  //     const rotationRes = await fetch(`/api/rotation`, {
  //       cache: "no-cache",
  //     });
  //     const rotationKeys = await rotationRes.json();

  //     console.log("ratationKeys", rotationKeys);

  //     setRotationKeys(rotationKeys);
  //     setRotationPending(false);
  //   };
  //   fetchRotationKeys();
  // }, []);

  const { data: rotationKeys } = useSuspenseQuery({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`
      );
      const rotationKeys = await rotationRes.json();
      return rotationKeys;
    },
  });

  const { data: champTable } = useSuspenseQuery({
    // useQuery쓰면 undefined가 나올수밖에 없음
    queryKey: queryKey.champ.champTable,
    queryFn: () => getChamps(),
  });

  // const { data: champTable } = useGetChamps();

  console.log("rotationKeys", rotationKeys);
  console.log("champTable", champTable);
  // if (rotationPending) {
  //   return <>. . . 로딩 </>;
  // }

  // const champs: ChampTable = await champsRes.json();

  // const rotationChamps = getChampDetailWithRotations(rotationKeys, champTable);
  // {rotationChamps.map((champ) => (
  //   <span key={champ.id}>{champ.name}</span>
  // ))}

  return <div className="grid grid-cols-4"></div>;
};

export default Rotation;
