"use client";
import {
  Bell,
  Home,
  Mail,
  Plus,
  Search,
  SunMoon,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function SideBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div className="hidden h-screen lg:basis-1/4 md:flex flex-col overflow-hidden sticky left-0 top-0">
      <div className="py-5 px-7 hidden lg:block">
        <img src="/images/logo-light.png" className="w-36 hidden dark:block" />
        <img src="/images/logo-dark.png" className="w-36 block dark:hidden" />
      </div>
      <div className="flex flex-col p-5 gap-8 lg:justify-center items-stretch h-full">
        <Button
          className={`text-2xl px-0 lg:border-0 ${
            pathname === "/feed" ? "border-rose-500" : ""
          } border-2`}
          variant={"ghost"}
        >
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
        <Button
          className={`text-2xl px-0 lg:border-0 ${
            pathname === "/feed/explore"
              ? "border-rose-500 border-2"
              : "border-0"
          }`}
          variant={"ghost"}
        >
          <Link
            href="/feed/explore"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Search size={30} />
            <span
              className={`${
                pathname === "/feed/explore" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Explore
            </span>
          </Link>
        </Button>
        <Button
          className={`text-2xl px-0 lg:border-0 ${
            pathname === "/feed/notifications"
              ? "border-rose-500 border-2"
              : "border-0"
          }`}
          variant={"ghost"}
        >
          <Link
            href="/feed/notifications"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Bell size={30} />
            <span
              className={`${
                pathname === "/feed/notifications" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Notifications
            </span>
          </Link>
        </Button>
        <Button
          className={`text-2xl px-0 lg:border-0 ${
            pathname === "/feed/messages"
              ? "border-rose-500 border-2"
              : "border-0"
          }`}
          variant={"ghost"}
        >
          <Link
            href="/feed/messages"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Mail size={30} />
            <span
              className={`${
                pathname === "/feed/messages" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Messages
            </span>
          </Link>
        </Button>
        <Button
          className="text-2xl px-0"
          variant={"ghost"}
          onClick={handleTheme}
        >
          <div className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full">
            <SunMoon size={30} />
            <span className="hidden lg:block">Theme</span>
          </div>
        </Button>
        <Button
          className={`text-2xl px-0 lg:border-0 ${
            pathname === "/feed/profile"
              ? "border-2 border-rose-500"
              : "border-0"
          }`}
          variant={"ghost"}
        >
          <Link
            href="/feed/profile"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <UserRound size={30} />
            <span
              className={`${
                pathname === "/feed/profile" ? `font-semibold` : ""
              } hidden lg:block`}
            >
              Profile
            </span>
          </Link>
        </Button>
        <Button className="text-4xl self-start lg:self-center rounded-full flex justify-center items-center lg:p-8">
          <div className="lg:hidden">
            <Plus />
          </div>
          <div className="hidden lg:block">Post</div>
        </Button>
      </div>
    </div>
  );
}
