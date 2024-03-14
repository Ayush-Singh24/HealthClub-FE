"use client";
import {
  Bell,
  ChevronDown,
  Home,
  LogOut,
  Mail,
  Plus,
  Settings,
  SunMoon,
  Tent,
  UserRound,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Service } from "@/services/services";
import { ResponseStatus } from "@/utils/constants";
import { useToast } from "./ui/use-toast";
import { useContext } from "react";
import { UserContext } from "@/app/feed/layout";

export default function SideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const user = useContext(UserContext);
  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleLogout = async () => {
    const response = await Service.logout();
    if (response.status === ResponseStatus.Ok) {
      toast({
        description: "Logged out 😔",
      });
      router.push("/home");
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: response.res?.message,
      });
    }
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
        <Button variant={"ghost"} className="text-2xl px-0">
          <Link
            href="/campaigns"
            className="flex justify-center lg:justify-stretch items-center gap-3 p-2 w-full"
          >
            <Tent size={30} />
            <span className={`hidden lg:block`}>Campaigns</span>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="lg:p-8 rounded-full flex justify-center lg:justify-between p-0 lg:border-2 "
            >
              <div className="flex gap-5">
                <Avatar className="h-12 w-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="hidden lg:flex flex-col gap-2">
                  <span className="text-left">{user?.firstName}</span>
                  <span className="text-left">{user?.username}</span>
                </div>
              </div>
              <ChevronDown className="hidden lg:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-pdColor w-56 flex flex-col gap-3 rounded border-2 m-2 p-2 shadow-2xl shadow-zinc-600 animate-out">
            <DropdownMenuItem
              className="p-2 flex gap-2 items-center rounded cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut />
              Logout
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2 flex gap-2 items-center rounded cursor-pointer">
              <Settings />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
