"use client";

import Link from "next/link";
// import Image from "next/image";
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
  image: string;
}

function BlogLoading() {
  return (
    <>
      <div className="blog__card__container grid sm:grid-cols-2 justify-between gap-8 gap-y-16">
        <div className="titles">
          <p className="animate-pulse py-6 bg-gray-400 rounded-lg"></p>
          <div className="tags flex space-x-2 mt-6">
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
          </div>
        </div>
        <div className="titles">
          <p className="animate-pulse py-6 bg-gray-400 rounded-lg"></p>
          <div className="tags flex space-x-2 mt-6">
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
          </div>
        </div>
        <div className="titles">
          <p className="animate-pulse py-6 bg-gray-400 rounded-lg"></p>
          <div className="tags flex space-x-2 mt-6">
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
          </div>
        </div>
        <div className="titles">
          <p className="animate-pulse py-6 bg-gray-400 rounded-lg"></p>
          <div className="tags flex space-x-2 mt-6">
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
          </div>
        </div>
      </div>
      {/* <div className="blog__card__container grid grid-cols-2 justify-between gap-20 items-stretch lg:w-[60%] mr-auto">
        <div className="titles">
          <p className="animate-pulse py-6 bg-gray-400 rounded-lg"></p>
          <p className="animate-pulse inline-block py-2 w-10/12 mt-2 bg-gray-400 rounded-lg"></p>
          <div className="tags flex space-x-2">
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
            <p className="animate-pulse block py-2 w-12 mt-2 bg-gray-400 rounded-lg"></p>
          </div>
        </div>
        <div className="h-60 bg-slate-400 animate-pulse"></div>
      </div>  */}
    </>
  );
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
        console.log(data);
        setBlogs(data as MediumBlogResponse);
      } else console.error("Server Internal Error");
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getMediumBlog();
  }, []);

  if (Blogs === null) return <BlogLoading />;

  return (
    <Link href={Blogs.feed.link} target="_parent" className="grid sm:grid-cols-2 gap-8">
      {Blogs.items.map(({ title, description, categories, image }, index) => (
        <div className="w-full border p-4" key={index}>
          <figure className="ml-auto">{/* <Image src={image} alt="Blog thumb" width={200} height={200} style={{ width: "100%", height: "auto" }} quality={80} /> */}</figure>
          <div className="blog__titles w-full">
            <p className="h-14 text-xl font-semibold text-white cut__text cut__text__two" dangerouslySetInnerHTML={{ __html: title }} />
            {/* <div className="text-xs sm:text-base text-white/[.60]" dangerouslySetInnerHTML={{ __html: description.slice(0, 50) }} /> */}
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
