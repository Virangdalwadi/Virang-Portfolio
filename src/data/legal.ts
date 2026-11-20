/**
 * Public privacy and legal information for the portfolio. Keep this aligned with enabled services.
 */
export type Lang = "fr" | "en";
export type T = string | Record<Lang, string>;
export type Block =
  | { p: T }
  | { list: T[] }
  | { table: { head: T[]; rows: T[][] } }
  | { note: T };
export type LegalSection = { id: string; title: T; blocks: Block[] };
export type LegalDoc = {
  title: T;
  kicker: T;
  updated: string;
  summary: { title: T; items: T[] };
  sections: LegalSection[];
};

export const tr = (lang: Lang, value: T): string =>
  typeof value === "string" ? value : value[lang] ?? value.en;

const EMAIL = "virangdalwadi0406@gmail.com";
const PHONE = "+91 9409935550";

export const privacy: LegalDoc = {
  title: { fr: "Confidentialité", en: "Privacy" },
  kicker: { fr: "Politique de confidentialité", en: "Privacy policy" },
  updated: "2026-10-28",
  summary: {
    title: { fr: "En bref", en: "In short" },
    items: [
      {
        fr: "Les informations envoyées par le formulaire servent à répondre à votre message.",
        en: "Information submitted through the contact form is used to respond to your message.",
      },
      {
        fr: "Les outils facultatifs de mesure et de diagnostic ne sont activés qu’après consentement et lorsqu’ils sont configurés.",
        en: "Optional analytics and diagnostics are enabled only after consent and when configured.",
      },
      {
        fr: "Les préférences du site sont conservées dans le stockage local de votre navigateur.",
        en: "Site preferences are stored in your browser’s local storage.",
      },
    ],
  },
  sections: [
    {
      id: "responsible",
      title: { fr: "Responsable", en: "Contact" },
      blocks: [
        {
          p: {
            fr: `Ce portfolio est publié par Virang Dalwadi, développeur MERN basé à Ahmedabad, en Inde. Pour toute question relative à cette politique, écrivez à ${EMAIL}.`,
            en: `This portfolio is published by Virang Dalwadi, a MERN Stack Developer based in Ahmedabad, India. For questions about this policy, email ${EMAIL}.`,
          },
        },
      ],
    },
    {
      id: "information",
      title: { fr: "Informations et utilisation", en: "Information and use" },
      blocks: [
        { p: { fr: "Formulaire de contact", en: "Contact form" } },
        {
          list: [
            {
              fr: "Si le formulaire est activé, il transmet le nom, l’adresse courriel et le message saisis afin de répondre à votre demande. Le service EmailJS est utilisé pour transmettre le message.",
              en: "When enabled, the form submits the name, email address, and message you provide so your inquiry can be answered. EmailJS is used to relay the message.",
            },
            {
              fr: "Si le formulaire n’est pas configuré, le site fournit un lien courriel direct.",
              en: "If the form is not configured, the site provides a direct email link instead.",
            },
          ],
        },
        { p: { fr: "Mesure et diagnostic", en: "Analytics and diagnostics" } },
        {
          list: [
            {
              fr: "Google Analytics et Sentry peuvent être utilisés pour comprendre l’utilisation du site et diagnostiquer les erreurs, uniquement lorsqu’ils sont configurés et après votre consentement.",
              en: "Google Analytics and Sentry may be used to understand site usage and diagnose errors, only when configured and after you consent.",
            },
          ],
        },
        { p: { fr: "Stockage dans le navigateur", en: "Browser storage" } },
        {
          list: [
            {
              fr: "Le site utilise le stockage local du navigateur pour mémoriser certaines préférences, dont la langue et le consentement.",
              en: "The site uses browser local storage to remember preferences such as language and consent.",
            },
          ],
        },
      ],
    },
    {
      id: "services",
      title: { fr: "Services tiers", en: "Third-party services" },
      blocks: [
        {
          p: {
            fr: "Selon les fonctionnalités utilisées et les paramètres activés, des informations peuvent être traitées par EmailJS (formulaire de contact), Google Analytics (statistiques) ou Sentry (diagnostic technique). Les liens de démonstration ouvrent des sites externes soumis à leurs propres politiques.",
            en: "Depending on the features used and settings enabled, information may be processed by EmailJS (contact form), Google Analytics (analytics), or Sentry (technical diagnostics). Demo links open external websites governed by their own policies.",
          },
        },
      ],
    },
    {
      id: "requests",
      title: { fr: "Questions et demandes", en: "Questions and requests" },
      blocks: [
        {
          p: {
            fr: `Pour toute question ou demande concernant les informations envoyées au moyen de ce site, contactez ${EMAIL}.`,
            en: `For questions or requests concerning information submitted through this site, contact ${EMAIL}.`,
          },
        },
      ],
    },
  ],
};

export const legal: LegalDoc = {
  title: { fr: "Mentions légales", en: "Legal notice" },
  kicker: { fr: "Informations sur le site", en: "Website information" },
  updated: "2026-10-28",
  summary: {
    title: { fr: "Éditeur", en: "Publisher" },
    items: [
      {
        fr: "Virang Dalwadi · Développeur MERN",
        en: "Virang Dalwadi · MERN Stack Developer",
      },
      { fr: "Ahmedabad, Gujarat, Inde", en: "Ahmedabad, Gujarat, India" },
      { fr: EMAIL, en: EMAIL },
    ],
  },
  sections: [
    {
      id: "publisher",
      title: { fr: "Éditeur et contact", en: "Publisher and contact" },
      blocks: [
        {
          p: {
            fr: `Ce portfolio personnel est édité par Virang Dalwadi, développeur MERN. Courriel : ${EMAIL}. Téléphone : ${PHONE}.`,
            en: `This personal portfolio is published by Virang Dalwadi, a MERN Stack Developer. Email: ${EMAIL}. Phone: ${PHONE}.`,
          },
        },
        {
          p: {
            fr: "Adresse du site : https://virang.vercel.app/.",
            en: "Website: https://virang.vercel.app/.",
          },
        },
      ],
    },
    {
      id: "content",
      title: {
        fr: "Contenu et liens externes",
        en: "Content and external links",
      },
      blocks: [
        {
          p: {
            fr: "Les textes de présentation décrivent le parcours, les compétences, la formation et les projets communiqués par l’éditeur. Les liens vers les démonstrations de projets mènent à des sites externes, dont le contenu et le fonctionnement ne sont pas contrôlés par ce portfolio.",
            en: "Profile text describes the experience, skills, education, and projects supplied by the publisher. Project demo links lead to external sites whose content and operation are not controlled by this portfolio.",
          },
        },
      ],
    },
  ],
};
