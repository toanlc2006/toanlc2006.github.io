# PORTFOLIO WEBSITE — SPECIFICATION & PROMPT FOR CODING AGENT

> **Mục đích:** Dùng tài liệu này làm yêu cầu đầu vào cho AI Coding Agent (Claude Code, Codex, Cursor Agent, Windsurf...). Agent cần đọc toàn bộ tài liệu, sau đó trực tiếp tạo website hoàn chỉnh trong repository hiện tại.
>
> **Tên dự án tạm thời:** Personal Portfolio
>
> **Nền tảng triển khai:** GitHub Pages
>
> **Ngôn ngữ nội dung:** Có thể tùy chỉnh Việt/Anh. Tên menu mặc định dùng tiếng Anh: Home, About, Projects, Posts, Stack, Contact.
>
> **Định hướng:** Portfolio cá nhân hiện đại, có chiều sâu thị giác, nền chuyển màu mượt, hiệu ứng ánh sáng – khói – tàn lửa chuyển động tinh tế; ưu tiên trải nghiệm đọc, tốc độ tải và khả năng bảo trì.

---

## 1. Vai trò và nhiệm vụ của Coding Agent

Bạn là một **Senior Front-end Developer kiêm UI/UX Designer**. Hãy xây dựng một website portfolio cá nhân hoàn chỉnh theo đặc tả bên dưới.

### Quy tắc làm việc

1. Trước tiên, kiểm tra repository hiện tại. Nếu đã có dự án, hãy hiểu cấu trúc và tận dụng phần phù hợp; không xóa hoặc ghi đè dữ liệu có ích khi chưa cần thiết.
2. Nếu repository trống, hãy khởi tạo dự án mới.
3. Không chỉ trả lời bằng hướng dẫn hoặc đoạn code minh họa. Hãy **tạo đầy đủ các file cần thiết, cài đặt dependencies phù hợp, chạy kiểm tra và sửa lỗi**.
4. Ưu tiên code dễ đọc, chia component hợp lý, đặt tên rõ nghĩa và tránh tạo cấu trúc quá phức tạp.
5. Không tự bịa thông tin cá nhân, dự án, email, GitHub, mạng xã hội hoặc thành tích. Dùng placeholder dễ tìm và tập trung cấu hình chúng ở một nơi.
6. Không để lại các nút giả. Mọi nút, liên kết, bộ lọc, menu và chức năng hiển thị đều phải hoạt động đúng. Nếu tính năng cần dịch vụ bên ngoài thì ghi rõ điều kiện thay vì giả lập thành công.
7. Sau khi hoàn thành, chạy lệnh build và xử lý tất cả lỗi có thể xử lý. Báo lại chính xác lệnh chạy local, file cần sửa để cá nhân hóa và các bước deploy.
8. Không thêm backend, database hoặc dịch vụ trả phí vì website được thiết kế để chạy trên GitHub Pages.

---

## 2. Mục tiêu sản phẩm

Tạo một portfolio có thể dùng lâu dài để:

- Giới thiệu bản thân và định hướng nghề nghiệp.
- Trưng bày các dự án đã thực hiện, kèm công nghệ sử dụng và đường dẫn GitHub/demo.
- Viết và đăng các bài chia sẻ kiến thức, ghi chú học tập, kinh nghiệm lập trình bằng Markdown.
- Thể hiện kỹ năng và bộ công cụ thường dùng.
- Cung cấp thông tin liên hệ và các liên kết mạng xã hội.
- Có giao diện đẹp trên máy tính, máy tính bảng và điện thoại.
- Tự động triển khai mỗi khi cập nhật mã nguồn hoặc thêm bài Markdown lên GitHub.

### Tiêu chí cảm nhận

Website cần tạo cảm giác **hiện đại, có cá tính, tinh tế và có chiều sâu**, không giống một mẫu portfolio đại trà. Hiệu ứng nền là điểm nhấn nhưng không được lấn át nội dung.

---

## 3. Công nghệ đề xuất

### Stack chính

