import logo42 from "../../assets/images/42.png";
import eGreenLogo from "../../assets/images/egreen.png";
import dled from "../../assets/images/dled.png";
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
  SiBiome,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { TbSubtask } from "react-icons/tb";
import { GiLaserBurst } from "react-icons/gi";

export const PRIMARY_JOBS = ["eGreen", "dled"];

export const JOB_LOGOS = {
  eGreen: {
    src: eGreenLogo,
    alt: "eGreen logo",
    className: "w-8 h-8",
    containerClassName: "w-8 h-8 rounded",
  },
  dled: {
    src: dled,
    alt: "Delaine & D'Argile logo",
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
    {
      name: "C",
      icon: SiCplusplus,
      color: "#A8B9CC",
      usedAt: ["42"],
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#00599C",
      usedAt: ["42"],
    },
    {
      name: "Assembly",
      icon: FaCode,
      color: "#654FF0",
      usedAt: ["42"],
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      usedAt: ["42", "eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.javascript",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.javascript",
      },
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
      usedAt: ["42", "eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.html5",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.html5",
      },
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "#1572B6",
      usedAt: ["42", "eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.css3",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.css3",
      },
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
      usedAt: ["42", "eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.react",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.react",
      },
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "#E0234E",
      usedAt: ["42"],
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#68A063",
      usedAt: ["42"],
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4",
      usedAt: ["eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.tailwind",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.tailwind",
      },
    },
  ],
  "DevOps & Tools": [
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
      usedAt: ["42", "eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.git",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.git",
      },
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      usedAt: ["42", "eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.docker",
      },
    },
    {
      name: "Nginx",
      icon: SiNginx,
      color: "#009900",
      usedAt: ["42"],
    },
    {
      name: "CI/CD",
      icon: SiDocker,
      color: "#FCA311",
      usedAt: ["eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.cicd",
      },
    },
    {
      name: "Jest",
      icon: SiJest,
      color: "#C21325",
      usedAt: ["eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.jest",
      },
    },
    {
      name: "Vitest",
      icon: SiVitest,
      color: "#FCC72B",
      usedAt: ["eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.vitest",
      },
    },
    {
      name: "Biome",
      icon: SiBiome,
      color: "#3B82F6",
      usedAt: ["eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.biome",
      },
    },
    {
      name: "Vite",
      icon: SiVite,
      color: "#646CFF",
      usedAt: ["eGreen", "Delaine & D’Argile"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.vite",
        "Delaine & D’Argile": "skills.jobDescriptions.dled.vite",
      },
    },
  ],
  "Backend & APIs": [
    {
      name: "REST API",
      icon: TbApi,
      color: "#00D8FF",
      usedAt: ["42", "eGreen"],
      jobDescriptions: {
        eGreen: "skills.jobDescriptions.eGreen.restApi",
      },
    },
    {
      name: "GraphQL",
      icon: GrGraphQl,
      color: "#E10098",
      usedAt: ["42"],
    },
    {
      name: "MySQL",
      icon: DiMysql,
      color: "#00758F",
      usedAt: ["42"],
    },
    {
      name: "HTTP Server",
      icon: FaServer,
      color: "#FF6B6B",
      usedAt: ["42"],
    },
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
    {
      name: "Unix/Shell",
      icon: FaServer,
      color: "#FFA62B",
      usedAt: ["42"],
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Libft",
    period: "2019",
    descriptionKey: "skills.projects.libft.description",
    technologies: ["C"],
  },
  {
    id: 2,
    name: "Printf",
    period: "2019-2020",
    descriptionKey: "skills.projects.printf.description",
    technologies: ["C"],
  },
  {
    id: 3,
    name: "get_next_line",
    period: "2020",
    descriptionKey: "skills.projects.getNextLine.description",
    technologies: ["C"],
  },
  {
    id: 4,
    name: "push_swap",
    period: "2020-2021",
    descriptionKey: "skills.projects.pushSwap.description",
    technologies: ["C"],
  },
  {
    id: 5,
    name: "Philosophers",
    period: "2021",
    descriptionKey: "skills.projects.philosophers.description",
    technologies: ["C", "Multithreading"],
  },
  {
    id: 6,
    name: "Minishell",
    period: "Mars 2021 - Avril 2021",
    descriptionKey: "skills.projects.minishell.description",
    technologies: ["C", "Unix/Shell"],
  },
  {
    id: 7,
    name: "C++ Modules",
    period: "2021-2022",
    descriptionKey: "skills.projects.cppModules.description",
    technologies: ["C++"],
  },
  {
    id: 8,
    name: "Cub3d",
    period: "2022",
    descriptionKey: "skills.projects.cub3d.description",
    technologies: ["C", "Raycasting"],
  },
  {
    id: 9,
    name: "Webserv",
    period: "2022-2023",
    descriptionKey: "skills.projects.webserv.description",
    technologies: ["C++", "HTTP Server", "Nginx"],
  },
  {
    id: 10,
    name: "Transcendence",
    period: "Novembre 2022 - Janvier 2023",
    descriptionKey: "skills.projects.transcendence.description",
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
    descriptionKey: "skills.projects.libasm.description",
    technologies: ["Assembly"],
  },
  {
    id: 12,
    name: "Git",
    period: "Depuis 2019",
    descriptionKey: "skills.projects.git.description",
    technologies: [],
  },
];
