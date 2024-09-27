import { getChamps } from "@/server-actions/champAction";
import { getChampDetailWithRotations } from "@/service/rotationService";
import Champ from "@/types/Champ";
import React from "react";

const Rotation = async () => {
  // 여기에 cache
  const rotationRes = await fetch(`${process.env.NEXT_BASE_URL}/api/rotation`);
  const rotationKeys = await rotationRes.json();

  const champsRes = await getChamps();
  const champs = await champsRes.json();

  const rotationChamps = getChampDetailWithRotations(rotationKeys, champs);

  return (
    <div className="grid grid-cols-4">
      {rotationChamps.map((champ) => (
        <span key={champ.id}>{champ.name}</span>
      ))}
    </div>
  );
};

export default Rotation;
