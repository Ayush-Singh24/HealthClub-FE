"use client";
import {
  Bell,
  Home,
  Mail,
  Plus,
  Search,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function SideBar() {
  const theme = useTheme();
  const pathname = usePathname();
  return (
    <div className="hidden h-screen lg:basis-1/4 md:flex flex-col overflow-hidden sticky left-0 top-0">
      <div className="py-5 px-7 hidden lg:block">
        <img src={`/images/logo-light.png`} className="w-36" />
      </div>
      <div className="flex flex-col p-5 gap-8 justify-center items-stretch h-full">
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link
            className="flex justify-center lg:justify-stretch items-center gap-3 w-full p-2"
            href="/feed"
          >
            <Home size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Home
            </span>
          </Link>
        </Button>
        <Button className="text-2xl  px-0" variant={"ghost"}>
          <Link
            href="/feed/explore"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Search size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Explore
            </span>
          </Link>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link
            href="/feed/notification"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Bell size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Notifications
            </span>
          </Link>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link
            href="/feed/messages"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Mail size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Messages
            </span>
          </Link>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link
            href="/feed/communites"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <UsersRound size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Communities
            </span>
          </Link>
        </Button>
        <Button className="text-2xl px-0" variant={"ghost"}>
          <Link
            href="/feed/profile"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <UserRound size={30} />
            <span
              className={`${
                pathname === "/feed" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Profile
            </span>
          </Link>
        </Button>
        <Button className="text-4xl self-start lg:self-center">
          <div className="rounded-full">
            <Plus />
          </div>
          <div className="hidden lg:block w-1/2 py-8">Post</div>
        </Button>
      </div>
    </div>
  );
}
