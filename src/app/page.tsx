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
          className={`${titanOne.className} mt-8 bg-gradient-to-b from-rose-300 to-white py-4 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl tracking-wide`}
        >
          Health Club <br />
          <span className="text-3xl text-rose-200 tracking-wider">
            Where Ideas Heal, Together
          </span>
        </motion.h1>
      </LampContainer>
    </motion.div>
  );
}
