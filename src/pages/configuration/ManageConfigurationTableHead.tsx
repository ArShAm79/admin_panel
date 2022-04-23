import { TableCell, TableHead, Typography, withStyles } from '@material-ui/core'

import useStyles from './styles/ManageConfigurationTableHead.style'

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)
const ManageConfigurationTableHead = () => {
  const classes = useStyles()
  return (
    <TableHead>
      <CustomTableCell align="left">
        <Typography>Id</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Title</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Value</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Key</Typography>
      </CustomTableCell>
      <CustomTableCell className={classes.options}>
        <Typography>Description</Typography>
      </CustomTableCell>
    </TableHead>
  )
}
export default ManageConfigurationTableHead
