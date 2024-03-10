"use client";

import Features from "@/components/features";
import Welcome from "@/components/welcome";
import { useAuth } from "@/hooks/useAuth";
import Loader from "../loader";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isAuth = useAuth();
  if (isAuth === null) {
    return <Loader />;
  }
  if (isAuth) {
    router.push("/feed");
    return <Loader />;
  }
  return (
    <>
      <Welcome />
      <Features />
    </>
  );
}
