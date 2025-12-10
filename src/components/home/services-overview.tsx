"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ServiceCard } from "@/components/services/service-card"
import { services } from "@/lib/data/services"

export function ServicesOverview() {
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
            Services We Offer
          </h2>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400">
            From simple landing pages to complex web applications, we deliver modern solutions
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
