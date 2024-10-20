import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                addionalData: './src/assets/styles/index.scss',
                api: 'modern',
            },
        },
    },
    server: {
        watch: {
            usePolling: true,
            ignored: ['!**/*.scss'],
        },
    },
})
