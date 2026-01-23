import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdExpandMore } from "react-icons/md";
import logo42 from "../assets/images/42.png";
import eGreenLogo from "../assets/images/egreen.png";
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
  SiTailwindcss,
  SiJest,
  SiVitest,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { TbSubtask } from "react-icons/tb";
import { GiLaserBurst } from "react-icons/gi";

const PRIMARY_JOBS = ["eGreen"];

// Logo configuration for different jobs
const JOB_LOGOS = {
  eGreen: {
    src: eGreenLogo,
    alt: "eGreen logo",
    className: "w-8 h-8",
    containerClassName: "w-8 h-8 rounded",
  },
  42: {
    src: logo42,
    alt: "42 logo",
    bg: "bg-white",
    className: "w-5 h-5",
    containerClassName: "w-6 h-6 rounded p-0.5",
  },
};

const skillsByDomain = {
  Languages: [
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      usedAt: ["42"],
    },
    { name: "C", icon: SiCplusplus, color: "#A8B9CC", usedAt: ["42"] },
    { name: "C++", icon: SiCplusplus, color: "#00599C", usedAt: ["42"] },
    { name: "Assembly", icon: FaCode, color: "#654FF0", usedAt: ["42"] },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      usedAt: ["42", "eGreen"],
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
      usedAt: ["42", "eGreen"],
    },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", usedAt: ["42", "eGreen"] },
  ],
  "Frameworks & Libraries": [
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
      usedAt: ["42", "eGreen"],
    },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E", usedAt: ["42"] },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      usedAt: ["42", "eGreen"],
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4",
      usedAt: ["eGreen"],
    },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: SiGit, color: "#F05032", usedAt: ["42", "eGreen"] },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      usedAt: ["42", "eGreen"],
    },
    { name: "Nginx", icon: SiNginx, color: "#009639", usedAt: ["42"] },
    {
      name: "CI/CD",
      icon: SiDocker,
      color: "#FCA311",
      usedAt: ["eGreen"],
    },
    { name: "Jest", icon: SiJest, color: "#C21325", usedAt: ["eGreen"] },
    { name: "Vitest", icon: SiVitest, color: "#6E9F18", usedAt: ["eGreen"] },
    { name: "ESLint", icon: SiEslint, color: "#4B32C3", usedAt: ["eGreen"] },
    {
      name: "Prettier",
      icon: SiPrettier,
      color: "#F7B93E",
      usedAt: ["eGreen"],
    },
  ],
  "Backend & APIs": [
    {
      name: "REST API",
      icon: TbApi,
      color: "#00D8FF",
      usedAt: ["42", "eGreen"],
    },
    { name: "GraphQL", icon: GrGraphQl, color: "#E10098", usedAt: ["42"] },
    { name: "MySQL", icon: DiMysql, color: "#4479A1", usedAt: ["42"] },
    { name: "HTTP Server", icon: FaServer, color: "#FF6B6B", usedAt: ["42"] },
  ],
  "System & Concepts": [
    {
      name: "Raycasting",
      icon: GiLaserBurst,
      color: "#FF6B35",
      usedAt: ["42"],
    },
    {
      name: "Multithreading",
      icon: TbSubtask,
      color: "#4ECDC4",
      usedAt: ["42"],
    },
    { name: "Unix/Shell", icon: FaServer, color: "#FFA62B", usedAt: ["42"] },
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
  },
  {
    id: 2,
    name: "Printf",
    period: "2019-2020",
    description:
      "Implémentation d'une version simplifiée de la fonction printf en C. Gestion des arguments variadiques et du formatage de chaînes avec les flags %cspdiuxX.",
    technologies: ["C"],
  },
  {
    id: 3,
    name: "get_next_line",
    period: "2020",
    description:
      "Développement d'une fonction capable de lire une ligne depuis un descripteur de fichier. Gestion de l'allocation mémoire et des variables statiques.",
    technologies: ["C"],
  },
  {
    id: 4,
    name: "push_swap",
    period: "2020-2021",
    description:
      "Algorithme de tri optimisé utilisant deux piles et un ensemble limité d'opérations. Implémentation de l'algorithme Turk pour minimiser le nombre de mouvements.",
    technologies: ["C"],
  },
  {
    id: 5,
    name: "Philosophers",
    period: "2021",
    description:
      "Simulation du problème classique des philosophes dinant. Utilisation de threads, mutex et sémaphores pour gérer la synchronisation et éviter les deadlocks.",
    technologies: ["C", "Multithreading"],
  },
  {
    id: 6,
    name: "Minishell",
    period: "Mars 2021 - Avril 2021",
    description:
      "Recréer un terminal en C, avec les commandes de base (cd, ls, pwd, etc.), gestion des pipes, redirections, signaux et parsing avancé.",
    technologies: ["C", "Unix/Shell"],
  },
  {
    id: 7,
    name: "C++ Modules",
    period: "2021-2022",
    description:
      "Série de modules C++ couvrant les concepts fondamentaux : classes, héritage, polymorphisme, templates, STL, exceptions, et design patterns orientés objet.",
    technologies: ["C++"],
  },
  {
    id: 8,
    name: "Cub3d",
    period: "2022",
    description:
      "Moteur de raycasting 3D inspiré de Wolfenstein 3D. Création d'une vue dynamique dans un labyrinthe 3D en utilisant la bibliothèque MiniLibX.",
    technologies: ["C", "Raycasting"],
  },
  {
    id: 9,
    name: "Webserv",
    period: "2022-2023",
    description:
      "Implémentation d'un serveur HTTP conforme aux RFCs 7230-7235. Gestion des requêtes GET, POST, DELETE, CGI, configuration type Nginx, et I/O non-bloquant avec select().",
    technologies: ["C++", "HTTP Server", "Nginx"],
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
  },
  {
    id: 11,
    name: "libasm",
    period: "2023",
    description:
      "Recréation de fonctions C de base en langage assembleur x86_64 (NASM). Compréhension approfondie de l'architecture processeur et des appels système.",
    technologies: ["Assembly"],
  },
  {
    id: 12,
    name: "Git",
    period: "Depuis 2019",
    description:
      "Tous les projets de l'ecole 42 sont a faire sur un depot git. Chez eGreen nous utilisons actuellement git (gitlab) pour le front et le back",
    technologies: [],
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Helper function to get logo config for a job
  const getLogoConfig = (jobName) => {
    return (
      JOB_LOGOS[jobName] || { src: "", alt: jobName, className: "w-6 h-6" }
    );
  };

  const renderJobLogo = (jobName) => {
    const config = getLogoConfig(jobName);
    return (
      <div
        className={`flex items-center justify-center ${config.bg} ${config.containerClassName}`}
      >
        <img src={config.src} alt={config.alt} className={config.className} />
      </div>
    );
  };

  // Helper function to check if a skill is used at a primary job
  const isPrimaryJobSkill = (usedAt) => {
    return usedAt?.some((job) => PRIMARY_JOBS.includes(job));
  };

  // Helper function to sort skills - primary job skills first
  const getSortedSkills = (skills) => {
    return [...skills].sort((a, b) => {
      const aIsPrimary = isPrimaryJobSkill(a.usedAt);
      const bIsPrimary = isPrimaryJobSkill(b.usedAt);
      if (aIsPrimary === bIsPrimary) return 0;
      return aIsPrimary ? -1 : 1;
    });
  };

  const normalizeSkillName = (name) => {
    const mapping = {
      "React.js": "React",
      "Node.js": "Node",
    };
    return mapping[name] || name;
  };

  const filteredProjects = selectedSkill
    ? projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase() === selectedSkill.toLowerCase() ||
            tech.toLowerCase() ===
              normalizeSkillName(selectedSkill).toLowerCase(),
        ),
      )
    : [];

  const handleSkillClick = (skillName) => {
    const isCurrentlySelected = selectedSkill === skillName;
    setSelectedSkill(isCurrentlySelected ? null : skillName);

    // Scroll to skills section when expanding a different skill
    if (!isCurrentlySelected) {
      setTimeout(() => {
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <section
      id="skills"
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="text-base md:text-lg font-medium text-text mb-6">
        {t("sections.skills")}
      </h2>

      {/* Skills by Domain */}
      <div className="space-y-6">
        {Object.entries(skillsByDomain).map(([domain, skills]) => {
          const domainTranslationMap = {
            Languages: "Languages",
            "Frameworks & Libraries": "FrameworksLibraries",
            "DevOps & Tools": "DevOpsTools",
            "Backend & APIs": "BackendAPIs",
            "System & Concepts": "SystemConcepts",
          };
          const translationKey = domainTranslationMap[domain];

          return (
            <div key={domain} className="space-y-3">
              <h3 className="text-xs md:text-sm font-medium text-text-muted uppercase tracking-wide">
                {t(`skills.domains.${translationKey}`)}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {getSortedSkills(skills).map((skill) => {
                  const Icon = skill.icon;
                  const isSelected = selectedSkill === skill.name;
                  const isPrimary = isPrimaryJobSkill(skill.usedAt);

                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      title={
                        isPrimary
                          ? `${t("skills.usedInJob")}: ${skill.usedAt
                              .filter((job) => PRIMARY_JOBS.includes(job))
                              .join(", ")}`
                          : undefined
                      }
                      className={`
                      flex items-center gap-2 rounded-md border px-2.5 py-1.5 md:px-3 text-xs md:text-sm
                      transition-all duration-300 cursor-pointer whitespace-nowrap group relative
                      ${
                        isSelected
                          ? "border-accent bg-surface-elevated text-text shadow-lg"
                          : isPrimary
                            ? "border-accent/50 bg-accent/5 text-text hover:border-accent hover:bg-accent/10 hover:shadow-md"
                            : "border-border bg-surface-elevated text-text-secondary hover:border-accent/50 hover:text-text hover:bg-surface-hover hover:shadow-md"
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
                      {isPrimary && (
                        <span className="text-accent text-xs font-semibold relative">
                          ★
                        </span>
                      )}
                      <MdExpandMore
                        className={`text-base md:text-lg shrink-0 transition-transform duration-300 ml-1 ${
                          isSelected ? "rotate-180" : "group-hover:opacity-70"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Expanded Content for this domain */}
              {selectedSkill &&
                skills.some((skill) => skill.name === selectedSkill) && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    {selectedSkill === "Git" ? (
                      <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                        <p className="text-sm md:text-base text-text font-medium">
                          {t("skills.gitUsedInEveryProject")}
                        </p>
                      </div>
                    ) : (
                      <>
                        {/* Job Usage Section */}
                        {selectedSkill &&
                          skillsByDomain[domain]
                            .find((s) => s.name === selectedSkill)
                            ?.usedAt?.some((job) =>
                              PRIMARY_JOBS.includes(job),
                            ) && (
                            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
                              <div className="flex items-center gap-2 flex-wrap mb-3">
                                <span className="text-sm md:text-base text-text font-medium">
                                  {selectedSkill} {t("skills.usedAt")}
                                </span>
                                {selectedSkill &&
                                  skillsByDomain[domain]
                                    .find((s) => s.name === selectedSkill)
                                    ?.usedAt?.filter((job) =>
                                      PRIMARY_JOBS.includes(job),
                                    )
                                    .map((place) => (
                                      <div
                                        key={place}
                                        className="flex items-center gap-2"
                                      >
                                        {renderJobLogo(place)}
                                        <span className="text-sm font-medium text-text">
                                          {place}
                                        </span>
                                      </div>
                                    ))}
                              </div>
                              <div className="text-sm text-text-secondary italic">
                                {t("skills.toMake")}{" "}
                                <span className="text-accent font-medium">
                                  {t("skills.jobDescriptionComingSoon")}
                                </span>
                              </div>
                            </div>
                          )}

                        {/* Projects Section */}
                        {filteredProjects.length > 0 && (
                          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h4 className="text-sm font-medium text-text">
                                {filteredProjects.length}
                                {filteredProjects.length === 1
                                  ? " project"
                                  : " projects"}{" "}
                                {t("skills.projectsFromSchool")}
                              </h4>
                              <div className="flex gap-2">
                                {renderJobLogo("42")}
                              </div>
                            </div>
                            <div className="space-y-3">
                              {filteredProjects.map((project) => (
                                <article
                                  key={project.id}
                                  className="rounded-md border border-border/50 bg-surface p-3 space-y-2 text-xs md:text-sm"
                                >
                                  <div>
                                    <h5 className="font-medium text-text">
                                      {project.name}
                                    </h5>
                                    <p className="text-text-muted text-xs">
                                      {project.period}
                                    </p>
                                  </div>
                                  <p className="text-text-secondary leading-relaxed">
                                    {project.description}
                                  </p>
                                  {project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1 pt-1">
                                      {project.technologies.map((tech) => (
                                        <span
                                          key={tech}
                                          className={`rounded px-1.5 py-0.5 text-xs border ${
                                            normalizeSkillName(
                                              selectedSkill,
                                            ).toLowerCase() ===
                                            tech.toLowerCase()
                                              ? "bg-accent/10 text-accent border-accent/50"
                                              : "bg-surface-elevated text-accent border-border/50"
                                          }`}
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </article>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
