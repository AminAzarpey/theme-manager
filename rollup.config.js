export default {
    input: 'src/js/core.js',
    output: {
        file: 'dist/core.js',
        format: 'es', // ES module for modern browser support
        sourcemap: true
    },
    treeshake: true
};