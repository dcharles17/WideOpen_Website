import { ServiceHero } from "@/components/services/service-hero"
import { FeatureList } from "@/components/services/feature-list"
import { ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce Development | Wide Open Development",
  description: "Powerful online stores that drive sales with seamless shopping experiences. Custom e-commerce solutions with secure payments and inventory management.",
}

const features = [
  "Product catalog with unlimited products",
  "Secure payment processing (Stripe, PayPal, etc.)",
  "Inventory management and tracking",
  "Order management system",
  "Customer accounts and order history",
  "Shopping cart and checkout optimization",
  "Mobile-responsive design",
  "Product search and filtering",
  "Product variations (size, color, etc.)",
  "Discount codes and promotions",
  "Shipping calculator and options",
  "Tax calculation",
  "Email notifications for orders",
  "Admin dashboard for management",
  "Analytics and sales reporting",
  "SEO optimization for products",
]

const platforms = [
  {
    name: "Custom Development",
    description: "Fully custom e-commerce platform built with Next.js and modern tech",
    bestFor: "Unique requirements, high customization needs",
  },
  {
    name: "Shopify",
    description: "Popular hosted platform with extensive app ecosystem",
    bestFor: "Quick launch, easy management, proven reliability",
  },
  {
    name: "WooCommerce",
    description: "WordPress-based e-commerce with flexibility and plugins",
    bestFor: "Content-heavy sites, existing WordPress users",
  },
]

export default function ECommercePage() {
  return (
    <main>
      <ServiceHero
        title="E-Commerce Development"
        description="Powerful online stores that drive sales with seamless shopping experiences and secure payment processing."
        timeline="6-12 weeks"
      />

      <FeatureList title="E-Commerce Features" features={features} />

      {/* Platform Options */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Platform Options
            </h2>
            <div className="space-y-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                        {platform.name}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                        {platform.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        Best for: {platform.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Why Choose Our E-Commerce Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Conversion Optimized
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Every element is designed to maximize sales and reduce cart abandonment
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Secure & Reliable
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  PCI-compliant payment processing and secure hosting infrastructure
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Scalable
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Built to grow with your business from 10 to 10,000+ products
                </p>
              </div>
              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  Mobile-First
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Optimized for mobile shopping where most purchases happen today
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
              Ready to Start Selling Online?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let's build an e-commerce store that drives revenue and delights customers.
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
