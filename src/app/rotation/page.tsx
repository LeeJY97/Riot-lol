"use client";

import queryKey from "@/Queries/queryKey";
import useGetChamps from "@/Queries/useGetRotationKeys";
import { getChamps } from "@/server-actions/champAction";
import { getChampDetailWithRotations } from "@/service/champService";
import { ChampTable } from "@/types/Champ";
import type Rotation from "@/types/Rotation";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const initialRotationKeys: Rotation = {
  freeChampionIds: [],
  freeChampionIdsForNewPlayers: [],
  maxNewPlayerLevel: 0,
};

const Rotation = () => {
  const [rotationPending, setRotationPending] = useState<boolean>(true);
  const [rotationKeys, setRotationKeys] =
    useState<Rotation>(initialRotationKeys);

  // tanstack Query로 변경하기
  useEffect(() => {
    const fetchRotationKeys = async () => {
      const rotationRes = await fetch(
        `${process.env.NEXT_BASE_URL}/api/rotation`,
        {
          cache: "no-cache",
        }
      );
      const rotationKeys = await rotationRes.json();

      setRotationKeys(rotationKeys);
      setRotationPending(false);
    };
    fetchRotationKeys();
  }, []);
  // const { data: rotationKeys } = useSuspenseQuery({
  //   queryKey: queryKey.rotation.rotationKeys,
  //   queryFn: async () => {
  //     const rotationRes = await fetch(
  //       // `${process.env.NEXT_BASE_URL}/api/rotation`
  //       `/api/rotation`
  //     );
  //     const rotationKeys = await rotationRes.json();
  //     return rotationKeys;
  //   },
  // });

  const { data: champTable } = useGetChamps();

  if (rotationPending) {
    return <>. . . 로딩 </>;
  }

  // const champs: ChampTable = await champsRes.json();

  const rotationChamps = getChampDetailWithRotations(rotationKeys, champTable);

  return (
    <div className="grid grid-cols-4">
      {rotationChamps.map((champ) => (
        <span key={champ.id}>{champ.name}</span>
      ))}
    </div>
  );
};

export default Rotation;
