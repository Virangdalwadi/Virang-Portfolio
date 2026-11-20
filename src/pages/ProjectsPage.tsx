import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Seo } from '../components/Seo';
import { breadcrumb } from '../lib/seo';
import { ArrowLeft } from 'lucide-react';
import { customProjects } from '../data/customProjects';
import { Footer } from '../components/Footer';
import { ProjectFilter } from '../components/project/ProjectFilter';
import { ProjectIndex } from '../components/project/ProjectIndex';
import { SectionLabel } from '../components/ui/Editorial';
import { SplitText } from '../components/ui/Kinetic';
import { Counter } from '../components/ui/Counter';
import { useLenis } from '../hooks/useLenis';

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableLanguages = useMemo(
    () => Array.from(new Set(customProjects.flatMap((project) => project.languages))),
    []
  );
  const projects = useMemo(
    () => customProjects.map((project) => ({
      id: project.id,
      name: project.name,
      description: project.description,
      html_url: project.siteUrl,
      homepage: project.siteUrl,
      languages: project.languages,
      stargazers_count: 0,
      isCustom: true,
    })),
    []
  );
  const filteredProjects = projects.filter((project) =>
    (!selectedLanguage || project.languages.includes(selectedLanguage)) &&
    (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (customProjects.find((item) => item.id === project.id)?.descriptionFr.toLowerCase().includes(searchTerm.toLowerCase()) ?? false))
  );

  return (
    <main className="min-h-screen bg-ink text-paper">
      <Seo path="/projects" title={`${t('projects.title')} — Virang Dalwadi`} description={t('projects.description')}>
        {breadcrumb([
          { name: t('nav.home'), path: '/' },
          { name: t('nav.projects'), path: '/projects' },
        ])}
      </Seo>

      <header className="px-4 pb-12 pt-8 sm:px-6 md:px-10 md:pb-16 md:pt-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="label group flex items-center gap-2 hover:text-paper">
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            {t('projects.backHome')}
          </Link>
          <span className="label">{t('projects.selectedWork')}</span>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 md:mt-14 md:flex-row md:items-end">
          <div>
            <SectionLabel index={1} total={1}>{t('projects.allProjects')}</SectionLabel>
            <SplitText as="h1" trigger="intro" text={t('ui.indexTitle')} className="display mt-6 block text-[clamp(3.6rem,13vw,14rem)]" />
          </div>
          <div className="grid grid-cols-2 gap-8 md:mb-4">
            <div>
              <Counter value={customProjects.length} className="display block text-6xl" />
              <p className="label mt-1">{t('projects.selectedWork')}</p>
            </div>
            <div>
              <Counter value={availableLanguages.length} className="display block text-6xl" />
              <p className="label mt-1">{t('ui.colStack')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-4 pb-24 sm:px-6 md:px-10">
        <ProjectFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          availableLanguages={availableLanguages}
        />
        <ProjectIndex projects={filteredProjects} />
      </section>

      <Footer variant="minimal" />
    </main>
  );
};
