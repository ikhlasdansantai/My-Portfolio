import React from "react";
import BlogCard from "../components/common/Fragments/BlogCard";

export default function page() {
  return (
    <div className="section__no__grid">
      <div className="titles mb-10">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Blogs</span>
          <b className="bg__text__heading">Blogs</b>
        </h1>
      </div>
      <BlogCard />
    </div>
  );
}
