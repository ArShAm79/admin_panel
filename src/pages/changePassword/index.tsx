import {
  Button,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { Form, Formik } from 'formik'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import useStyles from './styles/index.style'
import ChangePasswordValidation from './validation'

const ChangePassword = () => {
  const initialValues = {
    // currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showRepeatPassword: false
  }
  const onSubmit = (values: any) => {
    request('/v1/admins/change-password', 'PUT', {
      new_password: values.newPassword
    }).then((resposne) => {
      if (resposne.status === 200) {
        toast.success('Password Changed Successfully')
      }
    })
  }
  const history = useHistory()

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
          handleChange,
          setFieldValue
        }) => {
          return (
            <Form className={classes.form}>
              <div className={classes.inputContainer}>
                {/* <TextField
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
                  type={values.showCurrentPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          setFieldValue(
                            'showCurrentPassword',
                            !values.showCurrentPassword
                          )
                        }>
                        {values.showCurrentPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    )
                  }}
                /> */}
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
                  type={values.showNewPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          setFieldValue(
                            'showNewPassword',
                            !values.showNewPassword
                          )
                        }>
                        {values.showNewPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    )
                  }}
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
                  type={values.showRepeatPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          setFieldValue(
                            'showRepeatPassword',
                            !values.showRepeatPassword
                          )
                        }>
                        {values.showRepeatPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    )
                  }}
                />
              </div>
              <div className={classes.buttonContainer}>
                <Button variant="contained" color="default" type="submit">
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => history.push('/dashboard')}>
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
