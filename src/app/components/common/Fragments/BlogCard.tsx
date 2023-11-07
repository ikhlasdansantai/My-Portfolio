"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MediumBlogResponse {
  items: MediumBlogItem[];
  feed: MediumFeedItem;
}

interface MediumFeedItem {
  link: string;
}

interface MediumBlogItem {
  title: string;
  description: string;
  categories: string[];
  thumbnail: string;
}

export default function BlogCard() {
  const [Blogs, setBlogs] = useState<MediumBlogResponse | null>(null);
  async function getMediumBlog() {
    try {
      const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@initesting5", {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data as MediumBlogResponse);
        console.log(data);
      } else console.error("Server Internal Error");
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getMediumBlog();
  }, []);

  if (Blogs === null) return <p className="text-white">Loading...</p>;

  return (
    <Link href={Blogs.feed.link} target="_parent" className="blog__cards space-y-14 ">
      {Blogs.items.map(({ title, description, categories, thumbnail }, index) => (
        <div className="blog__card__container flex justify-between gap-10 sm:gap-10 items-stretch lg:w-[60%] mr-auto" key={index}>
          <div key={index} className="blog__titles">
            <p className="text-xl sm:text-2xl font-semibold text-white cut__text cut__text__two">{title}</p>
            <div className="text-xs sm:text-base text-white/[.60]" dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }} />
            <button className="hidden sm:block mt-6 py-1 px-3 text-white/[.60] border text-xs rounded-lg lg:text-sm">{categories[0]}</button>
          </div>
          <div className="blog__thumb">
            <figure className="sm:w-40">
              <Image src={thumbnail} alt={"Blog thumb"} width={200} height={200} style={{ width: "100%", height: "auto" }} quality={80} loading="lazy" />
            </figure>
          </div>
        </div>
      ))}
    </Link>
  );
}
