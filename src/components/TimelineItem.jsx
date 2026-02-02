export const TimelineItem = ({ item, isLast, type = "experience" }) => {
  const isExperience = type === "experience";

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 relative pb-4 sm:pb-6 md:pb-8">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center relative shrink-0">
        {/* Dot */}
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent border-2 sm:border-4 border-surface relative z-10 mt-1"></div>
        {/* Line */}
        {!isLast && (
          <div className="w-0.5 sm:w-1 bg-linear-to-b from-accent to-accent/30 flex-1 mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {isExperience ? (
          <>
            {/* Experience Card */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-secondary items-center">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  />
                )}
                <span className="hidden sm:inline">•</span>
                <span className="text-accent font-medium">{item.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{item.location}</span>
                <span className="hidden sm:inline">•</span>
                <span className="text-text-muted">{item.period}</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-base font-semibold text-text">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-1 sm:pt-2 wrap-break-words">
                {item.description}
              </p>
              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-1 sm:space-y-1.5 pl-3 sm:pl-4 pt-1.5 sm:pt-2">
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-text-secondary leading-relaxed before:content-['▹'] before:text-accent before:mr-2 before:font-bold wrap-break-word"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Education Card */}
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-sm sm:text-base md:text-base font-semibold text-text">
                {item.degree}
              </h3>
              {item.school && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-text-secondary">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.school}
                      className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded p-0.5 shrink-0"
                    />
                  )}
                  <span
                    className={`text-accent font-medium wrap-break-words ${
                      item.link
                        ? "cursor-pointer hover:text-accent-hover transition-colors"
                        : ""
                    }`}
                    onClick={
                      item.link
                        ? () => window.open(item.link, "_blank")
                        : undefined
                    }
                  >
                    {item.school}
                  </span>
                  {item.location && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                  <span className="hidden sm:inline">•</span>
                  <span className="text-text-muted">{item.period}</span>
                </div>
              )}
              {!item.school && (
                <p className="text-xs sm:text-sm text-text-muted">
                  {item.period}
                </p>
              )}
              {item.description && (
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-1 sm:pt-2 wrap-break-words">
                  {item.description}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
