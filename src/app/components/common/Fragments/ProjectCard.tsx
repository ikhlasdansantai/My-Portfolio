import Image from "next/image";

export default function ProjectCard({ show, setShow, category }: any) {
  if (category === "semua") {
    return <h2>Semua kategori</h2>;
  } else if (category === "ui design") {
    return <h2>Semua kategori</h2>;
  } else if (category === "web development") {
    return <h2>Semua kategori</h2>;
  } else if (category === "motion graphics") {
    return <h2>Semua kategori</h2>;
  }
  return (
    <div className="text-white grid md:grid-cols-2 gap-10 ">
      <div onClick={() => setShow(true)} className="pt-4 px-4 pb-6 bg-white/[.03] rounded-lg ">
        <figure className="rounded-md overflow-hidden">
          <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/100DaysOfCode.png"} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
        </figure>
        <h2 className="text-white mt-4 mb-1">100 Days Of Code</h2>
        <span className="text-white/[.60] text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat libero esse iure, fugit magni.</span>
      </div>

      <div onClick={() => setShow(true)} className="pt-4 px-4 pb-6 bg-white/[.03] rounded-lg ">
        <figure className="rounded-md overflow-hidden">
          <Image src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Hokben%20Clone.png"} alt="gambar" height="200" width="200" style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
        </figure>
        <h2 className="text-white mt-4 mb-1">Hokben Clone</h2>
        <span className="text-white/[.60] text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat libero esse iure, fugit magni.</span>
      </div>
    </div>
  );
}
