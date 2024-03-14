"use client";
import { useAuth } from "@/hooks/useAuth";
import Loader from "../loader";
import { useRouter } from "next/navigation";
import MainPage from "@/components/mainPage";

export default function Feed() {
  const { isAuth } = useAuth();
  const router = useRouter();
  if (isAuth === null) {
    return <Loader />;
  }
  if (!isAuth) {
    router.push("/home");
    return <Loader />;
  }

  return <div className="bg-orange-400">hello</div>;
}
