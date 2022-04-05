import {
  Button,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import { saveUser } from '../../redux/auth/action'
import useStyles from './styles/index.style'
import loginValidation from './validation'

const LoginPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const onSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    const { email, password } = values
    request('/v1/admins/login', 'POST', { email, password }).then(
      (response) => {
        if (response.status === 200) {
          toast.success('Log in successfully')
          dispatch(saveUser(response.responseJSON[0].token.access_token))
          if (values.rememberMe) {
            localStorage.setItem(
              'token',
              response.responseJSON[0].token.access_token
            )
          } else {
            sessionStorage.setItem(
              'token',
              response.responseJSON[0].token.access_token
            )
          }
          history.push('/')
        } else {
          // toast(response.responseJSON.message, { type: 'error' })
        }
        setSubmitting(false)
      }
    )
  }
  const initialValues = {
    email: '',
    password: '',
    showPassword: false,
    rememberMe: false
  }
  return (
    <div className={classes.root}>
      <Paper elevation={20} className={classes.paper}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Login</Typography>
        </div>
        <Formik
          validationSchema={loginValidation}
          onSubmit={onSubmit}
          initialValues={initialValues}>
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            setFieldValue,
            touched
          }) => {
            return (
              <Form className={classes.inputContainer}>
                <TextField
                  label="Email"
                  name="email"
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  size="medium"
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={touched.email ? errors.email : undefined}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
                <TextField
                  label="Password"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  name="password"
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={touched.password ? errors.password : undefined}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  type={values.showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() =>
                          setFieldValue('showPassword', !values.showPassword)
                        }>
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    )
                  }}
                />
                <div className={classes.checkboxContainer}>
                  <Checkbox
                    name="remember me"
                    size="small"
                    value={values.rememberMe}
                    onChange={handleChange}
                  />
                  <Typography color="secondary">Remember me</Typography>
                </div>

                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                  size="large">
                  <Typography color="initial">Login</Typography>
                </Button>
              </Form>
            )
          }}
        </Formik>
      </Paper>
    </div>
  )
}
export default LoginPage
