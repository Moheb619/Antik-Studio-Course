import { isTeacher } from "@/lib/teacher";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const data: any = await getServerSession(authOptions);
  const userId = data?.user?.id;

  if (!isTeacher(userId)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default TeacherLayout;
