"use client";

import classNames from "classnames";
import { useProjectStore } from "@/app/store/projectCategoryStore";
import { useShallow } from "zustand/react/shallow";

export default function ProjectMenuCategories() {
  const { projCateFilters, setProjCateFilters } = useProjectStore(
    useShallow((state) => ({
      projCateFilters: state.projCateFilters,
      setProjCateFilters: state.setProjectCateFilters,
    }))
  );

  type menuProps = {
    label: string;
  };
  const menus: menuProps[] = [{ label: "Semua Kategori" }, { label: "Web Development" }, { label: "UI Design" }, { label: "Mobile" }, { label: "Motion Graphics" }, { label: "wip" }];

  return (
    <>
      {menus.map(({ label }, index) => (
        <div key={index} onClick={() => setProjCateFilters(label.toLowerCase())} className="cursor-pointer flex gap-2 items-center justify-start ">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity={`${projCateFilters === label.toLowerCase() ? ".6" : ".3"}`} />
            <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity={`${projCateFilters === label.toLowerCase() ? "1" : ".5"}`} />
          </svg>
          <h2
            className={classNames({
              "text-white font-semibold": projCateFilters === label.toLowerCase(),
              "text-white/[.60]": projCateFilters !== label.toLowerCase(),
              "transition duration-300 ": true,
            })}
          >
            {label}
          </h2>
        </div>
      ))}
    </>
  );
}
