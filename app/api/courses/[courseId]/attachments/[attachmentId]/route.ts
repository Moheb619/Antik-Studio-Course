import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } }
) {
  try {
    const data: any = await getServerSession(authOptions);
    const userId = data?.user?.id;

    const { courseId, attachmentId } = params;

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

    const attachment = await db.attachment.delete({
      where: {
        id: attachmentId,
      },
    });

    return NextResponse.json(attachment);
  } catch (error) {
    console.error("[ATTACHMENT_ID]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
