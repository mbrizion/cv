import logo42 from "../assets/images/42.png";
import { useTranslation } from "react-i18next";
import { TimelineItem } from "./TimelineItem";

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
      <h2 className="mb-8 text-base md:text-lg font-medium text-text">
        {t("sections.education")}
      </h2>

      <div className="relative">
        {education.map((edu, index) => (
          <TimelineItem
            key={edu.id}
            item={edu}
            type="education"
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
