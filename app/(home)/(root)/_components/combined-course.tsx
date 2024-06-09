import cartoon3 from "@/public/homeimages/cartoon3.png";
import Image from "next/image";

export const CombinedCourse = () => {
  return (
    <div className="mx-auto px-16">
      {/* Main Image and Short BIO */}
      <div className="flex flex-col rounded-3xl border-red-600 border-[2px] w-[14rem] h-[10rem] items-center justify-between">
        {/* Image Logo */}
        <div className="mt-2">
          <Image priority={true} src={cartoon3} alt="cartoon3" height={60} />
        </div>
        {/* Short Description */}
        <div className="text-xs p-4 text-center font-bold">
          Shortly Briefed <br />
          Course Details
        </div>
      </div>
      {/* Caption */}
      <div className="text-red-600 text-xs font-semibold text-center mt-2">
        <p>Course Title/ Code-A</p>
      </div>
    </div>
  );
};
