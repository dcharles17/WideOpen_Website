"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { ProjectFilter } from "./project-filter"
import { projects } from "@/lib/data/portfolio"

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <ProjectFilter onFilterChange={setActiveCategory} />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </>
  )
}
