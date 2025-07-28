import * as ThemeManager from '../src/js/core.js';

describe('ThemeManager Core', () => {
    beforeEach(() => {
        document.head.innerHTML = '';
        document.body.innerHTML = `
      <link id="theme-css" rel="stylesheet" />
      <html dir="ltr"></html>
    `;
        ThemeManager.initThemeSystem();
    });

    test('initializes with default theme and palette', () => {
        expect(document.getElementById('theme-css').href).toContain('theme-light.default');
        expect(document.documentElement.getAttribute('dir')).toBe('ltr');
    });

    test('toggles dark/light theme', () => {
        ThemeManager.toggleTheme();
        expect(document.getElementById('theme-css').href).toContain('theme-dark');
        ThemeManager.toggleTheme();
        expect(document.getElementById('theme-css').href).toContain('theme-light');
    });

    test('toggles RTL/LTR direction', () => {
        ThemeManager.toggleDirection();
        expect(document.documentElement.getAttribute('dir')).toBe('rtl');
        ThemeManager.toggleDirection();
        expect(document.documentElement.getAttribute('dir')).toBe('ltr');
    });

    test('applies a specific palette', () => {
        ThemeManager.applyPalette('red');
        expect(document.getElementById('theme-css').href).toContain('red');

        ThemeManager.applyPalette('green');
        expect(document.getElementById('theme-css').href).toContain('green');
    });

    test('get current theme state', () => {
        ThemeManager.applyPalette('orange');
        ThemeManager.toggleTheme();
        ThemeManager.toggleDirection();

        const state = ThemeManager.getThemeState();
        expect(state.theme).toBe('dark');
        expect(state.palette).toBe('orange');
        expect(state.direction).toBe('rtl');
    });
});