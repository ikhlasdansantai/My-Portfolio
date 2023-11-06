import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "Weeekly Fanmade Website",
      url: "kosong",
      category: "web development",
    },
    {
      id: 2,
      name: "Introvert Club",
      url: "kosong",
      category: "web development",
    },
    {
      id: 3,
      name: "Weeekly Fanmade Website",
      url: "kosong",
      category: "web development",
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}
