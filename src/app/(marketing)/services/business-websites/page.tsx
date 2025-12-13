import { ServiceHero } from "@/components/services/service-hero"
import { FeatureList } from "@/components/services/feature-list"
import { ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Website Development | Wide Open Development",
  description: "Professional multi-page websites that establish your online presence and credibility. Custom design, CMS integration, and mobile-responsive.",
}

const features = [
  "Custom design tailored to your brand identity",
  "5-20 pages of content (Home, About, Services, Contact, etc.)",
  "Content management system (CMS) for easy updates",
  "Contact forms with spam protection",
  "Blog integration for content marketing",
  "SEO optimization for better search rankings",
  "Mobile-responsive across all devices",
  "Fast loading speeds and performance",
  "SSL certificate and secure hosting",
  "Google Analytics integration",
  "Social media integration",
  "Image optimization and galleries",
  "Custom animations and interactions",
  "Accessibility compliant (WCAG)",
]

const idealFor = [
  "Small to medium-sized businesses",
  "Professional services (lawyers, doctors, consultants)",
  "Local businesses (restaurants, shops, services)",
  "Non-profits and organizations",
  "Real estate agencies",
  "Creative professionals and agencies",
]

export default function BusinessWebsitesPage() {
  return (
    <main>
      <ServiceHero
        title="Business Website Development"
        description="Professional multi-page websites that establish your online presence and build credibility with your customers."
        timeline="3-6 weeks"
      />

      <FeatureList title="What's Included" features={features} />

      {/* Ideal For Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Pages */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Common Pages We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Home Page
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Engaging hero section, value proposition, services overview, and clear CTAs
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  About Page
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Company story, team members, values, and what makes you unique
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Services/Products
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Detailed pages for each service or product category you offer
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Contact Page
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Contact form, location, hours, phone, email, and map integration
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Blog/News
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Content marketing platform for articles, updates, and SEO
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Portfolio/Gallery
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Showcase your work, projects, or products with beautiful galleries
                </p>
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
              Ready to Build Your Business Website?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let&apos;s create a professional online presence that grows your business.
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
