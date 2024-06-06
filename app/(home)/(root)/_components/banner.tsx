import { cn } from "@/lib/utils";
import Image from "next/image";
import Cartoon1 from "@/public/homeimages/cartoon1.png";
import Pencil from "@/public/homeimages/pencil.png";
import { Atma } from "next/font/google";

const atma = Atma({
  weight: "700",
  subsets: ["latin"],
});

export const Banner = () => {
  const StyledParagraph = {
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#ef0f0f",
  };

  return (
    <div className={cn("flex p-2 md:p-5 flex-wrap w-[95%] md:w-[85%] mx-auto")}>
      <div
        className={cn(
          "flex flex-wrap basis-full md:basis-1/3 items-center mt-5 md:mt-0 mx-auto"
        )}
      >
        <div className={cn("basis-full md:basis-1/3")}>
          <Image
            className="mx-auto"
            src={Cartoon1}
            height={200}
            alt="Cartoon 1"
          />
        </div>
        <div className={cn("basis-full md:basis-2/3")}>
          <p
            style={StyledParagraph}
            className={cn(
              "text-center md:text-left text-white text-[2rem] md:text-4xl leading-10 font-medium tracking-wide",
              atma.className
            )}
          >
            <span className="block my-2">Be Unique</span>
            <span className="block my-2">Be Creative</span>
          </p>
        </div>
      </div>
      <div className={cn("flex flex-wrap basis-2/3 items-start mt-7 mx-auto")}>
        <div className={cn("basis-full md:basis-1/3 md:mr-[-40px] md:ml-10")}>
          <Image className="mx-auto" src={Pencil} alt="Pencil Icon" />
        </div>
        <div className={cn("basis-full md:basis-2/3")}>
          <p className={cn("text-xs w-[100%] mx-4 font-bold")}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque
            at, ipsam quos similique nobis culpa nulla voluptatum fugit, eos in!
            Itaque excepturi vero dignissimos alias inventore! Et sit ut facilis
            ullam?
          </p>
        </div>
      </div>
    </div>
  );
};
