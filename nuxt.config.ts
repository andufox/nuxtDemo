// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/base.scss'],
  compatibilityDate: '2024-12-05',
  runtimeConfig: {
    public: {
      appName: '新世界',
    },
  },
});
