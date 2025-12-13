import { ServiceHero } from "@/components/services/service-hero"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Maintenance & Hosting | Wide Open Development",
  description: "Reliable hosting and ongoing support to keep your website running smoothly. Affordable monthly plans with security updates, backups, and priority support.",
}

const plans = [
  {
    name: "Essential",
    price: "$149",
    period: "/month",
    description: "Perfect for small websites and landing pages",
    features: [
      "Vercel/Cloudflare hosting",
      "SSL certificate included",
      "Weekly security updates",
      "Monthly backups",
      "Basic performance monitoring",
      "Email support (48hr response)",
      "1 hour content updates/month",
      "99.9% uptime guarantee",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "Everything in Essential",
      "Daily backups",
      "Advanced security monitoring",
      "Priority email support (24hr response)",
      "3 hours content updates/month",
      "Monthly analytics reports",
      "Quarterly performance audits",
      "Plugin/dependency updates",
      "Emergency bug fixes",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "/month",
    description: "For mission-critical websites",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Real-time uptime monitoring",
      "Advanced performance optimization",
      "10 hours updates/month",
      "24/7 emergency support",
      "Custom SLA",
      "Monthly strategy calls",
      "Priority feature development",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

const addOns = [
  { name: "Additional content hours", price: "$100/hour" },
  { name: "Emergency support", price: "$150/hour" },
  { name: "Major feature development", price: "Custom quote" },
  { name: "SEO optimization service", price: "Custom quote" },
  { name: "Performance audit", price: "$500" },
]

export default function MaintenancePage() {
  return (
    <main>
      <ServiceHero
        title="Website Maintenance & Hosting"
        description="Reliable hosting and ongoing support to keep your website running smoothly, secure, and up-to-date."
        timeline="Ongoing"
      />

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-4 text-center text-neutral-900 dark:text-neutral-100">
              Choose Your Plan
            </h2>
            <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
              Transparent pricing with no hidden fees
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 ${
                    plan.popular
                      ? "border-primary shadow-xl scale-105"
                      : "border-neutral-200 dark:border-neutral-800"
                  } bg-white dark:bg-neutral-900`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                      {plan.price}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Add-On Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                    {addon.name}
                  </span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              What&apos;s Included in Every Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Security Updates
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Regular updates to frameworks, libraries, and dependencies to keep your site secure
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Performance Monitoring
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Track uptime, load times, and Core Web Vitals to ensure optimal performance
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Backups
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Regular backups of your site and database with easy restoration if needed
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Technical Support
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Email support for technical issues, questions, and guidance
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
              Ready to Get Started?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Choose a plan and let us take care of your website so you can focus on your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Choose Your Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
