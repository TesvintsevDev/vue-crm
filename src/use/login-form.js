import {computed, watch} from 'vue'
import * as yup from 'yup'
import {useField, useForm} from 'vee-validate'

export function useLoginForm() {
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
      'email',
      yup
        .string()
        .trim()
        .required('Пожалуйста введите email')
        .email('Необходимо ввести корректный email')
      )

    const PASSWORD_MIN_LENGTH = 6

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
      'password',
      yup
        .string()
        .trim()
        .required('Пожалуйста введите пароль')
        .min(PASSWORD_MIN_LENGTH, `Пароль не может быть меньше ${PASSWORD_MIN_LENGTH} символов`)
      )

    const isTooManyAttempts = computed( () => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
      if (val) {
        setTimeout( () => submitCount.value = 0, 3000)
      }
    })

    const onSubmit = handleSubmit( values => {
      console.log('Form:', values)
    })  

    return {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
      onSubmit,
      isSubmitting,
      isTooManyAttempts
    }

}