"use client";
import { Service } from "@/services/services";
import { useEffect } from "react";

export default function Feed() {
  useEffect(() => {
    const controller = new AbortController();
    Service.getAllPosts(controller.signal)
      .then((response) => console.log(response.res))
      .catch((error) => console.log(error));
    return () => {
      controller.abort();
    };
  }, []);
  return <div className="bg-green-500">hello main page</div>;
}
