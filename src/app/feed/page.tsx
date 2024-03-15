"use client";
import PostCard from "@/components/ui/postCard";
import { Service } from "@/services/services";
import { Post } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    Service.getAllPosts(controller.signal)
      .then((response) => setPosts(response.res.posts))
      .catch((error) => console.log(error));
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <section className="w-full flex justify-center">
      <div className="w-full xl:w-4/6 flex flex-col gap-5 xl:gap-10 p-10">
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
