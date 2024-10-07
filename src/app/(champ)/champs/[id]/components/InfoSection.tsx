import { champTagMapKr } from "@/types/Champs";
import Image from "next/image";
import React from "react";
type Props = {
  imageUrl: string;
  title: string;
  name: string;
  lore: string;
  tags: string[];
};

const InfoSection = ({ ...info }: Props) => {
  return (
    <section className="w-full relative">
      <div className="flex justify-center">
        <div className="w-full min-w-[1200px] max-w-[1920px] opacity-50 ">
          {/*  TODO Image로 변경 */}
          <Image
            src={info.imageUrl}
            width={1920}
            height={1080}
            alt="챔피언 기본 스킨"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-1/3 w-full min-w-[500px] max-w-[900px] p-4">
        <h1 className="text-4xl font-bold text-[#C8AA6E] font-HeirofLight italic">{info.title}</h1>
        <div className="flex items-end">
          <h1 className="text-8xl font-HeirofLight">{info.name}</h1>
          <span className="text-2xl p-2">{`(${info.tags
            .map((tag) => champTagMapKr[tag])
            .join("/")})`}</span>
        </div>
        <div className="mt-4 w-[70%]">
          <span className="text-lg">{info.lore}</span>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
