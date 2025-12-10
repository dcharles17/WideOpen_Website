"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-fluid-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Something Amazing?
          </h2>

          <p className="text-fluid-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Get a free quote and see how we can help your
            business grow online.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">{SITE_CONFIG.email}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
    </section>
  )
}
