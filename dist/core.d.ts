/**
 * Initializes the theme system.
 * Applies current theme, palette, and direction from localStorage or defaults.
 */
export function initThemeSystem(): void;

/**
 * Toggles the current theme between 'light' and 'dark'.
 */
export function toggleTheme(): void;

/**
 * Applies the given palette (e.g., "default", "blue", "orange").
 * @param palette - The palette name to apply.
 */
export function applyPalette(palette: string): void;

/**
 * Toggles the document direction between 'ltr' and 'rtl'.
 */
export function toggleDirection(): void;

/**
 * Resets the theme system to defaults:
 * - theme: "light"
 * - palette: "default"
 * - direction: "ltr"
 */
export function resetThemeSystem(): void;

/**
 * Returns the current config values stored in memory/localStorage.
 */
export function getCurrentConfig(): {
    theme: string;
    palette: string;
    direction: string;
};
