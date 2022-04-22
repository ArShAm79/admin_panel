import * as yup from 'yup'

const AddCategoryValidation = yup.object({
  title: yup.string().required('Title is required'),
  color: yup.string().required('Color is required'),
  tooltip: yup.string().required('Tooltip is required')
})
export default AddCategoryValidation
