"use client"

import { motion } from "framer-motion"
import { MessageSquare, Palette, Code2, Rocket, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We discuss your goals, target audience, and project requirements to create a clear roadmap.",
  },
  {
    icon: Palette,
    title: "Design & Prototype",
    description: "We craft beautiful, user-friendly designs and get your approval before development begins.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Our developers bring the design to life with clean, modern code and regular progress updates.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Review",
    description: "Rigorous testing across devices and browsers ensures everything works perfectly.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We launch your site and provide ongoing support to ensure continued success.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
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
            Our Process
          </h2>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400">
            A proven approach that delivers exceptional results every time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8 pb-12"
              >
                {/* Timeline line */}
                {!isLast && (
                  <div className="absolute left-[22px] top-[56px] w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
                )}

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {step.title}
                      </h3>
                      <span className="text-sm font-medium text-primary">
                        Step {index + 1}
                      </span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
