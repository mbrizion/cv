import { getSkillsUsedInJobs } from "./pdfExport";

// Collect CV data from components
export const useCVData = () => {
  const cvData = {
    name: "Maxime Brizion",
    email: "br.maxime@protonmail.com",
    linkedIn: "linkedin.com/in/maxime-brz",
    presentation:
      "Développeur logiciel avec une passion pour la création de solutions numériques innovantes. Après ma formation à 42, j'ai acquis une expérience solide dans le développement full-stack. Aujourd'hui en tant que Ingénieur de recherche chez eGreen, je travaille sur la conception et la mise en œuvre de plateformes durables.",
    experiences: [
      {
        id: 1,
        title: "Ingénieur de recherche en développement logiciel",
        company: "eGreen",
        location: "Paris",
        period: "Sept. 2023 - Présent",
        description:
          "Conception d'une plateforme de suivi de consommation pour entreprises.",
        achievements: [
          "Création d'un dashboard et ses widgets",
          "Drive pour héberger ses fichiers",
          "Export/Import de données de consommation",
          "Gestion de données liées au patrimoine immobilier d'un client",
        ],
      },
    ],
    education: [
      {
        id: 1,
        degree: "Développement informatique",
        school: "42 Paris",
        location: "Paris",
        period: "Sept. 2019 - Juin 2023",
        description:
          "Intensive software development curriculum focused on peer learning and project-based education.",
      },
      {
        id: 2,
        degree: "BTS Biologie Analyse et Contrôle",
        school: "Lycée JB Poquelin",
        location: "St Germain en Laye",
        period: "2017 - 2019",
      },
    ],
    skillsUsed: getSkillsUsedInJobs(["eGreen"]),
  };

  return cvData;
};
