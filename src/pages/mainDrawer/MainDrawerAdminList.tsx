import {
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import AddTabelIcon from '@material-ui/icons/Add'
import CategoryIcon from '@material-ui/icons/Category'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ChangePasswordIcon from '@material-ui/icons/Lock'
import { NavLink } from 'react-router-dom'

import useStyles from './styles/index.styles'

const MainDrawerAdminList = () => {
  const classes = useStyles()
  return (
    <>
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
        to="/categories"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Cateogries</Typography>
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
    </>
  )
}
export default MainDrawerAdminList
