"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

interface SignoutButtonProps {
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "success"
    | null
    | undefined;
  className?: string;
  children?: React.ReactNode;
}

export const SignOutButton = ({
  children,
  size,
  variant,
  className,
}: SignoutButtonProps) => {
  return (
    <Button
      className={className}
      size={size}
      variant={variant}
      onClick={() => signOut()}
    >
      {children}
      SignOut
    </Button>
  );
};
