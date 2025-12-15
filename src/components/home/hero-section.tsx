"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <span>🚀</span>
              <span>Full-Stack Software Engineering & AI Solutions</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-fluid-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Custom Software Solutions
            </span>
            <br />
            <span className="text-neutral-900 dark:text-neutral-100">
              That Drive Your Business Forward
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto"
          >
            We build custom web applications, integrate AI into existing systems, and create scalable
            software solutions using cutting-edge technology. From websites to full-stack applications
            and machine learning models, we bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-neutral-200 dark:border-neutral-800 max-w-md mx-auto"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              Ready to get started? Give us a call
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
