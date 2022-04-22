import { Button, TextField, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import useStyles from './styles/index.style'
import AddCategoryValidation from './validation'

const EditCategory = () => {
  const params = useParams<{ id: string }>()
  const initialValues = { title: '', color: '', tooltip: '' }

  const [data, setdata] = useState(initialValues)
  const onSumbit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await request(
      '/v1/admins/tables/categories/id/' + params.id,
      'PUT',
      values
    )
    if (response.status === 200) {
      toast.success('Cateogry saved')
      resetForm()
    }
  }
  const getData = async () => {
    const response = await request(
      '/v1/admins/tables/categories/id/' + params.id
    )
    if (response.status === 200) {
      setdata(response.responseJSON)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Edit Category</Typography>
      </div>
      <Formik
        onSubmit={onSumbit}
        validationSchema={AddCategoryValidation}
        enableReinitialize
        initialValues={data}>
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
                <Button variant="contained" fullWidth color="primary">
                  Cancel
                </Button>
              </div>
              <div className={classes.button}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  color="secondary">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default EditCategory
