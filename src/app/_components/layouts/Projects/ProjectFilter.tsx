"use client";

import ProjectCard from "../../common/Fragments/ProjectCard";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { useProjectStore } from "@/app/store/projectCategoryStore";

interface Projects {
  name: string;
  url: string;
  description: string;
  category: string;
  links: string[];
  technology: string[];
}

export default function ProjectFilter() {
  const [projects, setProjects] = useState<Projects[] | null>(null);

  async function getProjects() {
    try {
      await useProjectStore.getState().fetchingProject("api/projects");
      const getProjects = useProjectStore.getState().projects;

      setProjects(getProjects.data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (projects === null) return <p className="text-white">Sedang Dimuat...</p>;
  return (
    <Suspense fallback={<Loading />}>
      <ProjectCard projects={projects} />
    </Suspense>
  );
}
