import Image from "next/image";

export default function ProjectTech() {
  return (
    <div className="project__tech__used flex flex-wrap gap-3">
      <figure className="w-7">
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} alt="gambar" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
      </figure>
      <figure className="w-7">
        <Image
          src={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Dark.svg"}
          alt="gambar"
          height={100}
          width={400}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
          quality={100}
        />
      </figure>
      <figure className="w-7">
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt="gambar" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
      </figure>
      <figure className="w-7">
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} alt="gambar" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
      </figure>
      <figure className="w-7">
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} alt="gambar" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
      </figure>
      <figure className="w-7">
        <Image
          src={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg"}
          alt="gambar"
          height={100}
          width={400}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
          quality={100}
        />
      </figure>
      <figure className="w-7">
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"} alt="gambar" height={100} width={400} style={{ width: "100%", height: "auto" }} loading="lazy" quality={100} />
      </figure>
    </div>
  );
}
