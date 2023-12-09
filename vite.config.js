import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, './index.html'),
                about: resolve(__dirname, './about/about.html'),
                contact: resolve(__dirname, './contact/contact.html'),
                projects: resolve(__dirname, './projects/projects.html'),
            },
        },
    },
})