- **Astro:** Framework tạo website tĩnh, phù hợp với portfolio và blog.
- **TypeScript:** Dùng cho cấu hình dữ liệu và các phần cần kiểm tra kiểu.
- **HTML + CSS:** Xây dựng layout, hiệu ứng nền, animation và responsive.
- **JavaScript thuần:** Chỉ dùng cho những tương tác cần thiết như menu mobile, lọc bài viết, tìm kiếm và hiệu ứng canvas nếu thực sự cần.
- **Astro Content Collections:** Quản lý bài viết Markdown có cấu trúc và kiểm tra frontmatter.
- **GitHub Actions:** Tự động build và deploy website lên GitHub Pages.

### Nguyên tắc chọn thư viện

- Dùng phiên bản Astro ổn định tương thích tại thời điểm triển khai.
- Ưu tiên CSS thuần cho hiệu ứng nền để giảm dependencies.
- Không cần React/Vue/Svelte nếu không có lý do kỹ thuật rõ ràng.
- Có thể dùng thư viện icon nhẹ hoặc SVG inline. Không dùng emoji thay cho toàn bộ hệ thống icon.
- Không cài thư viện animation nặng chỉ để tạo vài hiệu ứng cơ bản.
- Chỉ thêm package thật sự cần thiết; giữ `package-lock.json` trong repository.

---

## 4. Sơ đồ website và các trang

Thanh điều hướng chính gồm **6 trang**:

| Trang | Đường dẫn | Vai trò |
|---|---|---|
| Home | `/` | Trang chủ, giới thiệu nhanh và dẫn đến các phần quan trọng |
| About | `/about/` | Thông tin cá nhân, hành trình học tập và mục tiêu |
| Projects | `/projects/` | Danh sách dự án đã thực hiện |
| Posts | `/posts/` | Blog/ghi chú được viết bằng Markdown |
| Stack | `/stack/` | Kỹ năng, ngôn ngữ, công nghệ và công cụ thường dùng |
| Contact | `/contact/` | Thông tin liên hệ và mạng xã hội |

Ba trang bổ sung ngoài Home, About, Posts là **Projects, Stack và Contact**. Đây là các mục phù hợp với mục đích portfolio cá nhân.

### 4.1. Home — Trang chủ

Đây là trang quan trọng nhất, cần tạo ấn tượng ngay trong màn hình đầu tiên.

**Hero section:**

- Một dòng giới thiệu nhỏ, ví dụ: `HELLO, I'M` hoặc `WELCOME TO MY SPACE`.
- Tên cá nhân nổi bật: `[YOUR NAME]`.
- Vai trò: `[IT STUDENT / DEVELOPER / YOUR ROLE]`.
- Một câu giới thiệu ngắn, tự nhiên, không sáo rỗng.
- Hai nút CTA: `Explore Projects` và `Read My Posts`.
- Có thể có một khung avatar/ảnh chân dung. Nếu chưa có ảnh thật, dùng visual placeholder đẹp, không tự tạo ảnh người giả làm ảnh cá nhân.
- Thêm nhãn trạng thái như `Learning · Building · Exploring` nếu phù hợp.

**Các section phía dưới:**

1. **About preview:** Giới thiệu ngắn 2–3 câu, có link sang About.
2. **Featured Projects:** Hiển thị 2–3 dự án nổi bật từ dữ liệu dự án.
3. **Latest Posts:** Hiển thị 2–3 bài viết mới nhất từ Markdown.
4. **Tech Snapshot:** Một hàng/chùm chip công nghệ tiêu biểu.
5. **Contact CTA:** Lời mời kết nối và nút Contact.

Không nhồi quá nhiều nội dung vào Hero. Nội dung cần có khoảng thở.

### 4.2. About — Giới thiệu bản thân

Nội dung nên chia thành các khối dễ đọc:

- **Who I Am:** Giới thiệu bản thân và lĩnh vực quan tâm.
- **My Journey:** Mốc học tập, quá trình học lập trình, các cột mốc đáng nhớ.
- **What I Enjoy:** Những lĩnh vực yêu thích như frontend, backend, UI/UX, công nghệ mới... (để người dùng tự sửa).
- **Goals:** Mục tiêu học tập và nghề nghiệp trong thời gian tới.
- **Personal touch:** Một vài sở thích hoặc điều tạo nên cá tính riêng, nếu muốn công khai.

Có thể làm timeline dọc với các mốc thời gian. Tránh viết quá dài hoặc tự thêm thành tích không có thật.

