<template>
  <v-row justify="center" align="center">
    <v-col md="4" sm="6">
      <v-form>
          <h3 class="text-center text-h3 py-3">
            Вход
          </h3>
          <v-text-field
            v-model="state.name"
            :error-messages="v$.name.$errors.map(e => e.$message)"
            :counter="10"
            @input="v$.name.$touch"
            @blur="v$.name.$touch"
            label="Никнейм"
            required
          ></v-text-field>
        
          <v-text-field
            v-model="state.password"
            :error-messages="v$.password.$errors.map(e => e.$message)"
            :counter="10"
            @input="v$.password.$touch"
            @blur="v$.password.$touch"
            label="Пароль"
            required
          ></v-text-field>
        
          <v-row justify="center" align="center">
            <v-col cols="auto">
              <app-button
                @click="submit"
              >
                Войти
              </app-button>
            </v-col>
          </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
import { useAuth } from '@/hooks/useAuth'
import { inject } from 'vue'
export default {
  name: 'LoginView',
  setup: () => {
    const showNotification = inject('showNotification')
    const formData = {
      name: '',
      password: ''
    }
    const { v$, state, login } = useAuth(formData)

    const submit = () => {
      login({
        username: state.name,
        password: state.password
      }).then(() => {
        showNotification('success', `Пользователь ${state.name} успешно авторизован`)
      }).catch(res => showNotification('error', res.message))
    }
    return { 
      v$, 
      state,
      login,
      submit
    }
  }  
}
</script>
<style lang="scss">
    
</style>
