import { ButtonBase, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExitIcon from '@material-ui/icons/ExitToApp'
import GasIcon from '@material-ui/icons/LocalGasStation'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import UpdateIcon from '@material-ui/icons/Update'

import logo from '../../assets/images/logo.svg'
import useStyles from './styles/index.styles'

const MainDrawer = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      {/* <Container maxWidth="xl"> */}
      <Toolbar disableGutters className={classes.topBar}>
        <div>
          <ButtonBase className={classes.logoContainer}>
            <img src={logo} alt="logo" />
          </ButtonBase>
        </div>
        <div className={classes.optionsContainer}>
          <IconButton
            color="primary"
            className={classes.menuButton}
            size="small">
            <ExitIcon />
          </IconButton>
          <ButtonBase className={classes.menuButton}>
            <UpdateIcon />
            {'59.49'}
          </ButtonBase>
          <IconButton className={classes.menuButton}>
            <SettingsIcon />
          </IconButton>
          <ButtonBase className={`${classes.menuButton} ${classes.gasButton}`}>
            {'20'}
            <GasIcon />
          </ButtonBase>
          <div className={`${classes.menuButton} ${classes.valueButton}`}>
            <MenuIcon />
            {'0.00'}
          </div>
        </div>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  )
}
export default MainDrawer
