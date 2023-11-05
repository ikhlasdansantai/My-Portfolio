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
    { label: "Contact", href: "/contact" },
  ];

  const [scrollClass, setScrollClass] = useState({
    bgClass: window.innerWidth < 640 ? "bg-white" : "",
    textClass: window.innerWidth < 640 ? "text-black" : "",
  });

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    console.log(window.innerWidth);
    if (window.innerWidth < 640) {
      setScrollClass({
        bgClass: "bg-white",
        textClass: "text-black",
      });
    } else {
      setScrollClass({
        bgClass: isScrolled ? "bg-slate-300" : "",
        textClass: isScrolled ? "text-black" : "text-white",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setScrollClass({ ...scrollClass, textClass: "text-white" });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed  md:left-0 right-0  z-50 transition-bg transition-text duration-300 ${scrollClass.bgClass}`}>
      <div className="nav__contents md:px-4 xl:px-0 flex justify-between items-center max-w-6xl mx-auto md:py-6">
        <div className="left__navbar hidden md:flex gap-10">
          <div className="block py-4 px-5 text-center rounded-md bg-[#2ba386] text-white">IK</div>
          <ul className="hidden md:flex  justify-between items-center gap-10">
            {links.map(({ label, href }, index): LinkProps | any => (
              <Link
                key={index}
                href={href}
                className={classNames({
                  "text-white font-semibold": href === currentPath,
                  "text-white/[.60]": href !== currentPath,
                  "text-black": scrollClass.textClass === "text-black",
                  "transition duration-300": true,
                })}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="px-4 py-3 md:py-4 rounded-md bg-[#2ba386] text-white">Punya Project?</div>

        {/* <ul className="nav_bottom fixed bottom-0 left-0 right-0 px-6 py-4 bg-[#1e1f2b] border-t-2 border-l-2 border-r-2 rounded-tl-lg rounded-tr-lg flex justify-between md:hidden text-white/[.60]">
        <li className="border-b-4 border-[#2ba386]">Home</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul> */}
      </div>
    </nav>
  );
}

{
  /* <nav className="fixed hidden px-4 xl:px-0 left-0 right-0 lg:flex justify-between items-center max-w-6xl mx-auto py-8"> */
}
