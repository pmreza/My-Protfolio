import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "shapouri-plastic",
    title: "Shapouri Plastic",
    description: "Full-Stack web application for Shapouri Plastic Industries. Engineered backend with C# .NET and a dynamic responsive frontend using JavaScript. Created comprehensive admin panel for catalog management.",
    link: "https://shapouriplastic.ir",
    skills: ["C#", ".NET", "JavaScript", "Frontend Development", "Admin Panel"],
    period: {
      start: "2023",
      end: "2024"
    }
  },
  {
    id: "jewelry-store",
    title: "Online Jewelry Store",
    description: "Backend architecture using Java and Spring Boot for an online jewelry store. Features e-commerce modules (cart, inventory), secure RESTful APIs, and integration with PostgreSQL database.",
    link: "http://nafiseebadijewellery.com",
    skills: ["Java", "Spring Boot", "PostgreSQL", "RESTful API", "E-commerce"],
    period: {
      start: "2022",
      end: "2023"
    }
  },
  {
    id: "ytdownloader",
    title: "YTDownloader Beta",
    description: "YouTube content extractor and downloader tool. Implemented asynchronous operations for fast video/audio downloads, IO stream management, and integration with third-party APIs for metadata extraction.",
    link: "https://github.com/pmreza/YTDownloaderBeta",
    skills: ["C#", "Asynchronous Processing", "Network IO", "API Integration", "Clean Code"],
    period: {
      start: "2023",
      end: "2024"
    }
  },
  {
    id: "insurance-api",
    title: "Insurance Core API & Sales Dashboard",
    description: "Microservices-based insurance management system using ASP.NET Core. Designed core API for business logic and integrated a sales dashboard for policy management and issue tracking.",
    link: "https://github.com/pmreza/insurance-sales-dashboard",
    skills: ["ASP.NET Core", "Microservices", "RESTful API", "Enterprise Architecture"],
    period: {
      start: "2023",
      end: "2024"
    }
  },
  {
    id: "fatemeh-ebadi",
    title: "Fatemeh Ebadi Booking System",
    description: "Dual-purpose platform for skincare product sales and online service booking. Features a complex scheduling system with conflict resolution, e-commerce cart, and specialized admin dashboard.",
    link: "https://www.fatemehebadi.com",
    skills: ["Full-Stack", "Scheduling Algorithm", "Database Design", "API Development"],
    period: {
      start: "2023",
      end: "2024"
    }
  },
];
