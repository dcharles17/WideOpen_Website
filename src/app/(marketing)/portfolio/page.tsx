import { ProjectGrid } from "@/components/portfolio/project-grid"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Wide Open Development",
  description: "View our portfolio of web development projects including landing pages, business websites, e-commerce platforms, and web applications.",
}

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Our Work
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400">
              See how we've helped businesses succeed with modern, high-performance websites
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ProjectGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let's create something amazing together. Get your free quote today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
