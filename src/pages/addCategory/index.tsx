import { Button, TextField, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import useStyles from './styles/index.style'
import AddCateogryValidation from './validation'

const AddCateogry = () => {
  const history = useHistory()
  const onSumbit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await request(
      '/v1/admins/tables/categories',
      'POST',
      values
    )
    if (response.status === 201) {
      toast.success('New Cateogry added')
      resetForm()
      history.push('/categories')
    }
  }
  const initialValues = { title: '', color: '', tooltip: '' }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Add New Category</Typography>
      </div>
      <Formik
        onSubmit={onSumbit}
        validationSchema={AddCateogryValidation}
        initialValues={initialValues}>
        {({
          errors,
          touched,
          handleBlur,
          values,
          isSubmitting,
          handleChange
        }) => (
          <Form className={classes.formContainer}>
            <div className={classes.inputContainer}>
              <TextField
                label="Title"
                id="title"
                name="title"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.title}
                error={touched.title && !!errors.title}
                helperText={touched.title ? errors.title : undefined}
              />
              <TextField
                label="Color"
                id="color"
                name="color"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.color}
                error={touched.color && !!errors.color}
                helperText={touched.color ? errors.color : undefined}
              />
              <TextField
                label="Tooltip"
                id="tooltip"
                name="tooltip"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.tooltip}
                error={touched.tooltip && !!errors.tooltip}
                helperText={touched.tooltip ? errors.tooltip : undefined}
              />
            </div>
            <div className={classes.buttonContainer}>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={() => history.push('/categories')}>
                  Cancel
                </Button>
              </div>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="secondary">
                  Add
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddCateogry
