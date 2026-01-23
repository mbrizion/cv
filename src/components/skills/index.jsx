import { useState } from "react";
import { useTranslation } from "react-i18next";
import { skillsByDomain, projects, PRIMARY_JOBS } from "./skillsData.js";
import { getSortedSkills, normalizeSkillName } from "./skillsHelpers.jsx";
import { SkillButton } from "./SkillButton";
import { SkillExpandedContent } from "./SkillExpandedContent";

const Skills = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);

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
                  const isSelected = selectedSkill === skill.name;

                  return (
                    <SkillButton
                      key={skill.name}
                      skill={skill}
                      isSelected={isSelected}
                      t={t}
                      onClickSkill={handleSkillClick}
                    />
                  );
                })}
              </div>

              {/* Expanded Content for this domain */}
              {selectedSkill &&
                skills.some((skill) => skill.name === selectedSkill) && (
                  <div className="mt-4 animate-fadeIn">
                    <SkillExpandedContent
                      selectedSkill={selectedSkill}
                      domain={domain}
                      skillsByDomain={skillsByDomain}
                      filteredProjects={filteredProjects}
                      t={t}
                    />
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
