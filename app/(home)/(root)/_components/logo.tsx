import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      style={{ width: "auto", height: "auto" }}
      height={130}
      width={130}
      alt="logo"
      src="/antik_studio_logo.png"
    />
  );
};
