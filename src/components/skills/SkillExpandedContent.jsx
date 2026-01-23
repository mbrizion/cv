import { renderJobLogo, normalizeSkillName } from "./skillsHelpers.jsx";

export const SkillExpandedContent = ({
  selectedSkill,
  domain,
  skillsByDomain,
  filteredProjects,
  t,
}) => {
  if (selectedSkill === "Git") {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
        <p className="text-sm md:text-base text-text font-medium">
          {t("skills.gitUsedInEveryProject")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Job Usage Section */}
      {selectedSkill &&
        skillsByDomain[domain]
          .find((s) => s.name === selectedSkill)
          ?.usedAt?.some((job) => ["eGreen"].includes(job)) && (
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-sm md:text-base text-text font-medium">
                {selectedSkill} {t("skills.usedAt")}
              </span>
              {selectedSkill &&
                skillsByDomain[domain]
                  .find((s) => s.name === selectedSkill)
                  ?.usedAt?.filter((job) => ["eGreen"].includes(job))
                  .map((place) => (
                    <div key={place} className="flex items-center gap-2">
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
              {filteredProjects.length === 1 ? " project" : " projects"}{" "}
              {t("skills.projectsFromSchool")}
            </h4>
            <div className="flex gap-2">{renderJobLogo("42")}</div>
          </div>
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-md border border-border/50 bg-surface p-3 space-y-2 text-xs md:text-sm"
              >
                <div>
                  <h5 className="font-medium text-text">{project.name}</h5>
                  <p className="text-text-muted text-xs">{project.period}</p>
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
                          normalizeSkillName(selectedSkill).toLowerCase() ===
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
    </div>
  );
};
