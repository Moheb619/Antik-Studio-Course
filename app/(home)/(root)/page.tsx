import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewsSlider } from "./_components/news-slider";
import { Banner } from "./_components/banner";
import Loading from "@/app/loading";
import { CoursesList } from "./_components/courses_list";
import { OtherPrograms } from "./_components/other-programs";

const Homepage = async () => {
  const data: any = await getServerSession(authOptions);
  const userId = data?.user?.id;

  return (
    <div className="h-full">
      <NewsSlider />
      <Banner />
      <CoursesList />
      <OtherPrograms />
    </div>
  );
};

export default Homepage;
