import Image from "next/image";
import { Titan_One } from "next/font/google";
import { HoverEffect } from "./ui/hoverEffect";
const titanOne = Titan_One({ subsets: ["latin"], weight: "400" });

export default function Features() {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
          itaque nisi dolorem. Esse possimus ipsum quibusdam fuga molestiae,
          vitae, est eveniet unde qui tenetur reiciendis, itaque nostrum ab
          totam?
        </span>
      </div>
      <div className="min-h-1/2 bg-orange-500">
        <Image
          alt="image"
          src="/public/images/logo.png"
          width={500}
          height={500}
        />
      </div>
      <div className="max-w-[1170px]">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
