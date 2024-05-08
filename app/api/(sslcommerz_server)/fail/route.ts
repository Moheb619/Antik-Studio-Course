import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.redirect(new URL("/fail", req.url), 303);
}
