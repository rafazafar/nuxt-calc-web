// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  // Monorepo stuff
  extends: ["@nuxt-monorepo/ui"],
  devtools: {
    enabled: true,
  },

  // Configurations
  nitro: {
    routeRules: {
      "/api/**": {
        proxy: process.env.API_HOST ?? "https://fakestoreapi.com/**",
      },
    },
  },
  
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head:{
      titleTemplate: "%s - Nuxt Calc-Web Monorepo",
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
