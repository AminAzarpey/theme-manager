# 🎨 Theme Manager

A minimal, modern, CDN-friendly theme and palette manager built with SCSS, Bootstrap 5.3.7, and JavaScript.

Supports:
- 🌃 Light/Dark themes
- 🎨 Multiple palettes (default, red, green, orange)
- 📀 RTL & LTR layouts
- ✅ Framework-agnostic (works in Angular, React, or plain HTML)
- ⚡ CDN-ready, tree-shakable JS, modular SCSS, optimized builds

---

## 🚀 Installation

```bash
npm install bootkit-theme-manager
```

or use via CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootkit-theme-manager@1.0.0/dist/theme-light.default.ltr.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/bootkit-theme-manager@1.0.0/dist/core.js"></script>
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
2. Load JS in your root component or service:
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
import 'theme-manager/dist/bootkit-theme-light.default.ltr.css';
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

Unit tests for core logic (`core.js`) using Jest:
- Theme toggling
- Direction toggling (LTR/RTL)
- Palette swapping

---

## 🛠️ Dev Commands
```bash
npm run generate        # Generate all theme+palette SCSS
npm run build           # Full build (CSS, JS, RTL)
npm run dev             # Watch SCSS changes
npm run test            # Run all tests
npm run test:coverage   # View test coverage
```

---

## 🧹 Directory Structure
```
├── dist/               # CDN-ready output
├── src/
│   ├── js/
│   │   ├── core.js
│   │   └── generate-themes.cjs
│   └── scss/
│       ├── base/               # mixins, utilities, core layout
│       ├── palettes/           # default, red, green, orange (pure palette partials)
│       ├── generated/          # Auto-generated SCSS files (theme + palette combos)
│       └── index.scss          # Entry point for development
├── tests/             # Unit & integration tests
├── index.html         # Demo
└── README.md
```

---

## 📜 License
MIT © 2025 Amin Azarpey
