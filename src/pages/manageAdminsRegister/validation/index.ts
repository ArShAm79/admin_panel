import * as yup from 'yup'

const EditAdminValidation = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required')
})
export default EditAdminValidation
