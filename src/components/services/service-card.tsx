"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Layout,
  Building2,
  ShoppingCart,
  Code,
  Shield,
  RefreshCw,
  Brain,
  Cpu,
  Sparkles,
  BarChart,
  Server,
  Database,
  Cloud,
  GitBranch,
  Activity,
  Target,
  Search,
  BookOpen,
  Monitor
} from "lucide-react"
import { Service } from "@/types/service"

const iconMap = {
  layout: Layout,
  building: Building2,
  "shopping-cart": ShoppingCart,
  code: Code,
  shield: Shield,
  "refresh-cw": RefreshCw,
  brain: Brain,
  cpu: Cpu,
  sparkles: Sparkles,
  "bar-chart": BarChart,
  server: Server,
  database: Database,
  cloud: Cloud,
  "git-branch": GitBranch,
  activity: Activity,
  target: Target,
  search: Search,
  "book-open": BookOpen,
  monitor: Monitor,
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Layout

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={service.href}>
        <div className="group h-full p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
          {/* Icon */}
          <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Timeline */}
          <div className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
            Timeline: {service.timeline}
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
