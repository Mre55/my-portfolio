import { AtSign, Globe, UserRound } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row justify-between items-center px-8 py-8 text-sm text-zinc-600 dark:text-zinc-400 gap-6">
        <p className="mb-2 md:mb-0">
          © 2026 Mihreteab. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-zinc-500 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:border-indigo-400"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-zinc-500 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:border-indigo-400"
          >
            <UserRound className="h-5 w-5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-zinc-500 transition-colors hover:border-indigo-500 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400 dark:hover:border-indigo-400"
          >
            <AtSign className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
