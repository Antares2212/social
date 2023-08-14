import Vue3Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const notification = {
  install: (app) => {
    app.use(Vue3Toastify)

    const showNotification = (type, text) => {
      toast[type](text)
    }

    app.provide('showNotification', showNotification)
  }
}
