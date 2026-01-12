"use client";
import { useTheme } from "@/contexts/theme-context";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center h-10 w-20 rounded-full 
        transition-all duration-300 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:ring-offset-2
        ${
          isDarkTheme
            ? "bg-linear-to-r from-secondary to-secondary-active"
            : "bg-linear-to-r from-primary-light to-primary-active"
        }
      `}
      aria-label="Toggle theme"
    >
      {/* 슬라이딩 원 */}
      <span
        className={`
          absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg
          transform transition-transform duration-300 ease-in-out 
          flex items-center justify-center
          ${isDarkTheme ? "translate-x-0" : "translate-x-10"}
        `}
      >
        {isDarkTheme ? (
          <BiMoon className="w-5 h-5 text-secondary" />
        ) : (
          <BiSun className="w-5 h-5 text-primary" />
        )}
      </span>

      {/* 고정 아이콘들 */}
      <BiMoon className="absolute top-2 left-2 w-6 h-6 text-white/70" />
      <BiSun className="absolute top-2 right-2 w-6 h-6 text-white/70" />
    </button>
  );
}
