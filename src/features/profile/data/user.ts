import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Mohammad Amin",
  lastName: "Ahmadi",
  displayName: "Mohammad Amin",
  username: "pmreza",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineer and Full-Stack developer with a focus on Backend architecture and the .NET ecosystem.",
  timeZone: "Asia/Tehran",
  flipSentences: [
    "Full-Stack .Net Developer",
    "Backend Architect",
    "Software Engineer",
  ],
  address: "Tehran, Iran",
  phoneNumber: "Kzk4OTEyMDIzODkyNw==", // E.164 format, base64 encoded
  secondPhoneNumber: "",
  email: "cG1yZXphMDgzMUBnbWFpbC5jb20=", // base64 encoded
  website: "https://github.com/pmreza",
  jobTitle: "Full-Stack .Net Developer",
  jobs: [
    {
      title: "Full Stack .Net Developer",
      company: "Freelance",
      website: "",
    },
    {
      title: "Full Stack .Net Developer",
      company: "Pazhoohesh Tose'e",
      website: "",
    },
  ],
  about: `
- **Software Engineer & Full-Stack Developer** focused on Backend architecture and the **.NET ecosystem**.
- Bachelor's degree in Computer Engineering.
- **Backend Specialization:** Scalable software using **C#** and **ASP.NET Core**, microservices, relational databases (SQL Server, PostgreSQL), and NoSQL (MongoDB).
- **Frontend Skills:** Modern, responsive interfaces using **React.js**, **Next.js**, and **Tailwind CSS**. Experience creating 3D interactive web visuals with **Three.js**.
- Strong foundation in **RESTful API** design, **Authentication/Authorization**, web security, and complete End-to-End software lifecycle management.
- Experience managing Linux deployments and source code control using Git/GitLab.
- Dedicated to **Clean Code** principles, leveraging modern technologies to create sustainable value for businesses.
`,
  avatar: "/images/avatar.webp",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "",
  keywords: [
    "Mohammad Amin Ahmadi",
    "Mohammad Amin",
    "pmreza",
    "Full-Stack .Net Developer",
    "Backend Developer",
    "C# Developer",
    "ASP.NET Core",
    "Software Engineer",
  ],
  dateCreated: "2026-09-19", // YYYY-MM-DD
};
