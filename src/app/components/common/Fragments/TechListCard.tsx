import Image from "next/image";
import styles from "./fragments.module.css";

export default function TechListCard({ name, url, status }: { name: string; url: string; status: string }) {
  return (
    <div className={`${styles.tech} tech group flex gap-3 justify-start items-center text-white border px-4 py-3 cursor-pointer`}>
      <figure className={`${styles["tech__pict"]} text__pict w-8 transition-all`}>
        <Image src={url} alt={`${url} Image`} width={40} height={40} quality={100} loading="lazy" />
      </figure>
      <div className={`${styles["tech__info"]} relative  w-full`}>
        <h5 className="relative top-3 bottom-0 transition-all cut__text">{name}</h5>
        <span className="text-xs lg:text-sm text-[#2ba386] opacity-0 transition-all">{status}</span>
      </div>
    </div>
  );
}
