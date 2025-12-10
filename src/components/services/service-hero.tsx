import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceHeroProps {
  title: string
  description: string
  timeline: string
}

export function ServiceHero({ title, description, timeline }: ServiceHeroProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
            Typical Timeline: {timeline}
          </div>
          <h1 className="text-fluid-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>
          <p className="text-fluid-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
