import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { NewsSlider } from "./_components/news-slider";
import { Banner } from "./_components/banner";

const Homepage = async () => {
  const data: any = await getServerSession(authOptions);
  const userId = data?.user?.id;

  return (
    <div className="h-full">
      <NewsSlider />
      <Banner />
    </div>
  );
};

export default Homepage;
