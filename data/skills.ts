export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: [ "Python",  "Node.js", "Express", "API REST"]
  },
  {
    title: "Banco de Dados",
    skills: ["MySQL", "SQL Server", "MongoDB"]
  },
  {
    title: "Ferramentas",
    skills: ["Git", "Postman", "Deploy"]
  }
]
