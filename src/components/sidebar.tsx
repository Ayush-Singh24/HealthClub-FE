import { Bell, Home, Mail, Search, UserRound, UsersRound } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="h-screen basis-1/4 flex flex-col overflow-hidden sticky left-0 top-0">
      <div className="p-5">
        <img src="/images/logo-light.png" className="w-36" />
      </div>
      <div className="flex flex-col p-5 gap-8 justify-center items-stretch h-full">
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link className="flex items-center gap-3 w-full" href="/feed">
            <Home size={30} />
            <span>Home</span>
          </Link>
        </Button>
        <Button className="text-2xl  px-0" variant={"ghost"}>
          <div className="flex items-center gap-3 w-full">
            <Search size={30} />
            <span>Explore</span>
          </div>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <div className="flex items-center gap-3 w-full">
            <Bell size={30} />
            <span>Notifications</span>
          </div>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <div className="flex items-center gap-3 w-full">
            <Mail size={30} />
            <span>Messages</span>
          </div>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <div className="flex items-center gap-3 w-full">
            <UsersRound size={30} />
            <span>Communities</span>
          </div>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <div className="flex items-center gap-3 w-full">
            <UserRound size={30} />
            <span>Profile</span>
          </div>
        </Button>
        <Button className="rounded-3xl text-4xl w-1/2 py-8 self-center">
          <div>Post</div>
        </Button>
      </div>
    </div>
  );
}
