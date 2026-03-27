import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(
    (p) => p.slug === params.slug
  )

  if (!project) return notFound()

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">
        {project.name}
      </h1>

      <p className="text-slate-300 mb-6">
        {project.longDescription || project.description}
      </p>

      <div className="flex gap-3 mb-8">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-slate-700 px-3 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        <a href={project.github} target="_blank">
          GitHub
        </a>

        {project.demo && (
          <a href={project.demo} target="_blank">
            Demo
          </a>
        )}
      </div>
    </main>
  )
}

export function generateMetadata({ params }: PageProps) {
  const project = projects.find(
    (p) => p.slug === params.slug
  )

  return {
    title: project?.name
  }
}
