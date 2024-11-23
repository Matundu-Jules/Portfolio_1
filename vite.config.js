import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                // addionalData: '/src/assets/styles/index.scss',
                // additionalData: `@use './src/assets/styles/index.scss' as *;`,
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
