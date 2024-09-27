import { getChamps } from "@/server-actions/champAction";
import { convertChampsTableToArray } from "@/service/champService";
import Link from "next/link";
import React from "react";

const Champs = async () => {
  const data = await getChamps();
  const champs = convertChampsTableToArray(data);

  console.log("champs", champs);

  return (
    <div className="grid grid-cols-4">
      {champs.map((champ) => (
        <div key={champ.id}>
          <Link href={`/champs/detail/${champ.id}`}>
            <span>{champ.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Champs;
