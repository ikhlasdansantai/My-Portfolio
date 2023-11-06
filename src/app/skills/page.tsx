import type { Metadata } from "next";
import SkillList from "../components/layouts/Skills/SkillList";

export const metadata: Metadata = {
  title: "Skills",
  description: "A list of my tech skills",
};

export default function Skills() {
  return (
    <div className="py-10 sm:pt-20 lg:pt-40 px-4 space-y-10 max-w-6xl mx-auto min-[2000px]:h-[40rem]">
      <div className="titles">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Skills</span>
          <b className="absolute left-20 bottom-0 top-8 mx-auto text-white text-[2.5rem] font-bold">Skills</b>
        </h1>
        <p className="text-white/[.60] mt-4 ">Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi males masukin.</p>
      </div>
      <SkillList />
    </div>
  );
}
