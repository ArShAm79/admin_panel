import {
  ButtonBase,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Hidden
} from '@material-ui/core'
import AddTabelIcon from '@material-ui/icons/Add'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ExitIcon from '@material-ui/icons/ExitToApp'
import ActivityLogIcon from '@material-ui/icons/History'
import GasIcon from '@material-ui/icons/LocalGasStation'
import ChangePasswordIcon from '@material-ui/icons/Lock'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import UpdateIcon from '@material-ui/icons/Update'
import { useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import { logOut } from '../../redux/auth/action'
import PanelRoutes from '../../routes/PanelRoutes'
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
          <ListItem
            button
            component={NavLink}
            to="/dashboard"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <Hidden smDown>
              <ListItemText>
                <Typography color="inherit">Dashboard</Typography>
              </ListItemText>
            </Hidden>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/add-table"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <AddTabelIcon />
            </ListItemIcon>
            <Hidden smDown>
              <ListItemText>
                <Typography color="inherit">Add Tabel</Typography>
              </ListItemText>
            </Hidden>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/activity-log"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <ActivityLogIcon />
            </ListItemIcon>
            <Hidden smDown>
              <ListItemText>
                <Typography color="inherit">Activity log</Typography>
              </ListItemText>
            </Hidden>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/change-password"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <ChangePasswordIcon />
            </ListItemIcon>
            <Hidden smDown>
              <ListItemText>
                <Typography color="inherit">Change Password</Typography>
              </ListItemText>
            </Hidden>
          </ListItem>
        </List>
        <main className={classes.main}>
          <PanelRoutes />
        </main>
      </div>
    </div>
  )
}
export default MainDrawer
