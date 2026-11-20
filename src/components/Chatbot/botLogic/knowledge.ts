import { customProjects } from "../../../data/customProjects";
import {
  education,
  experience,
  profile,
  skillCategories,
} from "../../../data/portfolio";
import { Knowledge, Lang, ProjectInfo } from "./types";

const buildProjects = (lang: Lang): ProjectInfo[] =>
  customProjects.map((project) => ({
    id: project.id,
    name: project.name,
    title: lang === "fr" ? project.titleFr : project.title,
    description: lang === "fr" ? project.descriptionFr : project.description,
    siteUrl: project.siteUrl,
    stack: project.languages,
    features: [],
    challenges: [],
    aliases: [
      project.id.replace(/-/g, " "),
      project.name.toLowerCase(),
      project.titleFr.toLowerCase(),
    ],
  }));

const cache: Partial<Record<Lang, Knowledge>> = {};

export const getKnowledge = (lang: Lang): Knowledge => {
  if (cache[lang]) return cache[lang]!;

  const knowledge: Knowledge = {
    name: profile.name,
    role: lang === "fr" ? "Développeur MERN" : profile.role,
    focus: "MongoDB • Express.js • React.js • Node.js",
    intro: profile.summary.en,
    location: `${profile.location[lang]}, ${profile.region[lang]}`,
    availability:
      lang === "fr"
        ? "Portfolio développeur MERN"
        : "MERN Stack Developer portfolio",
    experiences: experience.map((item) => ({
      title: item.title[lang],
      company: item.company,
      period: lang === "fr" ? item.periodFr : item.period,
      description: item.description[lang] ?? item.description.en ?? "",
    })),
    education: education.map((item) => ({
      title: item.title[lang] ?? item.title.en ?? "",
      school: item.school,
      period: item.period,
    })),
    skills: skillCategories.map((category) => ({
      title: category.title[lang],
      items: category.skills,
    })),
    projects: buildProjects(lang),
    spokenLanguages: [],
    interests: [],
    contact: {
      email: profile.email,
      phone: profile.phone,
      linkedin: profile.linkedin,
      github: profile.github,
      cv: "/cv",
    },
  };
  cache[lang] = knowledge;
  return knowledge;
};
