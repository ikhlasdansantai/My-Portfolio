"use client";
import { Tooltip } from "react-tooltip";
import { Icon } from "@iconify/react";
import Link from "next/link";

type socialMedia = {
  icon: string;
  label: string;
  link: string;
};

const socialMedia: socialMedia[] = [
  {
    icon: "mdi:github",
    label: "github",
    link: "https://github.com/ikhlasdansantai",
  },
  {
    icon: "mdi:linkedin",
    label: "linkedin",
    link: "linkedin.com/in/mochammadikhsannuryaman",
  },
  {
    icon: "mingcute:medium-fill",
    label: "medium",
    link: "https://medium.com/@initesting5",
  },
  {
    icon: "lets-icons:insta",
    label: "instagram",
    link: "https://www.instagram.com/ikhlasdansantai",
  },
];

export default function SocialMedia() {
  return (
    <ul className="grid gap-3 grid-cols-2 sm:grid-cols-4">
      {socialMedia.map((sosmed, index) => (
        <li key={index} className="bg-slate-700 p-2 rounded-md" data-icon-name={sosmed.icon}>
          <a href={sosmed.link} id="not-clickable" className={`${sosmed.label}`}>
            <Icon icon={sosmed.icon} className="text-2xl" />
          </a>
          <Tooltip anchorSelect={`.${sosmed.label}`}>
            <div>{`${sosmed.label}`}</div>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
