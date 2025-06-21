import Image from "next/image";

export default function ProjectTech({ technology }: { technology: string[] }) {
  return (
    <div className="project__tech__used flex flex-wrap gap-3">
      {technology.map((tech, index) => (
        <figure key={index} className="w-7">
          <Image src={tech} alt="gambar teknologi" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
        </figure>
      ))}
    </div>
  );
}
