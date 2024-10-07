import React from "react";
import { SkillInfo } from "@/types/Champs";
import Image from "next/image";

type Props = {
  skills: SkillInfo[];
};

const SkillSection = ({ skills }: Props) => {
  return (
    // max-w-[1200px] min-w-[1200px] mx-auto
    <ul className="flex justify-between w-full max-w-[1200px] min-w-[1200px] mx-auto">
      {skills.map((skill) => (
        <li key={skill.id} className="w-[18%] border-[#7F602A] border-2 p-4">
          <div className="flex flex-col gap-4 h-[100%]">
            <section className="flex gap-2 w-[50px] h-[50px] shadow-custom-white">
              <Image src={skill.url} width={50} height={50} alt={`${skill.name} 이미지`} />
            </section>
            <section className="flex gap-2 text-lg">
              <h2>{skill.name}</h2>
              <h2>{skill.keyboard}</h2>
            </section>
            <ul className="flex flex-col gap-2 justify-between h-[100%]">
              <p className="text-sm">{skill.description}</p>
              {skill.cooldownBurn && (
                <li>
                  <p>재사용 대기시간</p>
                  <p>{skill.cooldownBurn}</p>
                </li>
              )}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SkillSection;
