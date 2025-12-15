"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [showPopup, setShowPopup] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("theme-toggle-popup-seen")
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")

    // Hide popup and mark as seen when user interacts
    if (showPopup) {
      setShowPopup(false)
      localStorage.setItem("theme-toggle-popup-seen", "true")
    }
  }

  const dismissPopup = () => {
    setShowPopup(false)
    localStorage.setItem("theme-toggle-popup-seen", "true")
  }

  if (!mounted) {
    return (
      <button
        className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-neutral-300" />
        ) : (
          <Moon className="h-5 w-5 text-neutral-700" />
        )}
      </button>

      {/* First-visit popup */}
      {showPopup && (
        <div className="absolute -bottom-16 right-0 z-50 animate-bounce">
          <div className="relative bg-primary text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Try me! Toggle dark mode</span>
              <button
                onClick={dismissPopup}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Dismiss popup"
              >
                ×
              </button>
            </div>
            {/* Arrow pointing up */}
            <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-primary"></div>
          </div>
        </div>
      )}
    </div>
  )
}
