import { projects } from "@/data/projects"

export default function Projects(){
    return(
        <section className="py-20" id="projects">
            <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10">Projetos</h2>

            <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                    <div key={project.name} className="card">
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
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Confira a Aplicação</a>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    </section>
    )
}