"use client";
import { useAuth } from "@/hooks/useAuth";
import Loader from "../loader";
import { useRouter } from "next/navigation";
import MainPage from "@/components/mainPage";
import SideBar from "@/components/sidebar";

export default function Feed() {
  const isAuth = useAuth();
  const router = useRouter();
  if (isAuth === null) {
    return <Loader />;
  }
  if (!isAuth) {
    router.push("/home");
    return <Loader />;
  }

  return (
    <section className="max-w-[1309px] mx-auto flex">
      <SideBar />
      <MainPage />
    </section>
  );
}
