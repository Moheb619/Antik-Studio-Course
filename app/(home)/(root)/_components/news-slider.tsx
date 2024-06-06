"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const NewsSlider = () => {
  const [news, setNews] = useState<string>("Running Notification From State");

  const BoxShadow = {
    boxShadow:
      "1px 5px 2px rgb(242, 176, 176), 2px 2px 3px rgb(197, 197, 197) inset",
  };

  const CircularAnimation = {
    animation: "marquee 25s linear infinite",
  };

  return (
    <div
      id="news-slider"
      style={BoxShadow}
      className={cn(
        "mx-1 md:mx-11 p-3 rounded-full mt-4 md:mt-0 overflow-hidden whitespace-nowrap relative",
        news == "" ? "hidden" : ""
      )}
    >
      <p style={CircularAnimation} className={cn("inline-block pl-[100%] ")}>
        {news}
      </p>
    </div>
  );
};
