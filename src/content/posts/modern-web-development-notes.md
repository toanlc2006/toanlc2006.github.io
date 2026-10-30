---
title: "Kiến trúc Web Hiện đại: Tại sao Static Site Generation (SSG) trở lại ngôi vương?"
description: "Phân tích sự tiến hóa từ SPA sang SSR, Island Architecture và lý do SSG kết hợp với Astro mang lại trải nghiệm tối ưu nhất cho website nội dung."
pubDate: 2026-10-18
category: "Architecture"
tags:
  - WebDev
  - Architecture
  - Astro
  - Performance
cover: "/images/posts/web-dev.svg"
featured: false
draft: false
---

# Làn sóng tiến hóa của kiến trúc Web

Trong thập kỷ qua, hệ sinh thái web đã trải qua nhiều giai đoạn phát triển:

1. **Kỷ nguyên Server-side Rendering cổ điển (PHP, Rails):** Nhanh cho lần tải đầu tiên, nhưng mỗi lần điều hướng đều phải tải lại toàn bộ trang.
2. **Kỷ nguyên Single Page Application (React, Vue, Angular):** Trải nghiệm chuyển trang mượt mà như app bản địa, nhưng đánh đổi bằng file JavaScript ban đầu khổng lồ (JS bundle bloat) và điểm Core Web Vitals thấp.
3. **Kỷ nguyên Đảo Tương Tác (Islands Architecture & Static First):** Tạo HTML tĩnh tối đa, chỉ nạp JavaScript tại các thành phần thực sự cần tương tác.

---

## So sánh các mô hình kiến trúc

| Tiêu chí | Client-Side SPA | Server-Side Rendering (SSR) | Islands SSG (Astro) |
|---|---|---|---|
| **First Contentful Paint (FCP)** | Chậm (chờ tải JS) | Nhanh | Cực nhanh (thuần HTML) |
| **SEO & Crawlability** | Cần cấu hình prerender | Tốt | Tối ưu tuyệt đối |
| **Chi phí máy chủ** | Thấp (static files) | Cao (server runtime 24/7) | Gần như 0đ (GitHub Pages/CDN) |
| **Khả năng bảo trì** | Phức tạp state management | Phức tạp server setup | Đơn giản, dựa vào file system |

---

## Vì sao Astro phù hợp cho Portfolio và Blog?

Astro giải quyết triệt để bài toán "JavaScript Bloat":
- **Zero JavaScript by default:** Nếu trang chỉ hiển thị nội dung tĩnh (như bài viết blog hay trang giới thiệu), Astro không gửi bất kỳ byte script client nào tới trình duyệt!
- **Tận dụng cú pháp component quen thuộc:** Bạn vẫn được tận hưởng trải nghiệm lập trình component-based hiện đại mà không phải trả giá bằng dung lượng bundle.
- **Tích hợp linh hoạt:** Bạn có thể nhúng component từ React, Vue, Svelte chỉ khi thực sự cần tương tác động phức tạp.

```astro
---
// Server component chạy tại thời điểm build:
const response = await fetch("https://api.example.com/data");
const data = await response.json();
---

<!-- Mã HTML này xuất xưởng dưới dạng pure HTML tĩnh -->
<div class="card">
  <h2>{data.title}</h2>
  <p>{data.summary}</p>
</div>
```

Bằng cách ưu tiên HTML tĩnh và tối ưu hóa CSS chuyển màu mượt mà, website vừa đảm bảo tính thẩm mỹ cao cấp, vừa có tốc độ phản hồi tức thì trên mọi thiết bị.
