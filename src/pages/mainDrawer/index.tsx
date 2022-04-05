import {
  ButtonBase,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import AddTabelIcon from '@material-ui/icons/Add'
import DashboardIcon from '@material-ui/icons/Dashboard'
import EditIcon from '@material-ui/icons/Edit'
import ExitIcon from '@material-ui/icons/ExitToApp'
import GasIcon from '@material-ui/icons/LocalGasStation'
import ChangePasswordIcon from '@material-ui/icons/Lock'
import MenuIcon from '@material-ui/icons/Menu'
import AlertIcon from '@material-ui/icons/Notifications'
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
            <ButtonBase className={classes.menuButton}>
              <UpdateIcon />
              {'59.49'}
            </ButtonBase>
            <IconButton className={classes.menuButton}>
              <SettingsIcon />
            </IconButton>
            <ButtonBase
              className={`${classes.menuButton} ${classes.gasButton}`}>
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
            <ListItemText>
              <Typography color="inherit">Dashboard</Typography>
            </ListItemText>
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
            <ListItemText>
              <Typography color="inherit">Add Tabel</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/edit-tabel"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography color="inherit">Edit Tabel</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/alert"
            className={classes.item}
            activeClassName={classes.activeItem}>
            <ListItemIcon>
              <AlertIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography color="inherit">Alert</Typography>
            </ListItemText>
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
            <ListItemText>
              <Typography color="inherit">Change Password</Typography>
            </ListItemText>
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
