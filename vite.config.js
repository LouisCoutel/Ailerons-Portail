import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        // Permet d'utiliser des URL relatives plus courtes et de cacher les adresses de serveurs et d'APIs
        proxy: {
            '/taxref': {
                target: 'https://taxref.mnhn.fr/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/taxref/, ''),
            },
        },
    },
})