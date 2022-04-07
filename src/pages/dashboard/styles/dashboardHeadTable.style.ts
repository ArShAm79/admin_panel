import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    margin: '10px 20px',
    display: 'grid',
    gridTemplateColumns: '9fr',
    alignItems: 'center'
  },
  table: {
    display: 'grid',
    gridTemplateColumns:
      '1fr 2fr 2fr 1fr 2fr 2fr 1fr 4fr 4fr 2fr 2fr 2fr 2fr 2fr 2fr  2fr 2fr 1fr 2fr 2fr 6fr',
    rowGap: 10,
    alignItems: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    columnGap: 15,
    marginBottom: 5,
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      backgroundColor: 'rgba(255,255,255,0.1)',
      // border: '1px solid #000',
      width: 0,
      maxHight: 1
    },
    '&::-webkit-scrollbar': {
      // backgroundColor: 'red',
      width: 0,
      height: 7,
      borderRadius: 10,
      padding: '0 10px !important',
      border: '1px solid rgba(255,255,255,0.3)'
    }
    // minWith: 2200
  },
  tablePart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))
export default useStyles
