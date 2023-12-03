"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

type socialMedia = {
  icon: string;
  link: string;
};

const socialMedia: socialMedia[] = [
  {
    icon: "mdi:github",
    link: "https://github.com/ikhlasdansantai",
  },
  {
    icon: "lets-icons:insta",
    link: "https://www.instagram.com/ikhlasdansantai",
  },
  {
    icon: "mingcute:medium-fill",
    link: "https://medium.com/@initesting5",
  },
];

export default function SocialMedia() {
  return (
    <ul className="flex gap-3">
      {socialMedia.map((sosmed, index) => (
        <li key={index} className="bg-slate-700 p-2 rounded-md">
          <Link href={sosmed.link}>
            <Icon icon={sosmed.icon} className="text-2xl" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
