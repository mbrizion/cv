import eGreenLogo from "../assets/images/egreen.png";
import dled from "../assets/images/dled.png";
import { useTranslation } from "react-i18next";
import { TimelineItem } from "./TimelineItem";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      title: t("experience.egreen.title"),
      company: t("experience.egreen.company"),
      location: t("experience.egreen.location"),
      period: t("experience.egreen.period"),
      description: t("experience.egreen.description"),
      achievements: [
        t("experience.egreen.achievements.0"),
        t("experience.egreen.achievements.1"),
        t("experience.egreen.achievements.2"),
        t("experience.egreen.achievements.3"),
        t("experience.egreen.achievements.4"),
        t("experience.egreen.achievements.5"),
      ],
      logo: eGreenLogo,
    },
    {
      id: 2,
      title: t("experience.dled.title"),
      company: t("experience.dled.company"),
      location: t("experience.dled.location"),
      period: t("experience.dled.period"),
      description: t("experience.dled.description"),
      achievements: [
        t("experience.dled.achievements.0"),
        t("experience.dled.achievements.1"),
        t("experience.dled.achievements.2"),
        t("experience.dled.achievements.3"),
        t("experience.dled.achievements.4"),
        t("experience.dled.achievements.5"),
      ],
      logo: dled,
    },
  ];

  return (
    <section
      id="experience"
      className="rounded-xl border border-border bg-surface p-4 sm:p-6 md:p-8 w-full"
    >
      <h2 className="mb-6 sm:mb-8 text-base md:text-lg font-medium text-text">
        {t("sections.experience")}
      </h2>

      <div className="relative">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            item={exp}
            type="experience"
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
