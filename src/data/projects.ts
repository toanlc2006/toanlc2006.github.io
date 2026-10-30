export type ProjectStatus = "Completed" | "In Progress" | "Learning Project";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  category: "Web" | "JavaScript" | "Academic" | "Tools";
  tags: string[];
  cover: string;
  githubUrl?: string;
  demoUrl?: string;
  status: ProjectStatus;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio & Blog",
    description: "Trang web portfolio cá nhân hiệu năng cao với hiệu ứng nền ambient mượt mà, quản lý bài viết bằng Markdown Collections và tự động deploy qua GitHub Actions.",
    role: "Full Design & Frontend Development",
    category: "Web",
    tags: ["Astro", "TypeScript", "HTML5/CSS3", "GitHub Actions"],
    cover: "/images/projects/project-1.svg",
    githubUrl: "https://github.com/toanlc2006/toanlc2006.github.io",
    demoUrl: "https://toanlc2006.github.io",
    status: "Completed",
    featured: true,
  },
  {
    id: "dev-syntax-inspector",
    title: "Interactive Code Syntax Tool",
    description: "Bộ công cụ trực quan hóa cây cú pháp và kiểm tra logic thuật toán bằng JavaScript thuần, hỗ trợ phân tích luồng thực thi trong môi trường học tập.",
    role: "Frontend Developer",
    category: "JavaScript",
    tags: ["JavaScript", "Canvas API", "Algorithms", "CSS Grid"],
    cover: "/images/projects/project-2.svg",
    githubUrl: "", // Để trống nếu là dự án nội bộ / đang phát triển
    demoUrl: "",
    status: "In Progress",
    featured: true,
  },
  {
    id: "student-academic-tracker",
    title: "Student Academic & Goal Tracker",
    description: "Hệ thống quản lý thời khóa biểu, tiến độ đồ án và mục tiêu học tập dành cho sinh viên IT, tập trung vào trải nghiệm tối giản và lưu trữ cục bộ tiện lợi.",
    role: "System Design & UI Implementation",
    category: "Academic",
    tags: ["TypeScript", "Local Storage", "Responsive UI", "SPA"],
    cover: "/images/projects/project-3.svg",
    githubUrl: "",
    demoUrl: "",
    status: "Learning Project",
    featured: true,
  },
];
