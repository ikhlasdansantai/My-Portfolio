import Image from "next/image";
import styles from "./fragments.module.css";

export default function TechListCard({ name, url, status }: { name: string; url: string; status: string }) {
  return (
    <div className={`${styles.tech} tech group flex gap-3 justify-start items-center text-white border px-4 py-3 cursor-pointer`}>
      <figure className={`${styles["tech__pict"]} text__pict w-8 transition-all`}>
        <Image src={url} alt={`${url} Image`} width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} loading="lazy" />
      </figure>
      <div className={`${styles["tech__info"]} relative pt-4 w-full`}>
        <h5 className="absolute top-2 bottom-0 transition-all">{name}</h5>
        <span className="text-xs lg:text-sm text-[#2ba386] opacity-0 transition-all ">{status}</span>
      </div>
    </div>
  );
}
