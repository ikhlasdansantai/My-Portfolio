"use client";

import { useState, useEffect } from "react";
import TechListCard from "../../common/Fragments/TechListCard";

interface Tech {
  id: number;
  name: string;
  url: string;
  status: string;
}

export default function TechList() {
  const [TechList, setTechList] = useState<Tech[] | null>(null);
  async function getTechList() {
    try {
      const res = await fetch("http://localhost:4400/tech");
      if (res.ok) {
        const data = await res.json();
        setTechList(data);
      } else {
        console.error("Server internal Error");
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getTechList();
  }, []);

  if (TechList === null) return <p className="text-white">Loading...</p>;

  return (
    <>
      <div className="tech__stack grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 group">
        {TechList.map((tech) => (
          <TechListCard key={tech.id} name={tech.name} url={tech.url} status={tech.status} />
        ))}
      </div>
    </>
  );
}
