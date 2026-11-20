import { skillCategories as categories } from './portfolio';

export interface SkillCategory {
  title: string;
  titleEn: string;
  skills: string[];
}

export const skillCategories: Record<string, SkillCategory> = Object.fromEntries(
  categories.map((category, index) => [
    `category-${index + 1}`,
    {
      title: category.title.fr,
      titleEn: category.title.en,
      skills: category.skills,
    },
  ])
);
