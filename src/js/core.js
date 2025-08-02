// core.js

const THEME_KEY = "tm_theme";
const PALETTE_KEY = "tm_palette";
const DIRECTION_KEY = "tm_dir";

let currentTheme;
let currentPalette;
let currentDirection;
let baseHref = "dist"; // default path
const themeLinkId = "theme-css";

/**
 * Resolve initial configuration from localStorage, user config, or system defaults.
 * @param {ThemeConfig} config
 */
function resolveInitialConfig(config = {}) {
    currentTheme =
        (!config.ignoreStorage && localStorage.getItem(THEME_KEY)) ||
        config.theme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

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

/**
 * Apply the theme CSS file based on the current configuration.
 */
function applyCssFile() {
    const fileName = `theme-${currentTheme}.${currentPalette}${currentDirection === 'rtl' ? '.rtl' : '.ltr'}.css`;
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
 * Initialize the theme system with optional configuration.
 * @param {ThemeConfig} config
 */
export function initThemeSystem(config = {}) {
    resolveInitialConfig(config);
    applyCssFile();
}

/**
 * Toggle between 'light' and 'dark' themes.
 */
export function toggleTheme() {
    const next = currentTheme === "light" ? "dark" : "light";
    setTheme(next);
}

/**
 * Set a new theme manually.
 * @param {string} theme
 */
export function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(THEME_KEY, theme);
    applyCssFile();
}

/**
 * Apply a new palette.
 * @param {string} palette
 */
export function applyPalette(palette) {
    currentPalette = palette;
    localStorage.setItem(PALETTE_KEY, palette);
    applyCssFile();
}

/**
 * Toggle between 'ltr' and 'rtl' directions.
 */
export function toggleDirection() {
    const next = currentDirection === "ltr" ? "rtl" : "ltr";
    setDirection(next);
}

/**
 * Set the text direction manually.
 * @param {string} dir
 */
export function setDirection(dir) {
    currentDirection = dir;
    localStorage.setItem(DIRECTION_KEY, dir);
    applyCssFile();
}

/**
 * Reset theme system to defaults and clear local storage.
 */
export function resetThemeSystem() {
    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(PALETTE_KEY);
    localStorage.removeItem(DIRECTION_KEY);
    initThemeSystem();
}

/**
 * Get current theme configuration.
 * @returns {{theme: string, palette: string, direction: string}}
 */
export function getCurrentConfig() {
    return {
        theme: currentTheme,
        palette: currentPalette,
        direction: currentDirection,
    };
}
