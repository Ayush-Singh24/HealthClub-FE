import Image from "next/image";
import { Titan_One } from "next/font/google";
import { HoverEffect } from "./ui/hoverEffect";
import { ReactNode } from "react";
import { ArrowBigUp, MessagesSquare, PencilLine } from "lucide-react";
// import Icon, { IconProps } from "./ui/icon";
import { motion, Variants } from "framer-motion";
const titanOne = Titan_One({ subsets: ["latin"], weight: "400" });

export default function Features() {
  const variants: Variants = {
    initial: {
      opacity: 1,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  const projects: {
    title: string;
    icon: ReactNode;
    description: string;
    link?: string;
  }[] = [
    {
      title: "Post",
      icon: <PencilLine />,
      description:
        "A technology company that builds economic infrastructure for the internet.",
    },
    {
      title: "Comment",
      icon: <MessagesSquare />,
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "Up-Vote",
      icon: <ArrowBigUp />,
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
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="min-h-1/2 z-[-1]"
      >
        <Image
          alt="image"
          priority
          src="/images/reddit.png"
          width={700}
          height={700}
        />
      </motion.div>
      <div className="max-w-[1170px]">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
