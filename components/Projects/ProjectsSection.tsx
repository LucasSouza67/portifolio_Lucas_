import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
