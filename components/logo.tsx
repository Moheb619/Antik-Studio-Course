import Image from "next/image";
import logo from "@/public/antik_studio_logo.png";

export const Logo = () => {
  return <Image priority={true} width={130} alt="logo" src={logo} />;
};
