"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import classNames from "classnames";
import Image from "next/image";
import ProjectCategory from "./ProjectCategory";

export default function ProjectDetail({ show, setShow }: any) {
  return (
    <div
      className={classNames({
        "translate-y-0 opacity-100": show === true,
        "translate-y-full opacity-30": show === false,
        "fixed top-0 left-0 right-0 bottom-0 z-[99999999] min-h-screen overflow-y-scroll bg-[#1e1f2b] px-4 py-8 text-white space-y-10 duration-700 transition max-w-6xl mx-auto": true,
      })}
    >
      <b onClick={() => setShow(false)} className="flex items-center cursor-pointer">
        <Icon icon="uis:angle-left" className="text-2xl" />
        <span>Kembali</span>
      </b>
      <div className="proj__detail__contens">
        <h2 className="text-xl my-4 font-semibold">Work In Progress</h2>
        <figure>
          <Image
            src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/100DaysOfCode.png"}
            alt="gambar"
            height={800}
            width={400}
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
            quality={100}
            // className="blur-[7px]"
          />
        </figure>
        <p className="mt-4">
          Proyek akan segera di launching <i>ASAP</i>.
        </p>

        <div className="proj__det__footer mt-10 space-y-4">
          <ProjectCategory category={"web development"} />
        </div>
      </div>
    </div>
  );
}
