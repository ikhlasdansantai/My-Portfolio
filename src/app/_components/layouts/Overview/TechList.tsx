"use client";

import { useState, useEffect } from "react";
import TechListCard from "../../common/Fragments/TechListCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { Tech } from "@/app/types";

export default function TechList({ level }: { level: string }) {
  const [TechList, setTechList] = useState<Tech[] | null>(null);
  const [parent, enableAnimations] = useAutoAnimate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function getTechList() {
    try {
      const res = await fetch("api/techstack");
      if (res.ok) {
        const data = await res.json();
        const filteredTechStack = data.data.filter((tech: any) => tech.status === level).sort((a: any, b: any) => a.name.localeCompare(b.name));
        level !== "All" ? setTechList(filteredTechStack) : setTechList(data.data);
      } else {
        setErrorMsg("Failed to fetch Tech stack data. Please try again later :)");
      }
    } catch (e: Error | any) {
      setErrorMsg(e);
    }
  }

  useEffect(() => {
    getTechList();
  }, [level]);

  if (errorMsg) return <p className="text-red-400">{errorMsg}</p>;
  if (TechList === null) return <p className="text-white">Loading...</p>;

  return (
    <div ref={parent} className="grid max-[350px]:grid-cols-1 gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 group">
      {TechList.map(({ name, url, status }) => (
        <TechListCard key={name} name={name} url={url} status={status} />
      ))}
    </div>
  );
}
