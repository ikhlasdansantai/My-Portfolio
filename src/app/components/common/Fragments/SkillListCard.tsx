import { Icon } from "@iconify/react";

export default function SkillListCard({ name, icon, description }: { name: string; icon: string; description: string }) {
  return (
    <div className="skill__card bg-white/[.05] p-4">
      <Icon icon={icon} className="text-white text-4xl" />
      <h2 className="text-xl text-white mt-4">{name}</h2>
      <p className="text-white/[.60] mt-2 max-[350px]:text-sm">{description}</p>
    </div>
  );
}
