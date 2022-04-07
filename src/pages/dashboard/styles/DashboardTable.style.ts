import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  value: {
    borderBottom: '1px solid rgba(255,255,255,0.5)',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.7)',
    '&:hover': {
      color: 'rgba(255,255,255,0.9)',
      borderBottom: '1px solid rgba(255,255,255,0.6)'
    }
    // borderRadius: 5
  }
}))
export default useStyles
