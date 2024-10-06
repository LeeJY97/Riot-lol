import { champTagMapKr } from "@/types/Champs";
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
    <section className="w-[100%] relative">
      <div className="flex justify-center">
        <div className="w-[100%] min-w-[1200px] max-w-[1920px] opacity-50 ">
          <img src={info.imageUrl} alt="" className="w-[100%] object-cover" />
        </div>
      </div>
      <div className="absolute top-1/3 w-[100%] min-w-[500px] max-w-[900px] p-4">
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
