import { NextResponse } from "next/server";
import Fex from "../../../../assets/projects/Proj/frontend-express.png";
// import LizuPortfolio from "../../../../assets/projects/Proj/lizu-portfolio.png";

export async function GET() {
  const data = [
    // {
    //   id: 101,
    //   name: "Lizu Portfolio",
    //   description:
    //     "Proyek ini adalah hasil dari uji coba saya untuk mengeksplorasi tren desain bento grid, sebuah layout simple modern yang sangat populer saat ini. Saya mencoba menerapkannya melalui proyek sederhana berupa personal portfolio",
    //   url: LizuPortfolio,
    //   links: {
    //     livePreview: "https://lizu-portfolio.vercel.app/",
    //   },
    //   technology: [
    //     "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    //     "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
    //   ],
    //   category: "web development",
    // },
    {
      id: 101,
      name: "Frontend Express",
      description: "Sebuah solusi untuk mempermudah pengembangan frontend dengan boilerplate siap pakai menggunakan teknologi favoritmu",
      url: Fex,
      links: {
        livePreview: "https://frontend-express-demo-preview.vercel.app/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 1,
      name: "ww2 Trailer",
      url: "https://img.youtube.com/vi/tBTMDELzvVA/maxresdefault.jpg",
      description: "Big Project dengan tema ww2 dengan konsep motion graphics, cuman sekarang lagi vakum:(, jadi jangan terlalu berharap project nya akan di lanjut besok/hari ini:v, jadi sabar aja, jangan lupa subscribe hehe",
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
      name: "Architect Portolio",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/architect-portfolio.png",
      description: "Website portfolio untuk seorang arsitek",
      links: {
        livePreview: "https://dennes-rizky-shadewa.vercel.app/",
      },
      technology: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "Iksplorasi",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/iksplorasi.png",
      description: "Website yang ditunjukan untuk mengeksplorasi teknologi-teknologi terbaru, (sebagian besar masih dalam proses development)",
      links: {
        livePreview: "https://iksplorasi.vercel.app",
      },
      technology: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "Sejarah Perang dunia Ke-2",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/spd_LP.png",
      description: "Platform online yang membuat orang menjadi suka belajar sejarah",
      links: {
        livePreview: "https://sejarahperangdunia.vercel.app",
      },
      technology: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "Indihome Jabar",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/indihome-jabar.png",
      description: "website company profile dari Indihome Jabar yang dibuat menggunakan teknologi front-end terkini dan modern",
      links: {
        livePreview: "https://www.indihomejabar.com",
      },
      technology: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "Edufree (Slicing Challenge)",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/Edufree-Slicing.png",
      description: "Sebuah bagian dari sesi tech interview, dengan membuat clone/slicing dari design figma, dan pada kesempatan ini, saya memilih design ini (Edufree), sebagai pilihan untuk saya melakukan slicing design",
      links: {
        livePreview: "https://edufree-mini-slicing.vercel.app",
      },
      technology: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "Jobfinder",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/Jobfinder.png",
      description: "Sebuah Website yang dibuat secara fullstack (mini-fullstack), dimana peran kita sebagai admin, dan bisa melakukan posting program, mengedit program, dan juga menghapus program",
      links: {
        livePreview: "https://jobfinder-mini-crud.vercel.app",
      },
      technology: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NextJS-Dark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
      ],
      category: "web development",
    },
    {
      id: 2,
      name: "BWA Slicing Challenge",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/Build-With-Angga-Challenge-new.png",
      description: "Projek Challenge pertama menggunakan Bootstrap dengan design UI dari BuildWithAngga (instagram)",
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
      description: "Terinspirasi dari sebuah website builder populer, yaitu linktree",
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
      description: "Proyek slicing pertama dengan memanfaatkan penggunaan figma yang di terjemahkan ke dalam sebuah kode untuk bisa di akses oleh semua orang",
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
      description: "Membuat sebuah website clone pertama, tidak hanya itu, saya melakukan redesign terhadap design original dari website Hokben",
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
      description:
        "Terinspirasi dari suatu organisasi masyarakat, sebagai wadah generasi muda untuk mengembangkan diri, tumbuh, dan berkembang atas dasar kesadaran serta tanggung jawab sosial dari, oleh dan untuk generasi muda, yang berorientasi pada tercapainya kesejahteraan sosial masyarakat.",
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
      description: "Proyek Website dengan bertemakan konstruksi yang mengenalkan sebuah bisnis/jasa renovasi rumah",
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
      description: "Sebuah Proyek personal branding, di dalam proyek ini untuk pertama kalinya saya mengimplementasikan penggunaan tailwindCSS untuk membuat sebuah website",
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
      description: "Sebuah proyek personal branding, di dalamnya kamu dapat berpartisipasi untuk mempromosikan barang atau jasa yang kamu miliki, sehingga harapannya dapat meningkatkan jumlah pengunjung dan pembeli",
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
      description:
        "Sebuah proyek yang awalnya iseng karena suka sama musiknya yang After School, sehingga saya melakukan riset untuk mencari official website dari group Weeekly ini, dan ternyata mereka belum punya website resminya, hingga akhirnya saya coba untuk bikin versi saya sendiri.",
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
      description: "Untuk kesekian lagi, saya mencoba untuk mengerjakan proyek slicing dengan menggunakan teknologi react + tailwindcss ",
      links: {
        livePreview: "https://ikhlasdansantai.github.io/Hangeulin/",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"],
      category: "web development",
    },
    {
      id: 13,
      name: "Introvert Club",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Introvert-Club-Community.png",
      description: "Mencoba untuk membangun sebuah website dengan Framework vueJS",
      links: {
        livePreview: "https://introvert-club.vercel.app/",
      },
      technology: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"],
      category: "web development",
    },
    {
      id: 14,
      name: "React Native Learning Journey With Expo",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/react-native-journey.PNG",
      description: "Memahami cara membuat aplikasi mobile sederhana menggunakan React Native dengan Expo, serta mendokumentasikan daftar materi yang telah dipelajari saat mengembangkan setiap fitur.",
      links: {
        livePreview: "https://github.com/ikhlasdansantai/react-native-jouney",
      },
      technology: [
        "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/androidstudio/androidstudio-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.simpleicons.org/tailwindcss/06B6D4.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      ],
      category: "mobile",
    },
    {
      id: 15,
      name: "Camp Yang Paling Mengerikan Di Era ww2",
      url: "https://img.youtube.com/vi/BW9glb4e0lM/maxresdefault.jpg",
      description: "Menceritakan tentang kejahatan perang yang dilakukan oleh nasi jerman di era perang dunia ke 2, di video ini saya menjelaskan tentang salah satu camp konsentrasi jerman, yaitu Dachau",
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
      id: 16,
      name: "tebak 1",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/ive.png",
      description: "masih di rahasiakan, tapi jika kamu tau proyek apa ini, berarti anda adalah seorang fans :D",
      links: {
        livePreview: "",
      },
      technology: [""],
      category: "wip",
    },
    {
      id: 17,
      name: "tebak 2",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/projects/Proj/isone-docs.png",
      description: "masih di rahasiakan, tapi jika kamu tau proyek apa ini, berarti anda adalah seorang fans :D",
      links: {
        livePreview: "",
      },
      technology: [""],
      category: "wip",
    },
    {
      id: 17,
      name: "tebak 3",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/v.2/assets/projects/Proj/karirku.png",
      description: "masih di rahasiakan, tapi jika kamu tau proyek apa ini, berarti anda adalah seorang fans :D",
      links: {
        livePreview: "",
      },
      technology: [""],
      category: "wip",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
