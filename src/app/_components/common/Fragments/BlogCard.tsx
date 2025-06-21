"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogLoader from "../../containers/loaders/blogLoader";
import { MediumBlogResponse } from "@/app/types";

export default function BlogCard() {
  const [Blogs, setBlogs] = useState<MediumBlogResponse | null>(null);
  async function getMediumBlog() {
    try {
      const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ikhlasdansantai", {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data as MediumBlogResponse);
      } else console.error("Server Internal Error");
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getMediumBlog();
  }, []);

  if (Blogs === null) return <BlogLoader />;

  return (
    <Link href={Blogs.feed.link} target="_parent" className="grid sm:grid-cols-2 gap-8">
      {Blogs.items.map(({ title, description, categories, image }, index) => (
        <div className="w-full border p-4" key={index}>
          <div className="blog__titles w-full">
            <p className="h-14 text-xl font-semibold text-white cut__text cut__text__two" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="blog_categories flex gap-2">
              {categories.map((category, index) => (
                <button key={index} className="hidden sm:block mt-6 py-1 px-3 text-white/[.60] border text-xs rounded-lg lg:text-sm">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
}
