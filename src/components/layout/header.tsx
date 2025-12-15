"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-[rgb(250,249,246)]/80 backdrop-blur-lg dark:border-neutral-800 dark:bg-[rgb(15,15,15)]/80">
      <div className="container mx-auto px-4">
        <div className="flex h-44 items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Wide Open Development"
              width={960}
              height={320}
              className="h-40 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  pathname === link.href
                    ? "text-primary after:w-full"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Phone & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="hidden lg:flex items-center space-x-2 text-sm font-medium text-neutral-700 hover:text-primary transition-all duration-300 hover:scale-105 dark:text-neutral-300 group"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="transition-colors duration-300">{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-neutral-200 dark:border-neutral-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 px-4 text-base font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 hover:translate-x-2",
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center space-x-2 py-2 px-4 text-base font-medium text-neutral-700 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 hover:translate-x-2 dark:text-neutral-300 group"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
