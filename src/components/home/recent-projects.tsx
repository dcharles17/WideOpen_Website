"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data/portfolio"

export function RecentProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

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
            Recent Projects
          </h2>
          <p className="text-fluid-lg text-neutral-600 dark:text-neutral-400">
            See how we've helped businesses like yours succeed online
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ExternalLink className="h-12 w-12 text-neutral-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-xs font-medium text-neutral-900 dark:text-neutral-100 capitalize">
                        {project.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project */}
                    <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
