"use client";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

import { Titan_One } from "next/font/google";
const titanOne = Titan_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <motion.div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 160 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={`${titanOne.className} mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl`}
        >
          Health Club <br />
          <span className="text-3xl">Where Ideas Heal, Together</span>
        </motion.h1>
      </LampContainer>
    </motion.div>
  );
}
