"use client";
import Link from "next/link";
import { Button } from "./button";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./modeToggle";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full fixed top-0 z-1000 p-2 bg-[rgb(253,164,175,0.6)] dark:bg-[rgb(12,10,9,0.6)] backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1170px] mx-auto w-full">
        <div className="">
          <img
            className="w-36 h-auto block dark:hidden"
            alt="logo"
            src="/images/logo-dark.png"
          />
          <img
            className="w-36 h-auto hidden dark:block"
            alt="logo"
            src="/images/logo-light.png"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <Button asChild variant={pathName === "/" ? "outline" : "ghost"}>
              <Link href={"/"}>Home</Link>
            </Button>
            <Button
              asChild
              variant={pathName === "/about" ? "outline" : "ghost"}
            >
              <Link href={"/about"}>About</Link>
            </Button>
            <Button
              asChild
              variant={pathName === "/login" ? "outline" : "ghost"}
            >
              <Link href={"/login"}>Login</Link>
            </Button>
            <Button
              asChild
              variant={pathName === "/signup" ? "outline" : "ghost"}
            >
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
