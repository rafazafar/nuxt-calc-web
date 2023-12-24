// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Monorepo stuff
  extends: ["@nuxt-monorepo/ui"],
  devtools: {
    enabled: true,
  },
  devServer:{
    port: 3001
  },
  // Configurations
  nitro: {
    preset: 'aws-lambda',
    routeRules: {
      "/api/**": {
        proxy: process.env.API_HOST ?? "https://fakestoreapi.com/**",
      },
    },
  },
  
  modules: ["nuxt-icon", "@vueuse/nuxt"],
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head:{
      titleTemplate: "CCI/FA Calc Nuxt Monorepo",
    }
  },

  //Sekrets
  runtimeConfig: {
    public: {},
    private: {
      apiHost: process.env.API_HOST ?? "http://localhost:5000",
    },
  },
});
