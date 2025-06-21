import type { Metadata } from "next";
import SkillList from "../_components/layouts/Skills/SkillList";

export const metadata: Metadata = {
  title: "Skills",
  description: "A list of my tech skills",
};

export default function Skills() {
  return (
    <main className="section__no__grid pb-24">
      <div className="titles">
        <h1 className="text-white relative overflow-hidden">
          <span className="text-white/[.2] text-[6.25rem] font-bold leading-[normal] opacity-25">Skills</span>
          <b className="bg__text__heading">Skills</b>
        </h1>
        <p className="text-white/[.60] mt-2 max-[350px]:text-sm">Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi males masukin.</p>
      </div>
      <SkillList />
    </main>
  );
}
