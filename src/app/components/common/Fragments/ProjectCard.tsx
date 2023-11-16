"use client";

import Image from "next/image";
import { useProjectStore } from "@/app/store/projectCategoryStore";
import { useShallow } from "zustand/react/shallow";
import classNames from "classnames";
import ProjectTech from "./ProjectTech";

interface Projects {
  name: string;
  url: string;
  description: string;
  category: string;
  links: string[];
  technology: string[];
}

interface ProjectCardProps {
  projects: Projects[];
}

export default function ProjectCard({ projects }: ProjectCardProps) {
  const { category, setProjDetail, setProjectDetail } = useProjectStore(
    useShallow((state) => ({
      category: state.projCateFilters,
      setProjDetail: state.setShowProjDetail,
      setProjectDetail: state.setProjectDetail,
    }))
  );

  const projFilter = projects.map((project) => project).filter((project) => project.category === category);

  if (category === "semua kategori") {
    return (
      <div className="text-white grid sm:grid-cols-2 gap-10">
        {projects.map(({ name, url, description, category, links, technology }, index) => (
          <div
            key={index}
            onClick={() => {
              setProjectDetail({ name, url, description, category, links, technology });
              setProjDetail(true);
              document.title = name;
            }}
            className="pt-4 px-4 pb-6 bg-white/[.03] rounded-lg cursor-pointer"
          >
            <figure className="rounded-md overflow-hidden">
              <Image
                src={url}
                alt="gambar"
                height="200"
                width="200"
                style={{ width: "100%", height: "auto" }}
                className={classNames({
                  "blur-[7px]": category === "wip",
                })}
                loading="lazy"
                quality={100}
              />
            </figure>
            <h2 className="text-white text-lg mt-4 mb-1">{name}</h2>
            <span className="text-white/[.60] text-xs lg:text-md leading-6 cut__text cut__text__two">{description}.</span>
            <div className="mt-6">
              <ProjectTech technology={technology} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="text-white grid md:grid-cols-2 gap-10 ">
      {projFilter.map(({ name, url, description, category, links, technology }, index) => (
        <div
          key={index}
          onClick={() => {
            setProjectDetail({ name, url, description, category, links, technology });
            setProjDetail(true);
            document.title = name;
          }}
          className="pt-4 px-4 pb-6 bg-white/[.03] rounded-lg cursor-pointer"
        >
          <figure className="rounded-md overflow-hidden">
            <Image
              src={url}
              alt="gambar"
              height="200"
              width="200"
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              className={classNames({
                "blur-[7px]": category === "wip",
              })}
              quality={100}
            />
          </figure>
          <h2 className="text-white text-lg mt-4 mb-1">{name}</h2>
          <span className="text-white/[.60] text-xs lg:text-md leading-6 cut__text cut__text__two">{description}.</span>
          <div className="mt-6">
            <ProjectTech technology={technology} />
          </div>
        </div>
      ))}
    </div>
  );
}
