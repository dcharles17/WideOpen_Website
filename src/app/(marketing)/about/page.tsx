import { ArrowRight, Heart, Zap, Users, Target, Code, Award } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Wide Open Development",
  description: "Learn about Wide Open Development - a modern web development company based in Utah, serving businesses nationwide with cutting-edge technology.",
}

const values = [
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat every client like a partner, investing in your success as if it were our own.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "We use the latest frameworks and tools to build fast, scalable, future-proof websites.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project focuses on achieving your business goals and delivering measurable results.",
  },
  {
    icon: Code,
    title: "Quality Code",
    description: "Clean, maintainable code that follows best practices and industry standards.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Clear timelines, regular updates, and direct access to your developer.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description: "We stay current with the latest trends and technologies to serve you better.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              About Wide Open Development
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400">
              We're a modern web development company passionate about building beautiful,
              high-performance websites that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
              Our Story
            </h2>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              <p>
                Wide Open Development was founded with a simple mission: to bring modern, high-quality
                web development to businesses of all sizes. We believe that every business deserves a
                website that not only looks great but performs exceptionally.
              </p>
              <p>
                Based in Utah and serving clients nationwide, we specialize in building custom
                websites, web applications, and e-commerce platforms using cutting-edge technology.
                From startups to established businesses, we partner with clients who value quality,
                performance, and innovation.
              </p>
              <p>
                What sets us apart is our commitment to using modern frameworks like Next.js and
                React, ensuring your website is fast, secure, and built for the future. We don't use
                outdated templates or one-size-fits-all solutions – every project is custom-built to
                meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Our Approach
            </h2>
            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                  Modern Technology Stack
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We use the latest frameworks like Next.js 15, React 19, and Tailwind CSS to build
                  fast, scalable websites. This isn't just about being trendy – these technologies
                  provide real benefits: faster load times, better SEO, and easier maintenance.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                  Performance-First
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Every website we build targets a 95+ Lighthouse performance score. Fast websites
                  rank better in search engines, convert more visitors, and provide better user
                  experiences. We optimize every aspect of your site for speed.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                  Custom Solutions
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  No templates, no shortcuts. Every project is custom-built to your specific needs.
                  We take time to understand your business, goals, and audience, then create a
                  solution that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
              Based in Utah, Serving Nationwide
            </h2>
            <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400 mb-6">
              While we're proud to call Utah home, we work with clients across the United States.
              Our remote-first approach means we can provide the same high-quality service whether
              you're local or across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-neutral-600 dark:text-neutral-400">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Location:
                </span>{" "}
                {SITE_CONFIG.location}
              </div>
              <div className="hidden sm:block w-1 h-1 bg-neutral-400 rounded-full" />
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Phone:</span>{" "}
                <a href={SITE_CONFIG.phoneHref} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Let's Work Together
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Ready to build something amazing? Get in touch and let's discuss your project.
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
