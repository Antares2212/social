import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from '@vuelidate/core'
import componentsUI from '@/app/UI'
import { notification } from './plugins/notification'
import { request } from './helpers/api'


import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from "vuetify/iconsets/fa"
import 'vuetify/styles'

import bootstrap from 'bootstrap/dist/js/bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import "@mdi/font/css/materialdesignicons.css"
import "@fortawesome/fontawesome-free/css/all.css"

const app = createApp(App)
 
app.config.globalProperties.$request = request;

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa
      },
    }
})

componentsUI.forEach(component => {
  app.component(component.name, component)
})

app
    .use(router)
    .use(notification)
    .use(vuetify)
    .use(bootstrap)
    .use(Vuelidate)
    .mount('#app')
