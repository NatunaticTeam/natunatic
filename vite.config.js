/** @type {import('vite').UserConfig} */
import resolve from 'path'

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve.resolve(__dirname, 'index.html'),
                artbook: resolve.resolve(__dirname, 'artbook.html'),
                projects: resolve.resolve(__dirname, 'projects.html')
            }
        }
    }
}