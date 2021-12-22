import { defineNuxtPlugin } from '#app'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VuePlyr, {
        props: {
            // eslint-disable-next-line vue/require-prop-types
            plyr: {
              fullscreen: {
                enabled: true
              },
              emit: ["ended"]
            }
          }
    })
})
