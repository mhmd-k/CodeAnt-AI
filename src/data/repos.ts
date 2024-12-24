import { Repository } from "@/types";

export const fakeRepos: Repository[] = [
  {
    id: 1,
    name: "design-system",
    privacy: "public",
    language: "React",
    size: 7320 * 1024,
    lastTimeUpdated: new Date("12-22-2024"),
  },
  {
    id: 2,
    name: "codeant-ci-app",
    privacy: "private",
    language: "JavaScript",
    size: 5871 * 1024,
    lastTimeUpdated: new Date("12-21-2024"),
  },
  {
    id: 3,
    name: "analytics-dashboard",
    privacy: "private",
    language: "Python",
    size: 4521 * 1024,
    lastTimeUpdated: new Date("12-18-2024"),
  },
  {
    id: 4,
    name: "mobile-app",
    privacy: "public",
    language: "Swift",
    size: 3096 * 1024,
    lastTimeUpdated: new Date("12-20-2024"),
  },
  {
    id: 5,
    name: "e-commerce-platform",
    privacy: "private",
    language: "Java",
    size: 6210 * 1024,
    lastTimeUpdated: new Date("12-17-2024"),
  },
  {
    id: 6,
    name: "blog-website",
    privacy: "public",
    language: "HTML/CSS",
    size: 1876 * 1024,
    lastTimeUpdated: new Date("12-19-2024"),
  },
  {
    id: 7,
    name: "social-network",
    privacy: "private",
    language: "PHP",
    size: 5432 * 1024,
    lastTimeUpdated: new Date("12-16-2024"),
  },
];