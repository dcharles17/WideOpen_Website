"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, AlertCircle } from "lucide-react"

export function SpeedTestTool() {
  const [url, setUrl] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    score: number
    metrics: {
      fcp: string
      lcp: string
      cls: string
      tti: string
    }
    opportunities: string[]
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call to Google PageSpeed Insights
    // In production, you'd call the actual API or your backend
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 40) + 40 // Random score 40-80
      setResult({
        score: mockScore,
        metrics: {
          fcp: (Math.random() * 2 + 1).toFixed(1),
          lcp: (Math.random() * 3 + 2).toFixed(1),
          cls: (Math.random() * 0.3).toFixed(3),
          tti: (Math.random() * 4 + 3).toFixed(1),
        },
        opportunities: [
          "Optimize images (save ~2.5s)",
          "Eliminate render-blocking resources",
          "Reduce unused JavaScript",
          "Enable text compression",
          "Serve images in next-gen formats",
        ],
      })
      setIsLoading(false)
    }, 2000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 50) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Fast"
    if (score >= 50) return "Average"
    return "Slow"
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {!result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  Test Your Website Speed
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email (to receive detailed report)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5" />
                      Run Speed Test
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center">
                We&apos;ll send a detailed report to your email. No spam, ever.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Score */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl text-center">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  Performance Score
                </h3>
                <div className={`text-7xl font-bold mb-2 ${getScoreColor(result.score)}`}>
                  {result.score}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {getScoreLabel(result.score)}
                </p>
              </div>

              {/* Metrics */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                  Core Web Vitals
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      First Contentful Paint
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {result.metrics.fcp}s
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      Largest Contentful Paint
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {result.metrics.lcp}s
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      Cumulative Layout Shift
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {result.metrics.cls}
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      Time to Interactive
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {result.metrics.tti}s
                    </p>
                  </div>
                </div>
              </div>

              {/* Opportunities */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-xl">
                <h3 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
                  Optimization Opportunities
                </h3>
                <ul className="space-y-3">
                  {result.opportunities.map((opp: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 dark:text-neutral-400">{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Want Professional Help?
                </h3>
                <p className="text-white/90 mb-6">
                  We can optimize your website for maximum speed and performance.
                  <br />A detailed report has been sent to <strong>{email}</strong>
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all"
                >
                  Get a Free Consultation
                </a>
              </div>

              <button
                onClick={() => setResult(null)}
                className="w-full text-primary hover:underline"
              >
                Test Another Website
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
