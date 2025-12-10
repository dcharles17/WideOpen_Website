import { ServiceHero } from "@/components/services/service-hero"
import { FeatureList } from "@/components/services/feature-list"
import { ArrowRight, Code } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Application Development | Wide Open Development",
  description: "Custom web apps built to solve your unique business challenges. Full-stack development with modern frameworks and scalable architecture.",
}

const features = [
  "Custom functionality tailored to your needs",
  "User authentication and authorization",
  "Database design and integration",
  "RESTful API development",
  "Real-time features (live updates, chat, notifications)",
  "Admin dashboard and management",
  "User role management",
  "Data visualization and reporting",
  "Third-party integrations (payment, CRM, etc.)",
  "Automated workflows and processes",
  "File upload and management",
  "Search and filtering",
  "Mobile-responsive interface",
  "Performance optimization",
  "Security best practices",
  "Scalable architecture",
]

const examples = [
  {
    title: "Project Management Tools",
    description: "Task tracking, team collaboration, time tracking, and reporting",
  },
  {
    title: "Customer Portals",
    description: "Self-service platforms for account management and support",
  },
  {
    title: "Booking Systems",
    description: "Appointment scheduling, calendar management, and notifications",
  },
  {
    title: "CRM Systems",
    description: "Customer relationship management, sales tracking, and analytics",
  },
  {
    title: "Internal Tools",
    description: "Custom business tools for inventory, operations, or reporting",
  },
  {
    title: "SaaS Applications",
    description: "Subscription-based software with multi-tenancy",
  },
]

export default function WebApplicationsPage() {
  return (
    <main>
      <ServiceHero
        title="Web Application Development"
        description="Custom web apps built to solve your unique business challenges and streamline your workflows."
        timeline="8+ weeks"
      />

      <FeatureList title="Application Features" features={features} />

      {/* Examples */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Types of Applications We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {example.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                  Frontend
                </h3>
                <div className="space-y-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                  Backend
                </h3>
                <div className="space-y-2">
                  {["Node.js", "PostgreSQL", "Prisma", "API Routes"].map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                  Infrastructure
                </h3>
                <div className="space-y-2">
                  {["Vercel", "AWS", "Authentication", "Real-time"].map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-fluid-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100">
              Our Development Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Discovery & Requirements",
                  description:
                    "We dive deep into your business needs, user requirements, and technical constraints",
                },
                {
                  step: "2",
                  title: "Architecture & Planning",
                  description:
                    "Design the database schema, API structure, and system architecture",
                },
                {
                  step: "3",
                  title: "UI/UX Design",
                  description: "Create user-friendly interfaces that make complex tasks simple",
                },
                {
                  step: "4",
                  title: "Development",
                  description:
                    "Build in sprints with regular demos and feedback loops",
                },
                {
                  step: "5",
                  title: "Testing & QA",
                  description:
                    "Rigorous testing including unit, integration, and user acceptance testing",
                },
                {
                  step: "6",
                  title: "Deployment & Support",
                  description: "Launch to production with monitoring and ongoing support",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-fluid-3xl font-bold mb-4 text-white">
              Ready to Build Your Web App?
            </h2>
            <p className="text-fluid-lg text-white/90 mb-8">
              Let's discuss your project and create a custom solution that fits your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-xl"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
