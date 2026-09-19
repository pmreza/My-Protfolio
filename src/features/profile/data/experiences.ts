import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=Freelance",
    positions: [
      {
        id: "full-stack-freelance",
        title: "Full Stack .Net Developer",
        employmentPeriod: {
          start: "04.2024",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `- Experienced Full-Stack Developer in designing, developing, and deploying modern, secure web applications.
- Built backends and APIs: Designed and implemented efficient, standard RESTful APIs.
- Database Management: Mastered design and operations of relational databases (SQL Server, PostgreSQL) and non-relational (MongoDB) based on project needs.
- Frontend Development: Designed responsive, attractive UI using React.js and Tailwind CSS. Implemented 3D experiences with Three.js and utilized Next.js for SSR and SEO.
- Security & Auth: Implemented precise authentication/authorization and web security standards (Rate Limiting, XSS, CSRF protection).
- Deployment & Infrastructure: Successfully configured, launched, and deployed projects on Linux servers.
- Version Control: Managed source code and collaborated using Git and GitLab.`,
        skills: [
          "C#",
          ".NET Core",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Three.js",
          "PostgreSQL",
          "SQL Server",
          "MongoDB",
          "Git",
          "GitLab",
          "Docker",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "pazhoohesh-tosee",
    companyName: "Pazhoohesh Tose'e",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=PT",
    positions: [
      {
        id: "full-stack-pt",
        title: "Full Stack .Net Developer",
        employmentPeriod: {
          start: "04.2021",
          end: "04.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed server-side architecture for e-commerce platforms, landing pages, and web applications using C# and ASP.NET.
- Programmed dynamic frontend interfaces with JavaScript and precisely implemented Figma UI designs into structured code.
- Designed and developed efficient APIs for secure, integrated, and fast communication between client and server in full-stack projects.
- Optimized website performance, debugged systems, and elevated the interaction level of client and server code for better UX.`,
        skills: [
          "C#",
          "ASP.NET",
          "JavaScript",
          "Figma",
          "RESTful APIs",
          "System Optimization",
          "Frontend Architecture",
          "Backend Architecture",
        ],
      },
    ],
  },
  {
    id: "iranwow",
    companyName: "iranwow",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=iranwow",
    positions: [
      {
        id: "wow-community",
        title: "WOW Community Manager",
        employmentPeriod: {
          start: "04.2023",
          end: "04.2026",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Managed valuation and trading of goods and virtual resources via auction systems and free markets in a digital ecosystem.
- Constantly provided online resources and directly executed financial transactions with other users in a large interactive environment aimed at profit generation.`,
        skills: [
          "Community Management",
          "Digital Ecosystems",
          "Market Trading",
        ],
      },
    ],
  },
  {
    id: "niusha-nik-darian",
    companyName: "Niusha Nik Darian",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=NND",
    positions: [
      {
        id: "sales-rep",
        title: "Sales Representative",
        employmentPeriod: {
          start: "04.2018",
          end: "04.2021",
        },
        employmentType: "Full-time",
        icon: "education",
        description: `- Provided expert health and lifestyle consultation to clients.
- Marketed and acquired new customers, maintaining continuous and effective relationships to track product effectiveness.
- Managed the entire sales cycle of Pars Niusha Nik products.`,
        skills: [
          "Sales",
          "Marketing",
          "Customer Relations",
          "Consultation",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "bachelor-cs",
        title: "Bachelor in Computer Engineering",
        employmentPeriod: {
          start: "09.2021",
          end: "07.2026",
        },
        icon: "education",
        description: `- Focus on software engineering, algorithms, and full-stack development.`,
        skills: [
          "Computer Engineering",
          "Software Engineering",
          "Algorithms",
        ],
      },
    ],
  },
];
