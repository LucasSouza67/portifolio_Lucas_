import { skillCategories } from "@/data/skills"
import SkillCard from "./SkillCard"

export default function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
