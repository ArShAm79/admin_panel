import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    // minHeight: 'calc(100vh - 144px)',
    backgroundColor: 'rgb(35, 40, 46)',
    display: 'flex',
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTop: '45px solid rgb(45, 50, 56)',
    flexDirection: 'column'
  },
  titleContainer: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
    paddingBottom: 10,
    margin: '10px 20px'

    // marginTop: 60
  },
  title: {
    color: 'rgb(228,228,228)',
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4 , 1fr)',
    columnGap: 35,
    rowGap: 25,
    margin: '10px 20px'
  },
  input: {
    '&::placeholder': {
      color: '#000'
    }
  },
  formContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
    // alignItems: 'flex-end'
  },
  buttonContainer: {
    display: 'flex',
    // alignItems: 'flex-end',
    // width: 100,
    justifyContent: 'flex-end',
    margin: '40px 20px',
    columnGap: 40
  },
  button: {
    width: 100
  }
}))
export default useStyles
