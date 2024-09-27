"use client";

import useGetChamps from "@/Queries/useGetRotationKeys";
import { getChampDetailWithRotations } from "@/service/champService";
import type Rotation from "@/types/Rotation";
import React, { Suspense, useEffect, useState } from "react";

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

  // suspense는 데이터가 요청이 끝날 떄까지 기다린다 => undefined가 나오지 않음
  const { data: champTable } = useGetChamps();

  // if (rotationPending || champTablePending) {
  //   return <>. . . 로딩 </>;
  // }

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
