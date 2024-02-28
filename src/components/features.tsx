import Image from "next/image";
import { Titan_One } from "next/font/google";
const titanOne = Titan_One({ subsets: ["latin"], weight: "400" });

export default function Features() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-32">
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h2
          className={`text-rose-500 ${titanOne.className} text-5xl dark:text-rose-300`}
        >
          About Health Club
        </h2>
        <span className="max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
          itaque nisi dolorem. Esse possimus ipsum quibusdam fuga molestiae,
          vitae, est eveniet unde qui tenetur reiciendis, itaque nostrum ab
          totam?
        </span>
      </div>
      <div className="min-h-1/2 bg-orange-500">
        <Image
          alt="image"
          src="/public/images/logo.png"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
