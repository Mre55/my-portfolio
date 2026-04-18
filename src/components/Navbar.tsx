"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsThemeReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href);
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const mostVisible = visibleEntries.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio
            ? prev
            : current;
        });

        setActiveSection(`#${mostVisible.target.id}`);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    if (!isThemeReady) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/85">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent transition-opacity duration-200 hover:opacity-80"
          aria-label="Go to homepage"
        >
          MA.
        </a>
   

        <ul className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-indigo-500 dark:text-indigo-400"
                    : "text-zinc-600 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            disabled={!isThemeReady}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            {!isThemeReady ? (
              <span className="h-4 w-4 rounded-full border border-current" />
            ) : resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400 sm:hidden"
          >
            {isMobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
      {isMobileOpen ? (
        <div className="border-t border-zinc-200/80 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/95 sm:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block text-sm transition-colors ${
                    activeSection === link.href
                      ? "text-indigo-500 dark:text-indigo-400"
                      : "text-zinc-600 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
