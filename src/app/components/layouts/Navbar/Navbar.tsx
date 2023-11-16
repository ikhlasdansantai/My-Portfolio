"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Navbar() {
  const currentPath = usePathname();

  type LinkProps = {
    label: string;
    href: string;
  };
  const links: LinkProps[] = [
    { label: "Overview", href: "/overview" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
  ];

  const [scrollClass, setScrollClass] = useState({
    bgClass: "",
    textClass: "text-black",
  });

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const isScrolled = window.scrollY > 0;
      if (window.innerWidth < 640) {
        setScrollClass({
          bgClass: "",
          textClass: "text-black",
        });
      } else {
        setScrollClass({
          bgClass: isScrolled ? "bg-slate-500" : "",
          textClass: isScrolled ? "text-black" : "text-white",
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setScrollClass({ ...scrollClass, textClass: "text-white" });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav className={`fixed  md:left-0 right-0  z-50 transition-bg transition-text duration-300 ${scrollClass.bgClass}`}>
      <div className="nav__contents md:px-4 xl:px-0 flex justify-between items-center max-w-6xl mx-auto md:py-6">
        <div className="left__navbar hidden md:flex gap-10">
          <Link href={"/"} className="block py-4 px-5 text-center rounded-md bg-[#2ba386] text-white">
            IK
          </Link>
          <ul className="hidden md:flex  justify-between items-center gap-10">
            {links.map(({ label, href }, index): LinkProps | any => (
              <Link
                key={index}
                href={href}
                className={classNames({
                  "text-white font-semibold": href === currentPath,
                  "text-white/[.60]": href !== currentPath,
                  "text-black": scrollClass.textClass === "text-black",
                  "transition duration-300 hover:text-white": true,
                })}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
        <Link href="/contact" className="px-4 py-3 md:py-4 rounded-md bg-[#2ba386] text-white cursor-pointer ">
          Punya Project?
        </Link>

        <ul className="nav_bottom fixed bottom-0 left-0 right-0 px-6 py-6 bg-[#1e1f2b] border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg flex justify-between md:hidden text-white/[.60]">
          {links.map(({ label, href }, index): LinkProps | any => (
            <Link
              key={index}
              href={href}
              className={classNames({
                "text-white font-semibold border-b": href === currentPath,
                "text-white/[.60]": href !== currentPath,
                "text-black": scrollClass.textClass === "text-black",
                "transition duration-300 max-[350px]:text-sm": true,
              })}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
