const Skills = () => {
  return (
    <section className="rounded-xl bg-surface border border-border p-6">
      <h2 className="mb-4 text-lg font-medium">Formation / Skills</h2>

      <ul className="flex flex-wrap gap-2">
        {[
          "React",
          "Tailwind",
          "JavaScript",
          "Performance",
          "UI Architecture",
        ].map((skill) => (
          <li
            key={skill}
            className="rounded-md bg-bg px-3 py-1 text-sm text-text-secondary border border-border"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
