"use client"

import { SkillCategory } from "@/data/skills"
import Card from "@/components/ui/Card"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

interface SkillCardProps {
  category: SkillCategory
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card>
        <h3 className="font-semibold mb-4">
          {category.title}
        </h3>

        <ul className="space-y-2">
          {category.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
