import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "cefabco",
    title: "Cefabco Fabrication",
    slug: "cefabco",
    category: "business-site",
    description: "Professional website for a custom fabrication company showcasing their metalworking expertise and portfolio.",
    image: "/images/portfolio/cefabco.jpg",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    featured: true,
  },
  {
    id: "fats-fishing",
    title: "Fat's Fishing",
    slug: "fats-fishing",
    category: "business-site",
    description: "Engaging website for a fishing guide service featuring trip information, booking details, and fishing reports.",
    image: "/images/portfolio/fats-fishing.jpg",
    tags: ["React", "Responsive Design", "Contact Forms"],
    featured: true,
  },
]
