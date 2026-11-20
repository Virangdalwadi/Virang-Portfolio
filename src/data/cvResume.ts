// Content of the printable resume. Contact details come from portfolio.

export const cvResume = {
  summary:
    "Entry-level MERN Stack Developer skilled in building responsive, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in REST API development, component-based architecture, and frontend-backend integration, with a focus on clean code and user experience.",

  technicalSkills: [
    { label: "Programming", value: "JavaScript(ES6+), TypeScript" },
    {
      label: "Frontend",
      value: "HTML5, CSS3, JavaScript, Tailwind CSS, React.js, Redux",
    },
    {
      label: "Backend",
      value:
        "Node.js, Express.js, RESTful APIs, JWT Authentication & Razorpay Integration",
    },
    { label: "Database", value: "MongoDB, Mongoose" },
    {
      label: "Tools",
      value: "VS Code, Git, GitHub, Postman, MySQL Workbench, Vercel & Render",
    },
  ],

  softSkills: [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "JG University, Ahmedabad",
      period: "2024 - 2026",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "JG College of Computer Applications",
      period: "2021 - 2024",
    },
  ],

  projects: [
    {
      name: "Flipkart-Clone",
      liveDemo: "https://flipkart-clone-6bsn.vercel.app/",
      bullets: [
        "Developed a full-stack e-commerce web application inspired by Flipkart with product listing, product details, and shopping cart features",
        "Implemented frontend using React.js with responsive UI design",
        "Built backend REST APIs using Node.js and Express.js, Managed Product & User Data using MongoDB.",
        "Applied CRUD operations and component-based architecture",
      ],
      techStack: "MongoDB, Express.js, React.js, Node.js (MERN Stack)",
    },
  ],

  experience: [
    {
      title: "MERN Stack Intern",
      company: "Brainerhub Solution",
      duration: "6 Months",
      period: "May 2026 - Present",
      bullets: [
        "Developed reusable React.js UI components and improved website responsiveness and user experience",
        "Built RESTful APIs using Node.js and Express.js, with MongoDB databases and schemas managed through Mongoose",
        "Integrated frontend with backend APIs and learned frontend optimization to improve performance and page load speed",
        "Deployed frontend on Vercel and backend on Render while collaborating with team members to meet project requirements",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "QueryFinders Solution",
      duration: "45 Days",
      period: "Jun 2024 - Aug 2024",
      bullets: [
        "Developed reusable UI components using React.js",
        "Improved website responsiveness and user experience, worked with JavaScript, HTML & CSS.",
        "Collaborated with team members to meet project requirements",
      ],
    },
  ],

  additional: [{ label: "Languages", value: "Gujarati, Hindi, English" }],
};
