import React from "react";
import { SkillInfo } from "@/types/Champs";

type Props = {
  skills: SkillInfo[];
};

const SkillSection = ({ skills }: Props) => {
  return (
    // max-w-[1200px] min-w-[1200px] mx-auto
    <div className="flex justify-between w-full max-w-[1200px] min-w-[1200px] mx-auto">
      {skills.map((skill) => (
        <div key={skill.id} className="w-[18%] border-[#7F602A] border-2 p-4">
          <div className="flex flex-col gap-4 h-[100%]">
            <div className="flex gap-2 shadow-custom-white">
              <img src={skill.url} alt={`${skill.name} 이미지`} />
            </div>
            <div className="flex gap-2 text-lg">
              <h2>{skill.name}</h2>
              <h2>{skill.keyboard}</h2>
            </div>
            <div className="flex flex-col gap-2 justify-between h-[100%]">
              <span className="text-sm">{skill.description}</span>
              {skill.cooldownBurn && (
                <div className="flex flex-col">
                  <span>재사용 대기시간</span>
                  <span>{skill.cooldownBurn}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
