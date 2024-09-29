import React from "react";
import { skillInfo } from "./skillInfo";

type Props = {
  skillInfo: skillInfo;
};

const SkillCard = ({ skillInfo }: Props) => {
  return (
    <div className="w-[18%] border-[#7F602A] border-2">
      <div className="flex gap-2">
        <img src={skillInfo.url} alt="" />
        <span>{skillInfo.keyboard}</span>
      </div>
    </div>
  );
};

export default SkillCard;
