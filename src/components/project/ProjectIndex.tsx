import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { customProjects } from '../../data/customProjects';

interface IndexItem {
  id: string;
  name: string;
  description: string;
  homepage: string;
  languages: string[];
}

export const ProjectIndex: React.FC<{ projects: IndexItem[] }> = ({ projects }) => {
  const { t } = useTranslation();

  if (projects.length === 0) {
    return (
      <div className="border-y border-line py-16 text-center">
        <p className="display text-5xl">{t('ui.noResults')}</p>
        <p className="label mt-3">{t('ui.noResultsHint')}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="label hidden grid-cols-[4rem_1fr_10rem_8rem] gap-6 border-b border-line pb-3 md:grid">
        <span>N°</span>
        <span>{t('ui.colProject')}</span>
        <span>{t('ui.colStack')}</span>
        <span>{t('projects.demo')}</span>
      </div>

      <ul>
        {projects.map((project, index) => {
          const details = customProjects.find((item) => item.id === project.id);
          const title = details ? details.title : project.name;
          const description = details ? details.description : project.description;
          return (
            <li
              key={project.id}
              className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-b border-line py-5 transition-colors hover:bg-white/[0.025] md:grid-cols-[4rem_1fr_10rem_8rem] md:gap-6 md:py-6"
            >
              <span className="label pt-2 text-paper/55">{String(index + 1).padStart(2, '0')}</span>
              <span className="min-w-0">
                <span className="display block text-[clamp(2rem,4.6vw,4.4rem)]">{title}</span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-paper/60">{description}</span>
                {project.languages.map((language) => <span key={language} className="chip mt-3 mr-1 inline-flex md:hidden">{language}</span>)}
              </span>
              <span className="label hidden pt-3 md:block">{project.languages.join(' · ') || '—'}</span>
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost col-start-2 mt-2 w-fit md:col-start-auto md:mt-0"
                aria-label={`Open live demo for ${title}`}
              >
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
