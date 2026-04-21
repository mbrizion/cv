import logo42 from "../assets/images/42.png";
import { useTranslation } from "react-i18next";
import { TimelineItem } from "./TimelineItem";

const Education = () => {
  const { t } = useTranslation();

  const education = [
    {
      id: 1,
      degree: t("education.42.degree"),
      image: logo42,
      link: "https://42.fr/",
      school: t("education.42.school"),
      location: t("education.42.location"),
      period: t("education.42.period"),
      description: t("education.42.description"),
    },
    {
      id: 2,
      degree: t("education.bts.degree"),
      school: t("education.bts.school"),
      location: t("education.bts.location"),
      period: t("education.bts.period"),
    },
    {
      id: 3,
      degree: t("education.bac.degree"),
      school: t("education.bac.school"),
      location: t("education.bac.location"),
      period: t("education.bac.period"),
    },
  ];

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
