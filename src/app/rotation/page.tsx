"use client";

import queryKey from "@/Queries/queryKey";
// import useGetChamps from "@/Queries/useGetRotationKeys";
import { getChamps } from "@/server-actions/champAction";
import { getChampsWithRotations } from "@/service/champService";
import Champ, { ChampTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";

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

  // ChampImage이 url 삽입

  const rotationChamps = getChampsWithRotations(rotationKeys, ChampTable);

  return (
    <div className="grid grid-cols-4">
      {rotationChamps.map((champ) => (
        <div key={champ.id}>
          <Link href={`/champs/detail/${champ.id}`}>
            <span>{champ.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Rotation;
