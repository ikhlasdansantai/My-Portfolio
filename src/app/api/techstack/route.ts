import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      status: "Advanced",
    },
    {
      id: 2,
      name: "CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      status: "Advanced",
    },
    {
      id: 3,
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      status: "Advanced",
    },
    {
      id: 4,
      name: "Github",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      status: "Intermediate",
    },
    {
      id: 42,
      name: "TailwindCSS",
      url: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      status: "Advanced",
    },
    {
      id: 5,
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      status: "Beginner",
    },
    {
      id: 6,
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      status: "Intermediate",
    },
    {
      id: 7,
      name: "ReactJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      status: "Intermediate",
    },
    {
      id: 8,
      name: "VueJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      status: "Beginner",
    },
    {
      id: 9,
      name: "NextJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      status: "Beginner",
    },
    {
      id: 10,
      name: "NodeJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      status: "Beginner",
    },
    {
      id: 11,
      name: "ExpressJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      status: "Beginner",
    },
    {
      id: 12,
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      status: "Beginner",
    },
    {
      id: 13,
      name: "After Effects",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      status: "Intermediate",
    },
    {
      id: 14,
      name: "Premiere Pro",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      status: "Intermediate",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
