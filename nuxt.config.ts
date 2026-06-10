import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://thefroggystudio.com',
      gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
