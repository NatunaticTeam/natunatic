/** @type {import('vite').UserConfig} */
import resolve from 'path';
const { defineConfig } = require('vite')

module.exports = defineConfig({
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve.resolve(__dirname, 'index.html'),
                artbook: resolve.resolve(__dirname, 'artbook.html'),
                projects: resolve.resolve(__dirname, 'projects.html'),
                tareas: resolve.resolve(__dirname, 'tareas.html')
            }
        }
    },
    base: '/'
})