"use client"

import { useEffect, useState } from "react"

const sections = ["about", "skills", "projects", "contact"]

export default function Navbar() {

  const [active, setActive] = useState("about")

  useEffect(() => {

    const handleScroll = () => {

      sections.forEach((section) => {

        const el = document.getElementById(section)

        if (el) {
          const rect = el.getBoundingClientRect()

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section)
          }
        }

      })

    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">

        <h1 className="font-bold text-xl">Lucas Souza</h1>

        <ul className="flex gap-6">

          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={
                  active === section
                    ? "text-indigo-400"
                    : "text-slate-300"
                }
              >
                {section}
              </a>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  )
}
