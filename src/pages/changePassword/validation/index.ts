import * as yup from 'yup'

const ChangePasswordValidation = yup.object({
  currentPassword: yup.string().required('Current password is required'),
  newPassword: yup.string().required('Current password is required'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
})
export default ChangePasswordValidation
