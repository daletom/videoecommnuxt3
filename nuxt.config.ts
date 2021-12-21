import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/styles.css"],
    nitro: {
        preset: 'node'
    },
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    }
})
