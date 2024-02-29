import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[50vh] md:h-[20vh] bg-[#FFE4D6] dark:bg-[#222831] p-2">
      <div className="h-full max-w-[1170px] mx-auto flex flex-col md:flex-row ">
        <div className="h-1/2 md:h-full md:w-1/2 flex justify-center items-center">
          <div className="flex gap-5 justify-center items-center">
            <Link href="/">
              <img
                src="/images/facebook.png"
                className="h-auto w-8 dark:invert"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/instagram.png"
                className="h-auto w-8 dark:invert"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/linkedin.png"
                className="h-auto w-8 dark:invert"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/youtube.png"
                className="h-auto w-10 dark:invert"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/reddit-l.png"
                className="h-auto w-10 dark:invert"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/x.png"
                className="h-auto w-10 invert dark:invert-0"
              />
            </Link>
          </div>
        </div>
        <div className="bg-red-500 h-1/2 md:h-full md:w-1/2 flex justify-center items-center">
          ayush
        </div>
      </div>
    </div>
  );
}
