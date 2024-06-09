import Pencil from "@/public/homeimages/pencil.png";
import Logo from "@/public/antik_studio_logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Home,
  ScrollText,
  BookOpen,
  LucideIcon,
  LogIn,
  ScanFace,
} from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "@/components/signout";

const NavbarDesktopHomeRoutes = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },
  {
    icon: ScrollText,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BookOpen,
    label: "Book",
    href: "https://antikmahmud.com/",
  },
];

export const NavbarDesktopHome = async () => {
  const data: any = await getServerSession(authOptions);
  return (
    <div className={cn("p-4 flex items-center justify-between")}>
      <div>
        <Link href={"/"}>
          <Image
            priority={true}
            height={undefined}
            alt="pencil logo"
            src={Pencil}
          />
        </Link>
      </div>
      <div>
        <Image priority={true} height={undefined} alt="logo" src={Logo} />
      </div>
      <div
        className={cn(
          "overflow-hidden flex items-center justify-between basis-3/4 bg-gradient-to-r from-[#EF0F0F] to-[#C49191] text-white p-5 rounded-full ml-5"
        )}
      >
        {NavbarDesktopHomeRoutes.map((route) => (
          <Link className="p-0 m-0" href={route.href} key={route.label}>
            <div
              key={route.label}
              className={cn(
                "flex items-center gap-x-2 hover:font-extrabold hover:drop-shadow-xl cursor-pointer",
                route.label === "Home" ? "ml-10" : ""
              )}
            >
              <route.icon size={20} />
              {route.label}
            </div>
          </Link>
        ))}
        {data?.user ? (
          <Link className="p-0 m-0" href={"/teacher/courses"}>
            <div
              className={cn(
                "flex items-center gap-x-2 hover:font-extrabold hover:drop-shadow-xl cursor-pointer"
              )}
            >
              <ScanFace />
              Admin
            </div>
          </Link>
        ) : (
          ""
        )}
        {data?.user ? (
          <div className="bg-white text-[#EF0F0F] flex items-center gap-x-3 pr-10 mr-[-40px] rounded-full hover:font-extrabold hover:drop-shadow-xl cursor-pointer">
            <SignOutButton className="hover:font-extrabold " variant="ghost">
              <LogIn className="mx-1" />
            </SignOutButton>
          </div>
        ) : (
          <Link href={"/login"}>
            <div className="bg-white text-[#EF0F0F] flex items-center gap-x-3 p-1 pr-10 mr-[-40px] rounded-full hover:font-extrabold hover:drop-shadow-xl cursor-pointer">
              <LogIn />
              Login
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
