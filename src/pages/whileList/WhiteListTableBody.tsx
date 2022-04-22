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
import { useState } from 'react'
import { toast } from 'react-toastify'

import request from '../../heplers/request'
import { WhilteListTableProps } from './WhilteListTable'
import WhilteListEditModal from './components/WhilteListEditModal'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

const WhiteListTableBody: React.FC<WhilteListTableProps> = ({
  data,
  setData,
  getData
}) => {
  const handleDelete = async (id: number) => {
    request(`/v1/admins/whitelist-addresses/id/${id}`, 'DELETE').then(
      (response) => {
        if (response.status === 200) {
          toast.success('Address deleted successfully')
          setData([...data.filter((item) => item.id !== id)])
        }
      }
    )
  }
  const [whilteListEditModalIsOpen, setWhilteListEditModalIsOpen] =
    useState(false)
  return (
    <TableBody>
      {data.map((item, index) => (
        <CustomTableRow key={item.address}>
          <TableCell>
            <Typography>{index + 1}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.address}</Typography>
          </TableCell>

          <TableCell align="center">
            <IconButton
              size="small"
              onClick={() => setWhilteListEditModalIsOpen(true)}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => handleDelete(item.id)}>
              <DeleteForeverIcon />
            </IconButton>
          </TableCell>
          {whilteListEditModalIsOpen && (
            <WhilteListEditModal
              isOpen={whilteListEditModalIsOpen}
              onClose={() => setWhilteListEditModalIsOpen(false)}
              data={item}
              getData={getData}
            />
          )}
        </CustomTableRow>
      ))}
    </TableBody>
  )
}
export default WhiteListTableBody
