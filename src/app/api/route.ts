import { NextResponse } from "next/server";

// type ResponseData = {
//   message: string;
// };

export async function GET() {
  return NextResponse.json({ status: 200, message: "hello World!" });
}

// export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   res.status(200).json({ message: "hello fromt hello TS" });
// }
