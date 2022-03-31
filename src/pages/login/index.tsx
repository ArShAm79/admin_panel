import { Button, Paper, TextField, Typography } from '@material-ui/core'

import useStyles from './styles/index.style'

const LoginPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={20} className={classes.paper}>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>Login</Typography>
        </div>
        <div className={classes.inputContainer}>
          <TextField label="Email" fullWidth variant="outlined" size="medium" />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            size="medium"
          />
          <Button color="secondary" variant="contained" fullWidth size="large">
            <Typography color="initial">Login</Typography>
          </Button>
        </div>
      </Paper>
    </div>
  )
}
export default LoginPage
