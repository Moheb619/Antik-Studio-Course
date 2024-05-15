"use client";

import { signOut } from "next-auth/react";

export const LoginForm = () => {
  return <button onClick={() => signOut}>Sign Out</button>;
};
