import logo42 from "../../assets/images/42.png";
import eGreenLogo from "../../assets/images/egreen.png";
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
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { TbSubtask } from "react-icons/tb";
import { GiLaserBurst } from "react-icons/gi";

export const PRIMARY_JOBS = ["eGreen"];

export const JOB_LOGOS = {
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

export const skillsByDomain = {
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
    { name: "Vite", icon: SiVite, color: "#646CFF", usedAt: ["eGreen"] },
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

export const projects = [
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
