"use client";

import classNames from "classnames";
export default function ProjectMenuCategories({ category, setCategory }: any) {
  type menuProps = {
    label: string;
  };
  const menus: menuProps[] = [{ label: "Semua Kategori" }, { label: "Web Development" }, { label: "UI Design" }, { label: "Motion Graphics" }];
  return (
    <>
      {menus.map(({ label }, index) => (
        <div key={index} onClick={() => setCategory(label.toLowerCase())} className="choose__category cursor-pointer flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity={`${category === label.toLowerCase() ? ".6" : ".3"}`} />
            <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity={`${category === label.toLowerCase() ? "1" : ".5"}`} />
          </svg>
          <h2
            className={classNames({
              "text-white font-semibold": category === label.toLowerCase(),
              "text-white/[.60]": category !== label.toLowerCase(),
              "transition duration-300": true,
            })}
          >
            {label}
          </h2>
        </div>
      ))}
    </>
  );
}
