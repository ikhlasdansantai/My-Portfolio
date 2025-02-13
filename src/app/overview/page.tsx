import { Metadata } from "next";
import Certificate from "../_components/layouts/Overview/certificates/Certificate";
import Image from "next/image";
import TechStackSection from "../_components/layouts/Overview/TechStackSection";

export const metadata: Metadata = {
  title: "Overview | ikhlasdansantai",
  description: "Know More About Me:)",
};

export default function Page() {
  return (
    <main className="section__no__grid pb-24 flex flex-col gap-10">
      <div className="overview__header">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Overview</span>
          <b className="bg__text__heading">Overview</b>
        </h1>
        <p className="text-white/[.60] leading-loose">
          Saya adalah seorang Frontend web dev yang berfokus pada pengembangan website dengan menggunakan React dan Vue💻. Hal yang paling saya sukai adalah melakukan slicing design dan menjadikannya responsif. 🎨 Saya juga senang belajar
          teknologi baru dan meningkatkan kemampuan saya sebagai seorang developer. 📚
        </p>
      </div>
      <TechStackSection />
      <div className="certificate__contents">
        <h2 className="text-white mb-4 font-semibold text-lg">Sertifikasi</h2>
        <Certificate />
      </div>
      <div className="certificate__contents">
        <h2 className="text-white mb-4 font-semibold text-lg">Badges</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="pt-4 px-4 pb-6 bg-white/[.03] text-center rounded-lg">
            <figure className="rounded-md overflow-hidden">
              <Image
                src={"https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/refs/heads/v.2/assets/projects/badges/thm-hc.png"}
                alt="gambar"
                height="400"
                width="400"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
                quality={100}
              />
            </figure>
            <h2 className="text-white mt-4 mb-1">Hash Cracker</h2>
            <span className="text-white/[.60] text-xs">TryHackMe</span>
          </div>
        </div>
      </div>
    </main>
  );
}
