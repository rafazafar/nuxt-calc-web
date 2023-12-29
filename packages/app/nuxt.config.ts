// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Monorepo stuff
  extends: ["@nuxt-monorepo/ui"],
  devtools: {
    enabled: true,
  },
  devServer: {
    port: 3001,
  },

  modules: ["nuxt-icon", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      titleTemplate: "CCI/FA Calc Nuxt Monorepo",
    },
  },

  //Sekrets
  runtimeConfig: {
    public: {},
    private: {
      apiHost: process.env.API_HOST ?? "http://localhost:5000",
    },
  },
});
