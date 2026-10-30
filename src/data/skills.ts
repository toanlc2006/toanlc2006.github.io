export type SkillProficiency = "Comfortable" | "Learning" | "Exploring";

export interface SkillItem {
  name: string;
  category: string;
  level: SkillProficiency;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Các ngôn ngữ nền tảng được dùng trong học tập và phát triển ứng dụng.",
    skills: [
      { name: "JavaScript (ES6+)", category: "Languages", level: "Comfortable", highlight: true },
      { name: "TypeScript", category: "Languages", level: "Comfortable", highlight: true },
      { name: "HTML5 / Semantic HTML", category: "Languages", level: "Comfortable" },
      { name: "CSS3 / Modern CSS", category: "Languages", level: "Comfortable" },
      { name: "C / C++", category: "Languages", level: "Learning" },
      { name: "Java", category: "Languages", level: "Learning" },
    ],
  },
  {
    title: "Frontend & UI Engineering",
    description: "Thư viện và công nghệ tạo giao diện người dùng hiện đại, responsive và tối ưu hiệu năng.",
    skills: [
      { name: "Astro", category: "Frontend", level: "Comfortable", highlight: true },
      { name: "Responsive Web Design", category: "Frontend", level: "Comfortable", highlight: true },
      { name: "CSS Grid & Flexbox", category: "Frontend", level: "Comfortable" },
      { name: "Canvas 2D API", category: "Frontend", level: "Learning" },
      { name: "React Ecosystem", category: "Frontend", level: "Learning" },
      { name: "Tailwind CSS", category: "Frontend", level: "Learning" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Kiến thức nền tảng về xử lý máy chủ, RESTful API và cơ sở dữ liệu.",
    skills: [
      { name: "Node.js Runtime", category: "Backend", level: "Learning" },
      { name: "RESTful API Concept", category: "Backend", level: "Comfortable" },
      { name: "SQL / Relational Databases", category: "Backend", level: "Learning" },
      { name: "SQLite / MySQL", category: "Backend", level: "Learning" },
    ],
  },
  {
    title: "Tools & Development Workflow",
    description: "Bộ công cụ và môi trường phục vụ quản lý mã nguồn, cộng tác và triển khai tự động.",
    skills: [
      { name: "Git & GitHub", category: "Tools", level: "Comfortable", highlight: true },
      { name: "GitHub Actions (CI/CD)", category: "Tools", level: "Comfortable", highlight: true },
      { name: "VS Code & Extensions", category: "Tools", level: "Comfortable" },
      { name: "Chrome DevTools", category: "Tools", level: "Comfortable" },
      { name: "Figma (UI Inspection)", category: "Tools", level: "Exploring" },
      { name: "Postman", category: "Tools", level: "Learning" },
    ],
  },
  {
    title: "Currently Exploring",
    description: "Những chủ đề và công nghệ đang tích cực nghiên cứu và thử nghiệm.",
    skills: [
      { name: "Web Performance & Core Web Vitals", category: "Currently Exploring", level: "Exploring" },
      { name: "Static Site Generation (SSG)", category: "Currently Exploring", level: "Exploring" },
      { name: "Design Systems & Micro-Interactions", category: "Currently Exploring", level: "Exploring" },
    ],
  },
];
