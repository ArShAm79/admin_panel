import { TableCell, TableHead, Typography, withStyles } from '@material-ui/core'

import useStyles from './styles/ActivityLogTableHead.style'

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)
const ActivityLogTableHead = () => {
  const classes = useStyles()
  return (
    <TableHead>
      <CustomTableCell align="left">
        <Typography>Id</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>User</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Discription</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Time</Typography>
      </CustomTableCell>

      <CustomTableCell className={classes.options}>
        <Typography>Options</Typography>
      </CustomTableCell>
    </TableHead>
  )
}
export default ActivityLogTableHead
