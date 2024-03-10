"use client";
import { useAuth } from "@/hooks/useAuth";
import Loader from "../loader";
import { useRouter } from "next/navigation";

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

  return <div>Hello feed</div>;
}
