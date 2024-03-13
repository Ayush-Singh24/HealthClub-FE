import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./avatar";
import { PostType } from "./mainPage";
import { ArrowBigUp, ChevronDown, MessagesSquare, Share2 } from "lucide-react";
import { Button } from "./button";

export default function PostCard({ post }: { post: PostType }) {
  return (
    <div className="bg-sdColor rounded p-5">
      <div className="flex flex-col gap-4">
        <div className="flex item-center gap-2">
          <Avatar>
            <AvatarImage src={post.userImg} />
            <AvatarFallback className="bg-red-400 w-full flex justify-center items-center">
              {post.author[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col mr-auto">
            <span>{post.author}</span>
            <span>{post.time}</span>
          </div>
          <ChevronDown className="self-start" />
        </div>
        <div>{post.description}</div>
        <div className="rounded overflow-hidden">
          <img src={post.img} alt="post img" />
        </div>
        <div className="flex gap-8">
          <Button variant={"ghost"} className="flex gap-1 items-center">
            <ArrowBigUp />
            <span>Upvote</span>
          </Button>
          <Button variant={"ghost"} className="flex gap-1 items-center">
            <MessagesSquare size={20} />
            <span>Comments</span>
          </Button>
          <Button variant={"ghost"} className="flex gap-1 items-center">
            <Share2 size={20} />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
