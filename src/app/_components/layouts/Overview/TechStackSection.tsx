"use client";
import { useState } from "react";
import TechList from "./TechList";
import { SkillLevel } from "@/app/types";

const categories: SkillLevel[] = [SkillLevel.All, SkillLevel.Beginner, SkillLevel.Intermediate, SkillLevel.Advanced];
export default function TechStackSection() {
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(SkillLevel.All);

  return (
    <div className="tech__stack__contents">
      <div className="header flex flex-wrap items-center justify-between mb-4 space-y-2">
        <h2 className="text-white font-semibold text-lg">Tech stack</h2>
        <div className="space-x-4">
          {categories.map((category: SkillLevel) => (
            <span key={category} onClick={() => setSkillLevel(category)} className={`cursor-pointer transition-colors duration-150  ${skillLevel === category ? "text-white" : "hover:text-white text-white/30"} `}>
              {category}
            </span>
          ))}
        </div>
      </div>
      <TechList level={skillLevel} />
    </div>
  );
}
