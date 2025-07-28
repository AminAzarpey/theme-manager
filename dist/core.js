// src/js/core.js

let currentTheme = 'light';
let currentPalette = 'default';
let currentDirection = 'ltr';
let customConfig = {};

function applyTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

function applyPalette(palette) {
    const palettes = ['palette-default', 'palette-red', 'palette-orange', 'palette-green'];
    palettes.forEach(p => document.body.classList.remove(p));
    document.body.classList.add(`palette-${palette}`);
    localStorage.setItem('palette', palette);
    currentPalette = palette;
}

function setDirection(dir = 'ltr') {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('dir', dir);
    currentDirection = dir;
}

function toggleDirection() {
    const current = localStorage.getItem('dir') || 'ltr';
    const next = current === 'ltr' ? 'rtl' : 'ltr';
    setDirection(next);
}

function toggleTheme() {
    const current = localStorage.getItem('theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
}

function loadCssAsset(name) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://cdn.jsdelivr.net/npm/theme-manager@1.0.0/dist/${name}.css`;
    document.head.appendChild(link);
}

function getCurrentTheme() {
    return currentTheme;
}

function getCurrentPalette() {
    return currentPalette;
}

function getDirection() {
    return currentDirection;
}

function getConfig() {
    return customConfig;
}

function configure(config = {}) {
    customConfig = config;

    if (config.palettes) {
        Object.entries(config.palettes).forEach(([name, value]) => {
            const style = document.createElement('style');
            style.innerHTML = `
        .palette-${name} {
          --primary: ${value};
        }
      `;
            document.head.appendChild(style);
        });
    }

    if (config.themes) {
        Object.entries(config.themes).forEach(([name, def]) => {
            const style = document.createElement('style');
            style.innerHTML = `
        .theme-${name} {
          --background-color: ${def.background};
          --text-color: ${def.text};
        }
      `;
            document.head.appendChild(style);
        });
    }
}

function initThemeSystem() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    const savedPalette = localStorage.getItem('palette') || 'default';
    const savedDir = localStorage.getItem('dir') || 'ltr';

    applyTheme(savedTheme);
    applyPalette(savedPalette);
    setDirection(savedDir);
}

export { applyPalette, applyTheme, configure, getConfig, getCurrentPalette, getCurrentTheme, getDirection, initThemeSystem, loadCssAsset, setDirection, toggleDirection, toggleTheme };
//# sourceMappingURL=core.js.map
