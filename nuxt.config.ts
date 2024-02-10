// https://nuxt.com/docs/api/configuration/nuxt-config
import { checker } from 'vite-plugin-checker'
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      checker({
        vueTsc: true,
      }),
    ]
  },
  
})
