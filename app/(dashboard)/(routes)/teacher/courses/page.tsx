import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import Link from "next/link";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";

const CoursesPage = async () => {
  const data: any = await getServerSession(authOptions);
  const userId = data?.user?.id;

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
