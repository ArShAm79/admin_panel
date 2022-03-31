import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#2d3238',
    // width: '100%',
    padding: '0 10px',
    flex: 1
  },
  logoContainer: {
    padding: 8,
    borderRadius: 10
  },
  optionsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 9,
    flexDirection: 'row-reverse'
  },
  menuButton: {
    background:
      'linear-gradient(270deg, rgba(18,104,245,1) 0%, rgba(9,84,135,1) 100%)',
    borderRadius: 3,
    padding: '5px 10px',
    color: '#FFF',
    display: 'flex',
    columnGap: 6
  },
  gasButton: {
    background: '#10db8a',
    fontSize: 15
  },
  valueButton: {
    fontSize: 15,
    background: 'transparent',
    marginRight: 7,
    alignItems: 'center'
  }
}))

export default useStyles
