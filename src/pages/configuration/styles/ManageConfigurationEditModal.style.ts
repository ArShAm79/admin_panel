import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'rgb(35, 40, 46)',
    width: 500,
    margin: 'auto',
    marginTop: '20vh',
    paddingTop: 40,
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
  icon: {
    top: -30,
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'rgb(17, 20, 23)',
    borderRadius: 50,
    padding: 5,
    '& svg': {
      fontSize: 50,
      color: '#000'
    }
  },
  inputContainer: {
    margin: '20px 0',
    width: '100%'
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    columnGap: 20,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))
export default useStyles
