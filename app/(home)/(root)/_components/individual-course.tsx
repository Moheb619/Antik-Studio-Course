import Image from "next/image";
import cartoon2 from "@/public/homeimages/cartoon2.png";

export const IndividualCourseHome = () => {
  return (
    <div className="mx-auto">
      {/* Main Image and Short BIO */}
      <div className="flex rounded-[50%] border-red-600 border-[2px] w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] items-center justify-between">
        {/* Image Logo */}
        <div className="ml-[-30px]">
          <Image
            priority={true}
            src={cartoon2}
            alt="cartoon2"
            height={undefined}
          />
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
