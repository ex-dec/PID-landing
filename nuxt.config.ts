// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: false },

  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/style.css",
  },

  components: [{ path: "~/components", pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: "id" },
    },
  },

  nitro: {
    preset: "static",
  },
});
