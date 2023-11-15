"use client";

import { useEffect, useState } from "react";

function ProjectCategory({ category }: { category: any }) {
  if (category === "semua") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-red-500"></div>
        <div className="card h-[200px] bg-red-500"></div>
      </div>
    );
  } else if (category === "ui design") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-green-500"></div>
        <div className="card h-[200px] bg-green-500"></div>
      </div>
    );
  } else if (category === "web development") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-orange-500"></div>
        <div className="card h-[200px] bg-orange-500"></div>
      </div>
    );
  } else if (category === "motion graphics") {
    return (
      <div className="text-white grid grid-cols-2 gap-10 ">
        <div className="card h-[200px] bg-white"></div>
        <div className="card h-[200px] bg-white"></div>
      </div>
    );
  }
}

export default function Page() {
  const [category, setCategory] = useState("semua");

  useEffect(() => {
    alert(category);
  }, [category]);

  return (
    <>
      <main className="section__grid">
        <div className="left">
          <div className="titles">
            <h1 className="text-white relative overflow-hidden">
              <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Projects</span>
              <b className="bg__text__heading">Projects</b>
            </h1>
            <p className="text-white/[.60] max-w-[38ch]">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.</p>
          </div>
          <div className="test_ting mt-10 space-y-4">
            {/* Category 1 */}
            <div onClick={() => setCategory("all")} className="choose__category cursor-pointer flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".6" />
                <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity="1" />
              </svg>
              <h2 className="text-white font-semibold">Semua Kategori</h2>
            </div>
            {/* Category 2 */}
            <div onClick={() => setCategory("web development")} className="choose__category cursor-pointer flex gap-2 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
                <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
              </svg>
              <h2 className="text-white/[.60]">Web Development</h2>
            </div>
            {/* Category 3 */}
            <div onClick={() => setCategory("ui design")} className="choose__category cursor-pointer flex gap-2 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
                <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
              </svg>
              <h2 className="text-white/[.60]">UI Design</h2>
            </div>
            {/* Category 4 */}
            <div onClick={() => setCategory("motion graphics")} className="choose__category cursor-pointer flex gap-2 items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
                <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
              </svg>
              <h2 className="text-white/[.60]">Motion Graphics</h2>
            </div>
          </div>
        </div>
        <ProjectCategory category={category} />
      </main>
    </>
  );
}
