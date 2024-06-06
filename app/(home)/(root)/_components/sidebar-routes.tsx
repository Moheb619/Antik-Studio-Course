"use client";

import { Home, ScrollText, BookOpen, KeyRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { useSession } from "next-auth/react";

const homeGuestRoutes = [
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
  {
    icon: KeyRound,
    label: "Login",
    href: "/search",
  },
];

const homeUserRoutes = [
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

export const SidebarRoutes = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isLoggedIn = session?.user?.email ? true : false;

  const routes = isLoggedIn ? homeUserRoutes : homeGuestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
