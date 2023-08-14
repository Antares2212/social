import notifications from "@/helpers/notificationList"
import { inject, ref, watch } from "vue"

export const useError = () => {
  const $error = inject('error')
  let error = ref('')

  const setError = (message) => error.value = message

  const clearError = () => error.value = null

  const getError = e => console.log(e)

  watch(() => error.value, (newVal) => {
    console.log(newVal)
    $error(notifications[newVal] || 'Что-то пошло не так')
  })

  return {
    setError,
    clearError,
    getError,
  }
}
