import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { emailComposeUrl, experience, education, labels, profile, skillCategories } from '../data/portfolio';
import { SectionLabel } from './ui/Editorial';
import { SplitText } from './ui/Kinetic';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      sectionRef.current?.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top bottom-=50' },
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="w-full scroll-mt-16 bg-ink text-paper">
      <header className="px-4 pt-20 sm:px-6 md:px-10 md:pt-28">
        <SectionLabel index={1} total={3}>{t('about.title')}</SectionLabel>
        <SplitText as="h2" text={t('ui.aboutTitle')} className="display mt-6 block text-[clamp(3rem,8vw,8rem)]" />
      </header>

      <div className="grid grid-cols-1 gap-10 border-b border-line px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="heading text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.12]">{profile.summary.en}</p>
        </div>
        <div className="reveal flex flex-wrap gap-2 self-end">
          <Link to="/cv" className="btn-ghost w-fit">
            {labels.viewResume.en}
          </Link>
          <a href={emailComposeUrl(profile.email)} className="btn-solid w-fit">
            Contact me
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-b border-line px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SplitText
            as="h3"
            text="Technical skills"
            className="heading block text-[clamp(2.4rem,5vw,4.5rem)] uppercase"
          />
          <p className="label hidden md:block">{skillCategories.reduce((total, category) => total + category.skills.length, 0)} skills</p>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <section key={category.title.en} className="reveal border-b border-r border-line p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-mono text-[12px] uppercase tracking-[0.12em]">{category.title.en}</h4>
                <span className="label">0{index + 1}</span>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => <li key={skill} className="chip">{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div id="experience" className="scroll-mt-20 border-b border-line px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <SplitText
            as="h3"
            text="Professional experience"
            className="heading block text-[clamp(2.4rem,5vw,4.5rem)] uppercase"
          />
          <p className="label hidden md:block">01—02</p>
        </div>
        <ol className="border-t border-line">
          {experience.map((item, index) => (
            <li key={item.company} className="reveal grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors hover:bg-white/[0.025] md:grid-cols-12 md:gap-8">
              <div className="label md:col-span-3">
                <span className="text-paper">#{index + 1}</span> · {item.period}
              </div>
              <div className="md:col-span-4">
                <h4 className="heading text-3xl md:text-4xl">{item.title.en}</h4>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-paper/60">{item.company}</p>
                <p className="mt-1 font-mono text-[11px] text-paper/50">{item.location.en}</p>
              </div>
              <p className="leading-relaxed text-paper/70 md:col-span-5">{item.description.en}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="px-4 py-16 sm:px-6 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <SplitText
            as="h3"
            text="Education"
            className="heading block text-[clamp(2.4rem,5vw,4.5rem)] uppercase"
          />
          <p className="label hidden md:block">01—02</p>
        </div>
        <ol className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2">
          {education.map((item, index) => (
            <li key={item.title.en} className="reveal border-b border-r border-line p-5 md:p-6">
              <p className="label">{item.period}</p>
              <p className="heading mt-4 text-2xl md:text-3xl">{item.title.en}</p>
              <p className="mt-3 text-paper/70">{item.school}</p>
              <p className="label mt-6">0{index + 1}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
