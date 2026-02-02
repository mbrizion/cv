import { useTranslation } from "react-i18next";
import me from "../assets/images/me.png";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row min-h-[20vh] items-center rounded-xl border border-border bg-surface p-6 md:p-10 w-full"
      >
        <div className="flex justify-center mb-6 md:mb-0 md:justify-end order-first md:order-last">
          <div className="h-32 w-32 md:h-60 md:w-60 border-2 rounded-full border-accent/80 bg-surface-elevated flex items-center justify-center">
            <img src={me} className="rounded-full" />
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-lg text-center md:text-3xl font-semibold text-text">
              {t("presentation.greeting")}
            </h1>

            <p className="md:px-8 mt-2 text-sm md:text-base text-text-secondary leading-relaxed">
              {t("presentation.description")}
            </p>
          </div>

          <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 pt-2 justify-center">
            <a
              href="mailto:br.maxime@protonmail.com"
              className="text-xs md:text-sm text-accent hover:text-accent-hover transition-colors break-all"
              aria-label="Email contact"
            >
              br.maxime@protonmail.com
            </a>
            <span className="hidden sm:inline text-text-muted">•</span>
            <a
              href="http://www.linkedin.com/in/maxime-brz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-accent hover:text-accent-hover transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
