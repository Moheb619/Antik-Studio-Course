import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
export async function POST(req: NextRequest, res: NextResponse) {
  const queryParams = req.nextUrl.searchParams;
  const courseId = queryParams.get("courseid");
  const userId = queryParams.get("userId");
  const signature = queryParams.get("signature");

  if (!userId && !courseId && signature != process.env.SUCCESS_SIGNATURE) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await db.purchase.create({
    data: {
      courseId: courseId!,
      userId: userId!,
    },
  });

  //   return NextResponse.redirect(new URL("/success", req.url), 303);
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseId}`,
    303
  );
}
