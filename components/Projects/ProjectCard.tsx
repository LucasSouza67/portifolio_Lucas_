"use client"

import { Project } from "@/data/projects"
import Card from "@/components/ui/Card"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import Link from "next/link"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
     <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card>
        <h3 className="text-xl font-semibold mb-2">
          {project.name}
        </h3>

        <p className="text-slate-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-slate-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href={`/projects/${project.slug}`}>
            Confira a Aplicação
          </Link>

          <a href={project.github} target="_blank">
            GitHub
          </a>
        </div>
      </Card>
    </motion.div>
  )
}
