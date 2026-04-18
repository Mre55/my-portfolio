"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  attribute?: "class";
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "portfolio-theme";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const effectiveTheme =
        nextTheme === "system" && enableSystem ? getSystemTheme() : nextTheme;
      const root = document.documentElement;

      root.classList.toggle("dark", effectiveTheme === "dark");
      setResolvedTheme(effectiveTheme as ResolvedTheme);
    },
    [enableSystem],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null;
      const initialTheme = storedTheme ?? defaultTheme;
      setThemeState(initialTheme);
      applyTheme(initialTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [applyTheme, defaultTheme]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      applyTheme(theme);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [applyTheme, theme]);

  useEffect(() => {
    if (!enableSystem || theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [applyTheme, enableSystem, theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    localStorage.setItem(storageKey, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
