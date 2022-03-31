import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '70%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(45, 50, 80)',
    // height: '100%'
    padding: 20
  },
  titleContainer: {
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    width: '50%',
    marginBottom: 25
  },
  buttonContainer: {
    // backgroundColor: 'red',
    width: '50%',
    columnGap: 10,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex',
    flexDirection: 'row-reverse'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))
export default useStyles
