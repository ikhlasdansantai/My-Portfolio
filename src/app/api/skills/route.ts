import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "Web Design",
      icon: "ic:baseline-monitor",
      description: "Saya pastikan situs website Anda terlihat profesional dan menawan, sehingga menarik pengunjung untuk berinteraksi dengan bisnis Anda.",
    },
    {
      id: 2,
      name: "Slicing Design",
      icon: "bi:image",
      description: "Dengan kemahiran slicing saya, saya siap mengubah design website anda menjadi website profesional sehingga menjadi mobile friendly dan tentunya pixel perfect.",
    },
    {
      id: 3,
      name: "FrontEnd Developer",
      icon: "material-symbols:code",
      description: "Dengan memanfaatkan teknologi frontend terkini, saya menjamin bahwa situs website Anda akan tampil modern dan juga efisien.",
    },
    {
      id: 4,
      name: "Web Development",
      icon: "octicon:stack-16",
      description: "Apakah bisnis Anda ingin dikenal oleh semua orang dan bisa memasarkan bisnis Anda? saya akan bantu buatkan untuk Anda.",
    },
    {
      id: 5,
      name: "Web Application",
      icon: "ph:brackets-curly-bold",
      description: "Saya bisa membuat website anda terstruktur dengan baik dengan fokus utamanya adalah performa, security, functionality, dan juga SEO.",
    },
    {
      id: 6,
      name: "Motion Graphics",
      icon: "mingcute:video-fill",
      description: "Saya bisa membuat video Motion Graphics dengan fokus utamanya adalah, visual Appeal, Storytelling, dan juga kreatifitas.",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
