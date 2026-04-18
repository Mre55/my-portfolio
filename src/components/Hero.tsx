"use client";

import { motion } from "framer-motion";
import { AtSign, Link2, UserRound } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-28 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-400/20 dark:bg-indigo-300/20" />
        <div className="absolute -top-10 left-10 h-28 w-72 -rotate-12 rounded-3xl bg-indigo-500/20 dark:bg-indigo-400/20" />
        <div className="absolute bottom-14 right-20 h-14 w-40 rotate-12 rounded-2xl bg-indigo-500/20 dark:bg-indigo-400/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex max-w-3xl flex-col items-start"
        >
          <p className="mb-5 text-sm tracking-[0.24em] text-indigo-500 dark:text-indigo-400">
            FREELANCE FULL-STACK DEVELOPER
          </p>

          <h1 className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-5xl">
            I&apos;m Mihreteab. I build scalable web applications with clean
            architecture.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            I help businesses turn product ideas into robust, performant, and
            maintainable digital platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-indigo-400 dark:text-zinc-950 dark:hover:bg-indigo-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              Contact Me
            </a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
