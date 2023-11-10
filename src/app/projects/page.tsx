"use client";

import ProjectDetail from "../components/common/Fragments/ProjectDetail";
import ProjectFilter from "../components/layouts/Projects/ProjectFilter";
import ProjectMenus from "../components/layouts/Projects/ProjectMenus";
import styles from "./project.module.css";
// import ProjectMenus from "../components/layouts/Projects/ProjectMenus";
// import ProjectFilter from "../components/layouts/Projects/ProjectFilter";
// import ProjectDetail from "../components/common/Fragments/ProjectDetail";
import { useState } from "react";

// function ProjectDetail({ show, setShow }: any) {
//   return (
//     <div
//       className={classNames({
//         "translate-y-0 opacity-100": show === true,
//         "translate-y-full opacity-30": show === false,
//         "fixed top-0 left-0 right-0 z-[99999999] min-h-screen bg-[#1e1f2b] px-4 py-8 text-white space-y-10 duration-700 transition max-w-6xl mx-auto": true,
//       })}
//     >
//       <b onClick={() => setShow(false)} className="flex items-center cursor-pointer">
//         <Icon icon="uis:angle-left" className="text-2xl" />
//         <span>Kembali</span>
//       </b>
//       <div className="proj__detail__contens">
//         <h2 className="text-xl my-4 font-semibold">Work In Progress</h2>
//         <figure>
//           <Image
//             src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/100DaysOfCode.png"}
//             alt="gambar"
//             height={800}
//             width={400}
//             style={{ width: "100%", height: "auto" }}
//             loading="lazy"
//             quality={100}
//             className="blur-[7px]"
//           />
//         </figure>
//         <p className="mt-4">
//           Proyek akan segera di launching <i>ASAP</i>.
//         </p>

//         {/* Jika category nya web development */}
//         <div className="proj__det__footer mt-4 space-y-4">
//           <div className="box space-y-2">
//             <h3 className="font-medium">Live Preview</h3>
//             <p>Link......</p>
//           </div>
//           <div className="box space-y-2">
//             <h3 className="font-medium">Repo</h3>
//             <p>Link......</p>
//           </div>
//           <div className="box space-y-2">
//             <h3 className="font-medium">Tech Stack</h3>
//             <ProjectTech />
//           </div>
//         </div>

//         {/* Jika category nya ui design */}
//         <div className="proj__det__footer mt-4 space-y-4">
//           <div className="box space-y-2">
//             <h3 className="font-medium">Figma</h3>
//             <p>Link......</p>
//           </div>
//         </div>

//         {/* Jika category nya SOON/WIP */}
//         <div className="proj__det__footer mt-4 space-y-4">
//           <div className="box space-y-2">
//             <h3 className="font-medium">Live Preview</h3>
//             <p>masih undefined</p>
//           </div>
//           <div className="box space-y-2">
//             <h3 className="font-medium">Repo</h3>
//             <p>masih undefined</p>
//           </div>
//           <div className="box space-y-2">
//             <h3 className="font-medium">Tech Stack</h3>
//             <p>masih undefined</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProjectCategory({ category, setShow }: any) {
//   if (category === "semua") {
//     return (
//       <div onClick={() => setShow(true)} className="text-white grid md:grid-cols-2 gap-10">
//         <div className="pt-4 px-3 pb-6 bg-white/[.03] rounded-lg">
//           <figure className="rounded-md overflow-hidden">
//             <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/100DaysOfCode.png"} alt="gambar" height={800} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
//           </figure>
//           <h2 className="text-white text-xl mt-4 mb-1">100 Days Of Code</h2>
//           <span className="text-white/[.60] max-[350px]:text-xs text-sm cut__text cut__text__two leading-[1.8]">Projek pertama dalam membangun sebuah website dengan tutorial dari video WPU</span>
//           <div className="project__tech__used flex flex-wrap gap-3 mt-8">
//             <ProjectTech />
//           </div>
//         </div>
//         <div className="pt-4 px-3 pb-6 bg-white/[.03] rounded-lg">
//           <figure className="rounded-md overflow-hidden">
//             <Image
//               src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Build%20With%20Angga%20Challenge.png"}
//               alt="gambar"
//               height={800}
//               width={400}
//               style={{ width: "100%", height: "auto" }}
//               loading="lazy"
//               quality={100}
//             />
//           </figure>
//           <h2 className="text-white mt-4 mb-1">BWA Slicing Challenge</h2>
//           <span className="text-white/[.60] text-xs cut__text cut__text__two leading-[1.8]">Projek Slicing pertama dengan design UI dari BuildWithAngga</span>
//         </div>
//       </div>
//     );
//   } else if (category === "ui design") {
//     return (
//       <div className="text-white grid grid-cols-2 gap-10 ">
//         <div className="card h-[200px] bg-green-500"></div>
//         <div className="card h-[200px] bg-green-500"></div>
//       </div>
//     );
//   } else if (category === "web development") {
//     return (
//       <div className="text-white grid grid-cols-2 gap-10 ">
//         <div className="card h-[200px] bg-orange-500"></div>
//         <div className="card h-[200px] bg-orange-500"></div>
//       </div>
//     );
//   } else if (category === "motion graphics") {
//     return (
//       <div className="text-white grid grid-cols-2 gap-10 ">
//         <div className="card h-[200px] bg-white"></div>
//         <div className="card h-[200px] bg-white"></div>
//       </div>
//     );
//   }
// }

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <>
      <main className={`grid py-20 max-w-6xl mx-auto px-4 lg:pt-40 ${styles.grid__temp} items-stretch space-y-10 gap-0`}>
        <div className="left">
          <div className="titles overview__header">
            <h1 className="text-white relative overflow-hidden">
              <span className="text-white/[.2] text-7xl sm:text-[6.25rem] font-bold leading-[normal] opacity-25">Projects</span>
              <b className="bg__text__heading">Projects</b>
            </h1>
            <p className="text-white/[.60] max-w-[38ch]">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat.</p>
          </div>
          <ProjectMenus />
        </div>
        <ProjectFilter show={show} setShow={setShow} />
      </main>
      <ProjectDetail show={show} setShow={setShow} />
    </>
  );
}

{
  /* <div className="test_ting mt-10 space-y-4">

<div onClick={() => setCategory("all")} className="choose__category cursor-pointer flex gap-2 items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".6" />
    <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity="1" />
  </svg>
  <h2 className="text-white font-semibold">Semua Kategori</h2>
</div>

<div onClick={() => setCategory("web development")} className="choose__category cursor-pointer flex gap-2 items-center ">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
    <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
  </svg>
  <h2 className="text-white/[.60]">Web Development</h2>
</div>

<div onClick={() => setCategory("ui design")} className="choose__category cursor-pointer flex gap-2 items-center ">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
    <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
  </svg>
  <h2 className="text-white/[.60]">UI Design</h2>
</div>

<div onClick={() => setCategory("motion graphics")} className="choose__category cursor-pointer flex gap-2 items-center ">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="8.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".3" />
    <circle cx="8.5" cy="8.5" r="4.5" transform="rotate(180 8.5 8.5)" fill="white" fillOpacity=".5" />
  </svg>
  <h2 className="text-white/[.60]">Motion Graphics</h2>
</div>
</div> */
}
