import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'

import useStyles from './styles/index.style'
import ChangePasswordValidation from './validation'

const ChangePassword = () => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    repeatPassword: ''
  }
  const onSubmit = (values: any) => {
    console.log(values)
  }
  const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={20}>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>Change Password</Typography>
      </div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={ChangePasswordValidation}
        initialValues={initialValues}>
        {({
          errors,
          touched,
          handleBlur,
          values,
          isSubmitting,
          handleChange
        }) => {
          return (
            <Form className={classes.form}>
              <div className={classes.inputContainer}>
                <TextField
                  label="current password"
                  variant="outlined"
                  fullWidth
                  name="currentPassword"
                  value={values.currentPassword}
                  error={touched.currentPassword && !!errors.currentPassword}
                  helperText={
                    touched.currentPassword ? errors.currentPassword : undefined
                  }
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
                <TextField
                  label="new password"
                  variant="outlined"
                  fullWidth
                  name="newPassword"
                  value={values.newPassword}
                  error={touched.newPassword && !!errors.newPassword}
                  helperText={
                    touched.newPassword ? errors.newPassword : undefined
                  }
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
                <TextField
                  label="repeat password"
                  variant="outlined"
                  fullWidth
                  name="repeatPassword"
                  value={values.repeatPassword}
                  error={touched.repeatPassword && !!errors.repeatPassword}
                  helperText={
                    touched.repeatPassword ? errors.repeatPassword : undefined
                  }
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.buttonContainer}>
                <Button variant="contained" color="default" type="submit">
                  Save
                </Button>
                <Button variant="outlined" color="primary">
                  Cancel
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Paper>
  )
}
export default ChangePassword