### 4.3. Projects — Dự án

Mỗi dự án hiển thị dưới dạng card, gồm:

- Ảnh cover hoặc thumbnail.
- Tên dự án.
- Mô tả ngắn 1–3 câu: dự án giải quyết vấn đề gì.
- Vai trò cá nhân trong dự án.
- Danh sách công nghệ dưới dạng tags.
- Nút `Source Code` dẫn đến GitHub.
- Nút `Live Demo` nếu có bản chạy thực tế.
- Trạng thái: `Completed`, `In Progress` hoặc `Learning Project`.

**Tương tác:**

- Có bộ lọc theo nhóm, ví dụ `All`, `Web`, `JavaScript`, `Academic`.
- Bộ lọc phải hoạt động thực tế với dữ liệu dự án.
- Dự án không có URL demo thì không hiển thị nút Live Demo.
- Không để link `#` hoặc link mẫu gây hiểu lầm.

**Dữ liệu:** Quản lý trong file cấu hình riêng, ví dụ `src/data/projects.ts` để dễ thêm/sửa dự án.

### 4.4. Posts — Blog/ghi chú Markdown

Đây là tính năng nội dung quan trọng. Người dùng có thể tạo bài viết mới bằng cách thêm file `.md` vào thư mục bài viết.

**Trang danh sách `/posts/`:**

- Hiển thị bài viết mới nhất trước.
- Mỗi card có tiêu đề, mô tả, ngày đăng, thời gian đọc, danh mục/tag và ảnh cover nếu có.
- Có ô tìm kiếm theo tiêu đề/mô tả.
- Có lọc theo tag hoặc category.
- Có trạng thái rỗng rõ ràng khi không có kết quả.
- Có thể thêm phân trang nếu số lượng bài viết lớn; giai đoạn đầu không bắt buộc.

**Trang chi tiết `/posts/[slug]/`:**

- Hiển thị tiêu đề, mô tả, ngày đăng, ngày cập nhật nếu có, tags và thời gian đọc.
- Render nội dung Markdown thành HTML đẹp, dễ đọc.
- Hỗ trợ heading, paragraph, bold/italic, list, blockquote, table, link, ảnh và code block.
- Code block có syntax highlighting và giao diện phù hợp dark theme.
- Có nút quay lại danh sách bài viết.
- Có thể thêm mục lục tự động từ các heading nếu triển khai gọn và ổn định.
- Có thể thêm bài trước/bài tiếp theo nếu không làm phức tạp cấu trúc.

**Quy tắc bài viết:**

- Đặt file tại `src/content/posts/`.
- Tên file dùng slug không dấu, chữ thường và dấu gạch ngang, ví dụ `learning-javascript-basics.md`.
- Dùng frontmatter YAML để khai báo metadata.
- Bài có `draft: true` không được hiển thị trên website production.
- Không yêu cầu database hoặc API để tải bài viết.

**Mẫu một bài viết:**

```md
---
title: "Hành trình học JavaScript của tôi"
description: "Một vài ghi chú sau thời gian tự học JavaScript."
pubDate: 2026-10-30
updatedDate: 2026-10-30
category: "Learning Notes"
tags:
  - JavaScript
  - Learning
  - Frontend
cover: "/images/posts/javascript-learning.webp"
featured: true
draft: false
---

# Bắt đầu từ đâu?

Đây là phần mở đầu của bài viết. Có thể viết bằng tiếng Việt hoặc tiếng Anh.

## Những điều tôi đã học

- Biến và kiểu dữ liệu.
- Function và Array.
- DOM và Event.

## Một đoạn code ví dụ

```js
const greeting = "Hello, portfolio!";
console.log(greeting);
```

> Ghi chú: Hãy thực hành thường xuyên thay vì chỉ đọc lý thuyết.
```

**Cách đăng bài:**

1. Tạo một file `.md` mới trong `src/content/posts/`.
2. Điền frontmatter và viết nội dung bằng Markdown.
3. Nếu có ảnh, thêm ảnh vào `public/images/posts/` và khai báo đường dẫn trong `cover`.
4. Chạy local để kiểm tra nếu cần.
5. Commit và push lên GitHub.
6. GitHub Actions tự build lại website; bài viết mới sẽ xuất hiện sau khi deploy thành công.

