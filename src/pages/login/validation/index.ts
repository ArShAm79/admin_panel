import * as yup from 'yup'

const loginValidation = yup.object({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().required('Password is reuqired')
})
export default loginValidation
