"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "landing-page", label: "Landing Pages" },
  { id: "business-site", label: "Business Sites" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "web-app", label: "Web Apps" },
]

interface ProjectFilterProps {
  onFilterChange: (category: string) => void
}

export function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onFilterChange(categoryId)
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            activeCategory === category.id
              ? "bg-primary text-white shadow-lg"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
