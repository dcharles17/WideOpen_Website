import { ServiceHero } from "@/components/services/service-hero"
import { FeatureList } from "@/components/services/feature-list"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landing Page Development | Wide Open Development",
  description: "High-converting landing pages designed to capture leads and drive action. Fast, mobile-responsive, and optimized for SEO.",
}

const features = [
  "Mobile-responsive design that looks great on all devices",
  "Fast loading speeds for better user experience and SEO",
  "Lead capture forms with validation and spam protection",
  "SEO optimization with meta tags and structured data",
  "Analytics integration (Google Analytics, etc.)",
  "Clear call-to-action buttons strategically placed",
  "Custom design tailored to your brand",
  "A/B testing ready for optimization",
  "Social media integration and sharing",
  "Contact form with email notifications",
  "Scroll animations and micro-interactions",
  "Performance optimization (95+ Lighthouse score)",
]

const idealFor = [
  "Product launches and new service announcements",
  "Lead generation campaigns",
  "Event registrations and webinar signups",
  "App downloads and software trials",
  "E-book and resource downloads",
  "Email list building",
]

export default function LandingPagesPage() {
  return (
    <main>
      <ServiceHero
        title="Landing Page Development"
        description="High-converting single-page websites designed to capture leads and drive action. Perfect for campaigns, product launches, and lead generation."
        timeline="1-2 weeks"
      />

      <FeatureList title="What's Included" features={features} />

      {/* Ideal For Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Ideal For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Built with Modern Technology
            </h2>
            <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400 mb-8">
              We use cutting-edge frameworks to ensure your landing page is fast, secure, and
              scalable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Ready to Launch Your Landing Page?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Get a free quote and let's discuss how we can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Request Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
