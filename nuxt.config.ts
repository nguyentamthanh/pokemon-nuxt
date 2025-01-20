// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  sourcemap: false,
  ssr: false,
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '@/assets/css/main.css',
  ],
})
