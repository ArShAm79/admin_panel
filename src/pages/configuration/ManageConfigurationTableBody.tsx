import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  withStyles
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useHistory } from 'react-router-dom'

import { ManageConfigurationTableProps } from './ManageConfigurationTable'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

const ManageConfigurationTableBody: React.FC<ManageConfigurationTableProps> = ({
  data
  // setData
}) => {
  const history = useHistory()
  return (
    <TableBody>
      {data.map((item, index) => (
        <CustomTableRow key={index.toString()}>
          <TableCell>
            <Typography>{index + 1}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.title}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.value}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.key}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{item.description}</Typography>
          </TableCell>
          <TableCell align="center">
            <IconButton
              size="small"
              onClick={() => {
                history.push('/admin-table/edit/' + item.id)
              }}>
              <EditIcon />
            </IconButton>
          </TableCell>
        </CustomTableRow>
      ))}
    </TableBody>
  )
}
export default ManageConfigurationTableBody
