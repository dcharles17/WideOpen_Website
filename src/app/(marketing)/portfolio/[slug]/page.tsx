import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react"
import { projects } from "@/lib/data/portfolio"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio | Wide Open Development`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      {/* Back Button */}
      <section className="py-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Project Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium capitalize">
                {project.category.replace("-", " ")}
              </span>
            </div>
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              {project.title}
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
              <ExternalLink className="h-24 w-24 text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problem */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                The Challenge
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                This project required a modern solution that could handle high traffic, provide
                excellent user experience, and integrate with existing systems.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                Our Solution
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                We built a custom solution using the latest technologies, focusing on performance,
                scalability, and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Mobile-responsive design",
                "Fast loading speeds (95+ Lighthouse score)",
                "SEO optimized structure",
                "Modern, clean interface",
                "Secure and reliable",
                "Easy content management",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-12 text-neutral-900 dark:text-neutral-100">
              Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Lighthouse Score
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Load Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Mobile Optimized
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Want Similar Results?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let&apos;s discuss your project and create a custom solution for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
