"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import classNames from "classnames";
import Image from "next/image";
import ProjectCategory from "./ProjectCategory";
import { useProjectStore } from "@/app/store/projectCategoryStore";
import { useShallow } from "zustand/react/shallow";

export default function ProjectDetail() {
  const { showProjDetail, setProjDetail, getProjectDetail, setProjectDetail } = useProjectStore(
    useShallow((state) => ({
      showProjDetail: state.showProjDetail,
      setProjDetail: state.setShowProjDetail,
      getProjectDetail: state.getProjectDetail,
      setProjectDetail: state.setProjectDetail,
    }))
  );

  return (
    <div
      className={classNames({
        "translate-y-0 opacity-100 duration-700 transition": showProjDetail === true,
        "translate-y-full opacity-30": showProjDetail === false,
        "fixed top-0 left-0 right-0 bottom-0 z-[99999999] min-h-screen overflow-y-auto bg-[#1e1f2b] px-4 py-8 text-white space-y-10 max-w-6xl mx-auto": true,
      })}
    >
      <b
        onClick={() => {
          setProjDetail(false);
          setProjectDetail(null);

          document.title = "Projects";
        }}
        className="flex items-center cursor-pointer"
      >
        <Icon icon="uis:angle-left" className="text-2xl" />
        <span>Kembali</span>
      </b>
      {getProjectDetail === null ? (
        <div className="proj__detail__contens">
          <p className="text-white">Tunggu Sebentar...</p>
        </div>
      ) : (
        <div className="proj__detail__contens">
          <h2 className="text-xl my-4 font-semibold">{getProjectDetail.name}</h2>
          <figure>
            <Image
              src={getProjectDetail.url}
              alt="gambar"
              height={800}
              width={400}
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              quality={80}
              className={classNames({
                "blur-[7px]": getProjectDetail.category === "wip",
              })}
            />
          </figure>
          <p className="mt-4 leading-7">{getProjectDetail.description}.</p>
          <div className="proj__det__footer mt-8 space-y-4">
            <ProjectCategory category={getProjectDetail.category} links={getProjectDetail.links} technology={getProjectDetail.technology} />
          </div>
        </div>
      )}
    </div>
  );
}
