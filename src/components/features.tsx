import Image from "next/image";
import { Titan_One } from "next/font/google";
import { HoverEffect } from "./ui/hoverEffect";
import { ReactNode } from "react";
import { PencilLine, PencilLineIcon } from "lucide-react";
import { IconProps } from "./ui/icon";
const titanOne = Titan_One({ subsets: ["latin"], weight: "400" });

export default function Features() {
  const projects: {
    title: string;
    iconName: IconProps["name"];
    description: string;
    link?: string;
  }[] = [
    {
      title: "Post",
      iconName: "pencil-line",
      description:
        "A technology company that builds economic infrastructure for the internet.",
    },
    {
      title: "Comment",
      iconName: "messages-square",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "Up-Vote",
      iconName: "arrow-big-up",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
    },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-32">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h2
          className={`text-rose-500 ${titanOne.className} text-5xl dark:text-rose-300`}
        >
          About Health Club
        </h2>
        <span className="max-w-sm">
          Health Club is the largest community of verified healthcare
          professionals working together, safely and securely, to improve
          patient outcomes.
        </span>
      </div>
      <div className="min-h-1/2 bg-orange-500">
        {/* <Image
          alt="image"
          src="/public/images/logo.png"
          width={500}
          height={500}
        /> */}
      </div>
      <div className="max-w-[1170px]">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
