import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const requestOption: RequestInit = {
  next: {
    revalidate: 86400,
  },
};

const ChampDetail = async ({ params }: Props) => {
  const { id } = params;
  const champ: Champ & ChampExtends = await getChamp(id, requestOption);
  const { skins, tags, stats, info, image, spells, passive } = champ;
  console.log("🚀 ~ ChampDetail ~ passive:", passive);
  console.log("🚀 ~ ChampDetail ~ spells:", spells);
  console.log("🚀 ~ ChampDetail ~ image:", image);
  console.log("🚀 ~ ChampDetail ~ info:", info);
  console.log("🚀 ~ ChampDetail ~ stats:", stats);
  console.log("🚀 ~ ChampDetail ~ tags:", tags);
  console.log("🚀 ~ ChampDetail ~ skins:", skins);

  return <div>{params.id}</div>;
};

export default ChampDetail;
