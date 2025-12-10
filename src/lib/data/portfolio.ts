import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "modern-saas-landing",
    title: "Modern SaaS Landing Page",
    slug: "modern-saas-landing",
    category: "landing-page",
    description: "High-converting landing page for a SaaS startup with animated interactions and lead capture forms.",
    image: "/images/portfolio/saas-landing.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "local-restaurant-site",
    title: "Local Restaurant Website",
    slug: "local-restaurant-site",
    category: "business-site",
    description: "Beautiful multi-page website for a Utah-based restaurant with online menu and reservation system.",
    image: "/images/portfolio/restaurant.jpg",
    tags: ["React", "CMS", "Mobile-First"],
    featured: true,
  },
  {
    id: "outdoor-gear-shop",
    title: "Outdoor Gear E-Commerce",
    slug: "outdoor-gear-shop",
    category: "ecommerce",
    description: "Full-featured online store for outdoor gear with 500+ products, secure checkout, and inventory management.",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["Shopify", "Payment Integration", "SEO"],
    featured: true,
  },
  {
    id: "project-management-app",
    title: "Project Management Dashboard",
    slug: "project-management-app",
    category: "web-app",
    description: "Custom web application for team collaboration with real-time updates and task management.",
    image: "/images/portfolio/web-app.jpg",
    tags: ["React", "Node.js", "Real-time"],
    featured: false,
  },
]
