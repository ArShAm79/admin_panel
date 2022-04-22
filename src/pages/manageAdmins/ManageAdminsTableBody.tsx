import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  withStyles
} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import { ManageAdminsTableProps } from './ManageAdminsTable'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

const ManageAdminsTableBody: React.FC<ManageAdminsTableProps> = ({ data }) => {
  const handleDelete = async (id: number) => {
    request(`/v1/admins/id/${id}`, 'DELETE').then((response) => {
      if (response.status === 200) {
        toast.success('Log deleted successfully')
      } else {
        toast.error(response.responseJSON.message)
      }
    })
  }
  const history = useHistory()
  return (
    <TableBody>
      {data.map((item, index) => (
        <CustomTableRow key={index.toString()}>
          <TableCell>
            <Typography>{index + 1}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.email}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.role.role_name}</Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton
              size="small"
              onClick={() => {
                history.push('/admin-table/edit/' + item.id)
              }}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => handleDelete(item.id)}>
              <DeleteForeverIcon />
            </IconButton>
          </TableCell>
        </CustomTableRow>
      ))}
    </TableBody>
  )
}
export default ManageAdminsTableBody