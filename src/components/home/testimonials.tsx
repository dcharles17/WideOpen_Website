"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"

export function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-fluid-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            What Our Clients Say
          </h2>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {testimonial.name}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-neutral-600 dark:text-neutral-400">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-neutral-600 dark:text-neutral-400">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">5★</p>
            <p className="text-neutral-600 dark:text-neutral-400">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-neutral-600 dark:text-neutral-400">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
