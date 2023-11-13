import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "ww2 Trailer",
      url: "https://img.youtube.com/vi/tBTMDELzvVA/maxresdefault.jpg",
      description: "Big Project dengan tema ww2 dengan konsep motion graphics, cuman sekarang lagi vakum, jadi jangan terlalu berharap project nya akan di lanjut besok/hari ini:v, jadi sabar aja, subscribe hehe",
      links: {
        livePreview: "https://youtu.be/tBTMDELzvVA?si=undvhqeufxuvlbgJ",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      ],
      category: "motion graphics",
    },
    {
      id: 2,
      name: "BWA Slicing Challenge",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Build-With-Angga-Challenge-new.png",
      description: "Projek Challenge pertama dengan design UI dari BuildWithAngga",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/build-with-angga-slicing-challenge/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      ],
      category: "web development",
    },
    {
      id: 3,
      name: "Bookself Client",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/BookSelf-WebApps-new.png",
      description: "Submission pertama ketika mengikuti bootcamp dari kelas Dicoding",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/Bookself/",
      },
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
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/digital-web-new.png",
      description: "Terinspirasi dari sebuah web builder populer, yaitu linktree",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/My-Digital-Website/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 5,
      name: "Foodology Slicing",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Foodology-new.png",
      description: "Melakukan slicing pertama dengan design dari figma",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/Foodology-Web/",
      },
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
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Hokben-Clone-new.png",
      description: "Membuat web clone pertama dan melakukan redesign, terhadap design dari website Hokben",
      links: {
        livePreview: "https://hokben-clone-by-ikhlasdansantai.netlify.app/",
      },
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
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Karangtaruna-new.png",
      description: "Untuk Pertama kalinya saya menggunakan figma untuk membuat struktur website",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/karang-taruna-wall-maria/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "web development",
    },
    {
      id: 8,
      name: "CV Rizky Steel",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Rizky%20Steel.png",
      description: "Proyek Website client pertama saya",
      links: {
        livePreview: "https://www.figma.com/file/V2haWUswbO6bdsD0Qf4dPk/CV-Rizky-Steel?type=design&node-id=0%3A1&mode=design&t=fC7Ckz946IhivJwf-1",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
      category: "ui design",
    },
    {
      id: 9,
      name: "Renz Makeup",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Renz-Makeup-new.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "https://renz-makeup.netlify.app/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 10,
      name: "Renz Aura",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/RenzAura-new.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/RenzAura/",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"],
      category: "web development",
    },
    {
      id: 11,
      name: "Weeekly Fanmade Website",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Weeekly-Fanmade-Website-new.png",
      description: "Proyek latihan pertama saya yang menggunakan ReactJS",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/weeekly-website-fanmade/",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"],
      category: "web development",
    },
    {
      id: 12,
      name: "Hangeulin",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/HangeulIn.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/Hangeulin/",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"],
      category: "web devlopment",
    },
    {
      id: 12,
      name: "Camp Yang Paling Mengerikan Di Era ww2",
      url: "https://img.youtube.com/vi/BW9glb4e0lM/maxresdefault.jpg",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "https://youtu.be/BW9glb4e0lM?si=tUt-bSSd_CgDXuF8",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      ],
      category: "motion graphics",
    },
    {
      id: 12,
      name: "tebak 1",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/ive.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "wip",
    },
    {
      id: 12,
      name: "tebak 2",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/isone-docs.png",
      description: "Sebuah Proyek personal branding, di dalam proyek ini saya menggunakan tailwindCSS untuk pertama kalinya",
      links: {
        livePreview: "",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
      category: "wip",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
