import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`, 303);
}
