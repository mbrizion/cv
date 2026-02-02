import { MdExpandMore } from "react-icons/md";
import { isPrimaryJobSkill } from "./skillsHelpers.jsx";

export const SkillButton = ({ skill, isSelected, t, onClickSkill }) => {
  const Icon = skill.icon;
  const isPrimary = isPrimaryJobSkill(skill.usedAt);

  return (
    <button
      onClick={() => onClickSkill(skill.name)}
      title={
        isPrimary
          ? `${t("skills.usedInJob")}: ${skill.usedAt.join(", ")}`
          : undefined
      }
      className={`
        flex items-center justify-between sm:justify-start gap-2 rounded-md border px-2.5 py-1.5 md:px-3 text-xs md:text-sm
        transition-all duration-300 cursor-pointer group relative w-full md:w-auto min-w-0
        ${
          isSelected
            ? "border-accent bg-surface-elevated text-text shadow-lg"
            : isPrimary
              ? "border-accent/50 bg-accent/5 text-text hover:border-accent hover:bg-accent/10 hover:shadow-md"
              : "border-border bg-surface-elevated text-text-secondary hover:border-accent/50 hover:text-text hover:bg-surface-hover hover:shadow-md"
        }
      `}
      aria-pressed={isSelected}
      aria-label={`Filter projects by ${skill.name}`}
    >
      <Icon
        style={{ color: skill.color }}
        className="text-base md:text-lg shrink-0"
      />
      <span className="truncate">{skill.name}</span>
      {isPrimary && (
        <span className="text-accent text-xs font-semibold relative">★</span>
      )}
      <MdExpandMore
        className={`text-base md:text-lg shrink-0 transition-transform duration-300 ml-1 ${
          isSelected ? "rotate-180" : "group-hover:opacity-70"
        }`}
      />
    </button>
  );
};
