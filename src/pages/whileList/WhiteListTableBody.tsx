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
import { WhiteList } from '../../types/whiteList'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

interface WhiteListTableBodyProps {
  data: WhiteList[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
  setselectedIndex: React.Dispatch<React.SetStateAction<number>>
  setWhilteListEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const WhiteListTableBody: React.FC<WhiteListTableBodyProps> = ({
  data,
  setData,
  setselectedIndex,
  setWhilteListEditModalIsOpen
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
              onClick={() => {
                setselectedIndex(index)
                setWhilteListEditModalIsOpen(true)
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
export default WhiteListTableBody
