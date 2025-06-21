import { NextResponse } from "next/server";
import piniaImg from "/public/pinia-seeklogo.png";

enum Status {
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Beginner = "Beginner",
}
export async function GET() {
  const data = [
    {
      name: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      status: Status.Advanced,
    },
    {
      name: "CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      status: Status.Advanced,
    },
    {
      name: "Figma",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      status: Status.Advanced,
    },
    {
      name: "Github",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Github-Dark.svg",
      status: Status.Intermediate,
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      status: Status.Advanced,
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      status: Status.Advanced,
    },
    {
      name: "TailwindCSS",
      url: "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      status: Status.Advanced,
    },
    {
      name: "Bootstrap",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      status: Status.Advanced,
    },
    {
      name: "Material UI",
      url: "https://svgmix.com/uploads/5b99f5-material-ui.svg",
      status: Status.Beginner,
    },
    {
      name: "ReactJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      status: Status.Intermediate,
    },
    {
      name: "VueJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      status: Status.Intermediate,
    },
    {
      name: "Zustand",
      url: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
      status: Status.Beginner,
    },
    {
      name: "Pinia",
      url: piniaImg,
      status: Status.Beginner,
    },
    {
      name: "NextJS",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
      status: Status.Advanced,
    },
    {
      name: "Prisma",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/de91fca307a83d75fc5b1f6ce24540454acead41/icons/Prisma.svg",
      status: Status.Beginner,
    },
    {
      name: "PostgreSQL",
      url: "https://www.svgrepo.com/show/303301/postgresql-logo.svg",
      status: Status.Beginner,
    },
    {
      name: "PHP",
      url: "https://www.php.net//images/logos/new-php-logo.svg",
      status: Status.Beginner,
    },
    {
      name: "NodeJS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      status: Status.Beginner,
    },
    {
      name: "ExpressJS",
      url: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Dark.svg",
      status: Status.Beginner,
    },
    {
      name: "After Effects",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      status: Status.Intermediate,
    },
    {
      name: "Premiere Pro",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      status: Status.Intermediate,
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
