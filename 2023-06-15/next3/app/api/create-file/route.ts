import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ error: "You should call with POST" });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const filename = formData.get('filename');
  if (filename === null) {
    return NextResponse.json({ error: "Missing 'filename'" }, {
      status: 400,
    });
  }
  const content = formData.get('content');
  if (content === null) {
    return NextResponse.json({ error: "Missing 'content'" }, {
      status: 400,
    });
  }
  
  await writeFile(filename.toString(), content.toString());
  return NextResponse.json({ ok: true });
}
