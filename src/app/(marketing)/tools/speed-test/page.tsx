import type { Metadata } from "next"
import { SpeedTestTool } from "@/components/tools/speed-test-tool"

export const metadata: Metadata = {
  title: "Free Website Speed Test | Wide Open Development",
  description: "Test your website's performance for free. Get instant insights on loading speed, mobile optimization, and SEO. Discover how to make your website faster.",
}

export default function SpeedTestPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Free Website Speed Test
            </h1>
            <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400 mb-4">
              Is your website costing you customers? Find out in seconds.
            </p>
            <p className="text-fluid-base text-neutral-500 dark:text-neutral-500">
              A 1-second delay in page load time can reduce conversions by 7%. Test your site now.
            </p>
          </div>
        </div>
      </section>

      {/* Speed Test Tool */}
      <SpeedTestTool />

      {/* Why Speed Matters */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Why Website Speed Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-4">53%</div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  of mobile users abandon sites that take over 3 seconds to load
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-4">2x</div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Faster sites rank higher in Google search results
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-4">$2.6M</div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Average revenue loss per year for a 1-second delay (Amazon)
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
              Need Help Improving Your Speed?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              We specialize in building lightning-fast websites that convert visitors into customers.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
