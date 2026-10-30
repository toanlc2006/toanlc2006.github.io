# 🌌 Personal Portfolio & Markdown Blog

Website Portfolio cá nhân hiện đại với hiệu ứng ánh sáng ambient, khói mờ và tàn lửa nhẹ nhàng, tích hợp hệ thống blog Markdown hoàn chỉnh và tự động triển khai lên **GitHub Pages** bằng **GitHub Actions**.

Dự án được xây dựng dựa trên đặc tả chi tiết trong `PORTFOLIO_PLAN.md`.

---

## 🚀 Tính năng nổi bật

- ⚡ **Siêu tốc & Zero-JS mặc định:** Xây dựng bằng Astro 5 static site generator, tối ưu hóa điểm số Core Web Vitals.
- 🎨 **Giao diện Dark Ambient sang trọng:** Bảng màu tối có chiều sâu (`#070914`, `#101426`), chuyển màu mượt mà kết hợp hiệu ứng tàn lửa (ember particles) bằng Canvas 2D nhẹ nhàng, tự động ngắt khi ẩn tab và hỗ trợ `prefers-reduced-motion`.
- 📝 **Markdown Blog hoàn chỉnh:** Quản lý bài viết có cấu trúc với Astro Content Collections, hỗ trợ tìm kiếm bài viết thời gian thực, lọc theo chuyên mục và tags, code syntax highlighting và ước tính thời gian đọc.
- 📱 **Responsive 100%:** Tối ưu hóa trải nghiệm mượt mà từ màn hình điện thoại 320px đến màn hình 4K.
- ⚙️ **Dữ liệu tập trung:** Toàn bộ thông tin cá nhân, mạng xã hội, dự án và bộ kỹ năng được quản lý tại một thư mục duy nhất (`src/data/`).
- 🤖 **CI/CD Tự động:** Tích hợp sẵn workflow GitHub Actions, tự động build và xuất bản lên GitHub Pages mỗi khi push mã nguồn.

---

## 📂 Cấu trúc thư mục

```text
toanlc2006.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow tự động deploy lên GitHub Pages
├── public/
│   ├── favicon.svg             # Biểu tượng website
│   ├── images/
│   │   ├── profile/            # Ảnh đại diện cá nhân
│   │   ├── projects/           # Ảnh thumbnail dự án
│   │   └── posts/              # Ảnh bìa bài viết Markdown
│   └── robots.txt
├── src/
│   ├── components/             # Các component tái sử dụng (Navbar, Footer, BackgroundEffects...)
│   ├── content/
│   │   └── posts/              # Thư mục chứa các bài viết Markdown (.md)
│   ├── data/
│   │   ├── site.ts             # Cấu hình thông tin cá nhân, mạng xã hội, menu
│   │   ├── projects.ts         # Danh sách dữ liệu dự án & bộ lọc
│   │   └── skills.ts           # Danh sách kỹ năng & công nghệ
│   ├── layouts/                # BaseLayout & PostLayout
│   ├── pages/
│   │   ├── index.astro         # Trang chủ (/)
│   │   ├── about.astro         # Giới thiệu bản thân (/about/)
│   │   ├── projects.astro      # Danh sách dự án (/projects/)
│   │   ├── posts/
│   │   │   ├── index.astro     # Danh sách blog & tìm kiếm (/posts/)
│   │   │   └── [...slug].astro # Chi tiết bài viết (/posts/[slug]/)
│   │   ├── stack.astro         # Kỹ năng & công cụ (/stack/)
│   │   ├── contact.astro       # Thông tin liên hệ (/contact/)
│   │   └── 404.astro           # Trang báo lỗi 404
│   ├── styles/                 # global.css, animations.css, markdown.css
│   └── content.config.ts       # Khai báo schema kiểm tra tính hợp lệ của Markdown
├── astro.config.mjs            # Cấu hình site & base URL cho GitHub Pages
├── package.json
└── tsconfig.json
```

---

## 🛠️ Hướng dẫn cài đặt & Chạy trên máy cá nhân (Local)

### 1. Yêu cầu môi trường
- Đã cài đặt **Node.js** (phiên bản 18.17 hoặc 20+ khuyến nghị).
- Trình quản lý gói `npm` (đi kèm sẵn với Node.js).

### 2. Cài đặt dependencies
Mở Terminal / PowerShell tại thư mục dự án và chạy:
```bash
npm install
```

