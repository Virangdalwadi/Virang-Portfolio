import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import { customProjects } from "../data/customProjects";
import { emailComposeUrl, profile } from "../data/portfolio";
import { useProximityWeight } from "./ui/Kinetic";

interface FooterProps {
  variant?: "default" | "minimal";
}

const linkClass =
  "inline-block py-1 -my-1 font-mono text-[12px] uppercase tracking-[0.08em] text-paper/60 hover:text-paper transition-colors focus:outline-none focus-visible:underline";

// Petit numéro au-dessus du titre (le libellé complet reste pour les lecteurs d'écran)
const Column: React.FC<{
  index: number;
  title: string;
  label: string;
  children: React.ReactNode;
}> = ({ index, title, label, children }) => (
  <nav className="flex flex-col" aria-label={label}>
    <p className="label mb-2" aria-hidden="true">
      {String(index).padStart(2, "0")}
    </p>
    <h3 className="heading mb-5 text-3xl">{title}</h3>
    <ul className="space-y-3">{children}</ul>
  </nav>
);

/** Signature géante : la graisse de chaque lettre suit le curseur. */
const FooterSignature: React.FC = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  useProximityWeight(ref, { min: 120, max: 900, radius: 340 });
  return (
    <p
      ref={ref}
      className="display absolute inset-x-0 bottom-0 translate-y-[10%] select-none whitespace-nowrap px-2 text-center text-[16vw] [font-variation-settings:'wght'_120] [@media(hover:none)]:[font-variation-settings:'wght'_300]"
      aria-hidden="true"
    >
      {Array.from(profile.name).map((ch, i) => (
        <span key={i} className="char inline-block">
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </p>
  );
};

export const Footer: React.FC<FooterProps> = ({ variant = "default" }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="w-full border-t border-line bg-ink text-paper"
      role="contentinfo"
    >
      {/* Bandeau image + signature géante */}
      <div className="relative h-[46vw] max-h-[560px] min-h-[260px] overflow-hidden">
        <img
          src="/assets/art/ridge-lines.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-ink"
          aria-hidden="true"
        />
        <FooterSignature />
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:gap-12 sm:px-6 md:px-10 lg:grid-cols-12 lg:pl-24">
        {/* Marque */}
        <div className="col-span-2 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="border border-paper/70 px-1.5 pb-0.5 pt-1 font-display text-2xl font-semibold leading-none">
              VD
            </span>
          </div>
          <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.08em] text-paper">
            {t("ui.footerTagline")}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/55">
            {t("footer.description")}
          </p>
        </div>

        <div className="lg:col-span-2">
          {variant === "default" ? (
            <Column
              index={1}
              title={t("nav.projects")}
              label={t("nav.projects")}
            >
              {customProjects.slice(0, 5).map((project) => (
                <li key={project.id}>
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </Column>
          ) : (
            <Column
              index={1}
              title={t("nav.navigation")}
              label={t("nav.navigation")}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className={linkClass}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className={linkClass}
                >
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cv"
                  onClick={() => window.scrollTo(0, 0)}
                  className={linkClass}
                >
                  {t("about.viewCV")}
                </Link>
              </li>
            </Column>
          )}
        </div>

        <div className="lg:col-span-2">
          <Column
            index={2}
            title={t("ui.footerSocial")}
            label={t("ui.footerSocial")}
          >
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={emailComposeUrl(profile.email)} className={linkClass}>
                Email ↗
              </a>
            </li>
          </Column>
        </div>

        {/* <div className="lg:col-span-2">
          <Column index={3} title={t('legal.title')} label={t('legal.title')}>
            <li>
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className={linkClass}>
                {t('privacy.title')}
              </Link>
            </li>
          </Column>
        </div> */}

        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <p className="label mb-2" aria-hidden="true">
              03
            </p>
            <h3 className="heading mb-5 text-3xl">{t("hero.location")}</h3>
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-paper/60"></p>
            <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-paper/55">
              Gujarat, India
            </p>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="flex flex-col items-start justify-between gap-4 border-t border-line px-4 py-6 sm:flex-row sm:items-center sm:px-6 md:px-10 lg:pr-48">
        <div className="space-y-1">
          <p className="label">
            © {currentYear} {profile.name}. {t("footer.allRightsReserved")}
          </p>
          {/* Crédits */}
          <p className="label text-paper/55">
            {t("ui.credits", { defaultValue: "Design & code" })} —{" "}
            {profile.name} · React, TypeScript, Tailwind CSS
          </p>
        </div>
        <button
          onClick={scrollToTop}
          className="label group -my-1 flex items-center gap-2 py-1 hover:text-paper focus:outline-none focus-visible:underline"
          aria-label={t("footer.backToTop")}
        >
          {t("footer.backToTop")}
          <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
