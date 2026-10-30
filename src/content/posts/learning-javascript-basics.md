---
title: "Nền tảng JavaScript: Từ Cơ bản đến Hiểu sâu Bản chất"
description: "Tổng hợp các ghi chú quan trọng về Execution Context, Scope Chain, Closure và cách JavaScript vận hành dưới nền tảng."
pubDate: 2026-10-25
updatedDate: 2026-10-29
category: "Learning Notes"
tags:
  - JavaScript
  - Fundamentals
  - Frontend
cover: "/images/posts/javascript.svg"
featured: true
draft: false
---

# Bản chất của JavaScript đằng sau cú pháp

Khi mới bắt đầu học JavaScript, chúng ta thường tập trung vào cú pháp: khai báo biến với `let`/`const`, viết hàm, thao tác mảng. Nhưng chỉ khi hiểu được **JavaScript Engine hoạt động như thế nào**, chúng ta mới thực sự kiểm soát được luồng thực thi của chương trình.

---

## 1. Execution Context & Hoisting

Mỗi khi mã JavaScript thực thi, nó chạy bên trong một **Execution Context** gồm hai giai đoạn chính:

1. **Creation Phase:** Engine quét qua mã nguồn, cấp phát bộ nhớ cho biến và hàm.
2. **Execution Phase:** Thực thi từng dòng lệnh, gán giá trị thực tế cho biến.

```javascript
console.log(greeting); // Output: undefined (do hoisting)
var greeting = "Hello ECMAScript";

// Với let và const:
// console.log(score); // Throws ReferenceError: Cannot access 'score' before initialization (TDZ)
const score = 100;
```

> **Lưu ý quan trọng:** Hiện tượng biến khai báo bằng `let` và `const` không thể truy cập trước khi gán được gọi là **Temporal Dead Zone (TDZ)**.

---

## 2. Closure và Sức mạnh Đóng gói Dữ liệu

Closure là một trong những khái niệm quan trọng nhất trong JavaScript. Một closure được tạo ra khi một hàm bên trong có khả năng ghi nhớ và truy cập vào phạm vi (scope) của hàm cha bao bọc nó, ngay cả khi hàm cha đã hoàn tất thực thi:

```typescript
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count,
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.getValue());  // 12
```

Biến `count` được bảo vệ hoàn toàn khỏi sự can thiệp trực tiếp từ bên ngoài mà chỉ có thể thao tác thông qua các phương thức được cung cấp.

---

## 3. Asynchronous JavaScript & Event Loop

JavaScript là ngôn ngữ đơn luồng (single-threaded), nhưng nhờ có **Event Loop** phối hợp cùng Web APIs, nó có thể xử lý các tác vụ bất đồng bộ cực kỳ mượt mà.

Thứ tự ưu tiên trong hàng đợi sự kiện:
- **Call Stack** -> Thực thi đồng bộ trước.
- **Microtask Queue** -> `Promise.then()`, `queueMicrotask` (ưu tiên cao).
- **Macrotask Queue** -> `setTimeout`, `setInterval`, I/O events.

```javascript
console.log("1: Đồng bộ bắt đầu");

setTimeout(() => {
  console.log("4: Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Microtask (Promise)");
});

console.log("2: Đồng bộ kết thúc");
```

Kết quả in ra trong console:
```text
1: Đồng bộ bắt đầu
2: Đồng bộ kết thúc
3: Microtask (Promise)
4: Macrotask (setTimeout)
```

Hiểu rõ điều này giúp bạn tránh được rất nhiều lỗi logic khó phát hiện khi làm việc với API thực tế!
