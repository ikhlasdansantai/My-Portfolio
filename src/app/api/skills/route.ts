import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "Web Design",
      icon: "ic:baseline-monitor",
      description: "I ensure that your website looks professional and stunning, attracting visitors to engage with your business",
    },
    {
      id: 2,
      name: "Slicing Design",
      icon: "bi:image",
      description: "I ensure that your website looks professional and stunning, attracting visitors to engage with your business",
    },
    {
      id: 3,
      name: "FrontEnd Developer",
      icon: "material-symbols:code",
      description: "I use the latest technology in frontend development to ensure that your website looks modern and efficient.",
    },
    {
      id: 4,
      name: "Web Development",
      icon: "octicon:stack-16",
      description: "Is your business big and do you want everyone to know about it? I can help create it for you.",
    },
    {
      id: 5,
      name: "Web Application",
      icon: "ph:brackets-curly-bold",
      description: "I can develop a well-structured website with a focus on performance, security, and functionality.",
    },
    {
      id: 6,
      name: "Motion Graphics",
      icon: "mingcute:video-fill",
      description: "I can create engaging Motion Graphics with Emphasis on Visual Appeal, Storytelling, and Creativity.",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
