import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true)
        }
        else {
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn(
            "fixed z-50 p-2 rounded-full transition-colors-duration-300",
            "bottom-5 left-5 md:bottom-auto md:left-auto md:top-5 md:right-5",
            "bg-background/80 backdrop-blur-md shadow-lg border border-foreground/10",
            "focus:outline-hidden"
        )}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> :
                <Moon className="h-6 w-6 text-blue-900" />}
        </button>
    )
}

export default ThemeToggle;