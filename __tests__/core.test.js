
import {
    applyTheme,
    applyPalette,
    setDirection,
    toggleDirection,
    toggleTheme,
    getCurrentTheme,
    getCurrentPalette,
    getDirection,
    getConfig,
    configure,
    initThemeSystem
} from '../src/js/core';

describe('Theme Manager Core API', () => {
    beforeEach(() => {
        document.body.className = '';
        document.documentElement.removeAttribute('dir');
        localStorage.clear();
    });

    test('should apply theme correctly', () => {
        applyTheme('dark');
        expect(document.body.classList.contains('theme-dark')).toBe(true);
        expect(getCurrentTheme()).toBe('dark');
    });

    test('should apply palette correctly', () => {
        applyPalette('green');
        expect(document.body.classList.contains('palette-green')).toBe(true);
        expect(getCurrentPalette()).toBe('green');
    });

    test('should toggle theme correctly', () => {
        applyTheme('light');
        toggleTheme();
        expect(getCurrentTheme()).toBe('dark');
    });

    test('should set and toggle direction', () => {
        setDirection('rtl');
        expect(document.documentElement.getAttribute('dir')).toBe('rtl');
        expect(getDirection()).toBe('rtl');
        toggleDirection();
        expect(getDirection()).toBe('ltr');
    });

    test('should configure new theme and palette via JSON', () => {
        configure({
            palettes: { violet: '#7c3aed' },
            themes: { midnight: { background: '#101010', text: '#eeeeee' } }
        });

        expect(getConfig().palettes.violet).toBe('#7c3aed');
        expect(getConfig().themes.midnight.background).toBe('#101010');

        applyTheme('midnight');
        applyPalette('violet');

        expect(document.body.classList.contains('theme-midnight')).toBe(true);
        expect(document.body.classList.contains('palette-violet')).toBe(true);
    });

    test('should initialize with localStorage values', () => {
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('palette', 'red');
        localStorage.setItem('dir', 'rtl');

        initThemeSystem();

        expect(getCurrentTheme()).toBe('dark');
        expect(getCurrentPalette()).toBe('red');
        expect(getDirection()).toBe('rtl');
    });
});
