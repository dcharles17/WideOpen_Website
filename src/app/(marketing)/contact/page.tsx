import { QuoteForm } from "@/components/forms/quote-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Wide Open Development",
  description: "Get in touch with Wide Open Development for a free quote. We're based in Utah and serve businesses nationwide.",
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Let&apos;s Build Something Amazing
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400">
              Get a free quote for your project. We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                  Get in Touch
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Have questions? We&apos;re here to help. Reach out via phone, email, or the form.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      Phone
                    </h3>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      Location
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {SITE_CONFIG.location}
                      <br />
                      <span className="text-sm">Serving clients nationwide</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      Response Time
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      24-48 hours
                      <br />
                      <span className="text-sm">Monday - Friday</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
                  Request a Free Quote
                </h2>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  We Review
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We carefully review your project requirements and goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  We Respond
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We&apos;ll reach out within 24-48 hours with questions and next steps
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  We Quote
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We prepare a detailed proposal and quote tailored to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
