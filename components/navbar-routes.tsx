"use client";
import { useSession } from "next-auth/react";
// import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { data: session, status }: any = useSession();
  const userId = session?.user?.id;
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) : null}
        {session?.user ? (
          <Button size="sm" variant="ghost" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
