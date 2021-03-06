import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  withStyles
} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import { ActivityLogTableProps } from './ActivityLogTable'

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

const ActivityLogTableBody: React.FC<ActivityLogTableProps> = ({ data }) => {
  const handleDelete = async (id: number) => {
    request(`/v1/admins/activitylogs/id/${id}`, 'DELETE').then((response) => {
      if (response.status === 200) {
        toast.success('Log deleted successfully')
      } else {
        toast.error(response.responseJSON.message)
      }
    })
  }
  return (
    <TableBody>
      {data.map((item, index) => {
        const date = new Date(Number(item.created_date))
        return (
          <CustomTableRow key={index.toString() + item.id}>
            <TableCell>
              <Typography>{index + 1}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.admin.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.description}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{`${date.getFullYear()} ${
                month[date.getMonth()]
              } ${date.getDay()}, ${date.getHours()}:${date.getMinutes()}`}</Typography>
            </TableCell>
            <TableCell align="center">
              <IconButton size="small" onClick={() => handleDelete(item.id)}>
                <DeleteForeverIcon />
              </IconButton>
            </TableCell>
          </CustomTableRow>
        )
      })}
    </TableBody>
  )
}
export default ActivityLogTableBody