> **Lưu ý quan trọng:** Đây là hình thức xuất bản bằng Markdown thông qua repository. Website không có trang quản trị để đăng bài trực tiếp trên trình duyệt. Muốn có CMS/editor đăng bài trực tiếp trong tương lai thì cần tích hợp thêm một CMS tương thích với Git-based workflow hoặc dịch vụ bên ngoài.

### 4.5. Stack — Kỹ năng và công cụ

Trình bày các kỹ năng theo nhóm, ví dụ:

- **Languages:** HTML, CSS, JavaScript, TypeScript, Java, C#...
- **Frontend:** Astro, React, Bootstrap...
- **Backend & Database:** Node.js, Firebase, MySQL...
- **Tools:** VS Code, Git, GitHub, Postman, Figma...
- **Currently Learning:** Công nghệ đang tìm hiểu.

Chỉ để những kỹ năng người dùng thực sự biết hoặc đang học. Không tự gán phần trăm 90%, 100% cho kỹ năng vì dễ gây cảm giác thiếu tin cậy. Ưu tiên nhãn `Comfortable`, `Learning`, `Exploring` hoặc nhóm theo chủ đề.

### 4.6. Contact — Liên hệ

- Một đoạn ngắn mời người xem kết nối.
- Email với liên kết `mailto:`.
- GitHub, LinkedIn, Facebook hoặc các nền tảng khác nếu người dùng có cung cấp URL.
- Có thể hiển thị nút copy email.
- Có thể hiển thị khu vực/thành phố nếu người dùng muốn công khai.

**Không tạo form liên hệ giả.** GitHub Pages không xử lý backend form. Giai đoạn đầu ưu tiên email và social links. Nếu muốn form gửi thông tin, cần tích hợp một dịch vụ form bên ngoài và cấu hình đúng; không tự nhận là gửi thành công khi chưa có backend.

---

## 5. Định hướng thiết kế UI/UX

### 5.1. Phong cách tổng thể

**Mood:** Dark futuristic · Ambient · Minimal · Developer portfolio.

- Nền tối làm chủ đạo.
- Màu sắc có chiều sâu, chuyển biến mềm mại giữa xanh đêm, tím, xanh cyan và cam ember.
- Glass effect dùng có chọn lọc: navbar, card nổi bật, chip hoặc panel.
- Border mảnh, ánh sáng viền nhẹ, shadow mềm.
- Typography rõ ràng; heading nổi bật nhưng không quá phô trương.
- Bố cục có khoảng trắng, không nhồi nhiều card.
- Tránh hiệu ứng neon quá chói hoặc quá nhiều gradient trên chữ.

### 5.2. Bảng màu gợi ý

| Vai trò | Màu gợi ý |
|---|---|
| Deep background | `#070914` |
| Secondary background | `#101426` |
| Violet | `#7C3AED` |
| Indigo | `#4338CA` |
| Cyan | `#22D3EE` |
| Ember orange | `#F97316` |
| Soft pink | `#FB7185` |
| Main text | `#F4F5FA` |
| Muted text | `#A5A9BC` |
| Subtle border | `rgba(255,255,255,0.10)` |

Có thể điều chỉnh palette trong quá trình thiết kế, nhưng phải đảm bảo độ tương phản và khả năng đọc.

### 5.3. Background chuyển màu mượt

Đây là một trong những điểm nhấn chính của website.

Tạo một background ambient với nhiều lớp:

1. **Base gradient:** Nền tối xanh đen, có các mảng gradient tím, indigo, xanh cyan và cam nhạt.
2. **Slow color shift:** Các mảng màu dịch chuyển và thay đổi sắc độ rất chậm, tạo cảm giác nền đang sống. Thời gian chuyển động gợi ý khoảng 30–45 giây cho một chu kỳ; không đổi màu đột ngột.
3. **Soft glow:** Các vùng radial glow lớn, mờ, có blur và opacity thấp.
4. **Smoke:** Các dải khói trừu tượng, mờ, trôi chậm theo nhiều hướng. Ưu tiên pseudo-elements/CSS gradient blur hoặc canvas tối giản; không cần video nền.
5. **Embers:** Những hạt sáng nhỏ màu cam/vàng/cyan chuyển động chậm, thỉnh thoảng nổi lên như tàn lửa. Hạt ít, kích thước nhỏ, không gây rối.
6. **Content layer:** Nội dung luôn nằm trên hiệu ứng, có độ tương phản tốt.

