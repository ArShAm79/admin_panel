import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 550,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    width: '100%',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontSize: 25,
    fontWeight: 'bold'
  },
  titleContainer: {
    marginBottom: 20
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 40px)',
    margin: '10px 0',
    rowGap: 20
  }
}))
export default useStyles
