"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4">
          Desenvolvedor Full Stack
        </h2>

        <p className="text-lg text-slate-300 mb-6">
          React • Node.js • APIs REST
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition">
            Ver Projetos
          </a>
          <a href="#contact" className="border border-slate-400 px-6 py-3 rounded-lg hover:bg-slate-800 transition">
            Contato
          </a>
        </div>
      </div>
    </section>
  )
}
