import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      name: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      status: "Advanced",
    },
    {
      name: "CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      status: "Advanced",
    },
    {
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      status: "Intermediate",
    },
    {
      name: "Github",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Github-Dark.svg",
      status: "Intermediate",
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      status: "Advanced",
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      status: "Beginner",
    },
    {
      name: "TailwindCSS",
      url: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      status: "Advanced",
    },
    {
      name: "Bootstrap",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      status: "Intermediate",
    },
    {
      name: "ReactJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      status: "Intermediate",
    },
    {
      name: "VueJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      status: "Beginner",
    },
    {
      name: "NextJS",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
      status: "Beginner",
    },
    {
      name: "NodeJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      status: "Beginner",
    },
    {
      name: "ExpressJS",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Dark.svg",
      status: "Beginner",
    },
    {
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      status: "Beginner",
    },
    {
      name: "After Effects",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      status: "Intermediate",
    },
    {
      name: "Premiere Pro",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      status: "Intermediate",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
