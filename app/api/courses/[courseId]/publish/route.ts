import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const data: any = await getServerSession(authOptions);
    const userId = data?.user?.id;

    const { courseId } = params;

    if (!userId || !isTeacher(userId)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        userId,
        id: courseId,
      },
      include: {
        chapters: true,
      },
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const hasPublishedChapters = course.chapters.some(
      (chapter) => chapter.isPublished
    );

    if (
      !course.title ||
      !course.imageUrl ||
      !course.categoryId ||
      !course.description ||
      !hasPublishedChapters
    ) {
      return new NextResponse("Missing required fields", { status: 401 });
    }

    const publishedCourse = await db.course.update({
      where: {
        userId,
        id: courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.error("[COURSE_ID_PUBLISH]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
