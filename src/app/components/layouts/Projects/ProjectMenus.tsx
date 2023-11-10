"use client";

import ProjectMenuCategories from "@/app/components/common/Fragments/ProjectMenuCategories";
import { useEffect, useState } from "react";

export default function ProjectMenus() {
  const [category, setCategory] = useState("semua kategori");

  return (
    <div className="project__menus mt-10 space-y-4">
      <ProjectMenuCategories category={category} setCategory={setCategory} />
    </div>
  );
}
