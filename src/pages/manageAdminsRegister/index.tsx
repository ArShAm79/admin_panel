import { Button, TextField, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import useStyles from './styles/index.style'
import EditAdminValidation from './validation'

const ManageAdminsRegister = () => {
  const onSumbit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    const response = await request('/v1/admins', 'POST', values)
    if (response.status === 201) {
      toast.success('New Admin added')
      resetForm()
    }
  }
  const initialValues = { name: '', email: '', password: '' }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Add New Admin</Typography>
      </div>
      <Formik
        onSubmit={onSumbit}
        validationSchema={EditAdminValidation}
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
                label="Name"
                id="name"
                name="name"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.name}
                error={touched.name && !!errors.name}
                helperText={touched.name ? errors.name : undefined}
              />
              <TextField
                label="Email"
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.email}
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : undefined}
              />
              <TextField
                label="Password"
                id="password"
                name="password"
                variant="outlined"
                fullWidth
                size="small"
                color="secondary"
                required
                onBlur={handleBlur}
                disabled={isSubmitting}
                onChange={handleChange}
                value={values.password}
                error={touched.password && !!errors.password}
                helperText={touched.password ? errors.password : undefined}
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
export default ManageAdminsRegister