**Yêu cầu kỹ thuật:**

- Các lớp nền có `pointer-events: none` và không chặn thao tác.
- Không làm nền khiến chữ khó đọc.
- Không dùng animation nhấp nháy nhanh hoặc flash liên tục.
- Trên mobile giảm số lượng hạt và cường độ blur.
- Khi tab trình duyệt không hiển thị, tạm dừng animation JavaScript/canvas nếu có.
- Tôn trọng `prefers-reduced-motion`: giảm hoặc tắt chuyển động liên tục khi người dùng bật tùy chọn hạn chế chuyển động.
- Nếu dùng canvas, giới hạn số particle, dùng `requestAnimationFrame` hợp lý và cleanup khi component bị tháo.
- Tránh render lại toàn bộ trang liên tục chỉ để animate background.

**Cảm giác mong muốn:** Giống ánh sáng và làn khói đang trôi trong một không gian số tối, cùng những đốm lửa nhỏ. Nhẹ nhàng, mượt, sang và không giống hiệu ứng game quá rực.

### 5.4. Các animation phụ

- Navbar có hiệu ứng glass nhẹ khi cuộn.
- Card nâng lên rất nhẹ khi hover, viền sáng dần.
- Button có hover glow tinh tế.
- Các section xuất hiện nhẹ khi cuộn vào viewport.
- Link có underline/indicator animation ngắn.
- Chuyển trang có thể fade nhẹ, tránh hiệu ứng chuyển cảnh dài.
- Không lạm dụng parallax hoặc hiệu ứng theo chuột làm ảnh hưởng hiệu năng.

### 5.5. Typography và layout

- Chọn một font sans-serif hiện đại, hỗ trợ tiếng Việt tốt. Có thể dùng font hệ thống hoặc Google Fonts với fallback phù hợp.
- Nội dung bài viết cần có chiều rộng dòng tối ưu để đọc lâu không mỏi mắt.
- Container desktop gợi ý khoảng `1100–1200px`, co giãn theo màn hình.
- Khoảng cách giữa các section rõ ràng.
- Card có bán kính góc vừa phải, không bo tròn quá mức.

---

## 6. Cấu trúc thư mục mong muốn

Agent có thể điều chỉnh chi tiết theo phiên bản Astro đang dùng, nhưng cần giữ cách tổ chức tương đương:

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── posts/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── BackgroundEffects.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── SectionHeading.astro
│   │   ├── SocialLinks.astro
│   │   └── ScrollReveal.astro
│   ├── content/
│   │   └── posts/
│   │       └── welcome-to-my-blog.md
│   ├── data/
│   │   ├── site.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── stack.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── animations.css
│   │   └── markdown.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Không bắt buộc phải tạo component cho mọi đoạn nhỏ. Chỉ tách component khi có khả năng tái sử dụng hoặc giúp code dễ bảo trì.

---

## 7. Quản lý dữ liệu cá nhân

Tạo file cấu hình tập trung, ví dụ `src/data/site.ts`, để người dùng thay thông tin mà không phải tìm trong nhiều component.

Các trường nên có:

```ts
export const siteConfig = {
  name: "YOUR NAME",
  role: "IT Student & Developer",
  tagline: "Building, learning, and turning ideas into useful things.",
  shortBio: "A short introduction about yourself.",
  email: "your-email@example.com",
  location: "Ca Mau, Vietnam",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "",
  facebook: "",
  website: "",
  resumeUrl: "",
};
```

Đây là dữ liệu ví dụ. Hãy cho phép trường social link không có giá trị; nếu rỗng thì không hiển thị icon/link tương ứng.

Tạo README giải thích rõ các trường cần thay. Không để các placeholder xuất hiện thiếu kiểm soát ở nhiều file.

---

## 8. Yêu cầu kỹ thuật cho Markdown Blog

### 8.1. Collection và schema

