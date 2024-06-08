"use client";
import Image from "next/image";
import logo from "@/public/antik_studio_logo.png";
import Link from "next/link";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full hover:backdrop-blur-lg bg-red-200">
      <Link href={"/"}>
        <Image priority={true} src={logo} alt="site-logo" height={undefined} />
      </Link>
      <main className="h-full">{children}</main>
    </div>
  );
};

export default AuthLayout;
