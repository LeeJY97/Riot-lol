"use client";

import queryKey from "@/Queries/queryKey";
// import useGetChamps from "@/Queries/useGetRotationKeys";
// import { getChamps } from "@/server-actions/champAction";
import { getChampsWithRotations } from "@/service/champService";
import Champ, { ChampsTable } from "@/types/Champs";
import type Rotation from "@/types/Rotation";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";

const Rotation = () => {
  const { data: rotationKeys } = useSuspenseQuery<Rotation>({
    queryKey: queryKey.rotation.rotationKeys,
    queryFn: async () => {
      const rotationRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/rotation`
      );
      const rotationKeys = await rotationRes.json();
      return rotationKeys;
    },
  });

  const { data: champsTable } = useSuspenseQuery<ChampsTable>({
    queryKey: queryKey.champ.champsTable,
    // queryFn: () => getChamps(), // d
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DDRAGON_BASE_URL}/14.14.1/data/ko_KR/champion.json`,
        {
          next: {
            revalidate: 86400,
          },
        }
      );

      const data: Champ = await res.json();
      return data.data;
    },
  });

  const rotationChamps = getChampsWithRotations(rotationKeys, champsTable);

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
