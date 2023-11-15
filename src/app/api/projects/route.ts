import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "100 Days Of Code",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/100DaysOfCode.png",
      description: "Projek pertama dalam membangun sebuah website dengan tutorial dari video WPU",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "BWA Slicing Challenge",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Build%20With%20Angga%20Challenge.png",
      description: "Projek Challenge pertama dengan design UI dari BuildWithAngga",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 3,
      name: "Bookself Client",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/BookSelf%20WebApps.png",
      description: "Submission pertama ketika mengikuti bootcamp dari kelas Dicoding",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 4,
      name: "Digital Web Profile",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/BookSelf%20WebApps.png",
      description: "Terinspirasi dari sebuah web builder populer, yaitu linktree",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 5,
      name: "Foodoloy Slicing",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Practicing%20HTML%20CSS.png",
      description: "Melakukan slicing pertama dengan design dari figma",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 6,
      name: "Hokben Clone",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Hokben%20Clone.png",
      description: "Membuat web clone pertama dan melakukan redesign, terhadap design dari website Hokben",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 7,
      name: "Karang Taruna Wall Maria",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Karangtaruna.png",
      description: "Untuk Pertama kalinya saya menggunakan figma untuk membuat struktur website",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "ui design",
    },
    {
      id: 8,
      name: "CV Rizky Steel",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Rizky%20Steel.png",
      description: "Proyek Website client pertama saya",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "ui design",
    },
    {
      id: 9,
      name: "Renz Makeup",
      url: "https://github.com/ikhlasdansantai/My-Portfolio/blob/main/assets/projects/Renz-Makeup.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "ui design",
    },
    {
      id: 10,
      name: "Renz Makeup",
      url: "https://github.com/ikhlasdansantai/My-Portfolio/blob/main/assets/projects/Renz-Makeup.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwind/tailwind-original.svg",
      ],
      category: "ui design",
    },
    {
      id: 11,
      name: "Weeekly Fanmade Website",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/weeekly-website.png",
      description: "Proyek latihan pertama saya yang menggunakan ReactJS",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "ui design",
    },
    {
      id: 12,
      name: "Hangeulin",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/HangeulIn.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "ui design",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
