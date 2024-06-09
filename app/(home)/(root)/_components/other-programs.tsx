import Image from "next/image";
import cartoon4 from "@/public/homeimages/cartoon4.png";
import { Programs } from "./programs";

export const OtherPrograms = () => {
  return (
    <div className="my-32">
      <div className="text-xl text-center text-red-600 font-bold">
        Other Programs
      </div>
      <div className="flex flex-wrap gap-8 items-center">
        <Image
          priority={true}
          height={undefined}
          src={cartoon4}
          alt="cartoon4"
          className="mx-auto"
        />
        <Programs />
        <Programs />
        <Programs />
      </div>
    </div>
  );
};
