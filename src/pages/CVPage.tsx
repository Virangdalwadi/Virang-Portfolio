import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { useEffect, type ReactNode } from 'react';
import { Seo } from '../components/Seo';
import { emailComposeUrl, profile } from '../data/portfolio';
import { cvResume } from '../data/cvResume';
import './cv.css';

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rs-section">
    <h2 className="rs-heading">{title}</h2>
    {children}
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="rs-list">
    {items.map((text) => (
      <li key={text}>{text}</li>
    ))}
  </ul>
);

const Resume = () => (
  <article className="resume-sheet" lang="en">
    <header>
      <h1 className="rs-name">{profile.name}</h1>
      <p className="rs-contact">
        <span>{profile.location.en.toUpperCase()}</span>
        <span>Phone no. : {profile.phone}</span>
        <span>|</span>
        <span>
          Email : <a href={emailComposeUrl(profile.email)}>{profile.email}</a>
        </span>
        <span>
          Portfolio : <a href={profile.portfolio}>{profile.portfolio}</a>
        </span>
      </p>
    </header>

    <Section title="Summary">
      <p className="rs-text">{cvResume.summary}</p>
    </Section>

    <Section title="Technical Skills">
      {cvResume.technicalSkills.map((skill) => (
        <p key={skill.label} className="rs-text rs-indent">
          {skill.label} : {skill.value}
        </p>
      ))}
    </Section>

    <Section title="Soft Skills">
      <Bullets items={cvResume.softSkills} />
    </Section>

    <Section title="Education">
      {cvResume.education.map((item) => (
        <div key={item.degree} className="rs-entry">
          <h3 className="rs-strong rs-text">{item.degree}</h3>
          <p className="rs-split">
            <span>{item.school}</span>
            <span>{item.period}</span>
          </p>
        </div>
      ))}
    </Section>

    <Section title="Projects">
      {cvResume.projects.map((project) => (
        <div key={project.name} className="rs-entry">
          <h3 className="rs-strong rs-text">{project.name}</h3>
          <p className="rs-text rs-indent">
            Live Demo : <a href={project.liveDemo}>{project.liveDemo}</a>
          </p>
          <Bullets items={project.bullets} />
          <p className="rs-text rs-em">Tech Stack : {project.techStack}</p>
        </div>
      ))}
    </Section>

    <Section title="Experience">
      {cvResume.experience.map((job) => (
        <div key={job.title} className="rs-entry">
          <h3 className="rs-strong rs-text">{job.title}</h3>
          <p className="rs-text rs-indent">{job.company}</p>
          <p className="rs-split">
            <span>Duration: {job.duration}</span>
            <span>{job.period}</span>
          </p>
          <Bullets items={job.bullets} />
        </div>
      ))}
    </Section>

    <Section title="Additional Information">
      {cvResume.additional.map((item) => (
        <p key={item.label} className="rs-text rs-indent">
          {item.label} : {item.value}
        </p>
      ))}
    </Section>
  </article>
);

export default function CVPage() {
  useEffect(() => {
    document.body.classList.add('resume-print-mode');
    const pageStyle = document.createElement('style');
    pageStyle.textContent = '@page { size: A4; margin: 0; }';
    document.head.appendChild(pageStyle);

    return () => {
      document.body.classList.remove('resume-print-mode');
      pageStyle.remove();
    };
  }, []);

  return (
    <main className="resume-page min-h-screen bg-ink px-4 pb-16 pt-10 text-paper sm:px-6 md:px-10">
      <Seo
        path="/cv"
        type="profile"
        title={`Resume — ${profile.name}`}
        description={`${profile.name} — ${profile.role} in Ahmedabad, India. ${profile.summary.en}`}
      />

      {createPortal(
        <div className="resume-print-root">
          <Resume />
        </div>,
        document.body,
      )}

      <div className="mx-auto max-w-[210mm]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="btn-ghost" data-magnetic>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to website
          </Link>
          <button type="button" onClick={() => window.print()} className="btn-solid" data-magnetic>
            <Download className="h-4 w-4" aria-hidden="true" />
            Print / Save as PDF
          </button>
        </div>

        <Resume />
      </div>
    </main>
  );
}
