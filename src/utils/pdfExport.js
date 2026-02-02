import jsPDF from "jspdf";
import { skillsByDomain } from "../components/skills/skillsData";

// Helper to get skills used in specific jobs
export const getSkillsUsedInJobs = (jobNames = ["eGreen"]) => {
  const skillsUsed = [];

  Object.entries(skillsByDomain).forEach(([domain, skills]) => {
    const filteredSkills = skills.filter((skill) =>
      skill.usedAt.some((job) => jobNames.includes(job)),
    );

    if (filteredSkills.length > 0) {
      skillsUsed.push({
        domain,
        skills: filteredSkills,
      });
    }
  });

  return skillsUsed;
};

const ACCENT_COLOR = [97, 206, 224]; // #61d0e0
const DARK_ACCENT = [70, 160, 180]; // darker version
const TEXT_COLOR = [35, 35, 35];
const LIGHT_TEXT = [100, 100, 100];
const LIGHT_BG = [245, 250, 252]; // very light blue

export const generateCVPDF = (cvData) => {
  const doc = new jsPDF("p", "mm", "a4");
  let yPosition = 18;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 13;
  const contentWidth = pageWidth - 2 * margin;
  const lineHeight = 4.3;

  // Helper functions
  const addNewPageIfNeeded = (requiredSpace) => {
    if (yPosition + requiredSpace > pageHeight - 12) {
      doc.addPage();
      yPosition = 18;
    }
  };

  const addSectionHeading = (text) => {
    addNewPageIfNeeded(12);

    // Accent colored text with decorative line
    doc.setFontSize(11.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
    doc.text(text, margin, yPosition);

    // Decorative line under heading
    doc.setDrawColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
    doc.setLineWidth(0.6);
    doc.line(margin, yPosition + 1.5, margin + 50, yPosition + 1.5);

    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    yPosition += 8;
  };

  const addJobTitle = (text) => {
    addNewPageIfNeeded(6);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
    const lines = doc.splitTextToSize(text, contentWidth - 2);
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * 4.8 + 2;
  };

  const addCompanyInfo = (text) => {
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(LIGHT_TEXT[0], LIGHT_TEXT[1], LIGHT_TEXT[2]);
    doc.text("┃ " + text, margin + 0.5, yPosition);
    yPosition += 4.5;
  };

  const addDescription = (text) => {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * lineHeight + 1.5;
  };

  const addBulletPoint = (text) => {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    const lines = doc.splitTextToSize(text, contentWidth - 6);
    lines.forEach((line, index) => {
      if (index === 0) {
        doc.text("→ " + line, margin + 3, yPosition);
      } else {
        doc.text(line, margin + 5, yPosition);
      }
      yPosition += lineHeight;
    });
  };

  const addSkillCategory = (category, skills) => {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
    doc.text(category, margin, yPosition);
    yPosition += 4.5;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    doc.setFontSize(9);
    const skillText = skills.map((s) => s.name).join(", ");
    const lines = doc.splitTextToSize(skillText, contentWidth - 4);
    doc.text(lines, margin + 2, yPosition);
    yPosition += lines.length * lineHeight + 3;
  };

  // ===== HEADER =====
  // Name
  doc.setFontSize(26);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
  doc.text(cvData.name || "Maxime Brizion", margin, yPosition);
  yPosition += 9;

  // Decorative line under name
  doc.setDrawColor(ACCENT_COLOR[0], ACCENT_COLOR[1], ACCENT_COLOR[2]);
  doc.setLineWidth(0.8);
  doc.line(margin, yPosition - 1.5, margin + 50, yPosition - 1.5);

  // Contact info
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(LIGHT_TEXT[0], LIGHT_TEXT[1], LIGHT_TEXT[2]);
  yPosition += 3;
  const email = cvData.email || "br.maxime@protonmail.com";
  const linkedIn = cvData.linkedIn || "linkedin.com/in/maxime-brz";
  doc.text("📧 " + email, margin, yPosition);
  yPosition += 4;
  doc.text("🔗 " + linkedIn, margin, yPosition);
  yPosition += 8;

  // ===== PROFESSIONAL SUMMARY =====
  if (cvData.presentation) {
    addSectionHeading("PROFILE");
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(TEXT_COLOR[0], TEXT_COLOR[1], TEXT_COLOR[2]);
    const summaryLines = doc.splitTextToSize(
      cvData.presentation,
      contentWidth - 2,
    );
    doc.text(summaryLines, margin + 1, yPosition);
    yPosition += summaryLines.length * lineHeight + 5;
  }

  // ===== PROFESSIONAL EXPERIENCE =====
  if (cvData.experiences && cvData.experiences.length > 0) {
    addSectionHeading("PROFESSIONAL EXPERIENCE");
    cvData.experiences.forEach((exp, expIndex) => {
      addNewPageIfNeeded(18);

      addJobTitle(exp.title);
      addCompanyInfo(`${exp.company} • ${exp.location} • ${exp.period}`);
      yPosition += 1;

      if (exp.description) {
        addDescription(exp.description);
      }

      if (exp.achievements && exp.achievements.length > 0) {
        yPosition += 1;
        exp.achievements.forEach((achievement) => {
          addBulletPoint(achievement);
        });
      }

      if (expIndex < cvData.experiences.length - 1) {
        yPosition += 3;
      }
    });
    yPosition += 2;
  }

  // ===== TECHNICAL SKILLS =====
  if (cvData.skillsUsed && cvData.skillsUsed.length > 0) {
    addSectionHeading("TECHNICAL SKILLS");
    yPosition += 1;
    cvData.skillsUsed.forEach((skillGroup) => {
      addNewPageIfNeeded(8);
      addSkillCategory(skillGroup.domain, skillGroup.skills);
    });
  }

  // ===== EDUCATION =====
  if (cvData.education && cvData.education.length > 0) {
    addSectionHeading("EDUCATION");
    cvData.education.forEach((edu, eduIndex) => {
      addNewPageIfNeeded(12);

      addJobTitle(edu.school);
      const eduInfo = `${edu.degree}${
        edu.location ? " • " + edu.location : ""
      } • ${edu.period}`;
      addCompanyInfo(eduInfo);
      yPosition += 1;

      if (edu.description) {
        addDescription(edu.description);
      }

      if (eduIndex < cvData.education.length - 1) {
        yPosition += 2;
      }
    });
  }

  return doc;
};

// Main export function
export const exportCVToPDF = (cvData = {}) => {
  const doc = generateCVPDF(cvData);
  doc.save("CV_Maxime_Brizion.pdf");
};
