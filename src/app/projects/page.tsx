"use client";

import Head from "next/head";
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
      <head>
        <title>Projects Page</title>
        <meta name="description" content="This is the meta description for My Page" />
      </head>
      <main className="grid grid-cols-1 py-10 sm:py-20 lg:pt-40 gap-4 justify-center md:grid-cols-2 px-4 md:px-0 items-center max-w-6xl mx-auto min-[2000px]:h-[40rem] ">
        <div className="left">
          <div className="titles">
            <h1 className="text-white relative ">
              <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Projects</span>
              <b className="absolute left-20 bottom-0 top-8 mx-auto text-white text-[2.5rem] font-bold">Projects</b>
            </h1>
            <p className="text-white/[.60] max-w-[38ch]">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.</p>
          </div>
          <div className="test_ting mt-20 space-y-4">
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

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<g opacity="0.6">
<circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fill-opacity="0.5"/>
<circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white"/>
</g>
</svg> */
}
