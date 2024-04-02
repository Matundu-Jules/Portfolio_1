import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    root: './src',

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, './src/index.html'),
                about: resolve(__dirname, './src/pages/about/about.html'),
                contact: resolve(__dirname, './src/pages/contact/contact.html'),
                projects: resolve(
                    __dirname,
                    './src/pages/projects/projects.html'
                ),
            },
        },
    },
})
