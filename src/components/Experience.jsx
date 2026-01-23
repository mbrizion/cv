import eGreenLogo from "../assets/images/egreen.png";
import { useTranslation } from "react-i18next";

const experiences = [
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
    logo: eGreenLogo,
  },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="mb-4 md:mb-6 text-base md:text-lg font-medium text-text">
        {t("sections.experience")}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <article key={exp.id} className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-medium text-text">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="inline-block w-6 h-6 mr-2 object-contain"
                />
                {exp.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs md:text-sm text-text-secondary">
                <span className="text-accent">{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.location}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-1.5 pl-4">
              {exp.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm text-text-secondary leading-relaxed before:content-['▹'] before:text-accent before:mr-2 before:font-bold"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
