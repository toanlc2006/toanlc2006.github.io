import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Tên miền GitHub Pages cá nhân của bạn:
  // Vì repository là dạng username.github.io (toanlc2006.github.io), website chạy ở root domain.
  site: 'https://toanlc2006.github.io',
  
  // Nếu deploy lên repository thông thường (ví dụ: https://github.com/username/my-portfolio),
  // hãy mở comment dòng base bên dưới và điền tên repo:
  // base: '/my-portfolio',
  base: '/',

  build: {
    format: 'directory',
  },
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
