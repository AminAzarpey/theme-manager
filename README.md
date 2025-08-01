# 🎨 Theme Manager

A minimal, modern, CDN-friendly theme and palette manager built with SCSS, Bootstrap 5.3.7, and JavaScript.

> 🌐 **Live Demo:** [https://theme-manager-zeta.vercel.app](https://theme-manager-zeta.vercel.app)  
> 📦 **NPM Package:** [bootkit-theme-manager](https://www.npmjs.com/package/bootkit-theme-manager)
> [📂 GitHub Repo](https://github.com/AminAzarpey/theme-manager)

---

## ✨ Features

- 🌃 Light/Dark themes
- 🎨 Multiple palettes (default, red, green, orange)
- 📀 RTL & LTR layouts
- ✅ Framework-agnostic (Angular, React, or plain HTML)
- ⚡ CDN-ready, tree-shakable JS, modular SCSS, optimized builds

---

## 🚀 Installation

### Using NPM

```bash
npm install bootkit-theme-manager
```

### Using CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootkit-theme-manager/dist/theme-light.default.ltr.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/bootkit-theme-manager/dist/core.js"></script>

```

---

## 📦 Usage

### HTML

```html
<link id="theme-css" rel="stylesheet" href="./dist/theme-light.default.ltr.css" />
```

### JavaScript (ESM)

```js
import * as ThemeManager from './dist/core.js';

ThemeManager.initThemeSystem();
ThemeManager.toggleTheme();
ThemeManager.toggleDirection();
ThemeManager.applyPalette('red');
```

### Angular

1. Include CSS in `angular.json`:

```json
"styles": [
  "node_modules/bootkit-theme-manager/dist/theme-light.default.ltr.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": []
```

2. Load JS in your component or service:

```ts
import * as ThemeManager from 'bootkit-theme-manager/dist/core.js';

ngOnInit() {
  ThemeManager.initThemeSystem();
}
```

### React

```jsx
import React, { useEffect } from 'react';
import * as ThemeManager from 'bootkit-theme-manager/dist/core.js';
import 'bootkit-theme-manager/dist/theme-light.default.ltr.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  useEffect(() => {
    ThemeManager.initThemeSystem();
  }, []);

  return (
    <div className="container">
      <button onClick={() => ThemeManager.toggleTheme()} className="btn btn-primary">
        Toggle Theme
      </button>
    </div>
  );
}
```

---

## 🧪 Tests

```bash
npm run test
npm run test:coverage
```

Unit tests for `core.js` (via Jest):

- Theme toggling (light/dark)
- Direction switching (LTR/RTL)
- Palette swapping (default, red, green, orange)

---

## 🛠️ Development Commands

```bash
npm run generate        # Generate all SCSS for themes + palettes
npm run build           # Build CSS, JS, RTL variants
npm run dev             # Watch SCSS changes live
npm run test            # Run unit tests
npm run test:coverage   # View code coverage
```


---

## 🤝 Contribute & Collaborate

This project is still evolving — and you're warmly invited to be part of it! 💚

Whether you're a front-end wizard, SCSS lover, RTL enthusiast, or just curious about theming systems, there's always room for your ideas and help.

Feel free to:

- ⭐ Star the repo
- 🐛 Open issues or suggest features
- 🛠 Submit PRs to improve or extend the system
- 🎨 Propose new palettes, layouts, or components
- 🌍 Help with accessibility, docs, or internationalization

Let’s make this theme manager smarter, leaner, and more powerful — together! 😊

---

## 📜 License

MIT © 2025 [Amin Azarpey](https://github.com/AminAzarpey)