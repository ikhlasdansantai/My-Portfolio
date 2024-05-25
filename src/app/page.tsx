import Image from "next/image";
import spiderWeb from "../assets/spider-web.png";
import profileImg from "/public/profile_update_january.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ikhlasdansantai",
  description: "self taught programmer",
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 py-10 sm:py-20 xl:p-0 gap-4 md:gap-0 justify-center md:grid-cols-2 px-4 min-h-[90vh] items-center max-w-6xl mx-auto min-[2000px]:h-[40rem]">
      <div className="left w-full">
        <div className="profile__titles max-[360px]:py-8">
          <h1 className="flex flex-col max-[360px]:text-2xl text-3xl sm:text-4xl lg:text-[3rem] lg:leading-[54px] text-white sm:space-y-4">
            <span>Hi, nama saya</span>
            <b>M.Ikhsan Nuryaman</b>
          </h1>
          <p className="mt-4 text-white/[.60] lg:text-lg leading-[1.875rem] xl:max-w-[43ch]">Saya adalah software enginner yang berfokus pada pengembangan website dan juga mobile di sisi end user, Serta seorang UI designer.</p>
        </div>
        <div className="additional__profile__info flex gap-8 max-[360px]:mt-4 mt-11">
          <div className="projects space-y-3">
            <p className="text-white/[.60] text-xs">Projects</p>
            <b className=" font-semibold text-white">12</b>
          </div>
          <div className="experience space-y-3">
            <p className="text-white/[.60] text-xs">Pengalaman</p>
            <b className=" font-semibold text-white">1 Tahun+</b>
          </div>
        </div>
      </div>
      <div className="right relative ml-auto">
        <figure className="w-full relative z-10">
          <Image
            src={profileImg}
            alt="spider web PNG"
            style={{
              width: "100%",
              height: "auto",
            }}
            quality={100}
            className="block"
            priority
          />
        </figure>
        <Image src={spiderWeb} alt="spider web PNG" height={500} width={500} className="block absolute -top-0 bottom-0 right-0" priority />
      </div>
    </main>
  );
}
