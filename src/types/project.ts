export interface Project {
  id: string
  title: string
  slug: string
  category: "landing-page" | "business-site" | "ecommerce" | "web-app"
  description: string
  image: string
  tags: string[]
  featured: boolean
}
