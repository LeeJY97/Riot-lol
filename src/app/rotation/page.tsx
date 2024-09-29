"use client";

import ChampGrid from "@/components/ChampGrid";
import queryKey from "@/Queries/queryKey";
import { getChamps } from "@/server-actions/champAction";
import { getChampsExtendCustomImage, getChampsWithRotations } from "@/service/champService";
import { ChampTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useSuspenseQuery } from "@tanstack/react-query";

const Rotation = () => {
  const { data: rotationKeys } = useSuspenseQuery<Rotation>({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`);
      const rotationKeys = await rotationRes.json();
      return rotationKeys;
    },
  });

  const { data: ChampTable } = useSuspenseQuery<ChampTable>({
    queryKey: queryKey.champ.champs,
    queryFn: () => getChamps(),
    initialData: {},
    staleTime: 0,
  });

  const rotationChamps = getChampsWithRotations(rotationKeys, ChampTable);
  const champsExtendCustomImage = getChampsExtendCustomImage(rotationChamps);

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <ChampGrid champs={champsExtendCustomImage} />;
    </div>
  );
};

export default Rotation;
