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

  const selectedSkillData = skillsByDomain[domain]?.find(
    (s) => s.name === selectedSkill,
  );
  const usedAtJobs = (selectedSkillData?.usedAt || []).filter(
    (job) => job !== "42",
  );
  const jobDescriptions = usedAtJobs
    .map((job) => ({
      job,
      descriptionKey: selectedSkillData?.jobDescriptions?.[job],
    }))
    .filter((entry) => entry.descriptionKey);

  return (
    <div className="space-y-4">
      {/* Job Usage Summary (excluding school) */}
      {usedAtJobs.length > 0 && (
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm md:text-base text-text font-medium">
              {selectedSkill} {t("skills.usedAt")}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {usedAtJobs.map((job, index) => (
                <div key={job} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-sm text-text-secondary">
                      {t("skills.and")}
                    </span>
                  )}
                  {renderJobLogo(job)}
                  <span className="text-sm font-medium text-text">{job}</span>
                </div>
              ))}
            </div>
          </div>
          {jobDescriptions.length > 0 && (
            <div className="mt-3 rounded-md border border-border/50 bg-surface p-3 space-y-3">
              {jobDescriptions.map(({ job, descriptionKey }) => (
                <div key={job} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{renderJobLogo(job)}</div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-text">{job}</div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Projects Section */}
      {filteredProjects.length > 0 && (
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-sm font-medium text-text">
              {t("skills.schoolProjectCount", {
                count: filteredProjects.length,
              })}
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
                  {project.descriptionKey
                    ? t(project.descriptionKey)
                    : project.description}
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
