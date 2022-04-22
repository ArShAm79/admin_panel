import { TableCell, TableHead, Typography, withStyles } from '@material-ui/core'

import useStyles from './styles/ManageAdminsTableHead.style'

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)
const CateogriesTableHead = () => {
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
        <Typography>Color</Typography>
      </CustomTableCell>
      <CustomTableCell align="left">
        <Typography>Tooltip</Typography>
      </CustomTableCell>
      <CustomTableCell className={classes.options}>
        <Typography>Options</Typography>
      </CustomTableCell>
    </TableHead>
  )
}
export default CateogriesTableHead
