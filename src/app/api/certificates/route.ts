import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 2,
      name: "HTML",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/html.jpg",
      source: "sololearn",
    },
    {
      id: 2,
      name: "CSS",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/CSS.jpg",
      source: "sololearn",
    },
    {
      id: 1,
      name: "Belajar HTTP untuk Pemula",
      date: "22 October 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/http.jpg",
      source: "PZN",
    },
    {
      id: 2,
      name: "Pemrograman JavaScript untuk Pemula Sampai Mahir",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/PZN-JavaScript.jpeg",
      source: "PZN",
    },
    {
      id: 2,
      name: "Belajar Membuat Front-End Web untuk Pemula",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/dicoding-1.jpg",
      source: "Dicoding",
    },
    {
      id: 2,
      name: "Belajar  Membuat Aplikasi Back-End untuk Pemula",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/dicoding-be.png",
      source: "Dicoding",
    },
    {
      id: 2,
      name: "Responsive Web Design",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/freecodecamp-org-certification-KichirouYoshi-responsive-web-design.png",
      source: "freecodecamp",
    },
    {
      id: 2,
      name: "Belajar Dasar Pemrograman Web",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/dicoding-2.jpg",
      source: "Dicoding",
    },
    {
      id: 2,
      name: "Belajar Dasar Pemrograman JavaScript",
      date: "27 May 2022",
      url: "https://raw.githubusercontent.com/ikhlasdansantai/My-Portfolio/main/assets/certificates/dicoding-js.png",
      source: "Dicoding",
    },
    {
      id: 132,
      name: "Introduction To Cyber Security",
      date: "21 March 2025",
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-PWTDKCDGSE.png",
      source: "Tryhackme",
    },
    {
      id: 12,
      name: "Pre Security",
      date: "21 March 2025",
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-0DTBKPVRWF.png",
      source: "Tryhackme",
    },
    {
      id: 12,
      name: "Web Fundamentals",
      date: "26 March 2025",
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MGBZJDVFQU.png",
      source: "Tryhackme",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
