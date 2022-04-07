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
  tableHeadContainer: {
    margin: '10px 20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    alignItems: 'center'
  }
}))
export default useStyles
