"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      event.currentTarget.reset();
      setStatusType("success");
      setStatusMessage("Thanks for reaching out. Your message has been sent.");
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-20 overflow-hidden"
    >
      {/* Decorative background, z-0 */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Large faint circle, top right */}
        <div className="absolute -top-28 right-0 h-96 w-96 rounded-full bg-indigo-400/10 dark:bg-indigo-300/10" />
        {/* Tilted bar, bottom left */}
        <div className="absolute -bottom-10 -left-20 h-24 w-80 -rotate-12 rounded-3xl bg-indigo-400/10 dark:bg-indigo-300/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            If you have an application you are interested in developing, a feature that you need built, or a project that needs coding, I would love to help.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={1}
                rows={4}
                className="w-full min-h-[112px] rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:bg-indigo-400 dark:text-zinc-950 dark:hover:bg-indigo-300"
            >
              {isSubmitting ? (
                <>
                  <Send className="h-4 w-4 animate-spin-slow" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
            {statusMessage ? (
              <p
                className={`text-center text-sm ${
                  statusType === "success"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
