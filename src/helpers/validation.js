import { helpers, maxLength, minLength, required } from '@vuelidate/validators'

const passwordRegEx = /^(?=.*[A-Za-z])[A-Za-z\d]{5,20}$/
const emailRegEx = /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i
const phoneRegEx = /[0-9-]+/

export default {
  name: { 
    required ,
    minLength: minLength(3),
    maxLength: maxLength(20)
  },
  password: {
    required,
    minLength: minLength(5),
    maxLength: maxLength(20),
    password(val) {
      if (!helpers.req(val)) { return false }
      return passwordRegEx.test(val)
    }
  },
  phone: {
    required,
    minLength: minLength(10),
    maxLength: maxLength(11),
    phone(val) {
      if (!helpers.req(val)) { return false }
      return phoneRegEx.test(val)
    }
  },
  email: {
    required,
    email(val) {
      if (!helpers.req(val)) { return false }
      return emailRegEx.test(val)
    }
  }
}
