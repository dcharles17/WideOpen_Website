import { ServiceCard } from "@/components/services/service-card"
import { services } from "@/lib/data/services"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services | Wide Open Development",
  description: "Comprehensive web development services including landing pages, business websites, e-commerce, web applications, and ongoing maintenance. Based in Utah, serving nationwide.",
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Web Development Services
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400 mb-8">
              From simple landing pages to complex web applications, we deliver modern solutions
              tailored to your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-8 text-center text-neutral-900 dark:text-neutral-100">
              What&apos;s Included in Every Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Modern Technology
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We use the latest frameworks like Next.js, React, and Tailwind CSS to build fast,
                  scalable websites.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Mobile-First Design
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Every site is built with mobile users in mind, ensuring perfect experiences on all
                  devices.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  SEO Optimization
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Built-in SEO best practices to help your site rank well in search engines from day
                  one.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Performance Focused
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Lightning-fast load times with 95+ Lighthouse scores on every project we deliver.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Security First
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  SSL certificates, secure hosting, and best practices to keep your site and users
                  safe.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Ongoing Support
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We&apos;re here after launch with maintenance packages and technical support when you
                  need it.
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let&apos;s discuss your project and find the perfect solution for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Request a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
