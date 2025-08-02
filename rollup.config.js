import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions[]} */
export default [
    {
        input: 'src/js/core.js',
        output: [
            {
                file: 'dist/core.mjs',
                format: 'es',
                sourcemap: true
            },
            {
                file: 'dist/core.js',
                format: 'umd',
                name: 'ThemeManager',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            terser()
        ],
        treeshake: true
    }
];
