import {
  ButtonBase,
  AppBar,
  Toolbar,
  IconButton,
  List,
  Hidden
} from '@material-ui/core'
import ExitIcon from '@material-ui/icons/ExitToApp'
import GasIcon from '@material-ui/icons/LocalGasStation'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import UpdateIcon from '@material-ui/icons/Update'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import { logOut } from '../../redux/auth/action'
import PanelRoutes from '../../routes/PanelRoutes'
import MainDarwerFounderList from './MainDarwerFounderList'
import MainDrawerAdminList from './MainDrawerAdminList'
import useStyles from './styles/index.styles'

const MainDrawer = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const LogoutFunction = () => {
    localStorage.clear()
    sessionStorage.clear()
    dispatch(logOut())
    history.push('/')
  }
  const { role } = useSelector((state: any) => state.authReducer)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
              size="small"
              onClick={LogoutFunction}>
              <ExitIcon />
            </IconButton>
            <Hidden smDown>
              <ButtonBase className={classes.menuButton}>
                <UpdateIcon />
                {'59.49'}
              </ButtonBase>
            </Hidden>
            <Hidden smDown>
              <IconButton className={classes.menuButton}>
                <SettingsIcon />
              </IconButton>
            </Hidden>
            <ButtonBase
              className={`${classes.menuButton} ${classes.gasButton}`}>
              {'20'}
              <GasIcon />
            </ButtonBase>
            <Hidden smDown>
              <div className={`${classes.menuButton} ${classes.valueButton}`}>
                <MenuIcon />
                {'0.00'}
              </div>
            </Hidden>
          </div>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <div className={classes.topPart}>
        <List className={classes.listContainer}>
          {role === 'GOD' ? <MainDarwerFounderList /> : <MainDrawerAdminList />}
        </List>
        <main className={classes.main}>
          <PanelRoutes />
        </main>
      </div>
    </div>
  )
}
export default MainDrawer
