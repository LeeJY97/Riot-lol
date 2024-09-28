import { getChamp } from "@/server-actions/champAction";
import { Champ, ChampExtends } from "@/types/Champs";
import { Metadata } from "next";
import Image from "next/image";
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

export function generateMetadata({ params }: Props): Metadata {
  // 경로 매개변수 읽기
  const id = params.id;

  return {
    title: id,
  };
}

const ChampDetail = async ({ params }: Props) => {
  const { id } = params;
  const champ: Champ & ChampExtends = await getChamp(id, requestOption);
  const { skins, tags, stats, info, image, spells, passive } = champ;

  const skinImageUrl = skins.map(
    (skin) => `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`,
  );

  console.log("skinImageUrl", skinImageUrl);

  // <div classname='slide'> // position: relative
  //   <ul>
  //     <li></li>
  //     <li></li>
  //     <li></li>
  //   </ul>
  //   <div className=""> // position: absolute; z-index:1
  //     <h1>가렌</h1>
  //     <span>어쩌구 저쩌구 ...</span>
  //   </div>
  // </div>

  return (
    <div className="flex flex-col">
      {skinImageUrl.map((url) => (
        // <ImageTest key={url} url={url}></ImageTest>
        <div
          key={url}
          className="test flex justify-center items-center w-[100%] max-w-[1920px] h-[850px] mx-auto relative">
          <Image src={url} layout={"fill"} alt={""} />
        </div>
        // <div key={url} className="flex justify-center items-center w-[100%] max-w-[1920px] mx-auto">
      ))}
    </div>
  );
};

export default ChampDetail;
