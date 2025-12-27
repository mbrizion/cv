import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNestjs,
  SiCplusplus,
  SiNodedotjs,
  SiDocker,
  SiNginx,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { TbSubtask } from "react-icons/tb";
import { GiLaserBurst } from "react-icons/gi";

const skillsByDomain = {
  Languages: [
    { name: "C", icon: SiCplusplus, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Assembly", icon: FaCode, color: "#654FF0" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
  ],
  "Backend & APIs": [
    { name: "REST API", icon: TbApi, color: "#00D8FF" },
    { name: "GraphQL", icon: GrGraphQl, color: "#E10098" },
    { name: "MySQL", icon: DiMysql, color: "#4479A1" },
    { name: "HTTP Server", icon: FaServer, color: "#FF6B6B" },
  ],
  "System & Concepts": [
    { name: "Raycasting", icon: GiLaserBurst, color: "#FF6B35" },
    { name: "Multithreading", icon: TbSubtask, color: "#4ECDC4" },
    { name: "Unix/Shell", icon: FaServer, color: "#FFA62B" },
  ],
};

const projects = [
  {
    id: 1,
    name: "Libft",
    period: "2019",
    description:
      "Création d'une bibliothèque C personnalisée contenant des réimplémentations de fonctions standard C ainsi que des fonctions utilitaires supplémentaires. Fondation pour tous les futurs projets 42.",
    technologies: ["C"],
    rank: "Rank 0",
  },
  {
    id: 2,
    name: "Printf",
    period: "2019-2020",
    description:
      "Implémentation d'une version simplifiée de la fonction printf en C. Gestion des arguments variadiques et du formatage de chaînes avec les flags %cspdiuxX.",
    technologies: ["C"],
    rank: "Rank 1",
  },
  {
    id: 3,
    name: "get_next_line",
    period: "2020",
    description:
      "Développement d'une fonction capable de lire une ligne depuis un descripteur de fichier. Gestion de l'allocation mémoire et des variables statiques.",
    technologies: ["C"],
    rank: "Rank 1",
  },
  {
    id: 4,
    name: "push_swap",
    period: "2020-2021",
    description:
      "Algorithme de tri optimisé utilisant deux piles et un ensemble limité d'opérations. Implémentation de l'algorithme Turk pour minimiser le nombre de mouvements.",
    technologies: ["C"],
    rank: "Rank 2",
  },
  {
    id: 5,
    name: "Philosophers",
    period: "2021",
    description:
      "Simulation du problème classique des philosophes dinant. Utilisation de threads, mutex et sémaphores pour gérer la synchronisation et éviter les deadlocks.",
    technologies: ["C", "Multithreading"],
    rank: "Rank 3",
  },
  {
    id: 6,
    name: "Minishell",
    period: "Mars 2021 - Avril 2021",
    description:
      "Recréer un terminal en C, avec les commandes de base (cd, ls, pwd, etc.), gestion des pipes, redirections, signaux et parsing avancé.",
    technologies: ["C", "Unix/Shell"],
    rank: "Rank 3",
  },
  {
    id: 7,
    name: "C++ Modules",
    period: "2021-2022",
    description:
      "Série de modules C++ couvrant les concepts fondamentaux : classes, héritage, polymorphisme, templates, STL, exceptions, et design patterns orientés objet.",
    technologies: ["C++"],
    rank: "Rank 4",
  },
  {
    id: 8,
    name: "Cub3d",
    period: "2022",
    description:
      "Moteur de raycasting 3D inspiré de Wolfenstein 3D. Création d'une vue dynamique dans un labyrinthe 3D en utilisant la bibliothèque MiniLibX.",
    technologies: ["C", "Raycasting"],
    rank: "Rank 4",
  },
  {
    id: 9,
    name: "Webserv",
    period: "2022-2023",
    description:
      "Implémentation d'un serveur HTTP conforme aux RFCs 7230-7235. Gestion des requêtes GET, POST, DELETE, CGI, configuration type Nginx, et I/O non-bloquant avec select().",
    technologies: ["C++", "HTTP Server", "Nginx"],
    rank: "Rank 5",
  },
  {
    id: 10,
    name: "Transcendence",
    period: "Novembre 2022 - Janvier 2023",
    description:
      "Création d'une application web full-stack avec jeu Pong multijoueur en ligne. Système de comptes utilisateurs, chat en temps réel, matchmaking, et profils de joueurs.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "NestJS",
      "REST API",
      "GraphQL",
      "Node.js",
      "MySQL",
      "Docker",
    ],
    rank: "Rank 6",
  },
  {
    id: 11,
    name: "libasm",
    period: "2023",
    description:
      "Recréation de fonctions C de base en langage assembleur x86_64 (NASM). Compréhension approfondie de l'architecture processeur et des appels système.",
    technologies: ["Assembly"],
    rank: "Rank 5",
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Normalize skill names for matching
  const normalizeSkillName = (name) => {
    const mapping = {
      "React.js": "React",
      "Node.js": "Node",
    };
    return mapping[name] || name;
  };

  // Filter projects based on selected skill
  const filteredProjects = selectedSkill
    ? projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase() === selectedSkill.toLowerCase() ||
            tech.toLowerCase() ===
              normalizeSkillName(selectedSkill).toLowerCase()
        )
      )
    : [];

  const handleSkillClick = (skillName) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section
      id="skills"
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="mb-3 text-base md:text-lg font-medium text-text">
        Skills & Projects {selectedSkill && `- ${selectedSkill}`}
      </h2>

      {/* Skills by Domain */}
      <div className="space-y-2">
        {Object.entries(skillsByDomain).map(([domain, skills]) => (
          <div key={domain} className="space-y-3">
            <h3 className="text-xs md:text-sm font-medium text-text-muted uppercase tracking-wide">
              {domain}
            </h3>
            <ul className="flex flex-wrap gap-2 md:gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                const isSelected = selectedSkill === skill.name;

                return (
                  <li key={skill.name}>
                    <button
                      onClick={() => handleSkillClick(skill.name)}
                      className={`
                        flex items-center gap-2 rounded-md border px-2.5 py-1.5 md:px-3 text-xs md:text-sm
                        transition-all duration-200 cursor-pointer 
                        ${
                          isSelected
                            ? "border-accent bg-surface-elevated text-text shadow-lg scale-105"
                            : "border-border bg-surface-elevated text-text-secondary hover:border-accent/50 hover:text-text hover:bg-surface-hover"
                        }
                      `}
                      aria-pressed={isSelected}
                      aria-label={`Filter projects by ${skill.name}`}
                    >
                      <Icon
                        style={{ color: skill.color }}
                        className="text-base md:text-lg shrink-0"
                      />
                      <span>{skill.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      {selectedSkill && (
        <div className="space-y-4 mt-8 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h3 className="text-sm md:text-base font-medium text-text">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"} using{" "}
              {selectedSkill}
            </h3>
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs text-accent hover:text-accent-hover transition-colors"
              aria-label="Clear skill filter"
            >
              Clear filter
            </button>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-lg border border-border bg-surface-elevated p-4 space-y-2 hover:border-accent/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-medium text-text">
                        {project.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="text-accent">{project.rank}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md px-2 py-0.5 text-xs border ${
                          normalizeSkillName(selectedSkill).toLowerCase() ===
                          tech.toLowerCase()
                            ? "bg-accent/10 text-accent border-accent/50"
                            : "bg-surface text-accent border-border"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-muted italic">
              No projects found using {selectedSkill}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Skills;
