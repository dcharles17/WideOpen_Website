import { ArrowRight, Heart, Zap, Users, Target, Code, Award } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Wide Open Development",
  description: "Learn about Wide Open Development - a full-stack software engineering company specializing in custom web applications, AI integration, and modern software solutions.",
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
              We&apos;re a full-stack software engineering company passionate about building custom
              software solutions, integrating AI into businesses, and creating high-performance
              applications that drive real results.
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
                software engineering to businesses of all sizes. We believe that every business deserves
                custom software solutions that not only look great but perform exceptionally and solve
                real problems.
              </p>
              <p>
                Based in Utah and serving clients nationwide, we specialize in full-stack software
                development, AI integration, custom web applications, API development, cloud
                infrastructure, and modern software solutions. From startups to established enterprises,
                we partner with clients who value quality, performance, and innovation.
              </p>
              <p>
                What sets us apart is our expertise across the entire software development lifecycle.
                We build custom web applications with modern frameworks like Next.js and React, integrate
                AI capabilities into existing systems, design scalable APIs and databases, set up cloud
                infrastructure, and provide ongoing technical strategy. We don&apos;t use outdated
                templates or one-size-fits-all solutions – every project is custom-built to meet your
                unique needs.
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
                  Full-Stack Engineering
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We handle the complete software stack from frontend to backend, databases to cloud
                  infrastructure. Using modern technologies like Next.js, React, Node.js, and leading
                  cloud platforms, we build scalable, maintainable systems that grow with your business.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                  AI Integration Expertise
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We integrate cutting-edge AI capabilities into your existing systems and new
                  applications. From chatbots and natural language processing to custom machine learning
                  models and generative AI tools, we help you leverage AI to automate workflows and
                  enhance user experiences.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                  Custom Solutions
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  No templates, no shortcuts. Every project is custom-built to your specific needs.
                  We take time to understand your business, goals, and technical requirements, then
                  architect and build a solution that solves your unique challenges.
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
              While we&apos;re proud to call Utah home, we work with clients across the United States.
              Our remote-first approach means we can provide the same high-quality service whether
              you&apos;re local or across the country.
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
              Let&apos;s Work Together
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Ready to build something amazing? Get in touch and let&apos;s discuss your project.
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
