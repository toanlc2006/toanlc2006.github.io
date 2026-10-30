export interface NavItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  facebook?: string;
  website?: string;
  resumeUrl?: string;
  statusBadge: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  // Thay thế các thông tin dưới đây bằng thông tin cá nhân của bạn:
  name: "toanlc2006",
  role: "IT Student & Software Developer",
  tagline: "Building scalable web solutions, learning deeply, and turning ideas into impactful digital products.",
  shortBio: "Sinh viên ngành Công nghệ Thông tin với đam mê về Frontend hiện đại, tối ưu hiệu năng và kiến trúc hệ thống web sạch sẽ.",
  email: "contact.toanlc2006@gmail.com",
  location: "Vietnam",
  github: "https://github.com/toanlc2006",
  linkedin: "", // Để trống nếu chưa có
  facebook: "", // Để trống nếu chưa có
  website: "https://toanlc2006.github.io",
  resumeUrl: "", // Đường dẫn file CV nếu có (ví dụ: "/cv.pdf")
  statusBadge: "Learning · Building · Exploring",
  
  navItems: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Projects", href: "/projects/" },
    { name: "Posts", href: "/posts/" },
    { name: "Stack", href: "/stack/" },
    { name: "Contact", href: "/contact/" },
  ],
};
