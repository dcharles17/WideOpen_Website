"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300">
          {/* Image Placeholder */}
          <div className="relative h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <ExternalLink className="h-16 w-16 text-neutral-400 group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-xs font-medium text-neutral-900 dark:text-neutral-100 capitalize">
                {project.category.replace("-", " ")}
              </span>
            </div>
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                  Featured
                </span>
              </div>
            )}
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
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
