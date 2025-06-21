import type { Metadata } from "next";
import React from "react";
import BlogCard from "../_components/common/Fragments/BlogCard";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A list of blogs on medium",
};

export default function page() {
  return (
    <main className="section__no__grid">
      <div className="titles mb-10">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Blogs</span>
          <b className="bg__text__heading">Blogs</b>
        </h1>
      </div>
      <BlogCard />
    </main>
  );
}
