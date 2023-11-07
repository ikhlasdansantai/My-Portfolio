import React from "react";
import BlogCard from "../components/common/Fragments/BlogCard";

export default function Page() {
  return (
    <div className="py-10 sm:pt-20 lg:pt-40 px-4 space-y-10 max-w-6xl mx-auto min-[2000px]:h-[40rem]">
      <div className="titles mb-10">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Blogs</span>
          <b className="absolute left-20 bottom-0 top-8 mx-auto text-white text-[2.5rem] font-bold">Blogs</b>
        </h1>
      </div>
      <BlogCard />
    </div>
  );
}