- Dùng Astro Content Collections với loader phù hợp phiên bản Astro hiện tại.
- Định nghĩa schema cho bài viết.
- Các trường tối thiểu: `title`, `description`, `pubDate`, `tags`, `draft`.
- Các trường tùy chọn: `updatedDate`, `category`, `cover`, `featured`.
- Kiểm tra dữ liệu frontmatter và báo lỗi build rõ ràng khi dữ liệu sai.
- Loại bài `draft: true` khỏi danh sách và route production.
- Sắp xếp bài viết theo `pubDate` giảm dần.
- Tạo route tĩnh cho từng slug.

### 8.2. Trình bày Markdown

Thiết kế typography riêng trong `markdown.css`:

- Heading có phân cấp rõ.
- Paragraph có line-height thoáng.
- Link có màu accent và trạng thái hover.
- Blockquote có viền trái và nền mờ.
- Table cuộn ngang trên mobile nếu cần.
- Ảnh tự co theo chiều rộng, không tràn container.
- Code block có nền riêng, syntax highlight và cuộn ngang khi code dài.
- Inline code dễ phân biệt với văn bản thường.

### 8.3. Tìm kiếm và lọc

- Tìm kiếm phía client trên dữ liệu metadata đã render sẵn.
- Lọc tag/category không cần API.
- Có nút reset filter.
- Nếu không có kết quả, hiển thị thông báo thân thiện.
- Không đưa toàn bộ nội dung dài của mọi bài viết vào JavaScript nếu chỉ cần tìm title/description/tags.

---

## 9. Responsive design

Website cần hoạt động tốt ở các kích thước sau:

- Mobile nhỏ: khoảng 320–375px.
- Mobile phổ biến: 390–430px.
- Tablet: 768px.
- Laptop: 1024–1440px.
- Desktop rộng: 1600px trở lên.

### Quy tắc responsive

- Navbar desktop chuyển thành menu mobile có nút mở/đóng.
- Menu mobile phải có thể thao tác bằng bàn phím, có `aria-expanded` và đóng sau khi chọn link.
- Hero chuyển từ hai cột sang một cột trên mobile.
- Grid dự án/bài viết thay đổi số cột theo chiều rộng.
- Chữ không tràn, không bị cắt và không tạo scroll ngang toàn trang.
- Các nút có vùng chạm đủ lớn.
- Hiệu ứng particle/blur giảm trên thiết bị nhỏ.

---

## 10. Accessibility, SEO và chất lượng

### Accessibility

- Dùng semantic HTML: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Ảnh có alt phù hợp; ảnh trang trí dùng alt rỗng.
- Nút và liên kết có tên dễ hiểu.
- Có focus state nhìn thấy được.
- Đảm bảo contrast cho chữ trên nền tối.
- Không chỉ dùng màu sắc để truyền đạt trạng thái.
- Animation tôn trọng `prefers-reduced-motion`.
- Menu và bộ lọc sử dụng được bằng bàn phím.

### SEO

- Mỗi route có title và meta description riêng.
- Có canonical URL khi cấu hình `site` chính xác.
- Có Open Graph/Twitter meta cơ bản.
- Có favicon.
- Tạo sitemap nếu phù hợp bằng integration chính thức của Astro.
- Có trang 404 thiết kế đồng bộ.
- Dùng heading đúng thứ tự; một H1 chính cho mỗi trang.

### Hiệu năng

- Ưu tiên static rendering/prerendering.
- Tối ưu ảnh: kích thước hợp lý, WebP/AVIF khi có thể, lazy-load ảnh bên dưới màn hình đầu.
- Tránh ảnh nền/video dung lượng lớn.
- Không dùng hiệu ứng blur phủ toàn bộ màn hình với cường độ quá cao.
- Giảm JavaScript phía client; chỉ hydrate hoặc chạy script nơi cần thiết.
- Không để lỗi console, broken image hoặc link hỏng.

---

## 11. GitHub Pages deployment

Website phải deploy được bằng GitHub Actions, không yêu cầu server riêng.

### 11.1. Cấu hình URL và base path

Agent cần kiểm tra tên GitHub username và repository nếu đã có trong repository/remote. Nếu không thể xác định, hãy để placeholder rõ ràng trong `astro.config.mjs` và hướng dẫn người dùng thay.

