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

const ManageAdminsTableBody: React.FC<ManageAdminsTableProps> = ({
  data,
  setData
}) => {
  const handleDelete = async (id: number) => {
    request(`/v1/admins/id/${id}`, 'DELETE').then((response) => {
      if (response.status === 200) {
        toast.success('User deleted successfully')
        setData([...data.filter((item) => item.id !== id)])
      } else {
        toast.error(response.responseJSON.message)
      }
    })
  }
  const history = useHistory()
  return (
    <TableBody>
      {data.map((item, index) => (
        <CustomTableRow key={index.toString() + item.id}>
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
