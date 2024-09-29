import React from "react";
import { skillInfo } from "./skillInfo";

type Props = {
  skillInfo: skillInfo;
};

const SkillCard = ({ skillInfo }: Props) => {
  return (
    <div className="w-[18%] border-[#7F602A] border-2 p-4">
      <div className="flex flex-col gap-4 h-[100%]">
        <div className="flex gap-2">
          <img src={skillInfo.url} alt="" />
        </div>
        <div className="flex gap-2 text-lg">
          <h2>{skillInfo.name}</h2>
          <h2>{skillInfo.keyboard}</h2>
        </div>
        <div className="flex flex-col gap-2 justify-between h-[100%]">
          <span className="text-sm">{skillInfo.description}</span>
          {skillInfo.cooldownBurn && (
            <div className="flex flex-col">
              <span>재사용 대기시간</span>
              <span>{skillInfo.cooldownBurn}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
