// src/js/core.js

const THEME_KEY = "tm_theme";
const PALETTE_KEY = "tm_palette";
const DIRECTION_KEY = "tm_dir";

let currentTheme = localStorage.getItem(THEME_KEY)
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let currentPalette = localStorage.getItem(PALETTE_KEY) || "default";
let currentDirection = localStorage.getItem(DIRECTION_KEY) || "ltr";

const themeLinkId = "theme-css";

function applyCssFile() {
    const fileName = `theme-${currentTheme}.${currentPalette}${currentDirection === 'rtl' ? '.rtl' : '.ltr'}.css`;
    const href = `./${fileName}`;
    const linkTag = document.getElementById(themeLinkId);
    console.log(fileName)
    document.body.className = `theme-${currentTheme} palette-${currentPalette}`;
    document.documentElement.setAttribute("dir", currentDirection);


    if (linkTag) {
        linkTag.setAttribute("href", href);
    } else {
        const link = document.createElement("link");
        link.id = themeLinkId;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    applyCssFile();
}

function setPalette(palette) {
    currentPalette = palette;
    localStorage.setItem(PALETTE_KEY, palette);
    applyCssFile();
}

function setDirection(dir) {
    currentDirection = dir;
    localStorage.setItem(DIRECTION_KEY, dir);
    document.documentElement.setAttribute("dir", dir);
    applyCssFile();
}

export function initThemeSystem() {
    document.documentElement.setAttribute("dir", currentDirection);
    applyCssFile();
}

export function toggleTheme() {
    setTheme(currentTheme === "light" ? "dark" : "light");
}

export function applyPalette(palette) {
    setPalette(palette);
}

export function toggleDirection() {
    setDirection(currentDirection === "ltr" ? "rtl" : "ltr");
}

export function getCurrentConfig() {
    return {
        theme: currentTheme,
        palette: currentPalette,
        direction: currentDirection,
    };
}
export function resetThemeSystem() {
    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(PALETTE_KEY);
    localStorage.removeItem(DIRECTION_KEY);
    currentTheme = "light";
    currentPalette = "default";
    currentDirection = "ltr";
    initThemeSystem();
}