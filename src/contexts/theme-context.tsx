"use client";
import { createContext, useContext, useEffect } from "react";
import useStorage from "@/hooks/useLocalStorage";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDarkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useStorage<Theme>("theme", "local", "dark");

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
  };

  const isDarkTheme = theme === "dark";

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, isDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme은 ThemeProvider 내부에서만 사용 가능합니다.");
  }
  return context;
}
