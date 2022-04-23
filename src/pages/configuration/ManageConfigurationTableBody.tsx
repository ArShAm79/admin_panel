import {
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  withStyles
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { useState } from 'react'

import { ManageConfigurationTableProps } from './ManageConfigurationTable'
import ManageConfigurationEditModal from './components/ManageConfigurationEditModal'
import useStyles from './styles/ManageConfigurationTableBody.style'

const CustomTableRow = withStyles(() => ({
  root: {
    backgroundColor: 'rgb(45, 50, 56)'
  }
}))(TableRow)

const ManageConfigurationTableBody: React.FC<ManageConfigurationTableProps> = ({
  data,
  getData
}) => {
  const [
    manageConfigurationEditModalIsOpen,
    setManageConfigurationEditModalIsOpen
  ] = useState(false)
  const classes = useStyles()

  return (
    <TableBody>
      {data.map((item, index) => (
        <>
          <CustomTableRow key={index.toString()}>
            <TableCell>
              <Typography>{index + 1}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{item.title}</Typography>
            </TableCell>
            <TableCell>
              <Tooltip title={item.value.length > 10 ? item.value : ''}>
                <Typography
                  onClick={() => navigator.clipboard.writeText(item.value)}
                  className={classes.value}>
                  {item.value.length > 10
                    ? `${item.value.substring(0, 10)}...`
                    : item.value}
                </Typography>
              </Tooltip>
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
                  setManageConfigurationEditModalIsOpen(true)
                }}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </CustomTableRow>
          <ManageConfigurationEditModal
            isOpen={manageConfigurationEditModalIsOpen}
            onClose={() => setManageConfigurationEditModalIsOpen(false)}
            data={item}
            getData={getData}
          />
        </>
      ))}
    </TableBody>
  )
}
export default ManageConfigurationTableBody
