import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    root: './src',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@images': resolve(__dirname, './src/assets/images'),
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'assets/images/*',
                    dest: 'assets/images',
                },
                {
                    src: 'assets/images/banner/**/*',
                    dest: 'assets/images/banner',
                },
                {
                    src: 'assets/images/exp-thumbnail/**/*',
                    dest: 'assets/images/exp-thumbnail',
                },
                {
                    src: 'assets/images/projects/**/*',
                    dest: 'assets/images/projects',
                },
                {
                    src: 'assets/documents/**/*', // Les documents sources
                    dest: 'assets/documents', // Le répertoire de destination dans 'dist'
                },
            ],
        }),
    ],

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
