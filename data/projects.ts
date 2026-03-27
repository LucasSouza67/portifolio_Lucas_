export interface Project{
  name: string;
  slug: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  longDescription?: string;
}

export const projects = [
  {
    name: "Sistema Financeiro",
    slug: "sistema-financeiro",
    description: "Controle de receitas e despesas com deshboard",
    longDescription:
      "Aplicação completa para gerenciamento financeiro...",
    tech: ["API Rest", "Node", "MySQL"],
    github: "",
    demo: ""
  },
  {
    name: "Deshboard Salárial",
    slug: "dashboard-de-analise-de-dados-com-python",
    description: "Dashboard interativo para análise salarial",
    longDescription:
      "Aplicação completa para análise de salários na área de Dados...",
    tech: ["Python", "Streamlit", "Plotly Express"],
    github: "https://github.com/LucasSouza67/Dashboard-de-analise-de-dados-com-Python",
    demo: "https://dashboard--dados-com-python.streamlit.app/"
  }
]
