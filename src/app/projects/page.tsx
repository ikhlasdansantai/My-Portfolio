import type { Metadata } from "next";
import ProjectDetail from "../_components/common/Fragments/ProjectDetail";
import ProjectFilter from "../_components/layouts/Projects/ProjectFilter";
import ProjectMenus from "../_components/layouts/Projects/ProjectMenus";
import styles from "./project.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my Projects",
};

export default function Page() {
  return (
    <main>
      <div className={`grid py-20 max-w-6xl mx-auto px-4 lg:pt-40 ${styles.grid__temp} items-stretch space-y-10 gap-0`}>
        <div className="left relative overflow-x-hidden">
          <div className="projects__header ">
            <h1 className="text-white">
              <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Projects</span>
              <b className="bg__text__heading">Projects</b>
            </h1>
            <p className="text-white/[.60] max-w-[38ch]">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.</p>
          </div>
          <ProjectMenus />
        </div>
        <ProjectFilter />
      </div>
      <ProjectDetail />
    </main>
  );
}
