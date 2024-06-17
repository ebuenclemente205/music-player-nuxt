export default defineNuxtConfig({
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/eslint',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  eslint: {
    config: {
      stylistic: {
        maxLineLength: 100,
      },
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
})
