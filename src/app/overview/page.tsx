import { Metadata } from "next";
import CertificateCard from "../components/common/CertificateCard";
import TechList from "../components/layouts/Overview/TechList";
import Certificate from "../components/layouts/Overview/certificates/Certificate";

export const metadata: Metadata = {
  title: "Overview",
  description: "Know More About Me:)",
};

export default function page() {
  return (
    <main className="pt-10 pb-20 sm:pt-20 lg:pt-40  px-4 space-y-10 max-w-6xl mx-auto min-[2000px]:h-[40rem]">
      <div className="overview__header">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Overview</span>
          <b className="absolute left-20 bottom-0 top-9 mx-auto text-white text-[2.5rem] font-bold">Overview</b>
        </h1>
        <p className="text-white/[.60]">
          Saya adalah seorang frontend web dev yang beffokus pada ReactJS💻. Saat ini, saya tengah mengejar pemahaman yang lebih dalam tentang penggunaan NextJS dalam pembuatan website 🚀. Selain itu, saya juga memiliki kemampuan dalam
          pengembangan website dengan menggunakan VueJS 📈. Saya mahir dalam melakukan slicing design dan menjadikannya responsif. 🎨 Saya senang belajar teknologi baru dan meningkatkan kemampuan saya sebagai seorang developer. 📚
        </p>
      </div>
      <div className="tech__stack__contents">
        <h2 className="text-white mb-4 font-semibold text-lg">Tech stack</h2>
        <TechList />
      </div>
      <div className="certificate__contents">
        <h2 className="text-white mb-4 font-semibold text-lg">Sertifikasi</h2>
        <Certificate />
      </div>
    </main>
  );
}
