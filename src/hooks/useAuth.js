import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { request } from '@/helpers/api'
import rules from '@/helpers/validation'

export const useAuth = (initialState) => {
  const state = reactive({...initialState})
  const v$ = useVuelidate(rules, state)

  const login = async (data) => {
    await request(`/auth/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      localStorage.setItem('Token', res.token)
    })
    .catch(res => {
      throw res
    })
  }

  return { 
    state, 
    v$,
    login
  }
}
