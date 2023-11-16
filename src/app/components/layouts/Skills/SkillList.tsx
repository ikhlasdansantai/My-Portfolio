"use client";

import { useEffect, useState } from "react";
import SkillListCard from "../../common/Fragments/SkillListCard";

interface skill {
  id: "string";
  name: "string";
  icon: "string";
  description: "string";
}

export default function SkillList() {
  const [SkillsList, setSkillsList] = useState<skill[] | null>(null);

  async function getTechList() {
    try {
      const res = await fetch("api/skills", {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setSkillsList(data.data);
      } else {
        console.error("Server Internal Error");
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getTechList();
  }, []);

  if (SkillsList === null) return <p className="text-white">Loading....</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {SkillsList.map((skill) => (
        <SkillListCard key={skill.id} name={skill.name} icon={skill.icon} description={skill.description} />
      ))}
    </div>
  );
}
