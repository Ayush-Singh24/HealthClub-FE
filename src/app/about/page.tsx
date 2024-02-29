"use client";
import { AboutCard } from "@/components/ui/aboutCard";

export default function About() {
  interface Team {
    pfp: string;
    name: string;
    description: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  }
  const team: Team[] = [
    {
      pfp: "/images/ayush.png",
      name: "Ayush Singh",
      description: "Second year CSE student",
    },
    {
      pfp: "/images/ayush.png",
      name: "Ayush Singh1",
      description: "Second year CSE student",
    },
    {
      pfp: "/images/ayush.png",
      name: "Ayush Singh2",
      description: "Second year CSE student",
    },
    {
      pfp: "/images/ayush.png",
      name: "Ayush Singh3",
      description: "Second year CSE student",
    },
  ];
  return (
    <section className="h-fit md:h-screen flex justify-center items-center">
      <div className="md:h-3/4 max-w-[1170px] flex justify-center">
        <AboutCard items={team} />
      </div>
    </section>
  );
}
