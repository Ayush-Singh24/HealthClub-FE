"use client";

import Features from "@/components/features";
import Welcome from "@/components/welcome";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const isAuth = useAuth();
  const router = useRouter();
  if (isAuth === null) {
    return <div>loading</div>;
  }
  if (isAuth) {
    router.push("/feed");
    return <div>loading</div>;
  }
  return (
    <>
      <Welcome />
      <Features />
    </>
  );
}
