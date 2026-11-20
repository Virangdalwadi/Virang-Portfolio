export type LocalizedText = { en: string; fr: string };

export const emailComposeUrl = (email: string, subject = '', body = '') => {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: email });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const profile = {
  name: "Virang Dalwadi",
  role: "MERN Stack Developer",
  location: { en: "Ahmedabad", fr: "Ahmedabad" },
  region: { en: "Gujarat, India", fr: "Gujarat, Inde" },
  email: "virangdalwadi0406@gmail.com",
  phone: "+91 9409935550",
  phoneHref: "tel:+919409935550",
  portfolio: "https://virang.vercel.app/",
  github: "https://github.com/Virangdalwadi",
  linkedin: "https://www.linkedin.com/in/virang-dalwadi-07b8b7315/",
  summary: {
    en: "I am a MERN Stack Developer with hands-on experience building responsive, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I work with reusable React components, RESTful API development, frontend-backend integration, database management, and responsive UI design. I enjoy solving problems, writing clean code, and building user-friendly web experiences.",
  },
  heroLead: {
    en: "Building responsive, modern, and user-friendly web applications.",
    fr: "Je crée des applications web modernes, adaptatives et faciles à utiliser.",
  },
};

export const skillCategories = [
  {
    title: { en: "Programming", fr: "Programmation" },
    skills: ["JavaScript (ES6+)", "Python"],
  },
  {
    title: { en: "Frontend", fr: "Frontend" },
    skills: ["HTML5", "CSS3", "React.js", "Redux", "Tailwind CSS"],
  },
  {
    title: { en: "Backend", fr: "Backend" },
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT authentication"],
  },
  {
    title: { en: "Databases", fr: "Bases de données" },
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: { en: "Tools & deployment", fr: "Outils et déploiement" },
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "MySQL Workbench",
      "Vercel",
      "Render",
    ],
  },
  {
    title: { en: "Soft skills", fr: "Compétences relationnelles" },
    skills: [
      "Communication",
      "Problem-solving",
      "Team collaboration",
      "Adaptability",
      "Time management",
    ],
  },
];

export const experience = [
  {
    title: { en: "MERN Stack Intern", fr: "Stagiaire développeur MERN" },
    company: "Brainerhub Solution",
    location: { en: "Thaltej, Ahmedabad", fr: "Thaltej, Ahmedabad" },
    period: "May 2026 – October 2026",
    periodFr: "Mai 2026 – octobre 2026",
    description: {
      en: "Developed reusable React.js components, improved responsive interfaces, built REST APIs with Node.js and Express.js, worked with MongoDB and Mongoose, integrated frontend applications with backend APIs, optimized frontend performance, deployed applications using Vercel and Render, and collaborated with team members on project requirements.",
    },
  },
  {
    title: {
      en: "Frontend Developer Intern",
      fr: "Stagiaire développeur frontend",
    },
    company: "QueryFinders Solution",
    location: { en: "Vastral, Ahmedabad", fr: "Vastral, Ahmedabad" },
    period: "June 2024 – August 2024",
    periodFr: "Juin 2024 – août 2024",
    description: {
      en: "Developed reusable React.js UI components, improved website responsiveness and user experience, worked with JavaScript, HTML, and CSS, and collaborated with teammates on project requirements.",
      fr: "Développement de composants d’interface React.js réutilisables, amélioration de l’adaptabilité et de l’expérience utilisateur des sites, utilisation de JavaScript, HTML et CSS, et collaboration avec l’équipe sur les besoins des projets.",
    },
  },
];

export const education = [
  {
    title: {
      en: "Master of Computer Applications (MCA)",
    },
    school: "JG University, Ahmedabad",
    period: "2024–2026",
  },
  {
    title: {
      en: "Bachelor of Computer Applications (BCA)",
      fr: "Bachelor of Computer Applications (BCA)",
    },
    school: "JG College of Computer Applications, Ahmedabad",
    period: "2021–2024",
  },
];

export const labels = {
  about: { en: "About me", fr: "À propos" },
  skills: { en: "Technical skills", fr: "Compétences techniques" },
  experience: { en: "Experience", fr: "Expérience" },
  education: { en: "Education", fr: "Formation" },
  liveDemo: { en: "Live Demo", fr: "Démo en ligne" },
  viewResume: { en: "View Resume", fr: "Voir le CV" },
  printResume: {
    en: "Print / Save as PDF",
    fr: "Imprimer / Enregistrer en PDF",
  },
  contact: { en: "Contact me", fr: "Me contacter" },
};
