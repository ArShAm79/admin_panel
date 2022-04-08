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
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0,0.75)'
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
  },
  input: {
    color: 'red !importanr'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.9)'
  }
}))
export default useStyles
