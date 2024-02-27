import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-1000 p-2 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-[1170px] mx-auto w-full">
        <div className="">logo aayega</div>
        <div>
          <Button asChild variant={"ghost"}>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"/signup"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
