"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Link2, X } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-4xl">
          Selected Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
          A few recent builds focused on scalability, performance, and polished
          user experience.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              type="button"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-400"
            >
              <div className="relative h-44 overflow-hidden bg-zinc-950">
                <div className="absolute left-6 top-6 h-3 w-24 rounded-full bg-indigo-400/45" />
                <div className="absolute left-6 top-14 h-2 w-32 rounded-full bg-zinc-400/35" />
                <div className="absolute right-8 top-8 h-20 w-20 rounded-2xl bg-indigo-500/15" />
                <div className="absolute -bottom-7 left-10 h-24 w-44 rotate-6 rounded-2xl bg-zinc-700/25" />
                <div className="absolute bottom-5 right-8 h-16 w-32 -rotate-6 rounded-2xl bg-indigo-300/15" />
              </div>
              <div className="bg-white p-6 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-indigo-500 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                aria-label="Close project details"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="pr-12 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {selectedProject.details}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600 dark:bg-indigo-400 dark:text-zinc-950 dark:hover:bg-indigo-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  See Live
                </a>
                <a
                  href={selectedProject.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                >
                  <Link2 className="h-4 w-4" />
                  See Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
