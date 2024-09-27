import rotationService from "@/service/rotationService";
import React from "react";

const Rotation = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/rotation`);
  const rotationKeys = await res.json();

  const champList = await rotationService.getChampDetailWithRotations(
    rotationKeys
  );

  return (
    <div className="grid grid-cols-4">
      {champList.map((champ) => (
        <span key={champ.id}>{champ.name}</span>
      ))}
    </div>
  );
};

export default Rotation;
