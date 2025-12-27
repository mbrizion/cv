const projects = [
  {
    id: 1,
    name: "ft_transcendence",
    period: "Novembre 2022 - Janvier 2023",
    description:
      "Création d'un site web avec la possibilité de jouer au jeu Pong. Les utilisateurs peuvent créer un compte, ajouter des amis, parler dans un chat, faire des parties de Pong, consulter le profil d'autres joueurs, etc.",
    technologies: ["React", "TypeScript", "NestJS", "REST API"],
  },
  {
    id: 2,
    name: "ft_containers",
    period: "Septembre 2022 - Novembre 2022",
    description:
      "Recréer en C++ les classes conteneurs Vector, Stack et Map de la STL. Utilisation de tableaux dynamiques pour Vector et Stack et d'un red-black tree pour Map.",
    technologies: ["C++", "Template Functions", "Red-Black Tree"],
  },
  {
    id: 3,
    name: "minishell",
    period: "Mars 2021 - Avril 2021",
    description:
      "Recréer un terminal en C, avec les commandes de base (ex : cd, ls, pwd, etc.), la possibilité d'utiliser des pipes, des redirections, des points-virgules, etc.",
    technologies: ["C", "Signal Handling", "Process Management"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="mb-4 md:mb-6 text-base md:text-lg font-medium text-text">
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.id} className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-medium text-text">
                {project.name}
              </h3>
              <p className="text-xs md:text-sm text-text-muted">
                {project.period}
              </p>
            </div>

            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface-elevated px-2 md:px-2.5 py-1 text-xs text-accent border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
