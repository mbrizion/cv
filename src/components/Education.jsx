import logo42 from "../assets/images/42.png";
import { useTranslation } from "react-i18next";

const education = [
  {
    id: 1,
    degree: "Développement informatique",
    image: logo42,
    link: "https://42.fr/",
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
  {
    id: 3,
    degree: "Bac Science et Technologie de Laboratoire",
    school: "",
    location: "",
    period: "2015 - 2017",
  },
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className="rounded-xl border border-border bg-surface p-6 md:p-8"
    >
      <h2 className="mb-4 md:mb-6 text-base md:text-lg font-medium text-text">
        {t("sections.education")}
      </h2>

      <div className="space-y-5">
        {education.map((edu) => (
          <article key={edu.id} className="space-y-1.5">
            <h3 className="text-sm md:text-base font-medium text-text">
              {edu.degree}
            </h3>
            {edu.school && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs md:text-sm text-text-secondary">
                {edu.image && (
                  <span className="bg-white rounded-lg w-6 h-6 flex items-center justify-center">
                    <img className="w-5" src={edu.image} />
                  </span>
                )}
                <span
                  className={`text-accent font-medium ${
                    edu.link ? "cursor-pointer" : ""
                  }`}
                  onClick={
                    edu.link ? () => window.open(edu.link, "_blank") : undefined
                  }
                >
                  {edu.school}
                </span>

                {edu.location && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.location}</span>
                  </>
                )}
                <span className="hidden sm:inline">•</span>
                <span>{edu.period}</span>
              </div>
            )}
            {!edu.school && (
              <p className="text-xs md:text-sm text-text-secondary">
                {edu.period}
              </p>
            )}
            {edu.description && (
              <p className="text-xs md:text-sm text-text-muted leading-relaxed pt-1">
                {edu.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
