import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Github } from 'lucide-react';
import { customProjects } from '../data/customProjects';
import { profile } from '../data/portfolio';
import { SectionLabel } from './ui/Editorial';
import { SplitText } from './ui/Kinetic';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-16 border-t border-line bg-ink px-4 py-20 text-paper sm:px-6 md:px-10 md:py-28"
    >
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel index={2} total={3}>{t('ui.projectsKicker')}</SectionLabel>
          <SplitText as="h2" text={t('projects.title')} className="display mt-6 block text-[clamp(3.2rem,8vw,9rem)]" />
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost w-fit"
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          GitHub profile
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <p className="mb-10 max-w-xl leading-relaxed text-paper/60">
        A selection of web projects, each with a live demo.
      </p>

      <ol className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
        {customProjects.map((project, index) => (
          <li key={project.id} className="group flex min-h-64 flex-col border-b border-r border-line p-5 transition-colors hover:bg-white/[0.025] md:p-6">
            <div className="label flex items-center justify-between">
              <span><span className="text-paper">{String(index + 1).padStart(2, '0')}</span> / 05</span>
              <span>Personal project</span>
            </div>
            <h3 className="heading mt-8 text-3xl md:text-4xl">{project.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-paper/65">
              {project.description}
            </p>
            {project.languages.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.languages.map((technology) => <li key={technology} className="chip">{technology}</li>)}
              </ul>
            )}
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6 w-fit"
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
