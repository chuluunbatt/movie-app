"use client";

import React from "react";
import { MoonIcon, SunIcon, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { GenreMenuFunction } from "./GenreMenuFunction";

export const NavigationBar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex w-full items-center justify-between px-8 py-4 bg-background border-b text-foreground">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="h-8 object-contain" alt="logo" />
      </div>

      {/* Search & Genre */}
      <div className="flex items-center gap-2">
        <GenreMenuFunction />

        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search..."
            className="w-80 border border-gray-300 dark:border-zinc-700 bg-transparent rounded-2xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative flex items-center justify-center p-2 rounded-xl border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        aria-label="Toggle Theme">
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>
    </header>
  );
};

export default NavigationBar;
