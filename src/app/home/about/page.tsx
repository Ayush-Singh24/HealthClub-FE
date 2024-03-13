"use client";
import Loader from "@/app/loader";
import { AboutCard } from "@/components/ui/aboutCard";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function About() {
  const isAuth = useAuth();
  const router = useRouter();
  if (isAuth === null) {
    return <Loader />;
  }
  if (isAuth) {
    router.push("/feed");
    return <Loader />;
  }
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
      pfp: "/images/shashank.jpeg",
      name: "Shashank Prasad",
      description: "Second year CSE student",
    },
    {
      pfp: "/images/devansh.jpeg",
      name: "Devansh Patel",
      description: "Second year CSE student",
    },
    {
      pfp: "/images/achal.jpeg",
      name: "Achal Bajpai",
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
