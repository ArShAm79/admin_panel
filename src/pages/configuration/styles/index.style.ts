import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(35, 40, 46)',
    width: '100%',
    display: 'flex',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTop: '45px solid rgb(45, 50, 56)',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
    maxWidth: 'calc(100vw - 100px)'
  },
  titleContainer: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
    paddingBottom: 10,
    margin: '10px 20px'
  },
  title: {
    width: '100%',
    color: 'rgb(228,228,228)',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  },
  buttonContainer: {
    marginTop: 10,
    width: 'calc(100% - 40px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  addButton: {
    backgroundColor: 'rgb(17, 101, 233)',
    color: 'rgba(255,255,255,0.9)'
  }
}))
export default useStyles
