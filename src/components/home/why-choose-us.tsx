"use client"

import { motion } from "framer-motion"
import { Zap, Heart, TrendingUp, Shield, Users, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Modern Technology",
    description: "We use the latest frameworks like Next.js and React to build fast, scalable websites.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "No templates, no shortcuts. Every project is built specifically for your business.",
  },
  {
    icon: TrendingUp,
    title: "Performance Obsessed",
    description: "Lightning-fast load times and 95+ Lighthouse scores on every site we deliver.",
  },
  {
    icon: Heart,
    title: "Utah-Based",
    description: "Local to Utah, serving businesses nationwide with personal attention.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Clear timelines, regular updates, and direct access to your developer.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "We're here after launch with maintenance, updates, and technical support.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-fluid-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Why Choose Wide Open Development
          </h2>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400">
            We&apos;re not just developers – we&apos;re partners in your success
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95+</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Lighthouse Score</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">&lt;2s</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Load Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Mobile Responsive</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
