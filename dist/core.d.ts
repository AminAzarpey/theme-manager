// core.d.ts

/**
 * Configuration options for initializing the theme system.
 */
export interface ThemeConfig {
    /**
     * Theme to use initially (e.g. 'light' or 'dark').
     * If omitted, it falls back to localStorage or system preference.
     */
    theme?: string;

    /**
     * Palette to use (e.g. 'default', 'green', 'blue').
     */
    palette?: string;

    /**
     * Text direction: 'ltr' (left-to-right) or 'rtl' (right-to-left).
     */
    direction?: 'ltr' | 'rtl';

    /**
     * Base path for loading CSS files.
     * Example: '/theme-assets' if assets are copied there.
     * Default: 'dist'
     */
    baseHref?: string;

    /**
     * If true, disables reading from localStorage.
     * Forces values from config.
     */
    ignoreStorage?: boolean;
}

/**
 * Initializes the theme system and applies a CSS file.
 * Call this once on app startup (e.g., in ngOnInit or main.ts).
 * @param config Optional configuration object.
 */
export function initThemeSystem(config?: ThemeConfig): void;

/**
 * Toggles the current theme between 'light' and 'dark'.
 */
export function toggleTheme(): void;

/**
 * Sets the current theme.
 * @param theme The theme name to apply.
 */
export function setTheme(theme: string): void;

/**
 * Applies a palette (e.g., 'default', 'green').
 * @param palette The palette name to use.
 */
export function applyPalette(palette: string): void;

/**
 * Toggles text direction between 'ltr' and 'rtl'.
 */
export function toggleDirection(): void;

/**
 * Manually sets the text direction.
 * @param dir The direction to set ('ltr' or 'rtl').
 */
export function setDirection(dir: 'ltr' | 'rtl'): void;

/**
 * Resets all theme values to default and clears localStorage.
 */
export function resetThemeSystem(): void;

/**
 * Returns the current configuration as an object.
 */
export function getCurrentConfig(): {
    theme: string;
    palette: string;
    direction: string;
};
