"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <h2 className="text-fluid-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          Page Not Found
        </h2>

        <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/services"
              className="text-primary hover:underline font-medium"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-primary hover:underline font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-primary hover:underline font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
