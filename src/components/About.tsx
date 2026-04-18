"use client";

import { motion } from "framer-motion";
import { AtSign, Link2, UserRound } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h2 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            About Myself
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-300">
            I am a freelance full-stack developer passionate about building
            scalable, intuitive, and high-performing web applications. I enjoy
            turning complex product ideas into clean, maintainable architecture.
            When I am not writing code or optimizing workflows, you can usually
            find me playing chess, hitting the gym for some deadlifts, playing
            the keyboard, or practicing my German.
          </p>

          <button
            type="button"
            className="mt-6 w-fit rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Get my resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Languages
            </h3>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              TypeScript, JavaScript, Python
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Frameworks
            </h3>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Next.js (App Router), React, Tailwind CSS
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Tools
            </h3>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Git, Jira, Monday.com, Intercom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
