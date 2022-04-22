import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: 'rgb(35, 40, 46)',
    display: 'flex',
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTop: '45px solid rgb(45, 50, 56)',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20
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
    color: 'rgb(228,228,228)',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20
  },
  clearAllContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'calc(100% - 40px)'
  }
}))
export default useStyles
