"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

function toggleTheme() {
const nextTheme = theme === "dark" ? "light" : "dark";


console.log("Current theme:", theme);
console.log("Switching to:", nextTheme);

setTheme(nextTheme);


}

return ( <button
   type="button"
   onClick={toggleTheme}
   aria-label="Toggle color theme"
   title="Toggle color theme"
   className="relative z-50 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--highlight)]"
 >
{!mounted || theme !== "dark" ? ( <Moon size={20} strokeWidth={2} />
) : ( <Sun size={20} strokeWidth={2} />
)} </button>
);
}
