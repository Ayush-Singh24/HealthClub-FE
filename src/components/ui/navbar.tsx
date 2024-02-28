"use client";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./modeToggle";
import { Modal } from "../modal";
import { createPortal } from "react-dom";
import SignUp from "../signup";

export default function Navbar() {
  const pathName = usePathname();

  const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full fixed top-0 z-1000 p-2 bg-tlColor dark:bg-tdColor backdrop-blur-md">
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
              <Button onClick={() => {}} variant="ghost">
                Login
              </Button>
              <Button onClick={() => setSignUpModalOpen(true)} variant="ghost">
                Sign Up
              </Button>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
      {signUpModalOpen &&
        createPortal(
          <Modal
            isOpen={signUpModalOpen}
            handleClose={() => setSignUpModalOpen(!signUpModalOpen)}
          >
            <SignUp />
          </Modal>,
          document.body
        )}
    </>
  );
}
