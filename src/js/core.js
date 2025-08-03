// core.js

const THEME_KEY = "tm_theme";
const PALETTE_KEY = "tm_palette";
const DIRECTION_KEY = "tm_dir";

let currentTheme;
let currentPalette;
let currentDirection;
let baseHref = "dist";
const themeLinkId = "theme-css";

/**
 * Dispatches a custom theme change event.
 */
function emitThemeChange() {
    const detail = {
        theme: currentTheme,
        palette: currentPalette,
        direction: currentDirection,
    };
    window.dispatchEvent(new CustomEvent("themeChange", { detail }));
}

function resolveInitialConfig(config = {}) {
    currentTheme =
        (!config.ignoreStorage && localStorage.getItem(THEME_KEY)) ||
        config.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    currentPalette =
        (!config.ignoreStorage && localStorage.getItem(PALETTE_KEY)) ||
        config.palette ||
        "default";

    currentDirection =
        (!config.ignoreStorage && localStorage.getItem(DIRECTION_KEY)) ||
        config.direction ||
        "ltr";

    baseHref = config.baseHref || baseHref;
}

function applyCssFile() {
    const fileName = `theme-${currentTheme}.${currentPalette}${
        currentDirection === "rtl" ? ".rtl" : ".ltr"
    }.css`;
    const href = `${baseHref}/${fileName}`;
    const linkTag = document.getElementById(themeLinkId);

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

/**
 * Initializes the theme system.
 * @param {ThemeConfig} config
 */
export function initThemeSystem(config = {}) {
    resolveInitialConfig(config);
    applyCssFile();
    emitThemeChange(); // NEW
}

/**
 * Toggles between 'light' and 'dark' theme.
 */
export function toggleTheme() {
    const next = currentTheme === "light" ? "dark" : "light";
    setTheme(next);
}

/**
 * Sets a new theme.
 * @param {string} theme
 */
export function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    applyCssFile();
    emitThemeChange(); // NEW
}

/**
 * Applies a new palette.
 * @param {string} palette
 */
export function applyPalette(palette) {
    currentPalette = palette;
    localStorage.setItem(PALETTE_KEY, palette);
    applyCssFile();
    emitThemeChange(); // NEW
}

/**
 * Sets the text direction.
 * @param {'ltr' | 'rtl'} dir
 */
export function setDirection(dir) {
    currentDirection = dir;
    localStorage.setItem(DIRECTION_KEY, dir);
    applyCssFile();
    emitThemeChange(); // NEW
}

export function toggleDirection() {
    const next = currentDirection === "ltr" ? "rtl" : "ltr";
    setDirection(next);
}

export function resetThemeSystem() {
    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(PALETTE_KEY);
    localStorage.removeItem(DIRECTION_KEY);
    initThemeSystem();
}

export function getCurrentConfig() {
    return {
        theme: currentTheme,
        palette: currentPalette,
        direction: currentDirection,
    };
}
