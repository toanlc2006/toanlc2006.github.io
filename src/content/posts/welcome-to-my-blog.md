---
title: "Chào mừng đến với Blog & Không gian số của tôi"
description: "Lời mở đầu về không gian chia sẻ kiến thức, hành trình học lập trình và những trải nghiệm thực tế với công nghệ web."
pubDate: 2026-10-30
category: "General"
tags:
  - Welcome
  - Portfolio
  - Journey
cover: "/images/posts/welcome.svg"
featured: true
draft: false
---

# Lời chào đầu tiên

Chào bạn! Rất vui vì bạn đã ghé thăm không gian số của tôi. Đây là nơi tôi lưu giữ những ghi chép học tập, các thí nghiệm công nghệ và bài học rút ra trong quá trình phát triển phần mềm.

Tôi tin rằng việc viết ra những điều mình học được là cách tốt nhất để củng cố tư duy và biến kiến thức lý thuyết thành kỹ năng thực tế.

---

## Mục tiêu của không gian này

Trang blog này được xây dựng với 3 mục tiêu cốt lõi:

1. **Ghi chép hành trình học tập:** Lưu trữ các giải pháp cho những vấn đề kỹ thuật từng gặp phải.
2. **Chia sẻ góc nhìn công nghệ:** Đánh giá các công cụ, framework và phương pháp tiếp cận mới trong thế giới web.
3. **Kết nối cộng đồng:** Trao đổi cùng những người bạn có chung niềm đam mê lập trình và sáng tạo.

> *"Viết lách là cách thức tốt nhất để sắp xếp lại những mảnh ghép tư duy còn lộn xộn trong đầu bạn."*

---

## Kiến trúc của website này

Website portfolio và blog này được xây dựng với định hướng **tối giản, tốc độ cao và không phụ thuộc backend**:

| Thành phần | Công nghệ lựa chọn | Lý do sử dụng |
|---|---|---|
| **SSG Framework** | Astro 5 | Tạo HTML tĩnh siêu nhẹ, zero JS mặc định |
| **Styling** | Vanilla CSS + Design Tokens | Toàn quyền kiểm soát hiệu năng & hiệu ứng |
| **Content Engine** | Astro Content Collections | Kiểm tra schema chặt chẽ ngay lúc build |
| **Hosting** | GitHub Pages via Actions | Tự động hóa CI/CD hoàn toàn miễn phí |

---

## Mã nguồn thử nghiệm đầu tiên

Một đoạn mã nhỏ khởi đầu mọi hành trình:

```javascript
function createDeveloper(name, passion) {
  return {
    name,
    passion,
    status: "Always learning, always building",
    greet() {
      console.log(`Hello World! I'm ${this.name}, passionate about ${this.passion}.`);
    }
  };
}

const me = createDeveloper("toanlc2006", "Web Architecture & UX");
me.greet();
```

Cảm ơn bạn đã đọc bài viết mở màn này. Hãy cùng đón chờ những bài viết chuyên sâu tiếp theo nhé!
