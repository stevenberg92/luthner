"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.header
      className={`flex flex-col gap-5 ${alignment} max-w-2xl ${
        align === "center" ? "mx-auto" : ""
      }`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      <motion.div
        variants={staggerItem}
        className="flex items-center gap-3"
      >
        <span className="divider-gold" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.h2
        variants={staggerItem}
        className="h-display text-4xl md:text-5xl lg:text-[3.5rem] text-graphite"
      >
        {title}
      </motion.h2>

      {intro && (
        <motion.p
          variants={staggerItem}
          className="text-base md:text-lg text-ash leading-relaxed max-w-xl"
        >
          {intro}
        </motion.p>
      )}
    </motion.header>
  );
}