### 3. Khởi động môi trường phát triển (Dev Server)
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:4321/`

### 4. Kiểm tra TypeScript & Schema
```bash
npm run check
```

### 5. Build kiểm tra sản phẩm hoàn chỉnh
```bash
npm run build
npm run preview
```

---

## ✏️ Các file cần chỉnh sửa đầu tiên để cá nhân hóa

Toàn bộ thông tin cá nhân được gom gọn vào 3 file tại thư mục `src/data/`:

### 1. Thông tin cá nhân (`src/data/site.ts`)
Mở file `src/data/site.ts` để sửa:
- `name`: Tên của bạn.
- `role`: Chức danh / vai trò nghề nghiệp.
- `tagline`: Câu châm ngôn ngắn.
- `shortBio`: Đoạn giới thiệu tóm tắt.
- `email`: Email nhận liên hệ.
- `location`: Nơi sinh sống / làm việc.
- `github`, `linkedin`, `facebook`, `website`: Liên kết mạng xã hội (để chuỗi rỗng `""` nếu không dùng).

### 2. Danh sách dự án (`src/data/projects.ts`)
Thêm, xóa hoặc chỉnh sửa dự án trong mảng `projectsData`. Mỗi dự án gồm:
- `title`: Tên dự án.
- `description`: Mô tả ngắn (1-3 câu).
- `role`: Vai trò của bạn trong dự án.
- `category`: `"Web"` | `"JavaScript"` | `"Academic"` | `"Tools"`.
- `tags`: Các công nghệ sử dụng (`["Astro", "TypeScript", ...]`).
- `cover`: Đường dẫn ảnh bìa (đặt ảnh vào thư mục `public/images/projects/`).
- `githubUrl`: Link GitHub (để trống nếu không công khai).
- `demoUrl`: Link demo trực tiếp (để trống nếu chưa có).
- `status`: `"Completed"` | `"In Progress"` | `"Learning Project"`.

### 3. Bộ kỹ năng (`src/data/skills.ts`)
Tùy chỉnh các nhóm kỹ năng (Languages, Frontend, Backend, Tools) và mức độ:
- `level`: `"Comfortable"` | `"Learning"` | `"Exploring"`.

---

## ✍️ Hướng dẫn viết và đăng bài Markdown Blog

Để đăng một bài viết mới, bạn **không cần can thiệp vào mã nguồn giao diện**:

1. Tạo một file `.md` mới trong thư mục `src/content/posts/` (ví dụ: `kinh-nghiem-tu-hoc-lap-trinh.md`).
2. Khai báo phần Frontmatter ở đầu file:

```markdown
---
title: "Tiêu đề bài viết của bạn"
description: "Mô tả ngắn gọn về nội dung bài viết hiển thị ở trang danh sách."
pubDate: 2026-10-30
category: "Learning Notes"
tags:
  - JavaScript
  - Tips
cover: "/images/posts/welcome.svg"
featured: true
draft: false
---

# Nội dung bài viết

Viết nội dung bài viết bằng Markdown thông thường...

```javascript
console.log("Hỗ trợ syntax highlighting tự động!");
```
```

> **Lưu ý:**
> - Nếu đặt `draft: true`, bài viết sẽ chỉ xuất hiện khi bạn chạy `npm run dev` ở máy cá nhân và **tự động bị ẩn đi khi website xuất bản trên GitHub Pages**.
> - Đặt ảnh bìa tại thư mục `public/images/posts/` và dẫn link dạng `/images/posts/ten-anh.png`.

---

## 🌐 Hướng dẫn triển khai lên GitHub Pages

Website đã được thiết lập sẵn file workflow `.github/workflows/deploy.yml` theo chuẩn chính thức của Astro.

### Bước 1: Kiểm tra cấu hình `astro.config.mjs`
Mặc định dự án được cấu hình cho repository dạng User Site `https://toanlc2006.github.io`:
```javascript
export default defineConfig({
  site: 'https://toanlc2006.github.io',
  base: '/',
});
```

*(Nếu bạn triển khai lên một repository có tên khác, ví dụ `https://github.com/username/my-portfolio`, bạn chỉ cần chỉnh `site: 'https://username.github.io'` và `base: '/my-portfolio'`)*.

### Bước 2: Đẩy mã nguồn lên GitHub
```bash
git add .
git commit -m "feat: complete modern portfolio website"
git push origin main
```

### Bước 3: Bật tính năng GitHub Actions trong GitHub Pages
1. Truy cập vào kho mã nguồn trên trình duyệt: `https://github.com/toanlc2006/toanlc2006.github.io`
2. Chọn tab **Settings** (Cài đặt) ở trên cùng.
3. Ở cột menu bên trái, nhấn vào **Pages**.
4. Tại mục **Build and deployment** -> **Source**, bấm chọn **GitHub Actions** (thay vì *Deploy from a branch*).
5. Chuyển sang tab **Actions** để xem tiến trình build và deploy tự động.
6. Sau khoảng 1-2 phút, website của bạn sẽ chính thức hoạt động tại địa chỉ: `https://toanlc2006.github.io`!
