import { useTranslation } from "react-i18next";
import { useState } from "react";

const navigation = [
  { key: "about", section: "about" },
  { key: "skills", section: "skills" },
  { key: "experience", section: "experience" },
  { key: "education", section: "education" },
];

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 w-full border-b border-border/40">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 w-full">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm font-semibold text-text hover:text-accent transition-colors"
          aria-label="Scroll to top"
        >
          Maxime Brizion
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => scrollToSection(item.section)}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
                aria-label={`Navigate to ${item.key} section`}
              >
                {t(`nav.${item.key}`)}
              </button>
            </li>
          ))}

          {/* Language Buttons */}
          <li className="flex items-center gap-1 border border-border rounded overflow-hidden">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                lang === "en"
                  ? "bg-accent text-bg"
                  : "bg-bg text-text-secondary hover:bg-border/30"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                lang === "fr"
                  ? "bg-accent text-bg"
                  : "bg-bg text-text-secondary hover:bg-border/30"
              }`}
              aria-label="Switch to French"
            >
              FR
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-secondary hover:text-accent transition-colors"
          aria-label="Toggle menu"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu?.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden border-t border-border/40 bg-bg/95 backdrop-blur-md"
      >
        <ul className="flex flex-col px-6 py-4 gap-3">
          {/* Mobile Language Buttons */}
          <li className="flex items-center gap-1 border border-border rounded overflow-hidden mt-2">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1 text-sm font-medium transition-colors w-full ${
                lang === "en"
                  ? "bg-accent text-bg"
                  : "bg-bg text-text-secondary hover:bg-border/30"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1 text-sm font-medium transition-colors w-full ${
                lang === "fr"
                  ? "bg-accent text-bg"
                  : "bg-bg text-text-secondary hover:bg-border/30"
              }`}
              aria-label="Switch to French"
            >
              FR
            </button>
          </li>
          {navigation.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => {
                  scrollToSection(item.section);
                  document
                    .getElementById("mobile-menu")
                    ?.classList.add("hidden");
                }}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors w-full text-left cursor-pointer"
                aria-label={`Navigate to ${item.key} section`}
              >
                {t(`nav.${item.key}`)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default TopBar;

// Generate translation for i18n scanner, needed because of dynamic key.
// t('nav.about')
// t('nav.skills')
// t('nav.experience')
// t('nav.education')
