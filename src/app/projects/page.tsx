"use client";

import ProjectDetail from "../components/common/Fragments/ProjectDetail";
import ProjectFilter from "../components/layouts/Projects/ProjectFilter";
import ProjectMenus from "../components/layouts/Projects/ProjectMenus";
import styles from "./project.module.css";
import { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <>
      <main className={`grid py-20 max-w-6xl mx-auto px-4 lg:pt-40 ${styles.grid__temp} items-stretch space-y-10 gap-0`}>
        <div className="left relative overflow-hidden border">
          <div className="projects__header">
            <h1 className="text-white overflow-hidden">
              <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Overview</span>
              <b className="bg__text__heading">Overview</b>
            </h1>
            <p className="text-white/[.60] max-w-[38ch]">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.</p>
          </div>
          <ProjectMenus />
        </div>
        <ProjectFilter show={show} setShow={setShow} />
      </main>
      <ProjectDetail show={show} setShow={setShow} />
    </>
  );
}
