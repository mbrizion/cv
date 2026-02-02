import { PRIMARY_JOBS, JOB_LOGOS } from "./skillsData.js";

const JOB_ALIASES = {
  "Delaine & D’Argile": "dled",
  "Delaine & D'Argile": "dled",
};

const normalizeJobName = (jobName) => {
  return JOB_ALIASES[jobName] || jobName;
};

export const getLogoConfig = (jobName) => {
  const normalizedJobName = normalizeJobName(jobName);
  return (
    JOB_LOGOS[normalizedJobName] || {
      src: "",
      alt: jobName,
      className: "w-6 h-6",
    }
  );
};

export const renderJobLogo = (jobName) => {
  const config = getLogoConfig(jobName);
  return (
    <div
      className={`flex items-center justify-center ${config.bg} ${config.containerClassName}`}
    >
      <img src={config.src} alt={config.alt} className={config.className} />
    </div>
  );
};

export const isPrimaryJobSkill = (usedAt) => {
  return usedAt?.some((job) =>
    PRIMARY_JOBS.includes(normalizeJobName(job)),
  );
};

export const getSortedSkills = (skills) => {
  return [...skills].sort((a, b) => {
    const aIsPrimary = isPrimaryJobSkill(a.usedAt);
    const bIsPrimary = isPrimaryJobSkill(b.usedAt);
    if (aIsPrimary === bIsPrimary) return 0;
    return aIsPrimary ? -1 : 1;
  });
};

export const normalizeSkillName = (name) => {
  const mapping = {
    "React.js": "React",
    "Node.js": "Node",
  };
  return mapping[name] || name;
};
