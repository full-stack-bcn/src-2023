import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log(await request.json());
  return NextResponse.json({ ok: true });
}