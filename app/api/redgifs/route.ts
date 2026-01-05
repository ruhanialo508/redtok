import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  const res = await fetch(`https://api.redgifs.com/v2/${endpoint}`);
  const data = await res.json();

  return NextResponse.json(data);
}