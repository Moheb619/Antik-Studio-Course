import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const data: any = await getServerSession(authOptions);
    const userId = data?.user?.id;

    const { courseId } = params;
    const { list } = await req.json();

    if (!userId || !isTeacher(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        userId,
        id: courseId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    for (let item of list) {
      await db.chapter.update({
        where: {
          id: item.id,
        },
        data: {
          position: item.position,
        },
      });
    }

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("[REORDER]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