- Với repository dạng `USERNAME.github.io`: website nằm ở root domain, thông thường không cần `base` dạng `/repository`.
- Với repository thông thường: website có đường dẫn dạng `https://USERNAME.github.io/REPOSITORY/`; cần cấu hình `site` và `base` đúng tên repository.
- Toàn bộ internal links và đường dẫn asset phải hoạt động khi có `base` path. Không hardcode đường dẫn root `/images/...` hoặc `/about/` theo cách làm hỏng trang project-site. Dùng helper/base URL phù hợp của Astro.

Ví dụ cấu hình cho repository thông thường (thay placeholder bằng giá trị thật):

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://YOUR_USERNAME.github.io",
  base: "/YOUR_REPOSITORY",
});
```

### 11.2. GitHub Actions

Tạo file `.github/workflows/deploy.yml`. Dùng workflow chính thức tương thích với phiên bản Astro tại thời điểm triển khai. Ví dụ dưới đây theo hướng dẫn Astro GitHub Pages hiện tại; kiểm tra lại action version nếu tài liệu chính thức đã thay đổi trước khi thực thi.

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Install, build, and upload site
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

Nếu repository dùng nhánh mặc định khác `main`, chỉnh lại `branches` trong workflow.

### 11.3. Cài đặt GitHub Pages

README cần hướng dẫn người dùng:

1. Push source code lên repository GitHub.
2. Mở repository → **Settings** → **Pages**.
3. Ở mục **Build and deployment**, chọn **GitHub Actions** làm Source.
4. Mở tab **Actions**, kiểm tra workflow đã chạy thành công.
5. Mở URL website mà GitHub Pages cung cấp.

Không yêu cầu người dùng commit thư mục build output thủ công nếu workflow đang tự build và deploy.

---

## 12. Lệnh phát triển và kiểm tra

Trong `package.json`, chuẩn bị các script phù hợp, tối thiểu:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

Nếu cần package hỗ trợ `astro check`, hãy cài đúng dependency chính thức.

Quy trình kiểm tra:

1. `npm install`
2. `npm run dev` — kiểm tra giao diện local.
3. `npm run check` — kiểm tra lỗi TypeScript/Astro nếu script được cấu hình.
4. `npm run build` — xác nhận build production thành công.
5. `npm run preview` — kiểm tra bản build.
6. Thử một route bài viết Markdown và một URL khi có base path.

Nếu có lỗi, sửa trước khi bàn giao.

---

## 13. Nội dung demo cần có

Để website không trống khi mở lần đầu, hãy tạo nội dung demo có thể thay thế:

- 1 bài giới thiệu blog: `welcome-to-my-blog.md`.
- 2 bài viết mẫu ngắn về học lập trình/web development.
- 2–3 project demo với mô tả được ghi rõ là nội dung placeholder, không khẳng định đây là dự án thật của chủ website.
- Các nhóm kỹ năng mẫu trong `skills.ts`.

Không tự tạo URL GitHub/demo giả. Nếu chưa có link thật, để trống và ẩn nút tương ứng.

---

## 14. Các giai đoạn thực hiện

### Phase 1 — Khởi tạo và nền tảng

- Kiểm tra repository.
- Tạo Astro project và TypeScript.
- Thiết lập global styles, layout, cấu hình site.
- Xây dựng navbar, footer và cấu trúc responsive.

### Phase 2 — Thiết kế giao diện và hiệu ứng

- Xây dựng background gradient chuyển màu.
- Thêm lớp glow, smoke và ember.
- Kiểm tra độ tương phản và hiệu suất.
- Thêm hover/reveal animation vừa đủ.

### Phase 3 — Xây dựng các trang nội dung

- Home.
- About.
- Projects.
- Stack.
- Contact.

### Phase 4 — Markdown Blog

- Định nghĩa content collection/schema.
- Làm danh sách Posts và trang chi tiết.
- Thêm search/filter.
- Kiểm tra frontmatter, draft, ảnh và code block.

### Phase 5 — Hoàn thiện

- SEO, sitemap, favicon, 404.
- Kiểm tra responsive và accessibility.
- Tối ưu animation/mobile.
- Chạy check/build/preview.

### Phase 6 — Deploy

- Tạo GitHub Actions workflow.
- Cấu hình `site`/`base` theo repository thật.
- Hướng dẫn bật GitHub Pages bằng GitHub Actions.
- Xác minh đường dẫn ảnh, link nội bộ và trang Posts trên URL production.

---

## 15. Checklist nghiệm thu

Agent chỉ hoàn tất khi kiểm tra được các mục sau:

### Giao diện

- [ ] Có đủ 6 trang: Home, About, Projects, Posts, Stack, Contact.
- [ ] Navbar hoạt động trên desktop và mobile.
- [ ] Giao diện nhất quán, có phong cách riêng và không bị rối.
- [ ] Nền chuyển màu mượt, có glow/khói/tàn lửa chuyển động nhẹ.
- [ ] Hiệu ứng không che nội dung, không làm chữ khó đọc.
- [ ] Có trạng thái hover/focus rõ ràng.

### Chức năng

- [ ] Project cards lấy dữ liệu từ cấu hình.
- [ ] Bộ lọc Projects hoạt động.
- [ ] Bài viết được lấy từ Markdown files.
- [ ] Có trang danh sách và trang chi tiết Posts.
- [ ] Search/tag filter bài viết hoạt động.
- [ ] Draft không xuất hiện ở production.
- [ ] Markdown hỗ trợ heading, list, image, quote, table và code block.
- [ ] Các liên kết social/email đúng; không có nút giả.

### Kỹ thuật

- [ ] Không có lỗi build.
- [ ] Không có lỗi console nghiêm trọng.
- [ ] Không có ảnh/link bị hỏng.
- [ ] Responsive từ mobile đến desktop.
- [ ] Có xử lý `prefers-reduced-motion`.
- [ ] Base path GitHub Pages được xử lý chính xác.
- [ ] GitHub Actions workflow được cấu hình.
- [ ] README có hướng dẫn chạy, cập nhật thông tin và đăng bài Markdown.

---

## 16. Những điều không được làm

- Không biến website thành landing page bán hàng.
- Không dùng nền sáng trắng làm theme chính.
- Không dùng hiệu ứng lửa/khói quá dày hoặc quá chói.
- Không dùng animation nhấp nháy nhanh gây khó chịu.
- Không để tất cả nội dung nằm trong một trang dài duy nhất; phải có các route riêng.
- Không tạo form liên hệ không có backend rồi giả vờ gửi được.
- Không tạo dashboard đăng bài giả. Xuất bản giai đoạn đầu thực hiện bằng Markdown trong repository.
- Không lưu dữ liệu nhạy cảm hoặc secret trong source code.
- Không hardcode asset/link theo root path làm hỏng GitHub Pages project site.
- Không tự bịa danh tính, ảnh chân dung, thành tựu, thông tin liên hệ hoặc dự án thật.
- Không hy sinh khả năng đọc và hiệu năng chỉ để thêm hiệu ứng.

---

## 17. Kết quả cần bàn giao

Sau khi hoàn thành, hãy cung cấp:

1. Toàn bộ source code website chạy được.
2. File README hướng dẫn cài đặt, chạy local, thay thông tin cá nhân, thêm project và viết bài Markdown.
3. GitHub Actions workflow để tự động deploy.
4. Ít nhất một bài Markdown mẫu và dữ liệu project/skills mẫu có thể thay thế.
5. Kết quả chạy `npm run check` và `npm run build` (nếu project có cấu hình các script này).
6. Danh sách các file người dùng cần chỉnh sửa đầu tiên.
7. Hướng dẫn deploy GitHub Pages từng bước, nêu rõ nơi cần thay GitHub username và repository name.

**Ưu tiên cuối cùng:** Một portfolio có thiết kế đẹp và khác biệt nhờ nền ambient gradient, ánh sáng, khói và tàn lửa; nhưng vẫn tải nhanh, dễ đọc, dễ mở rộng, có blog Markdown thực sự và deploy ổn định trên GitHub Pages.

---

## 18. Tài liệu tham khảo chính thức

- Astro — Deploy to GitHub Pages: https://docs.astro.build/en/guides/deploy/github/
- Astro — Markdown content: https://docs.astro.build/en/guides/markdown-content/
- Astro — Content collections: https://docs.astro.build/en/guides/content-collections/
- GitHub Docs — Configuring a publishing source for GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

